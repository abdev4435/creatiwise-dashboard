import { AppSidebar } from "./Components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { DataTable } from "@/components/data-table"
import { SidebarProvider, SidebarInset } from "./Components/ui/sidebar"
import data from "./data/data.json"
function App() {

  return (
    <div className="flex flex-col justify-center items-center">
      <SidebarProvider>
        <AppSidebar className="" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col mt-5">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-2">
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div >
  )
}

export default App
