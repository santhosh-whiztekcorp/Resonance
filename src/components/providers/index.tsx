"use client"

import { PropsWithChildren } from "react"

import { ThemeProvider } from "next-themes"

import { ClerkProvider } from "@clerk/nextjs"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster richColors position="top-right" visibleToasts={4} />
      </ThemeProvider>
    </ClerkProvider>
  )
}
