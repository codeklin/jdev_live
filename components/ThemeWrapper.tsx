"use client"
import { ThemeProvider } from "next-themes"

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  // We don't need to manually add classes to body anymore
  // The ThemeProvider will handle this with the attribute="class" prop

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}
