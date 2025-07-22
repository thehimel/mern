// components/theme-sync.tsx
"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export default function ThemeSync() {
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    // Ensure the theme is applied to the document
    const actualTheme = theme === "system" ? systemTheme : theme

    // Apply theme to document root for shadcn/ui
    if (actualTheme) {
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(actualTheme)

      // Also set data-theme attribute for additional compatibility
      document.documentElement.setAttribute("data-theme", actualTheme)
    }
  }, [theme, systemTheme])

  return null
}
