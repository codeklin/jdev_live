import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ProjectsSection from "../components/ProjectsSection"
import MediaSection from "../components/MediaSection"

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <MediaSection />
    </main>
  )
}
