import NavTabs from "@/components/NavTabs";
import Overview from "@/components/overview";
import Sales from "@/components/sales";
import { TableCustomer } from "@/components/table/tableCust";
import { ModeToggle } from "@/components/toggleDarkMode";
import { TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-5">Dashboard</h1>
        <ModeToggle />
      </div>
      <NavTabs>
        <TabsContent value="1">
          <Overview />
        </TabsContent>
        <TabsContent value="2">
          <TableCustomer />
        </TabsContent>
        <TabsContent value="3">
          <Sales />
        </TabsContent>
      </NavTabs>
    </main>
  );
}
