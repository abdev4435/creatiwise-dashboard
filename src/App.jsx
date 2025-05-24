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
          <div className="flex justify-center items-center font-bold text-4xl">
            <h1>Articles</h1>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-2">
                <div className="px-4 lg:px-6">
                </div>
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
