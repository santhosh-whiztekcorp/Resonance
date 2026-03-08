"use client"

import { useTheme } from "next-themes"

import { WavyBackground } from "@/components/ui/wavy-background"
import { useMounted } from "@/hooks/use-mounted"

export function HeroPattern() {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <WavyBackground
        colors={isDark ? ["#14B8A6", "#0891B2", "#0284C7", "#4F46E5"] : ["#2DD4BF", "#22D3EE", "#38BDF8", "#818CF8"]}
        backgroundFill={isDark ? "oklch(0.145 0 0)" : "oklch(1 0 0)"}
        blur={3}
        speed="slow"
        waveOpacity={0.1}
        waveWidth={60}
        waveYOffset={0.25}
        containerClassName="h-full"
        className="hidden"
      />
    </div>
  )
}
