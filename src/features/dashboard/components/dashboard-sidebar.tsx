"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

import { OrganizationSwitcher, UserButton, useClerk } from "@clerk/nextjs"
import {
  AudioLinesIcon,
  HeadphonesIcon,
  HomeIcon,
  LayoutGridIcon,
  LucideIcon,
  SettingsIcon,
  Volume2Icon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"

import { NavSection } from "./nav-section"
import { SidebarThemeToggle } from "./sidebar-theme-toggle"

export type MenuItem = {
  title: string
  url?: string
  icon: LucideIcon
  onClick?: () => void
}

export function DashboardSidebar() {
  const pathname = usePathname()
  const clerk = useClerk()

  const mainMenuItems: MenuItem[] = [
    {
      title: "Dashboard",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Explore Voices",
      url: "/voices",
      icon: LayoutGridIcon,
    },
    {
      title: "Text to Speech",
      url: "/text-to-speech",
      icon: AudioLinesIcon,
    },
    {
      title: "Voice Cloning",
      icon: Volume2Icon,
    },
  ]

  const otherMenuItems: MenuItem[] = [
    {
      title: "Settings",
      icon: SettingsIcon,
      onClick: () => clerk.openOrganizationProfile(),
    },
    {
      title: "Help and Support",
      url: "mailto:santhosh10378@gmail.com",
      icon: HeadphonesIcon,
    },
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-col gap-4 pt-4">
        <div className="flex items-center gap-2 pl-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
          <Image src="/logo.svg" alt="Resonance" width={24} height={24} className="rounded-sm" />
          <span className="text-foreground text-lg font-semibold tracking-tighter group-data-[collapsible=icon]:hidden">
            Resonance
          </span>
          <SidebarTrigger className="ml-auto lg:hidden" />
        </div>

        <SidebarMenu>
          <SidebarMenuItem>
            <OrganizationSwitcher
              hidePersonal={true}
              fallback={
                <Skeleton className="bg-sidebar h-8 w-full rounded-md border group-data-[collapsible=icon]:size-8" />
              }
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  organizationSwitcherTrigger:
                    "w-full! justify-between! bg-sidebar! border! border-sidebar-border! shadow-none! outline-none! rounded-md! pl-1! pr-2! py-1! gap-3! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1!",
                  organizationPreview: "gap-2!",
                  organizationPreviewAvatarBox: "size-6! rounded-sm!",
                  organizationPreviewTextContainer:
                    "text-xs! tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!",
                  organizationPreviewMainIdentifier: "text-[13px]!",
                  organizationSwitcherTriggerIcon:
                    "size-4! text-sidebar-foreground! group-data-[collapsible=icon]:hidden!",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div className="border-border border-b border-dashed"></div>
      <SidebarContent>
        <NavSection items={mainMenuItems} pathname={pathname} />
        <NavSection label="Others" items={otherMenuItems} pathname={pathname} />
      </SidebarContent>
      <div className="border-border border-b border-dashed"></div>
      <SidebarFooter className="gap-3 py-3">
        <SidebarThemeToggle />
        <SidebarMenu>
          <SidebarMenuItem>
            <UserButton
              showName
              fallback={
                <Skeleton className="border-border bg-sidebar h-8.5 w-full rounded-md border group-data-[collapsible=icon]:size-8" />
              }
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  userButtonTrigger:
                    "w-full! py-2! pr-2! pl-2! justify-between! bg-sidebar! border! border-sidebar-border! shadow-none! outline-none! rounded-md! pl-1! pr-2! py-1! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! group-data-[collapsible=icon]:after:hidden!",
                  userButtonBox: "flex-row-reverse! gap-2!",
                  userButtonOuterIdentifier:
                    "text-[13px]! tracking-tight! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!",
                  userButtonAvatarBox: "size-6!",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
