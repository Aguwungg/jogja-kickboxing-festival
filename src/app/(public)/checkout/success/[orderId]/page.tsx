import { redirect } from "next/navigation";
// Checkout success page removed from public site scope.
export default function CheckoutSuccessPage() {
  redirect("/");
}
