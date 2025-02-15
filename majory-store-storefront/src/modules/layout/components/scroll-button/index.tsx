"use client"
import React from "react"

// Mark this as a Client Component

const ScrollButton = ({
  targetId,
  children,
}: {
  targetId: string
  children: React.ReactNode
}) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return <button onClick={() => scrollToSection(targetId)}>{children}</button>
}

export default ScrollButton
