import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Gabriel Negron</p>
            <p className="mt-2 text-sm text-slate-300">
              Technology &amp; Product Leader | AI-Assisted Development Enthusiast
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-300">
            <Link href="#about" className="hover:text-white">
              About
            </Link>
            <Link href="#experience" className="hover:text-white">
              Experience
            </Link>
            <Link href="#ai-projects" className="hover:text-white">
              AI Projects
            </Link>
            <Link href="#tech" className="hover:text-white">
              Tech &amp; Tools
            </Link>
            <Link href="#contact" className="hover:text-white">
              Contact
            </Link>
          </div>

          <div className="text-sm text-slate-400 space-y-2">
            <p>
              <Link href="mailto:hello@example.com" className="hover:text-white">
                hello@example.com
              </Link>
            </p>
            <p>
              <Link
                href="https://www.linkedin.com/in/example"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn profile
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
          © {currentYear} Gabriel Negron. Crafted with Next.js and a dedication to thoughtful collaboration.
        </div>
      </div>
    </footer>
  )
}
