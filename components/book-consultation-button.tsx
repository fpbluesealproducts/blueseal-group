"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

interface BookConsultationButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
}

export function BookConsultationButton({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
}: BookConsultationButtonProps) {
  const handleClick = () => {
    const phoneNumber = "+2347042963275"
    const message = "Hello! I would like to book a business consultation session with Coach Favour Philip Chuks."
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    if (onClick) {
      onClick()
    }
  }

  return (
    <Button className={className} variant={variant} size={size} onClick={handleClick}>
      {children}
    </Button>
  )
}
