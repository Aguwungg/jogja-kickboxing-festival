import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function NewFighterPage() {
  async function createFighter(formData: FormData) {
    "use server";
    
    const name = formData.get("name") as string;
    const division = formData.get("division") as string;
    const weightClass = formData.get("weightClass") as string;
    const club = formData.get("club") as string;
    const isPublished = formData.get("isPublished") === "on";

    // Create the slug
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    await prisma.athlete.create({
      data: {
        name,
        slug,
        division,
        weightClass,
        club,
        isPublished
      }
    });

    redirect("/admin/fighters");
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/admin/fighters" className="text-[#90929A] hover:text-white uppercase tracking-widest text-sm">
          &larr; Back
        </Link>
        <h1 className="text-3xl font-black uppercase text-white tracking-widest" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          Add New Fighter
        </h1>
      </div>

      <div className="bg-[#17181D] border border-white/5 p-8 rounded-sm">
        <form action={createFighter} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase text-[#90929A]">Fighter Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              className="w-full bg-[#0B0B0F] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D21F2B] transition-colors"
              placeholder="e.g. Budi Santoso"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="division" className="text-xs font-bold uppercase text-[#90929A]">Division</label>
              <select 
                id="division" 
                name="division" 
                className="w-full bg-[#0B0B0F] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D21F2B] transition-colors"
              >
                <option value="Pro">Pro</option>
                <option value="Amateur">Amateur</option>
                <option value="Exhibition">Exhibition (BigMo)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="weightClass" className="text-xs font-bold uppercase text-[#90929A]">Weight Class</label>
              <input 
                type="text" 
                id="weightClass" 
                name="weightClass" 
                required
                className="w-full bg-[#0B0B0F] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D21F2B] transition-colors"
                placeholder="e.g. 65kg Lightweight"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="club" className="text-xs font-bold uppercase text-[#90929A]">Club / Affiliation</label>
            <input 
              type="text" 
              id="club" 
              name="club" 
              className="w-full bg-[#0B0B0F] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D21F2B] transition-colors"
              placeholder="e.g. Jogja Camp"
            />
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <input 
              type="checkbox" 
              id="isPublished" 
              name="isPublished" 
              className="w-5 h-5 accent-[#D21F2B]"
            />
            <label htmlFor="isPublished" className="text-sm text-white">
              Publish immediately (visible on public site)
            </label>
          </div>

          <div className="pt-6">
            <button type="submit" className="w-full bg-[#D21F2B] hover:bg-[#b01822] text-white py-4 uppercase font-bold tracking-widest rounded-sm transition-colors" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
              Save Fighter Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
