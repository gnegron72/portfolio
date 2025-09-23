import type { Metadata } from 'next'
import HeroSection from '../components/sections/HeroSection'
import CaseStudySection from '../components/sections/CaseStudySection'
import TechnicalDeepDiveSection from '../components/sections/TechnicalDeepDiveSection'
import SkillsMatrixSection from '../components/sections/SkillsMatrixSection'
import CallToActionSection from '../components/sections/CallToActionSection'

export const metadata: Metadata = {
  title: 'Gabriel Negron - Technical Product Manager Portfolio',
  description: 'Technical Product Manager with 16 years of experience - I build products by writing code, not just specs.',
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CaseStudySection />
      <TechnicalDeepDiveSection />
      <SkillsMatrixSection />
      <CallToActionSection />
    </div>
  )
}