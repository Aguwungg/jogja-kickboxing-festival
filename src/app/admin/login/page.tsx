"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Shield,
  Lock,
  Mail,
  ArrowRight,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
} from "lucide-react";

function LoginForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const accessDeniedError =
    searchParams.get("error") === "AccessDenied"
      ? "Akses ditolak: Akun Anda tidak memiliki otorisasi peran administrator."
      : "";
  const displayError = error || accessDeniedError;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const rawCallback = searchParams.get("callbackUrl") || "/admin";
      const callbackUrl =
        rawCallback.startsWith("/") && !rawCallback.startsWith("//")
          ? rawCallback
          : "/admin";

      const res = await Promise.race([
        signIn("credentials", {
          redirect: false,
          email: email.trim(),
          password,
        }),
        new Promise<null>((_, reject) =>
          setTimeout(() => reject(new Error("LOGIN_TIMEOUT")), 15000)
        ),
      ]);

      if (!res || res.error || !res.ok) {
        setError(
          "Email atau kata sandi tidak valid. Periksa kembali kredensial Anda."
        );
        setLoading(false);
        return;
      }

      window.location.assign(callbackUrl);
    } catch (err) {
      const isTimeout = err instanceof Error && err.message === "LOGIN_TIMEOUT";
      setError(
        isTimeout
          ? "Koneksi verifikasi melebihi batas waktu. Silakan muat ulang dan coba lagi."
          : "Terjadi kesalahan sistem saat mencoba masuk. Silakan coba lagi."
      );
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#171719] border border-white/10 p-8 rounded-sm shadow-2xl">
      {displayError && (
        <div className="mb-6 p-4 rounded-sm bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#EF3340] text-xs font-sans flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{displayError}</span>
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-2 font-sans">
            Email Administrator
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@jkbchampionship.id"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-2 font-sans">
            Kata Sandi
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm pl-10 pr-10 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#D91F2C] hover:bg-[#EF3340] disabled:bg-[#D91F2C]/50 text-white py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all mt-2"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>MEMVERIFIKASI...</span>
            </>
          ) : (
            <>
              <span>MASUK KE COMMAND CENTER</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#F6F3EC] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D91F2C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D91F2C]/40 bg-[#D91F2C]/10 text-[#EF3340] text-xs font-bold tracking-widest uppercase mb-4">
            <Shield className="w-3.5 h-3.5" />
            PANEL KENDALI ADMINISTRATOR
          </div>
          <h1
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            JKB 2026 <span className="text-[#EF3340]">COMMAND</span>
          </h1>
          <p className="text-xs text-[#99999F] font-sans mt-1">
            Masuk untuk mengelola turnamen, jadwal, konten, dan data festival.
          </p>
        </div>

        {/* Suspense Boundary for useSearchParams */}
        <Suspense
          fallback={
            <div className="bg-[#171719] border border-white/10 p-8 rounded-sm shadow-2xl flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-[#D91F2C]" />
            </div>
          }
        >
          <LoginForm />
        </Suspense>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-xs text-[#99999F] hover:text-white transition-colors uppercase tracking-widest font-sans"
          >
            &larr; Kembali ke Situs Publik
          </Link>
        </div>
      </div>
    </div>
  );
}
