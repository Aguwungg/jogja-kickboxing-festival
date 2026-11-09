import { redirect } from "next/navigation";

// Redirect legacy /venue route to the official interactive 3D arena layout
export default function VenuePage() {
  redirect("/arena-3d");
}
