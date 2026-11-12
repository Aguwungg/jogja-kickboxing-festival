"use client";

import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import * as THREE from "three";
import { ARENA_ZONES, ZoneDetail } from "./arena3d-data";

export interface Arena3DViewerRef {
  zoomIn: () => void;
  zoomOut: () => void;
  resetView: () => void;
  topView: () => void;
  focusRing: () => void;
  focusStage: () => void;
}

export interface Arena3DViewerProps {
  layoutId: 1 | 2;
  selectedZoneId: string | null;
  onSelectZone: (zone: ZoneDetail | null) => void;
  showLabels: boolean;
  activePreset: "DEFAULT" | "TOP" | "RING" | "STAGE" | null;
  onPresetChange?: (preset: "DEFAULT" | "TOP" | "RING" | "STAGE" | null) => void;
  onWebGLUnsupported?: () => void;
}

interface CameraState {
  A: number;
  E: number;
  Rd: number;
  tx: number;
  ty: number;
  tz: number;
}

type CameraPreset = "DEFAULT" | "TOP" | "RING" | "STAGE";

/**
 * Computes aspect-aware camera state so portrait mobile viewports frame the
 * entire 35x25m arena cleanly above the floating bottom dock without clipping.
 */
function getPresetCameraState(preset: CameraPreset, aspect: number): CameraState {
  const isPortrait = aspect > 0 && aspect < 1;
  const clampedAspect = Math.max(aspect || 1, 0.52);

  switch (preset) {
    case "TOP":
      return {
        A: 0,
        E: 1.48,
        Rd: isPortrait ? Math.min(144, Math.max(88, 72 / clampedAspect)) : 68,
        tx: 17.5,
        ty: 0,
        tz: 12.5,
      };
    case "RING":
      return {
        A: Math.PI / 3.8,
        E: isPortrait ? 0.56 : 0.52,
        Rd: isPortrait ? Math.min(54, Math.max(36, 28 / clampedAspect)) : 30,
        tx: 23,
        ty: isPortrait ? 0.4 : 1,
        tz: 12.5,
      };
    case "STAGE":
      return {
        A: -Math.PI / 3.2,
        E: isPortrait ? 0.48 : 0.45,
        Rd: isPortrait ? Math.min(58, Math.max(40, 31 / clampedAspect)) : 35,
        tx: 33.9,
        ty: isPortrait ? 0.9 : 1.5,
        tz: 12.5,
      };
    case "DEFAULT":
    default: {
      const isTallPortrait = aspect > 0 && aspect < 0.85;
      return {
        A: isTallPortrait ? Math.PI / 3.25 : Math.PI / 4,
        E: isTallPortrait ? 0.66 : isPortrait ? 0.66 : 0.62,
        Rd: isPortrait ? Math.min(128, Math.max(88, 72 / clampedAspect)) : 70,
        tx: 17.5,
        ty: isTallPortrait ? -5.8 : 0,
        tz: 12.5,
      };
    }
  }
}

const Arena3DViewer = forwardRef<Arena3DViewerRef, Arena3DViewerProps>(
  (
    {
      layoutId,
      selectedZoneId,
      onSelectZone,
      showLabels,
      activePreset,
      onPresetChange,
      onWebGLUnsupported,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const labelsContainerRef = useRef<HTMLDivElement>(null);

    // Refs synced with latest props so main Three.js WebGL context is never torn down
    const layoutIdRef = useRef<1 | 2>(layoutId);
    const showLabelsRef = useRef<boolean>(showLabels);
    const activePresetRef = useRef<CameraPreset | null>(activePreset);
    const onPresetChangeRef = useRef(onPresetChange);
    const onSelectZoneRef = useRef(onSelectZone);
    const onWebGLUnsupportedRef = useRef(onWebGLUnsupported);
    const hasInitializedCameraRef = useRef<boolean>(false);

    useEffect(() => {
      layoutIdRef.current = layoutId;
    }, [layoutId]);
    useEffect(() => {
      showLabelsRef.current = showLabels;
    }, [showLabels]);
    useEffect(() => {
      activePresetRef.current = activePreset;
    }, [activePreset]);
    useEffect(() => {
      onPresetChangeRef.current = onPresetChange;
    }, [onPresetChange]);
    useEffect(() => {
      onSelectZoneRef.current = onSelectZone;
    }, [onSelectZone]);
    useEffect(() => {
      onWebGLUnsupportedRef.current = onWebGLUnsupported;
    }, [onWebGLUnsupported]);

    // Camera animation target
    const camState = useRef<CameraState>(getPresetCameraState("DEFAULT", 1.6));
    const camTarget = useRef<CameraState>(getPresetCameraState("DEFAULT", 1.6));

    const isTransitioning = useRef<boolean>(false);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const g1Ref = useRef<THREE.Group | null>(null);
    const g2Ref = useRef<THREE.Group | null>(null);
    const animFrameId = useRef<number | null>(null);
    const labelElementsRef = useRef<
      { el: HTMLDivElement; pos: THREE.Vector3; day: number; zoneId?: string }[]
    >([]);

    const getCurrentAspect = () => {
      const c = containerRef.current;
      return c && c.clientHeight > 0 ? c.clientWidth / c.clientHeight : 1.6;
    };

    // Expose imperative methods to parent
    useImperativeHandle(ref, () => ({
      zoomIn: () => {
        isTransitioning.current = false;
        onPresetChangeRef.current?.(null);
        camState.current.Rd = Math.max(16, camState.current.Rd * 0.85);
      },
      zoomOut: () => {
        isTransitioning.current = false;
        onPresetChangeRef.current?.(null);
        camState.current.Rd = Math.min(180, camState.current.Rd * 1.15);
      },
      resetView: () => {
        camTarget.current = getPresetCameraState("DEFAULT", getCurrentAspect());
        isTransitioning.current = true;
      },
      topView: () => {
        camTarget.current = getPresetCameraState("TOP", getCurrentAspect());
        isTransitioning.current = true;
      },
      focusRing: () => {
        camTarget.current = getPresetCameraState("RING", getCurrentAspect());
        isTransitioning.current = true;
      },
      focusStage: () => {
        camTarget.current = getPresetCameraState("STAGE", getCurrentAspect());
        isTransitioning.current = true;
      },
    }));

    // Check WebGL availability
    useEffect(() => {
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          onWebGLUnsupportedRef.current?.();
        }
      } catch {
        onWebGLUnsupportedRef.current?.();
      }
    }, []);

    // Handle Preset Changes
    useEffect(() => {
      if (!activePreset) return;
      camTarget.current = getPresetCameraState(activePreset, getCurrentAspect());
      isTransitioning.current = true;
    }, [activePreset]);

    // Handle Zone selection focus
    useEffect(() => {
      if (!selectedZoneId) return;
      const zone = ARENA_ZONES.find((z) => z.id === selectedZoneId);
      if (zone) {
        const aspect = getCurrentAspect();
        const isPortrait = aspect > 0 && aspect < 1;
        const portraitScale = isPortrait
          ? Math.min(1.5, Math.max(1, 0.88 / Math.max(aspect, 0.55)))
          : 1;
        camTarget.current = {
          ...camTarget.current,
          tx: zone.cameraTarget[0],
          ty: zone.cameraTarget[1] - (isPortrait ? 1.1 : 0),
          tz: zone.cameraTarget[2],
          Rd: zone.cameraDistance * portraitScale,
        };
        isTransitioning.current = true;
      }
    }, [selectedZoneId]);

    // Update layout visibility
    useEffect(() => {
      if (g1Ref.current && g2Ref.current) {
        g1Ref.current.visible = layoutId === 1;
        g2Ref.current.visible = layoutId === 2;
      }
    }, [layoutId]);

    // Three.js Scene Setup
    useEffect(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      const labelsContainer = labelsContainerRef.current;
      if (!canvas || !container || !labelsContainer) return;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        rendererRef.current = renderer;
      } catch {
        onWebGLUnsupportedRef.current?.();
        return;
      }

      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(28, 1, 1, 500);
      cameraRef.current = camera;

      // Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.7));
      const dl = new THREE.DirectionalLight(0xffffff, 0.8);
      dl.position.set(-15, 30, 20);
      scene.add(dl);

      const ringLight = new THREE.PointLight(0xff3040, 1.2, 35);
      ringLight.position.set(23, 7, 12.5);
      scene.add(ringLight);

      const stageLight = new THREE.PointLight(0xff7080, 0.9, 30);
      stageLight.position.set(33.9, 6, 12.5);
      scene.add(stageLight);

      const M = (color: number, opts?: THREE.MeshStandardMaterialParameters) =>
        new THREE.MeshStandardMaterial(
          Object.assign({ color, roughness: 0.75, metalness: 0.1 }, opts || {})
        );
      const BM = (color: number) => new THREE.MeshBasicMaterial({ color });

      const createBox = (
        w: number,
        h: number,
        d: number,
        x: number,
        y: number,
        z: number,
        mat: THREE.Material,
        parent?: THREE.Object3D
      ) => {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        mesh.position.set(x, y + h / 2, z);
        (parent || scene).add(mesh);
        return mesh;
      };

      const createRectOutline = (
        x0: number,
        z0: number,
        x1: number,
        z1: number,
        y: number,
        color: number,
        thickness: number,
        parent?: THREE.Object3D
      ) => {
        const mat = BM(color);
        createBox(x1 - x0, 0.06, thickness, (x0 + x1) / 2, y, z0, mat, parent);
        createBox(x1 - x0, 0.06, thickness, (x0 + x1) / 2, y, z1, mat, parent);
        createBox(thickness, 0.06, z1 - z0, x0, y, (z0 + z1) / 2, mat, parent);
        createBox(thickness, 0.06, z1 - z0, x1, y, (z0 + z1) / 2, mat, parent);
      };

      const createDashedLine = (
        points: [number, number][],
        color: number,
        parent?: THREE.Object3D
      ) => {
        const mat = BM(color);
        for (let i = 0; i < points.length - 1; i++) {
          const [a, b] = points[i];
          const [e, f] = points[i + 1];
          const length = Math.hypot(e - a, f - b);
          const segmentCount = Math.floor(length / 0.8);
          for (let j = 0; j < segmentCount; j++) {
            const t = (j * 0.8 + 0.3) / length;
            const k = createBox(0.45, 0.03, 0.16, a + (e - a) * t, 0.03, b + (f - b) * t, mat, parent);
            k.rotation.y = -Math.atan2(f - b, e - a);
          }
        }
      };

      const makeCanvasTexture = (
        w: number,
        h: number,
        drawFn: (ctx: CanvasRenderingContext2D, width: number, height: number) => void
      ) => {
        const c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        const ctx = c.getContext("2d");
        if (ctx) drawFn(ctx, w, h);
        return new THREE.CanvasTexture(c);
      };

      // 1. Hall Bounds & Floor
      createBox(41, 0.6, 31, 17.5, -0.7, 12.5, M(0x101012));
      createBox(35, 0.1, 25, 17.5, -0.1, 12.5, M(0x0c0c0f, { roughness: 0.9 }));
      createRectOutline(-0.1, -0.1, 35.1, 25.1, 0.5, 0xe0222f, 0.14);
      createRectOutline(-0.5, -0.5, 35.5, 25.5, 0.0, 0x5a0d14, 0.3);

      // 2. Chair Geometry (Futura Banquet Chair)
      const D = new THREE.Object3D();
      function mergeGeometries(list: [THREE.BufferGeometry, THREE.Matrix4][]): THREE.BufferGeometry {
        let count = 0;
        const transformed = list.map(([geom, matrix]) => {
          const g = geom.index ? geom.toNonIndexed() : geom.clone();
          g.applyMatrix4(matrix);
          count += g.attributes.position.count;
          return g;
        });
        const posArray = new Float32Array(count * 3);
        const normArray = new Float32Array(count * 3);
        let offset = 0;
        transformed.forEach((g) => {
          posArray.set(g.attributes.position.array as Float32Array, offset);
          if (g.attributes.normal) {
            normArray.set(g.attributes.normal.array as Float32Array, offset);
          }
          offset += g.attributes.position.count * 3;
        });
        const merged = new THREE.BufferGeometry();
        merged.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
        merged.setAttribute("normal", new THREE.BufferAttribute(normArray, 3));
        return merged;
      }

      const addPart = (
        arr: [THREE.BufferGeometry, THREE.Matrix4][],
        geom: THREE.BufferGeometry,
        x: number,
        y: number,
        z: number,
        rx?: number,
        rz?: number
      ) => {
        const mat = new THREE.Matrix4().compose(
          new THREE.Vector3(x, y, z),
          new THREE.Quaternion().setFromEuler(new THREE.Euler(rx || 0, 0, rz || 0)),
          new THREE.Vector3(1, 1, 1)
        );
        arr.push([geom, mat]);
      };

      const chairShape = new THREE.Shape();
      [
        [-0.18, 0],
        [0.18, 0],
        [0.18, 0.4],
        [0.05, 0.43],
        [0.03, 0.39],
        [-0.03, 0.39],
        [-0.05, 0.43],
        [-0.18, 0.4],
      ].forEach((p, idx) =>
        idx ? chairShape.lineTo(p[0], p[1]) : chairShape.moveTo(p[0], p[1])
      );

      const redGeoms: [THREE.BufferGeometry, THREE.Matrix4][] = [];
      const chromeGeoms: [THREE.BufferGeometry, THREE.Matrix4][] = [];
      const cyl = (len: number, rad?: number) =>
        new THREE.CylinderGeometry(rad || 0.012, rad || 0.012, len, 6);

      addPart(redGeoms, new THREE.BoxGeometry(0.4, 0.07, 0.4), 0, 0.5, 0.02);
      addPart(
        redGeoms,
        new THREE.ExtrudeGeometry(chairShape, { depth: 0.05, bevelEnabled: false }),
        0,
        0.52,
        -0.2
      );

      [-0.17, 0.17].forEach((x) => {
        addPart(chromeGeoms, cyl(0.47), x, 0.235, 0.17);
        addPart(chromeGeoms, cyl(0.95), x * 1.1, 0.475, -0.2);
        addPart(chromeGeoms, cyl(0.34), x, 0.44, -0.015, Math.PI / 2);
        addPart(chromeGeoms, cyl(0.34), x, 0.2, 0, Math.PI / 2);
      });
      addPart(chromeGeoms, cyl(0.36), 0, 0.945, -0.2, 0, Math.PI / 2);
      addPart(chromeGeoms, cyl(0.34), 0, 0.44, 0.17, 0, Math.PI / 2);
      addPart(chromeGeoms, cyl(0.34), 0, 0.44, -0.2, 0, Math.PI / 2);
      addPart(chromeGeoms, cyl(0.34), 0, 0.2, 0.17, 0, Math.PI / 2);
      addPart(chromeGeoms, cyl(0.34), 0, 0.2, -0.2, 0, Math.PI / 2);

      const mergedRedGeom = mergeGeometries(redGeoms);
      const mergedChromeGeom = mergeGeometries(chromeGeoms);
      const redMat = M(0xd0111f, { roughness: 0.8 });
      const chromeMat = M(0xf0f0f0, { roughness: 0.3, metalness: 0.35 });

      function buildChairsGroup(chairList: [number, number, number][]) {
        const g = new THREE.Group();
        [
          [mergedRedGeom, redMat],
          [mergedChromeGeom, chromeMat],
        ].forEach(([geom, mat]) => {
          const im = new THREE.InstancedMesh(
            geom as THREE.BufferGeometry,
            mat as THREE.Material,
            chairList.length
          );
          chairList.forEach((pos, idx) => {
            D.position.set(pos[0], 0, pos[1]);
            D.rotation.y = pos[2];
            D.updateMatrix();
            im.setMatrixAt(idx, D.matrix);
          });
          im.instanceMatrix.needsUpdate = true;
          g.add(im);
        });
        return g;
      }

      const chairSpacing = 0.46;
      const PI = Math.PI;
      function generateChairRow(
        targetArr: [number, number, number][],
        count: number,
        center: number,
        fixedCoord: number,
        alongAxis: "x" | "z",
        angle: number
      ) {
        for (let i = 0; i < count; i++) {
          const val = center + (i - (count - 1) / 2) * chairSpacing;
          targetArr.push(alongAxis === "x" ? [val, fixedCoord, angle] : [fixedCoord, val, angle]);
        }
      }

      const chairsCommon: [number, number, number][] = [];
      const chairsDay1: [number, number, number][] = [];
      const chairsDay2: [number, number, number][] = [];

      // Flanking walkway
      [8, 8.85, 9.7, 10.55].forEach((z) => generateChairRow(chairsCommon, 13, 29.45, z, "x", 0));
      [14.45, 15.3, 16.15, 17].forEach((z) => generateChairRow(chairsCommon, 13, 29.45, z, "x", PI));

      // North & South
      [2, 2.85].forEach((z) => generateChairRow(chairsCommon, 22, 18, z, "x", 0));
      [23, 22.15].forEach((z) => generateChairRow(chairsCommon, 22, 18, z, "x", PI));

      // 9 Round tables
      const roundTables: [number, number][] = [
        [18.5, 6.5],
        [21.5, 6.5],
        [24.5, 6.5],
        [18.5, 18.5],
        [21.5, 18.5],
        [24.5, 18.5],
        [17, 9.8],
        [17, 12.5],
        [17, 15.2],
      ];

      roundTables.forEach(([x, z]) => {
        for (let k = 0; k < 4; k++) {
          const a = (k * PI) / 2 + PI / 4;
          chairsCommon.push([x + Math.sin(a) * 1.02, z + Math.cos(a) * 1.02, a + PI]);
        }
      });

      // Day 1 Tatami chairs
      [6.3, 7.15].forEach((z) => generateChairRow(chairsDay1, 14, 8.5, z, "x", 0));
      [18.7, 17.85].forEach((z) => generateChairRow(chairsDay1, 14, 8.5, z, "x", PI));
      [3.4, 4.25].forEach((x) => generateChairRow(chairsDay1, 20, 12.5, x, "z", PI / 2));

      // Day 2 West expanded chairs
      [8, 8.85, 9.7, 10.55].forEach((x) => {
        generateChairRow(chairsDay2, 18, 7.6, x, "z", PI / 2);
        generateChairRow(chairsDay2, 18, 17.4, x, "z", PI / 2);
      });

      scene.add(buildChairsGroup(chairsCommon));

      const g1 = new THREE.Group();
      const g2 = new THREE.Group();
      g1.add(buildChairsGroup(chairsDay1));
      g2.add(buildChairsGroup(chairsDay2));
      scene.add(g1);
      scene.add(g2);
      g1Ref.current = g1;
      g2Ref.current = g2;

      // 3. Tables
      roundTables.forEach(([x, z]) => {
        const baseMesh = new THREE.Mesh(
          new THREE.CylinderGeometry(0.7, 0.7, 0.75, 24),
          M(0x15090b)
        );
        baseMesh.position.set(x, 0.75 / 2, z);
        scene.add(baseMesh);

        const topMesh = new THREE.Mesh(
          new THREE.CylinderGeometry(0.75, 0.75, 0.05, 24),
          M(0xe0222f)
        );
        topMesh.position.set(x, 0.75 + 0.05 / 2, z);
        scene.add(topMesh);

        createBox(0.06, 0.2, 0.06, x, 0.8, z, BM(0xffffff));
      });

      // 4. Fighting Ring
      const RX = 23;
      const RZ = 12.5;
      createBox(6, 0.95, 6, RX, 0, RZ, M(0x1c1012));
      createBox(6.3, 0.1, 6.3, RX, 0.85, RZ, M(0xffa07a));

      const ringCanvasTexture = makeCanvasTexture(256, 256, (g, w, h) => {
        g.fillStyle = "#8a3c42";
        g.fillRect(0, 0, w, h);
        g.strokeStyle = "#ffa07a";
        g.lineWidth = 8;
        g.beginPath();
        g.arc(128, 128, 70, 0, 7);
        g.stroke();
        g.fillStyle = "#ffa07a";
        g.font = "800 44px sans-serif";
        g.textAlign = "center";
        g.fillText("JKBF", 128, 143);
      });

      const ringPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(5.9, 5.9),
        new THREE.MeshBasicMaterial({ map: ringCanvasTexture })
      );
      ringPlane.rotation.x = -PI / 2;
      ringPlane.position.set(RX, 0.96, RZ);
      scene.add(ringPlane);

      // Ring Posts
      const ropeMat = M(0xff9a78);
      [
        [-2.9, -2.9],
        [2.9, -2.9],
        [-2.9, 2.9],
        [2.9, 2.9],
      ].forEach(([a, b]) => {
        createBox(0.2, 1.3, 0.2, RX + a, 0.95, RZ + b, M(0x2a0c10));
      });

      // Ring Ropes
      [
        [0, -2.9, 0],
        [0, 2.9, 0],
        [-2.9, 0, 1],
        [2.9, 0, 1],
      ].forEach(([a, b, r]) => {
        [1.35, 1.7, 2.05].forEach((h) => {
          createBox(r ? 0.05 : 5.8, 0.05, r ? 5.8 : 0.05, RX + a, h, RZ + b, ropeMat);
        });
      });

      // Ring Side Tables
      createBox(2.6, 0.8, 0.7, RX, 0, 8.7, M(0x1a1012));
      createBox(2.6, 0.05, 0.8, RX, 0.8, 8.7, M(0xffa07a));
      createBox(2.6, 0.8, 0.7, RX + 1.2, 0, 16.3, M(0x1a1012));
      createBox(2.6, 0.05, 0.8, RX + 1.2, 0.8, 16.3, M(0xffa07a));
      createBox(1, 0.9, 0.8, 20.8, 0, 16.3, M(0xf2f2f2));

      // 5. Stage & Backdrop
      createBox(2.2, 1, 13, 33.9, 0, 12.5, M(0x2a0a0e));
      createRectOutline(32.8, 6, 35, 19, 1.0, 0xff8a5a, 0.1);
      createBox(0.3, 5, 12.4, 34.85, 1, 12.5, M(0x120406));

      const stageBackdropTexture = makeCanvasTexture(512, 200, (g, w, h) => {
        const q = g.createLinearGradient(0, 0, w, h);
        q.addColorStop(0, "#b81824");
        q.addColorStop(1, "#3b0509");
        g.fillStyle = q;
        g.fillRect(0, 0, w, h);
        g.fillStyle = "#fff";
        g.textAlign = "center";
        g.font = "800 80px sans-serif";
        g.fillText("JKBF 2026", 256, 105);
        g.font = "700 17px sans-serif";
        g.fillText("JOGJA KICKBOXING FESTIVAL", 256, 140);
      });

      const backdropMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(12, 4.6),
        new THREE.MeshBasicMaterial({ map: stageBackdropTexture })
      );
      backdropMesh.rotation.y = -PI / 2;
      backdropMesh.position.set(34.65, 3.4, 12.5);
      scene.add(backdropMesh);

      // 6. Tatami (Day 1 only)
      const tatamiOuter = new THREE.Mesh(
        new THREE.PlaneGeometry(7, 7),
        new THREE.MeshBasicMaterial({ color: 0xff4a4a })
      );
      tatamiOuter.rotation.x = -PI / 2;
      tatamiOuter.position.set(8.5, 0.03, 12.5);
      g1.add(tatamiOuter);

      const tatamiInner = new THREE.Mesh(
        new THREE.PlaneGeometry(2.4, 2.4),
        BM(0x141416)
      );
      tatamiInner.rotation.x = -PI / 2;
      tatamiInner.position.set(8.5, 0.04, 12.5);
      g1.add(tatamiInner);

      // 7. Hatching Texture for Standing Zones
      const hatchTexture = makeCanvasTexture(64, 64, (g) => {
        g.fillStyle = "#14060a";
        g.fillRect(0, 0, 64, 64);
        g.strokeStyle = "#d71f2c";
        g.lineWidth = 7;
        for (let i = -64; i < 128; i += 16) {
          g.beginPath();
          g.moveTo(i, 64);
          g.lineTo(i + 64, 0);
          g.stroke();
        }
      });
      hatchTexture.wrapS = hatchTexture.wrapT = THREE.RepeatWrapping;

      function createStandingZone(
        x0: number,
        z0: number,
        x1: number,
        z1: number,
        parent: THREE.Group
      ) {
        const t = hatchTexture.clone();
        t.needsUpdate = true;
        t.repeat.set((x1 - x0) / 1.2, (z1 - z0) / 1.2);
        const mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(x1 - x0, z1 - z0),
          new THREE.MeshBasicMaterial({ map: t })
        );
        mesh.rotation.x = -PI / 2;
        mesh.position.set((x0 + x1) / 2, 0.03, (z0 + z1) / 2);
        parent.add(mesh);
        createRectOutline(x0, z0, x1, z1, 0.04, 0xe0222f, 0.1, parent);
      }

      createStandingZone(0.3, 0.3, 12.5, 3.8, g1);
      createStandingZone(0.3, 21.2, 12.5, 24.7, g1);
      createStandingZone(0.3, 3.8, 2.6, 21.2, g1);
      createStandingZone(0.3, 0.3, 7, 24.7, g2);

      createRectOutline(5, 9, 12, 16, 0.05, 0xe0222f, 0.1, g1);

      // 8. Circulation Paths
      createDashedLine(
        [
          [0.5, 4.3],
          [32.2, 4.3],
        ],
        0xffffff
      );
      createBox(0.4, 0.05, 2.4, 0.3, 0, 4.3, BM(0xffffff));

      createDashedLine(
        [
          [33.2, 25],
          [33.2, 20.4],
          [33.2, 19.2],
        ],
        0xe0222f
      );
      createDashedLine(
        [
          [32.6, 12.5],
          [26.2, 12.5],
        ],
        0xff8a5a
      );
      createBox(3, 0.05, 0.4, 33, 0, 24.8, BM(0xe0222f));

      createDashedLine(
        [
          [21.2, 16.9],
          [25.4, 16.9],
          [25.4, 21],
          [31, 21],
          [31, 25],
        ],
        0xff9aa5
      );

      // Initial Layout visibility
      g1.visible = layoutIdRef.current === 1;
      g2.visible = layoutIdRef.current === 2;

      // 9. Floating HTML Labels
      labelsContainer.innerHTML = "";
      labelElementsRef.current = [];

      const labelIcon =
        '<svg viewBox="0 0 10 14" width="8" height="11" class="inline-block mr-1"><path d="M1 0h2v8h5v2H5v4H3v-4H1z" fill="#ff2d3d"/></svg>';
      const cardContent = (title: string, subtitle: string) =>
        `<div class="flex items-center gap-1.5">${labelIcon}<div><div class="font-bold text-[9px] text-white leading-tight uppercase tracking-wider">${title}</div><div class="text-[8px] text-neutral-300 font-mono">${subtitle}</div></div></div>`;

      interface RawLabelDef {
        day: number;
        type: "card" | "tag" | "white" | "red" | "small";
        html: string;
        x: number;
        y: number;
        z: number;
        zoneId?: string;
      }

      const rawLabels: RawLabelDef[] = [
        { day: 0, type: "tag", html: "STAGE", x: 34.6, y: 6.8, z: 12.5, zoneId: "stage" },
        { day: 0, type: "tag", html: "RING", x: RX - 0.6, y: 2.1, z: RZ + 0.6, zoneId: "ring" },
        {
          day: 0,
          type: "card",
          html: cardContent("KURSI VIP LEPASAN", "Jalur fighter · 52 kursi"),
          x: 29.45,
          y: 1.8,
          z: 7.4,
          zoneId: "vip-fighter-walkway",
        },
        {
          day: 0,
          type: "card",
          html: cardContent("KURSI VIP LEPASAN", "Jalur fighter · 52 kursi"),
          x: 29.45,
          y: 1.8,
          z: 17.6,
          zoneId: "vip-fighter-walkway",
        },
        {
          day: 0,
          type: "card",
          html: cardContent("KURSI VIP LEPASAN", "Utara · 44 kursi"),
          x: 18,
          y: 1.2,
          z: 1.9,
          zoneId: "vip-north-south",
        },
        {
          day: 0,
          type: "card",
          html: cardContent("KURSI VIP LEPASAN", "Selatan · 44 kursi"),
          x: 18,
          y: 1.2,
          z: 23.2,
          zoneId: "vip-north-south",
        },
        { day: 0, type: "small", html: "POS MEDIS", x: 20.8, y: 1.4, z: 16.3, zoneId: "medical-path" },
        {
          day: 0,
          type: "red",
          html: "JALUR FIGHTER 4 m",
          x: 30.2,
          y: 0.15,
          z: 12.5,
          zoneId: "fighter-walkway",
        },
        {
          day: 0,
          type: "white",
          html: "PINTU MASUK UTAMA",
          x: 5.8,
          y: 0.2,
          z: 5.0,
          zoneId: "main-entrance",
        },
        {
          day: 0,
          type: "red",
          html: "PINTU SELATAN · FIGHTER",
          x: 28.0,
          y: 0.2,
          z: 23.8,
          zoneId: "south-entrance",
        },
        { day: 1, type: "tag", html: "TATAMI", x: 8.5, y: 0.2, z: 12.5, zoneId: "tatami" },
        {
          day: 1,
          type: "card",
          html: cardContent("KURSI VIP LEPASAN", "Tatami Utara · 28 kursi"),
          x: 8.5,
          y: 1,
          z: 6.1,
          zoneId: "vip-tatami-ring",
        },
        {
          day: 1,
          type: "card",
          html: cardContent("KURSI VIP LEPASAN", "Tatami Selatan · 28 kursi"),
          x: 8.5,
          y: 1,
          z: 19,
          zoneId: "vip-tatami-ring",
        },
        {
          day: 1,
          type: "card",
          html: cardContent("KURSI VIP LEPASAN", "Barat · 40 kursi"),
          x: 3.8,
          y: 1,
          z: 12.5,
          zoneId: "vip-tatami-ring",
        },
        {
          day: 1,
          type: "white",
          html: "STANDING UTARA",
          x: 6,
          y: 0.1,
          z: 2,
          zoneId: "standing-area",
        },
        {
          day: 1,
          type: "white",
          html: "STANDING SELATAN",
          x: 6,
          y: 0.1,
          z: 23,
          zoneId: "standing-area",
        },
        {
          day: 2,
          type: "card",
          html: cardContent("KURSI VIP LEPASAN", "Barat · 144 kursi"),
          x: 9.3,
          y: 1.4,
          z: 12.5,
          zoneId: "vip-west-expanded",
        },
        {
          day: 2,
          type: "white",
          html: "STANDING AREA (DIPERLUAS)",
          x: 3.5,
          y: 0.1,
          z: 12.5,
          zoneId: "standing-area",
        },
      ];

      rawLabels.forEach((l) => {
        const el = document.createElement("div");
        el.className = `absolute pointer-events-auto cursor-pointer transition-transform duration-100 ease-out select-none whitespace-nowrap text-xs font-semibold ${
          l.type === "tag"
            ? "bg-[#e0222f] text-white px-2 sm:px-2.5 py-0.5 rounded-sm font-black shadow-lg shadow-red-950/50 text-[9px] sm:text-[11px] border border-red-400/30"
            : l.type === "card"
            ? "hidden sm:flex bg-[#09090b]/90 text-white px-2 py-1 rounded-sm border border-[#ff2d3d]/50 shadow-md backdrop-blur-sm hover:border-[#ff2d3d] hover:scale-105"
            : l.type === "white"
            ? "bg-white text-black font-bold px-1.5 sm:px-2 py-0.5 rounded-sm shadow-md text-[7.5px] sm:text-[9px] hover:scale-105"
            : l.type === "red"
            ? "bg-[#e0222f] text-white font-bold px-1.5 sm:px-2 py-0.5 rounded-sm text-[7.5px] sm:text-[9px] hover:scale-105"
            : "hidden sm:block bg-black/80 text-neutral-300 px-1.5 py-0.5 rounded-sm text-[8px] border border-neutral-700"
        }`;
        el.innerHTML = l.html;
        if (l.zoneId) {
          el.addEventListener("click", (e) => {
            e.stopPropagation();
            const zone = ARENA_ZONES.find((z) => z.id === l.zoneId);
            if (zone) onSelectZoneRef.current(zone);
          });
        }
        labelsContainer.appendChild(el);
        labelElementsRef.current.push({
          el,
          pos: new THREE.Vector3(l.x, l.y, l.z),
          day: l.day,
          zoneId: l.zoneId,
        });
      });

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (width === 0 || height === 0) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        if (!hasInitializedCameraRef.current) {
          hasInitializedCameraRef.current = true;
          const initialPreset = activePresetRef.current || "DEFAULT";
          const initialState = getPresetCameraState(initialPreset, camera.aspect);
          camState.current = { ...initialState };
          camTarget.current = { ...initialState };
        } else if (activePresetRef.current) {
          camTarget.current = getPresetCameraState(activePresetRef.current, camera.aspect);
        }
      };

      const resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(container);
      handleResize();

      // Interaction State
      const activePointers = new Map<number, [number, number]>();
      let prevDistance = 0;

      const onPointerDown = (e: PointerEvent) => {
        canvas.setPointerCapture(e.pointerId);
        activePointers.set(e.pointerId, [e.clientX, e.clientY]);
        isTransitioning.current = false;
        onPresetChangeRef.current?.(null);
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!activePointers.has(e.pointerId)) return;
        const prev = activePointers.get(e.pointerId)!;
        activePointers.set(e.pointerId, [e.clientX, e.clientY]);

        if (activePointers.size === 1) {
          // Orbit
          const dx = e.clientX - prev[0];
          const dy = e.clientY - prev[1];
          camState.current.A -= dx * 0.005;
          camState.current.E = Math.min(1.45, Math.max(0.18, camState.current.E + dy * 0.004));
        } else {
          // Pinch Zoom
          const pts = Array.from(activePointers.values());
          const dist = Math.hypot(pts[0][0] - pts[1][0], pts[0][1] - pts[1][1]);
          if (prevDistance) {
            camState.current.Rd = Math.min(
              180,
              Math.max(18, (camState.current.Rd * prevDistance) / dist)
            );
          }
          prevDistance = dist;
        }
      };

      const onPointerUp = (e: PointerEvent) => {
        activePointers.delete(e.pointerId);
        prevDistance = 0;
      };

      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        isTransitioning.current = false;
        onPresetChangeRef.current?.(null);
        camState.current.Rd = Math.min(
          180,
          Math.max(18, camState.current.Rd * (1 + e.deltaY * 0.001))
        );
      };

      canvas.addEventListener("pointerdown", onPointerDown);
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerup", onPointerUp);
      canvas.addEventListener("pointercancel", onPointerUp);
      canvas.addEventListener("wheel", onWheel, { passive: false });

      // Animation Render Loop
      let running = true;
      const renderLoop = () => {
        if (!running) return;

        // Smooth camera interpolation
        if (isTransitioning.current) {
          const factor = 0.08;
          camState.current.A += (camTarget.current.A - camState.current.A) * factor;
          camState.current.E += (camTarget.current.E - camState.current.E) * factor;
          camState.current.Rd += (camTarget.current.Rd - camState.current.Rd) * factor;
          camState.current.tx += (camTarget.current.tx - camState.current.tx) * factor;
          camState.current.ty += (camTarget.current.ty - camState.current.ty) * factor;
          camState.current.tz += (camTarget.current.tz - camState.current.tz) * factor;

          const dDiff =
            Math.abs(camTarget.current.A - camState.current.A) +
            Math.abs(camTarget.current.E - camState.current.E) +
            Math.abs(camTarget.current.Rd - camState.current.Rd) +
            Math.abs(camTarget.current.tx - camState.current.tx) +
            Math.abs(camTarget.current.ty - camState.current.ty) +
            Math.abs(camTarget.current.tz - camState.current.tz);
          if (dDiff < 0.002) {
            isTransitioning.current = false;
          }
        }

        const { A, E, Rd, tx, ty, tz } = camState.current;
        camera.position.set(
          tx - Rd * Math.cos(E) * Math.sin(A),
          Math.max(0, ty) + Rd * Math.sin(E),
          tz + Rd * Math.cos(E) * Math.cos(A)
        );
        camera.lookAt(tx, ty, tz);

        renderer.render(scene, camera);

        // Project 3D labels
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (width > 0 && height > 0) {
          labelElementsRef.current.forEach(({ el, pos, day }) => {
            const isDayMatch = day === 0 || day === layoutIdRef.current;
            if (!isDayMatch || !showLabelsRef.current) {
              el.style.display = "none";
              return;
            }
            const projected = pos.clone().project(camera);
            const isFront = projected.z < 1;
            if (!isFront) {
              el.style.display = "none";
              return;
            }
            el.style.display = "";
            let screenX = (projected.x * 0.5 + 0.5) * width;
            const screenY = (-projected.y * 0.5 + 0.5) * height;
            if (Math.abs(projected.x) <= 0.96 && el.offsetWidth > 0) {
              const halfW = el.offsetWidth * 0.5;
              screenX = Math.max(halfW + 8, Math.min(width - halfW - 8, screenX));
            }
            el.style.transform = `translate(${screenX}px, ${screenY}px) translate(-50%, -50%)`;
          });
        }

        animFrameId.current = requestAnimationFrame(renderLoop);
      };

      animFrameId.current = requestAnimationFrame(renderLoop);

      return () => {
        running = false;
        if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
        resizeObserver.disconnect();
        canvas.removeEventListener("pointerdown", onPointerDown);
        canvas.removeEventListener("pointermove", onPointerMove);
        canvas.removeEventListener("pointerup", onPointerUp);
        canvas.removeEventListener("pointercancel", onPointerUp);
        canvas.removeEventListener("wheel", onWheel);

        renderer.dispose();
        rendererRef.current = null;
        sceneRef.current = null;
        cameraRef.current = null;
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className="relative flex-1 w-full h-full min-h-0 overflow-hidden select-none bg-gradient-to-b from-[#0d0507] via-[#060508] to-[#040406]"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-grab active:cursor-grabbing outline-none touch-none"
        />
        <div
          ref={labelsContainerRef}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        />
      </div>
    );
  }
);

Arena3DViewer.displayName = "Arena3DViewer";

export default Arena3DViewer;
