import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Calendar, Plus, Clock, MapPin, Trash2, Eye, EyeOff } from "lucide-react";
import { requireAdminSession, verifyAdminAction } from "@/lib/auth-guard";

export const dynamic = "force-dynamic";

export default async function AdminSchedulePage() {
  await requireAdminSession();

  const scheduleItems = await prisma.scheduleItem.findMany({
    orderBy: [{ day: "asc" }, { id: "asc" }],
  });

  async function createScheduleItem(formData: FormData) {
    "use server";
    await verifyAdminAction();
    const title = (formData.get("title") as string)?.trim();
    const category = formData.get("category") as string;
    const day = parseInt(formData.get("day") as string, 10);
    const timeSlot = (formData.get("timeSlot") as string)?.trim();
    const location = (formData.get("location") as string)?.trim();
    const description = (formData.get("description") as string)?.trim() || null;
    const isHighlight = formData.get("isHighlight") === "on";

    if (!title || !timeSlot || !location) return;

    await prisma.scheduleItem.create({
      data: {
        id: `sch-custom-${Date.now()}`,
        title,
        category,
        day,
        timeSlot,
        location,
        description,
        isHighlight,
        isPublished: true,
      },
    });

    revalidatePath("/admin/schedule");
    revalidatePath("/jadwal");
    revalidatePath("/admin");
  }

  async function togglePublish(id: string, currentStatus: boolean) {
    "use server";
    await verifyAdminAction();
    await prisma.scheduleItem.update({
      where: { id },
      data: { isPublished: !currentStatus },
    });
    revalidatePath("/admin/schedule");
    revalidatePath("/jadwal");
  }

  async function deleteScheduleItem(id: string) {
    "use server";
    await verifyAdminAction();
    await prisma.scheduleItem.delete({ where: { id } });
    revalidatePath("/admin/schedule");
    revalidatePath("/jadwal");
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
            MANAJEMEN JADWAL & RUNDOWN FESTIVAL
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Atur dan publikasikan agenda turnamen kickboxing serta panggung festival 3 hari.
          </p>
        </div>

        <span className="text-xs bg-[#171719] border border-white/10 px-3.5 py-1.5 rounded-sm text-white/80 self-start sm:self-auto">
          Total: <strong className="text-white">{scheduleItems.length}</strong> Agenda Terdaftar
        </span>
      </div>

      {/* Form Tambah Agenda */}
      <div className="bg-[#171719] border border-white/10 p-6 rounded-sm">
        <h3
          className="text-lg font-black uppercase text-white mb-4 flex items-center gap-2"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          <Plus className="w-4 h-4 text-[#EF3340]" />
          <span>TAMBAH AGENDA JADWAL BARU</span>
        </h3>

        <form action={createScheduleItem} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Judul Agenda / Laga
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Contoh: Partai Final Bantamweight"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Hari Festival
            </label>
            <select
              name="day"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D91F2C]"
            >
              <option value="1">Hari 1 (Jumat, 14 Ags)</option>
              <option value="2">Hari 2 (Sabtu, 15 Ags)</option>
              <option value="3">Hari 3 (Minggu, 16 Ags)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Kategori
            </label>
            <select
              name="category"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D91F2C]"
            >
              <option value="COMBAT">COMBAT (Ring Tarung)</option>
              <option value="STAGE">STAGE (Panggung Musik)</option>
              <option value="CEREMONY">CEREMONY (Upacara / Timbang)</option>
              <option value="COMMUNITY">COMMUNITY (Komunitas / Clinic)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Slot Waktu (WIB)
            </label>
            <input
              type="text"
              name="timeSlot"
              required
              placeholder="Contoh: 19:00 - 21:00 WIB"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Lokasi / Panggung
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="Contoh: Ring Utama"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C]"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">
              Deskripsi Singkat
            </label>
            <input
              type="text"
              name="description"
              placeholder="Deskripsi teknis agenda acara..."
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C]"
            />
          </div>

          <div className="sm:col-span-2 flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
              <input type="checkbox" name="isHighlight" className="rounded-sm accent-[#D91F2C]" />
              <span>Tandai sebagai Agenda Utama (Highlight)</span>
            </label>

            <button
              type="submit"
              className="bg-[#D91F2C] hover:bg-[#EF3340] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all"
            >
              Simpan Agenda
            </button>
          </div>
        </form>
      </div>

      {/* Tabel Agenda Terdaftar */}
      <div className="bg-[#171719] border border-white/10 rounded-sm overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-white/10 bg-white/5 text-[#99999F] uppercase tracking-wider">
              <th className="p-3.5">Hari & Jam</th>
              <th className="p-3.5">Kategori</th>
              <th className="p-3.5">Judul Agenda</th>
              <th className="p-3.5">Lokasi</th>
              <th className="p-3.5 text-center">Status</th>
              <th className="p-3.5 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {scheduleItems.map((item) => (
              <tr key={item.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-mono text-white/90">
                  <span className="font-bold block">Hari {item.day}</span>
                  <span className="text-[11px] text-[#99999F]">{item.timeSlot}</span>
                </td>
                <td className="p-3.5">
                  <span className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[10px] font-bold">
                    {item.category}
                  </span>
                </td>
                <td className="p-3.5 font-medium text-white max-w-xs">
                  <div className="truncate font-bold">{item.title}</div>
                  {item.isHighlight && (
                    <span className="text-[10px] text-amber-400 font-bold uppercase">★ Highlight</span>
                  )}
                </td>
                <td className="p-3.5 text-[#99999F]">{item.location}</td>
                <td className="p-3.5 text-center">
                  <span
                    className={`px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase ${
                      item.isPublished
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {item.isPublished ? "PUBLISHED" : "DRAFT"}
                  </span>
                </td>
                <td className="p-3.5 text-right space-x-2">
                  <form
                    action={togglePublish.bind(null, item.id, item.isPublished)}
                    className="inline"
                  >
                    <button
                      type="submit"
                      className="text-white/60 hover:text-white p-1"
                      title={item.isPublished ? "Sembunyikan dari Publik" : "Publikasikan"}
                    >
                      {item.isPublished ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </form>

                  <form
                    action={deleteScheduleItem.bind(null, item.id)}
                    className="inline"
                  >
                    <button
                      type="submit"
                      className="text-white/40 hover:text-[#EF3340] p-1"
                      title="Hapus Agenda"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
