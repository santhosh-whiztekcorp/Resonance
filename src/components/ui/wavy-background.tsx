"use client"

import { ReactNode, useEffect, useRef } from "react"

import { createNoise3D } from "simplex-noise"

import { cn } from "@/lib/utils"

interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  waveYOffset?: number
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  waveYOffset = 0.25,
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const noise = createNoise3D()

  const isSafari =
    typeof window !== "undefined" && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    let nt = 0

    ctx.filter = `blur(${blur}px)`

    const waveColors = colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]

    const getSpeed = () => {
      switch (speed) {
        case "slow":
          return 0.001
        case "fast":
          return 0.002
        default:
          return 0.001
      }
    }

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      ctx.filter = `blur(${blur}px)`
    }

    window.addEventListener("resize", resize)

    const drawWave = (count: number) => {
      nt += getSpeed()

      for (let i = 0; i < count; i++) {
        ctx.beginPath()
        ctx.lineWidth = waveWidth
        ctx.strokeStyle = waveColors[i % waveColors.length]

        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100
          ctx.lineTo(x, y + h * waveYOffset)
        }

        ctx.stroke()
        ctx.closePath()
      }
    }

    const render = () => {
      ctx.fillStyle = backgroundFill
      ctx.globalAlpha = waveOpacity
      ctx.fillRect(0, 0, w, h)

      drawWave(5)

      animationRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resize)
    }
  }, [blur, speed, waveWidth, backgroundFill, waveOpacity, waveYOffset, colors, noise])

  return (
    <div className={cn("flex h-screen flex-col items-center justify-center", containerClassName)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      />

      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  )
}
