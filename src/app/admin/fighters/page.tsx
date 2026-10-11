import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function FightersAdminPage() {
  const fighters = await prisma.athlete.findMany({
    orderBy: { name: "asc" }
  });

  async function togglePublish(id: string, currentStatus: boolean) {
    "use server";
    await prisma.athlete.update({
      where: { id },
      data: { isPublished: !currentStatus }
    });
    revalidatePath("/admin/fighters");
  }

  async function deleteFighter(id: string) {
    "use server";
    await prisma.athlete.delete({ where: { id } });
    revalidatePath("/admin/fighters");
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black uppercase text-white tracking-widest mb-2" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            Fighter Management
          </h1>
          <p className="text-[#90929A]">Manage championship athletes and publication status.</p>
        </div>
        <Link href="/admin/fighters/new" className="bg-[#D21F2B] hover:bg-[#b01822] text-white px-6 py-2 uppercase font-bold tracking-widest rounded-sm text-sm transition-colors" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          + Add Fighter
        </Link>
      </div>

      <div className="bg-[#17181D] border border-white/5 rounded-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/5">
              <th className="p-4 text-xs font-semibold text-[#90929A] uppercase tracking-wider">Name</th>
              <th className="p-4 text-xs font-semibold text-[#90929A] uppercase tracking-wider">Division</th>
              <th className="p-4 text-xs font-semibold text-[#90929A] uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-semibold text-[#90929A] uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fighters.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-[#90929A]">No fighters found.</td>
              </tr>
            ) : (
              fighters.map(fighter => (
                <tr key={fighter.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 font-medium text-white">{fighter.name}</td>
                  <td className="p-4 text-[#90929A]">{fighter.division} - {fighter.weightClass}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-bold uppercase rounded-sm ${fighter.isPublished ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {fighter.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-4">
                    <form action={togglePublish.bind(null, fighter.id, fighter.isPublished)} className="inline">
                      <button type="submit" className="text-xs font-semibold uppercase text-blue-400 hover:text-blue-300">Toggle</button>
                    </form>
                    <form action={deleteFighter.bind(null, fighter.id)} className="inline">
                      <button type="submit" className="text-xs font-semibold uppercase text-red-400 hover:text-red-300">Delete</button>
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
