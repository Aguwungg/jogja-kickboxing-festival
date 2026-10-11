import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { Music, Plus, Trash2, Eye, EyeOff, Sparkles } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminLineupPage() {
  const performers = await prisma.performer.findMany({
    orderBy: { createdAt: "asc" },
  });

  async function createPerformer(formData: FormData) {
    "use server";
    const name = (formData.get("name") as string)?.trim();
    const stage = (formData.get("stage") as string)?.trim() || "Panggung Utama (The Stage)";
    const description = (formData.get("description") as string)?.trim() || null;
    const image = (formData.get("image") as string)?.trim() || "/images/jkb/hero-concert.jpg";
    const isPublished = formData.get("isPublished") === "on";

    if (!name) return;

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    await prisma.performer.create({
      data: {
        name,
        slug: `${slug}-${Date.now().toString().slice(-4)}`,
        stage,
        description,
        image,
        isPublished,
      },
    });

    revalidatePath("/admin/lineup");
    revalidatePath("/lineup");
    revalidatePath("/admin");
  }

  async function togglePublish(id: string, currentStatus: boolean) {
    "use server";
    await prisma.performer.update({
      where: { id },
      data: { isPublished: !currentStatus },
    });
    revalidatePath("/admin/lineup");
    revalidatePath("/lineup");
  }

  async function deletePerformer(id: string) {
    "use server";
    await prisma.performer.delete({ where: { id } });
    revalidatePath("/admin/lineup");
    revalidatePath("/lineup");
    revalidatePath("/admin");
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1
            className="text-3xl font-black uppercase text-white tracking-tight"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            MANAJEMEN LINEUP MUSIK & HIBURAN
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Kelola pengumuman bintang tamu, musisi festival, dan jadwal rilis penampil panggung.
          </p>
        </div>

        <span className="text-xs bg-[#171719] border border-white/10 px-3.5 py-1.5 rounded-sm text-white/80 self-start sm:self-auto">
          Total: <strong className="text-white">{performers.length}</strong> Musisi Terdaftar
        </span>
      </div>

      {/* Form Tambah Musisi */}
      <div className="bg-[#171719] border border-white/10 p-6 rounded-sm">
        <h3
          className="text-lg font-black uppercase text-white mb-4 flex items-center gap-2"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          <Plus className="w-4 h-4 text-amber-400" />
          <span>TAMBAH PENAMPIL MUSIK BARU</span>
        </h3>

        <form action={createPerformer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Nama Artis / Band / Kolektif
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Contoh: Barasuara / Jogja Hip-Hop"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Panggung / Stage
            </label>
            <input
              type="text"
              name="stage"
              defaultValue="Panggung Utama (The Stage)"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Path Gambar / Foto
            </label>
            <input
              type="text"
              name="image"
              defaultValue="/images/jkb/hero-concert.jpg"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Status Publikasi Awal
            </label>
            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" name="isPublished" defaultChecked className="rounded-sm accent-amber-400" />
              <span className="text-xs text-white/80">Langsung publikasikan ke halaman /lineup</span>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Deskripsi Profil & Konsep Penampilan
            </label>
            <textarea
              name="description"
              rows={2}
              placeholder="Penjelasan profil band dan konsep panggung..."
              className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="sm:col-span-2 flex justify-end pt-2">
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm transition-all"
            >
              Simpan Musisi
            </button>
          </div>
        </form>
      </div>

      {/* Grid Musisi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {performers.map((p) => (
          <div
            key={p.id}
            className="bg-[#171719] border border-white/10 p-5 rounded-sm flex items-start gap-4 justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-sm bg-black overflow-hidden shrink-0 border border-white/10">
                <Image
                  src={p.image || "/images/jkb/hero-concert.jpg"}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-bold text-white uppercase">{p.name}</h4>
                  <span
                    className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-sm ${
                      p.isPublished
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {p.isPublished ? "PUBLISHED" : "DRAFT"}
                  </span>
                </div>
                <p className="text-xs text-[#99999F] font-mono">{p.stage}</p>
                <p className="text-xs text-white/70 mt-2 line-clamp-2">{p.description}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <form action={togglePublish.bind(null, p.id, p.isPublished)}>
                <button
                  type="submit"
                  className="p-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                  title={p.isPublished ? "Tarik ke Draft" : "Publikasikan"}
                >
                  {p.isPublished ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </form>

              <form action={deletePerformer.bind(null, p.id)}>
                <button
                  type="submit"
                  className="p-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-white/40 hover:text-[#EF3340]"
                  title="Hapus Musisi"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
