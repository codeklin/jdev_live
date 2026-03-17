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
  title: "Olajide — Developer, Creator & Cybersecurity Expert",
  description:
    "Olajide Igbalaye — Fullstack Developer, Cybersecurity Expert, Content Creator, Photographer & Videographer",
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
