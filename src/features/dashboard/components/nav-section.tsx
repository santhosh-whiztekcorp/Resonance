import Link from "next/link"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { MenuItem } from "./dashboard-sidebar"

type NavSectionProps = {
  label?: string
  items: MenuItem[]
  pathname: string
}

export function NavSection({ items, pathname, label }: NavSectionProps) {
  return (
    <SidebarGroup>
      {label && <SidebarGroupLabel className="text-muted-foreground text-[13px] uppercase">{label}</SidebarGroupLabel>}

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className="data-[active=true]:border-border h-9 border border-transparent px-3 py-2 text-[13px] font-medium tracking-tight"
                asChild={!!item.url}
                tooltip={item.title}
                onClick={item.onClick}
                isActive={item.url ? (item.url === "/" ? pathname === "/" : pathname.startsWith(item.url)) : false}
              >
                {item.url ? (
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <>
                    <item.icon />
                    <span>{item.title}</span>
                  </>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
