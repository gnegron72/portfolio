'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Projects', href: '#ai-projects' },
  { name: 'Tech & Tools', href: '#tech' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open)
  }

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  useEffect(() => {
    const sectionElements = navigation
      .map((item) => document.getElementById(item.href.replace('#', '')))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sectionElements.length) {
      return
    }

    let ticking = false

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      const offset = scrollPosition + viewportHeight * 0.25

      let currentSectionId = ''

      for (const section of sectionElements) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY

        if (sectionTop <= offset) {
          currentSectionId = section.id
        }
      }

      setActiveSection((current) =>
        current === currentSectionId ? current : currentSectionId
      )

      ticking = false
    }

    const handleScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }

    updateActiveSection()

    window.addEventListener('scroll', handleScrollOrResize, {
      passive: true,
    })
    window.addEventListener('resize', handleScrollOrResize)

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize)
      window.removeEventListener('resize', handleScrollOrResize)
    }
  }, [])

  const handleDesktopNavigation = (href: string) => {
    const sectionId = href.replace('#', '')
    setActiveSection(sectionId)
  }

  const handleMobileNavigation = (href: string) => {
    const sectionId = href.replace('#', '')
    setActiveSection(sectionId)
    closeMobileMenu()
  }

  return (
    <header className="sticky top-0 z-40 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 text-xl font-semibold text-slate-900">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              GN
            </span>
            <span className="hidden sm:block">Gabriel Negron</span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              {navigation.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center rounded-full px-3 py-1.5 transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white shadow hover:bg-blue-500'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handleDesktopNavigation(item.href)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-600 hover:text-slate-900"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white shadow-lg lg:hidden">
          <nav className="space-y-1 px-4 py-4">
            {navigation.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow hover:bg-blue-500'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleMobileNavigation(item.href)}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
