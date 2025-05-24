import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  // useSidebar,
} from "@/components/ui/sidebar"
import userData from "../data/user.json"
import navData from "../data/nav-data.json"

const userId = 1;
const user = userData.find((user) => user.id === userId);
export function AppSidebar({
  ...props
}) {
  // const { state } = useSidebar()
  return (
    (<Sidebar collapsible="icon" user={user} {...props}>
      <SidebarContent>
        <SidebarHeader user={user}>
          <NavUser user={user} collapsible="icon" />
        </SidebarHeader>
        <NavMain items={navData.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>)
  );
}
