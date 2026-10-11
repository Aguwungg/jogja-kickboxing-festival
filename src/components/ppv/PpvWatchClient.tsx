"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { verifyAccessCodeAction } from "@/app/(public)/ppv/actions";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Lock,
  Unlock,
  Radio,
  Tv,
  Users,
  Send,
  Flame,
  Zap,
  Award,
  Video,
  Layers,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface Props {
  initialCode?: string;
}

interface ChatMessage {
  id: string;
  user: string;
  city: string;
  text: string;
  badge?: string;
  time: string;
}

export default function PpvWatchClient({ initialCode }: Props) {
  const [accessCode, setAccessCode] = useState(initialCode || "");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(null);

  const [ticketDetails, setTicketDetails] = useState<{
    customerName: string | null;
    productName: string;
    tier: string;
    resolution: string;
  } | null>(null);

  // Player controls state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeAngle, setActiveAngle] = useState<"RINGSIDE" | "OVERHEAD" | "LOCKER">("RINGSIDE");
  const [activeAudio, setActiveAudio] = useState<"COMMENTARY" | "ARENA">("COMMENTARY");
  const [quality, setQuality] = useState("1080p 60FPS");

  // Live Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: "1", user: "WawanStriker", city: "Sleman", text: "Low kick dari sudut merah kenceng banget!", time: "14:02" },
    { id: "2", user: "BantulFighter", city: "Bantul", text: "Bantul jangan kasih kendor, counter hook kanan!", badge: "VIP", time: "14:02" },
    { id: "3", user: "JogjaPride99", city: "Kota Jogja", text: "Kamera ringside angle 1 jernih pol 60FPS!", badge: "VIP", time: "14:03" },
    { id: "4", user: "CoachHendra", city: "Solo", text: "Jaga guard tangan kiri, jangan kepancing emosi.", time: "14:03" },
  ]);
  const [inputChat, setInputChat] = useState("");
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Interactive Poll State
  const [pollVotes, setPollVotes] = useState({ red: 142, blue: 168 });
  const [userVoted, setUserVoted] = useState<"red" | "blue" | null>(null);

  // Verification on mount if initialCode present
  useEffect(() => {
    if (initialCode) {
      handleVerify(initialCode);
    }
  }, [initialCode]);

  const handleVerify = async (codeToVerify: string) => {
    if (!codeToVerify.trim()) return;
    setVerificationLoading(true);
    setVerificationError(null);

    const res = await verifyAccessCodeAction(codeToVerify);
    if (res.valid && res.entitlement) {
      setIsUnlocked(true);
      setTicketDetails({
        customerName: res.entitlement.customerName,
        productName: res.entitlement.productName,
        tier: res.entitlement.tier,
        resolution: res.entitlement.resolution,
      });
    } else {
      setIsUnlocked(false);
      setVerificationError(res.error || "Kode tiket tidak valid.");
    }
    setVerificationLoading(false);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputChat.trim()) return;

    const newMessage: ChatMessage = {
      id: String(Date.now()),
      user: ticketDetails?.customerName || "Viewer Digital",
      city: "Online",
      text: inputChat.trim(),
      badge: ticketDetails?.tier === "VIP" ? "VIP" : undefined,
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
    };

    setChatMessages((prev) => [...prev, newMessage]);
    setInputChat("");

    setTimeout(() => {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSendReaction = (emoji: string) => {
    const reactionMessage: ChatMessage = {
      id: String(Date.now()),
      user: ticketDetails?.customerName || "Penonton",
      city: "Reaction",
      text: `Mengirim reaksi: ${emoji} ${emoji} ${emoji}`,
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
    };
    setChatMessages((prev) => [...prev, reactionMessage]);
  };

  const handleVotePoll = (choice: "red" | "blue") => {
    if (userVoted) return;
    setUserVoted(choice);
    setPollVotes((prev) => ({
      ...prev,
      [choice]: prev[choice] + 1,
    }));
  };

  const totalPoll = pollVotes.red + pollVotes.blue;
  const redPercentage = Math.round((pollVotes.red / totalPoll) * 100);
  const bluePercentage = 100 - redPercentage;

  return (
    <div className="w-full space-y-6">
      {/* Top Header & Broadcast Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#171719] border border-white/10 p-4 rounded-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/ppv"
            className="p-2 rounded-sm bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            title="Kembali ke Info PPV"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                LIVE STAGING BROADCAST • FEED UTAMA GOR UNY, YOGYAKARTA
              </span>
            </div>
            <h1
              className="text-lg sm:text-xl font-black uppercase text-white tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              REDY CHAMPIONSHIP 2 &times; BIGMO CREATOR CLASH
            </h1>
          </div>
        </div>

        {/* User Entitlement Status Pill */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          {isUnlocked && ticketDetails ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-sm flex items-center gap-2 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-emerald-400 font-bold font-mono uppercase block text-[10px]">
                  TIKET AKTIF: {ticketDetails.tier}
                </span>
                <span className="text-white/80 font-mono text-[11px]">
                  {ticketDetails.customerName || "Penonton Resmi"}
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-sm flex items-center gap-2 text-xs text-amber-300">
              <Lock className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-[11px]">SIARAN TERKUNCI</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Stream Console Grid (Video Player 8 cols + Interactive Feed 4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Video Player & Broadcast Controls (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative aspect-video w-full bg-black rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
            {/* Background Stream Simulation / Video Poster */}
            <div className="absolute inset-0 bg-neutral-950">
              <Image
                src={
                  activeAngle === "RINGSIDE"
                    ? "/images/jkb/hero-boxing.jpg"
                    : activeAngle === "OVERHEAD"
                    ? "/images/jkb/boxing-ring.jpg"
                    : "/images/jkb/fighter-training.jpg"
                }
                alt="Live Kickboxing Match Feed"
                fill
                className="object-cover opacity-85"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
            </div>

            {/* Scoreboard Overlay (Top Bar) */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
              {/* Red vs Blue Corner Scorecard */}
              <div className="bg-black/85 backdrop-blur-md border border-white/15 rounded-xs px-3.5 py-1.5 flex items-center gap-4 text-xs font-mono font-bold shadow-2xl">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EF3340]" />
                  <span className="text-white">BAGAS (SLEMAN)</span>
                </div>
                <span className="text-amber-400 font-black text-sm">VS</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-white">RIAN (BANTUL)</span>
                </div>
              </div>

              {/* Round & Clock Badge */}
              <div className="bg-[#EF3340] text-white px-3 py-1.5 rounded-xs font-mono font-black text-xs uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>RONDE 2 • 01:45</span>
              </div>
            </div>

            {/* Paywall Overlay if NOT Unlocked */}
            {!isUnlocked && (
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EF3340]/20 border border-[#EF3340]/40 flex items-center justify-center text-[#EF3340] animate-bounce">
                  <Lock className="w-8 h-8" />
                </div>
                <div className="max-w-md space-y-2">
                  <h3
                    className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    AKSES LIVE STREAMING TERBATAS
                  </h3>
                  <p className="text-xs text-[#90929A] leading-relaxed">
                    Siaran resmi Redy Championship 2 dilindungi hak siar eksklusif. Masukkan kode akses tiket Anda atau beli tiket streaming instan mulai Rp 10.000.
                  </p>
                </div>

                {/* Instant Unlock Bar inside video */}
                <div className="w-full max-w-sm space-y-3">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleVerify(accessCode);
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Masukkan Kode Tiket..."
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      className="flex-1 bg-[#171719] border border-white/20 rounded-sm px-3 py-2 text-xs text-white placeholder-white/40 font-mono uppercase focus:outline-none focus:border-[#EF3340]"
                    />
                    <button
                      type="submit"
                      disabled={verificationLoading}
                      className="bg-[#EF3340] hover:bg-[#D91F2C] text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-1"
                    >
                      {verificationLoading ? "Cek..." : "Buka Akses"}
                    </button>
                  </form>

                  {verificationError && (
                    <div className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 p-2 rounded-sm">
                      {verificationError}
                    </div>
                  )}

                  {/* Test Shortcut */}
                  <div className="flex items-center justify-center gap-2 text-[11px] text-white/60">
                    <span>Uji Staging QA (Internal Demo):</span>
                    <button
                      type="button"
                      onClick={() => {
                        setAccessCode("JKB-VIP-2026");
                        handleVerify("JKB-VIP-2026");
                      }}
                      className="text-amber-400 underline font-mono font-bold"
                    >
                      JKB-VIP-2026
                    </button>
                  </div>

                  <Link
                    href="/ppv#pricing-tiers"
                    className="inline-block text-xs uppercase font-bold text-white/70 hover:text-white underline pt-1"
                  >
                    Belum Punya Tiket? Beli Paket Streaming di Sini &rarr;
                  </Link>
                </div>
              </div>
            )}

            {/* Bottom Stream Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs z-10">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-sm bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/10"
                  title={isPlaying ? "Jeda" : "Putar"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-8 h-8 rounded-sm bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/10"
                  title={isMuted ? "Buka Suara" : "Bisukan"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-[10px] font-mono text-white/80 bg-black/60 px-2 py-1 rounded-xs border border-white/10">
                  LATENSI: 0.8s (LIVE)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-black/80 px-2 py-1 rounded-xs border border-white/10">
                  {quality}
                </span>
                <button
                  onClick={() => {
                    const elem = document.documentElement;
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      elem.requestFullscreen().catch(() => {});
                    }
                  }}
                  className="w-8 h-8 rounded-sm bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/10"
                  title="Layar Penuh"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Multi-Angle & Audio Switcher Panel */}
          <div className="bg-[#171719] border border-white/10 p-4 rounded-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10 text-xs">
              {/* Camera Angle Selector */}
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/60 block flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-[#EF3340]" />
                  <span>SUDUT KAMERA AKTIF: <strong className="text-amber-400 font-normal">[SIMULASI TEKNIS]</strong></span>
                </span>
                <div className="flex items-center gap-2">
                  {[
                    { id: "RINGSIDE", label: "Angle 1: Ringside Cam" },
                    { id: "OVERHEAD", label: "Angle 2: Overhead Canvas" },
                    { id: "LOCKER", label: "Angle 3: Locker Room / Walkout" },
                  ].map((cam) => (
                    <button
                      key={cam.id}
                      onClick={() => setActiveAngle(cam.id as any)}
                      className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase font-mono transition-all ${
                        activeAngle === cam.id
                          ? "bg-[#EF3340] text-white shadow-md shadow-[#EF3340]/20"
                          : "bg-[#09090b] text-[#90929A] hover:text-white border border-white/10"
                      }`}
                    >
                      {cam.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Audio Commentary Selector */}
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/60 block flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>PILIHAN AUDIO FEED:</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveAudio("COMMENTARY")}
                    className={`px-3 py-1.5 rounded-sm text-xs font-mono font-bold uppercase transition-all ${
                      activeAudio === "COMMENTARY"
                        ? "bg-amber-500 text-black font-black"
                        : "bg-[#09090b] text-[#90929A] hover:text-white border border-white/10"
                    }`}
                  >
                    Komentator Pro
                  </button>
                  <button
                    onClick={() => setActiveAudio("ARENA")}
                    className={`px-3 py-1.5 rounded-sm text-xs font-mono font-bold uppercase transition-all ${
                      activeAudio === "ARENA"
                        ? "bg-amber-500 text-black font-black"
                        : "bg-[#09090b] text-[#90929A] hover:text-white border border-white/10"
                    }`}
                  >
                    Ambiens Arena Murni
                  </button>
                </div>
              </div>
            </div>

            {/* Stream Match Card Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#90929A]">
              <div>
                <strong className="text-white block">Partai Utama: Bantamweight Championship Final (57kg)</strong>
                <span>3 Ronde &times; 3 Menit • Peraturan K-1 Glory Standard</span>
              </div>
              <div className="flex items-center gap-2 text-white font-mono text-[11px]">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>3.842 Penonton Online Sedang Menyaksikan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Live Chat & Audience Polling Console (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Interactive Live Polling Widget */}
          <div className="bg-[#171719] border border-white/10 p-4 rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>POLLING PENONTON LIVE</span>
              </div>
              <span className="text-[10px] font-mono text-white/50">{totalPoll} Suara</span>
            </div>

            <p className="text-xs text-[#90929A]">
              Siapa petarung yang mendominasi serangan di ronde ini?
            </p>

            <div className="space-y-2">
              <button
                onClick={() => handleVotePoll("red")}
                disabled={!!userVoted}
                className={`w-full p-2.5 rounded-sm text-xs font-bold uppercase flex items-center justify-between border transition-all ${
                  userVoted === "red"
                    ? "bg-[#EF3340]/20 border-[#EF3340] text-white"
                    : "bg-[#09090b] border-white/10 text-white/80 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF3340]" />
                  <span>Sudut Merah (Bagas)</span>
                </div>
                <span className="font-mono">{redPercentage}%</span>
              </button>

              <button
                onClick={() => handleVotePoll("blue")}
                disabled={!!userVoted}
                className={`w-full p-2.5 rounded-sm text-xs font-bold uppercase flex items-center justify-between border transition-all ${
                  userVoted === "blue"
                    ? "bg-blue-500/20 border-blue-500 text-white"
                    : "bg-[#09090b] border-white/10 text-white/80 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span>Sudut Biru (Rian)</span>
                </div>
                <span className="font-mono">{bluePercentage}%</span>
              </button>
            </div>
          </div>

          {/* Real-Time Live Chat Box */}
          <div className="bg-[#171719] border border-white/10 rounded-sm flex flex-col h-[440px]">
            {/* Chat Header */}
            <div className="p-3 border-b border-white/10 flex items-center justify-between bg-[#111114]">
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-[#EF3340]" />
                <span
                  className="text-xs font-black uppercase tracking-wider text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  LIVE CHAT ARENA
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">
                ROOM #GOR-MAIN
              </span>
            </div>

            {/* Chat Message Stream */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 font-sans text-xs">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-[11px]">{msg.user}</span>
                    {msg.badge && (
                      <span className="text-[9px] font-mono font-bold bg-amber-500 text-black px-1 rounded-xs">
                        {msg.badge}
                      </span>
                    )}
                    <span className="text-[10px] text-white/30 font-mono">
                      ({msg.city})
                    </span>
                    <span className="text-[9px] text-white/20 font-mono ml-auto">
                      {msg.time}
                    </span>
                  </div>
                  <p className="text-[#90929A] leading-snug pl-1">{msg.text}</p>
                </div>
              ))}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick Reactions Bar */}
            <div className="px-3 py-1.5 border-t border-white/5 bg-[#09090b] flex items-center justify-around">
              {["🔥", "🥊", "⚡", "🏆", "👏"].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => handleSendReaction(emoji)}
                  className="p-1 hover:scale-125 transition-transform text-sm"
                  title={`Kirim ${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>

            {/* Send Chat Form */}
            <form onSubmit={handleSendChat} className="p-3 border-t border-white/10 bg-[#111114] flex gap-2">
              <input
                type="text"
                placeholder={isUnlocked ? "Tulis komentar dukungan..." : "Buka akses untuk bergabung..."}
                disabled={!isUnlocked}
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
                className="flex-1 bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340] disabled:opacity-40"
              />
              <button
                type="submit"
                disabled={!isUnlocked || !inputChat.trim()}
                className="bg-[#EF3340] hover:bg-[#D91F2C] disabled:opacity-40 text-white p-2 rounded-sm transition-all"
                title="Kirim Pesan"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
