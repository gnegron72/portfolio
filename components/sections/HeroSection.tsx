import Link from 'next/link'

const highlights = [
  {
    label: 'Years leading technology teams',
    value: '16+',
  },
  {
    label: 'Industries served',
    value: 'Telecom, SaaS, Consulting',
  },
  {
    label: 'AI-assisted delivery focus',
    value: 'Applied AI & ML Platforms',
  },
]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-wider text-blue-200">
                Gabriel Negron
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Technology &amp; Product Leader
                <span className="block text-blue-300">
                  AI-Assisted Development Enthusiast
                </span>
              </h1>
              <p className="text-lg text-slate-200 max-w-xl">
                I guide cross-functional teams to translate complex business problems into elegant, scalable digital products—pairing product vision with modern engineering practices and responsible AI adoption.
              </p>
            </div>

            <dl className="grid sm:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 px-5 py-6 backdrop-blur">
                  <dt className="text-xs uppercase tracking-wide text-slate-300">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-xl font-semibold text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="btn btn-primary btn-lg bg-blue-500 border-transparent hover:bg-blue-400 text-white"
              >
                Schedule a conversation
              </Link>
              <Link
                href="#experience"
                className="btn btn-outline btn-lg border-white text-white hover:bg-white/10"
              >
                Explore my work
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-[3rem] border border-white/20 bg-white/5 p-6 shadow-2xl">
              <div className="aspect-[4/5] w-full rounded-[2.5rem] bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 backdrop-blur flex items-center justify-center">
                <div className="text-center text-sm text-slate-100/80">
                  <p className="text-lg font-semibold text-white">Add executive portrait</p>
                  <p className="mt-3 text-slate-200/80">
                    Placeholder for a recent photo or illustration celebrating emerging technology.
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-10 -bottom-10 rounded-3xl bg-blue-500/40 px-6 py-5 text-left text-sm text-white shadow-lg backdrop-blur">
                <p className="font-semibold uppercase tracking-wide text-xs text-blue-100/80">
                  Mission Statement
                </p>
                <p className="mt-2 leading-relaxed text-blue-50">
                  Build resilient, insight-driven products that uplift teams and customers through thoughtful automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
