import HeroSection from "../components/HeroSection"
import WhatIDoSection from "../components/WhatIDoSection"
import EmailWorkSection from "../components/EmailWorkSection"
import HowIWorkSection from "../components/HowIWorkSection"
import ProjectsSection from "../components/ProjectsSection"
import AboutSection from "../components/AboutSection"
import CTASection from "../components/CTASection"
import LeadMagnetSection from "../components/LeadMagnetSection"

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <WhatIDoSection />
      <EmailWorkSection />
      <HowIWorkSection />
      <ProjectsSection />
      <AboutSection />
      <CTASection />
      <LeadMagnetSection />
    </main>
  )
}
