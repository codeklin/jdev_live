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
  title: "Olajide Igbalaye · Designer. Developer. End to end.",
  description:
    "Visual design, search-driven copy, revenue email systems, and full-stack development across Next.js and WordPress. End-to-end digital execution.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
