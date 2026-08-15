import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ThemeWrapper from "../components/ThemeWrapper"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Olajide Igbalaye · Email Systems Designer & Fullstack Developer",
  description:
    "I design and build email marketing systems that drive revenue, using Klaviyo, Figma, and fullstack development. Available remotely worldwide.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeWrapper>
          <Navbar />
          {children}
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  )
}
