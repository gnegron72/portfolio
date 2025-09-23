import Image from 'next/image'
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-100">
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
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/images/executive-portrait-placeholder.svg"
                  alt="Stylized executive portrait placeholder"
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
