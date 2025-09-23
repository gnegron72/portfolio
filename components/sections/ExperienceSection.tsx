const experiences = [
  {
    company: 'Slalom Build',
    role: 'Director, Product & Engineering',
    period: '2021 — Present',
    context:
      'Global consultancies sought a trusted partner to modernize digital experiences and introduce pragmatic AI copilots.',
    contribution:
      'Designed cross-studio delivery models, aligned product strategy with executive sponsors, and embedded AI-assisted rituals across discovery and build phases.',
    results: [
      'Scaled a 65-person blended team across four cities while sustaining double-digit NPS.',
      'Activated AI pairing program that cut prototype cycles by 30%.',
      'Guided portfolio governance that protected $18M in annualized services revenue.',
    ],
  },
  {
    company: 'Soprano Design',
    role: 'Head of Product & Professional Services',
    period: '2017 — 2021',
    context:
      'Enterprises needed secure messaging platforms to unify voice, SMS, and emerging chat channels for mission-critical operations.',
    contribution:
      'Led platform modernization, defined pricing strategy, and coached regional teams through agile adoption and solution consulting.',
    results: [
      'Launched omnichannel roadmap that increased enterprise retention by 12%.',
      'Mentored seven product managers and architects to deliver cohesive GTM motions.',
      'Built innovation council to surface AI and ML investment opportunities.',
    ],
  },
  {
    company: 'Author-it',
    role: 'Director of Product Management',
    period: '2014 — 2017',
    context:
      'Life sciences organizations required compliant content operations during rapid portfolio expansion.',
    contribution:
      'Introduced customer discovery sprints, prioritized integrations, and united engineering, design, and QA around a unified roadmap.',
    results: [
      'Reduced implementation time by 40% through modular workflow tooling.',
      'Expanded ARR by championing regulated industry offerings.',
      'Activated voice-of-customer program that fueled data-informed prioritization.',
    ],
  },
  {
    company: 'PTC',
    role: 'Senior Software Engineer → Product Owner',
    period: '2007 — 2014',
    context:
      'Manufacturers adopting PLM platforms demanded extensible, enterprise-grade web experiences.',
    contribution:
      'Shaped UI frameworks, mentored engineering squads, and bridged product with global services teams.',
    results: [
      'Delivered component libraries used by 150+ enterprise deployments.',
      'Accelerated release cadence by automating regression workflows.',
      'Became a go-to liaison for high-stakes customer escalations.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Professional Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Story-driven case studies shaped by product leadership
          </h2>
          <p className="text-lg text-slate-700">
            Each engagement balances strategic advisory, hands-on delivery, and measurable outcomes. Explore the arc of challenges, contributions, and results across my career.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-4 top-0 bottom-0 hidden lg:block border-l-2 border-slate-200" aria-hidden="true" />
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <article
                key={experience.company}
                className="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:ml-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
                      {experience.period}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                      {experience.company}
                    </h3>
                    <p className="text-base text-slate-600">{experience.role}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                      {index + 1}
                    </span>
                    <span>Case Study</span>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-slate-500">Context</h4>
                      <p className="mt-2 text-slate-700 leading-relaxed">{experience.context}</p>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-slate-500">My role</h4>
                      <p className="mt-2 text-slate-700 leading-relaxed">{experience.contribution}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <h4 className="text-sm uppercase tracking-wide text-slate-500">Key results</h4>
                    <ul className="mt-4 space-y-3 text-slate-700">
                      {experience.results.map((result) => (
                        <li key={result} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
