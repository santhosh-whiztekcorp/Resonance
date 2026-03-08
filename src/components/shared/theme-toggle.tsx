"use client"

import { useEffect, useState } from "react"

import { useTheme } from "next-themes"

import { Laptop, Moon, Sun } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="bg-muted inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]">
        <div className="h-full w-8 rounded-md" />
        <div className="h-full w-8 rounded-md" />
        <div className="h-full w-8 rounded-md" />
      </div>
    )
  }

  return (
    <Tabs value={theme} onValueChange={(value) => setTheme(value)}>
      <TabsList>
        <TabsTrigger value="light">
          <Sun className="h-4 w-4" />
        </TabsTrigger>

        <TabsTrigger value="dark">
          <Moon className="h-4 w-4" />
        </TabsTrigger>

        <TabsTrigger value="system">
          <Laptop className="h-4 w-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
