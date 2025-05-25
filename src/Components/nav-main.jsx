"use client"

import { ChevronRight } from "lucide-react";
import { Separator } from "@/Components/ui/separator"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/Components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/Components/ui/sidebar"

export function NavMain({
  items,
}) {
  return (
    (<SidebarGroup>
      <SidebarMenu>
        {items.map((item) =>
        (
          <div key={item.title}>
            {item.title == "Profile" && (<Separator className={"h-1 bg-gray-200"} />)}
            <Collapsible
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="cursor-pointer" tooltip={item.title}>
                    {item.iconSrc && <img src={item.iconSrc} alt="icon here" className="w-4" />}
                    <span> {item.title}</span>
                    {item.items && (<ChevronRight
                      className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />)}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {item.items?.map((subItem) => (
                  <CollapsibleContent key={subItem.title}>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className={"hover:text-blue-500 focus:text-blue-500"} asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                ))}
              </SidebarMenuItem>
            </Collapsible>
          </div>
        )
        )}
      </SidebarMenu>
    </SidebarGroup >)
  );
}
