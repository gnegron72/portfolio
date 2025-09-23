import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-300">
              © {currentYear} Gabriel Negron. Built with Next.js and deployed with Docker.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link
              href="https://linkedin.com/in/gabrielnegron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/gnegron72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="mailto:gabe@gnegron.app"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}