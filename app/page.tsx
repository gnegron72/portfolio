import type { Metadata } from 'next'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import AiProjectsSection from '../components/sections/AiProjectsSection'
import TechToolsSection from '../components/sections/TechToolsSection'
import ContactSection from '../components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Gabriel Negron | Technology & Product Leader',
  description:
    'Technology and product leader championing AI-assisted development, cross-functional delivery, and story-driven customer experiences.',
}

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <AiProjectsSection />
      <TechToolsSection />
      <ContactSection />
    </div>
  )
}
