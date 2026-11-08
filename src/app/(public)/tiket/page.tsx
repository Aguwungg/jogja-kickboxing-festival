import { redirect } from "next/navigation";
// Ticketing removed from public site scope.
export default function TicketPage() { redirect("/"); }
