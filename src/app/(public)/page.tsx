import HomeClient from "./HomeClient";
import { getPublishedWhatsNewItems } from "@/lib/whats-new";

export const dynamic = "force-dynamic";

export default async function Home() {
  const whatsNewItems = await getPublishedWhatsNewItems();
  return <HomeClient whatsNewItems={whatsNewItems} />;
}
