import React from "react";

/**
 * Custom combat-sports icon: 3D isometric boxing/kickboxing ring with corner posts & ropes.
 */
export function RingArenaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 3 21 8.5 12 14 3 8.5" />
      <path d="M3 12l9 5.5 9-5.5" />
      <path d="M3 15.5l9 5.5 9-5.5" />
      <path d="M3 8.5v7" />
      <path d="M21 8.5v7" />
      <path d="M12 14v7" />
    </svg>
  );
}

/**
 * Custom combat-venue icon: Main ceremonial stage with printed backdrop banner.
 */
export function StageBackdropIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="10" rx="1.2" />
      <path d="M7 9h10" />
      <path d="M8 14v4" />
      <path d="M16 14v4" />
      <path d="M2 18h20" />
      <path d="M5 18v3" />
      <path d="M19 18v3" />
    </svg>
  );
}

