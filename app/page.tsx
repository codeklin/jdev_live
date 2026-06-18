import HeroSection from "../components/HeroSection"
import ProblemSection from "../components/ProblemSection"
import SolutionSection from "../components/SolutionSection"
import CaseStudiesSection from "../components/CaseStudiesSection"
import ServicesSection from "../components/ServicesSection"
import LeadMagnetSection from "../components/LeadMagnetSection"
import AboutSection from "../components/AboutSection"
import CTASection from "../components/CTASection"

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CaseStudiesSection />
      <ServicesSection />
      <LeadMagnetSection />
      <AboutSection />
      <CTASection />
    </main>
  )
}
