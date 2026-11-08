import { redirect } from "next/navigation";
// Preview route removed from public scope.
export default function PreviewPage() {
  redirect("/");
}
