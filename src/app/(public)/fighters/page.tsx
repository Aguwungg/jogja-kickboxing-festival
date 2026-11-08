import { redirect } from "next/navigation";
// Fighters directory removed from public site scope.
export default function FightersPage() { redirect("/championship"); }
