import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    (<header
      className="flex h-(--header-height) shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center px-2">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <div className="flex w-full justify-center items-center font-bold text-4xl py-1">
          <h1>Articles</h1>
        </div>
      </div>
    </header>)
  );
}
