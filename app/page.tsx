import HeroSection from "../components/HeroSection"
import WorkSection from "../components/work/WorkSection"
import CTASection from "../components/CTASection"

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <WorkSection />
      <CTASection />
    </main>
  )
}
