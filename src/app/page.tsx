import NavTabs from "@/components/NavTabs";
import Overview from "@/components/overview";
import { TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-semibold mb-5">Dashboard</h1>
      <NavTabs>
        <TabsContent value="1">
          <Overview />
        </TabsContent>
        <TabsContent value="2">
          <h1>Tab accc 2</h1>
        </TabsContent>
      </NavTabs>
    </main>
  );
}
