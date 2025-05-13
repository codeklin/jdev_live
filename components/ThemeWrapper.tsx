"use client"
import { ThemeProvider } from "next-themes"

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}
