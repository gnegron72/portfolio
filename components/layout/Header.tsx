'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="navbar bg-base-100 border-b border-base-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost btn-circle"
            onClick={toggleMobileMenu}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          {isMobileMenuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="#case-study" onClick={() => setIsMobileMenuOpen(false)}>
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="#technical" onClick={() => setIsMobileMenuOpen(false)}>
                  Technical
                </Link>
              </li>
              <li>
                <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
        
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          Gabriel Negron
        </Link>
      </div>
      
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="#case-study">Case Study</Link></li>
            <li><Link href="#technical">Technical</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}