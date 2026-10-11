"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Lock, Mail, ArrowRight, AlertCircle, Loader2, KeyRound } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: email.trim(),
        password,
      });

      if (!res || res.error) {
        setError("Email atau kata sandi tidak valid. Periksa kembali kredensial Anda.");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Terjadi kesalahan sistem saat mencoba masuk. Silakan coba lagi.");
      setLoading(false);
    }
  };

  const fillCredentials = (userEmail: string) => {
    setEmail(userEmail);
    setPassword("AdminJKB2026!");
    setError("");
  };

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

        {/* Login Card */}
        <div className="bg-[#171719] border border-white/10 p-8 rounded-sm shadow-2xl">
          {error && (
            <div className="mb-6 p-4 rounded-sm bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#EF3340] text-xs font-sans flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
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
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#09090b] border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
                />
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

          {/* Quick-Fill Staging Accounts Box */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider mb-2 font-sans">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Akun Staging Siap Pakai:</span>
            </div>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => fillCredentials("admin@jkbchampionship.id")}
                className="w-full text-left p-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-sans text-white/80 transition-colors flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-white block">Super Admin</span>
                  <span className="text-[11px] text-[#99999F]">admin@jkbchampionship.id</span>
                </div>
                <span className="text-[10px] text-[#EF3340] font-bold uppercase">Gunakan &rarr;</span>
              </button>

              <button
                type="button"
                onClick={() => fillCredentials("content@jkbchampionship.id")}
                className="w-full text-left p-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-sans text-white/80 transition-colors flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-white block">Content Admin</span>
                  <span className="text-[11px] text-[#99999F]">content@jkbchampionship.id</span>
                </div>
                <span className="text-[10px] text-amber-400 font-bold uppercase">Gunakan &rarr;</span>
              </button>
            </div>
          </div>
        </div>

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
