import { redirect } from "next/navigation";
// Individual fighter profiles removed from public site scope.
export default function FighterPage() { redirect("/championship"); }
