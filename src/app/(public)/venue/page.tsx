import { redirect } from "next/navigation";
// Venue page removed from public site scope (venue embargoed).
export default function VenuePage() { redirect("/tentang"); }
