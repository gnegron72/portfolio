const story = [
  "I began my career architecting large-scale Java applications, honing an engineering toolkit that kept me close to the code and the teams who build it.",
  "That technical foundation accelerated a shift into product leadership—partnering with designers, consultants, and executives to translate ambiguous concepts into focused roadmaps.",
  "Today I champion AI-assisted development practices that amplify delivery velocity while maintaining trust, governance, and measurable outcomes.",
]

const strengths = [
  {
    title: 'Cross-functional leadership',
    description:
      'Guides engineers, designers, and consultants toward a shared outcome with rituals that protect clarity and momentum.',
  },
  {
    title: 'Product vision & discovery',
    description:
      'Connects strategy to execution through customer empathy, hypothesis-driven validation, and decisive prioritization.',
  },
  {
    title: 'Consulting excellence',
    description:
      'Builds trusted partnerships, shapes delivery models, and mentors teams to operate with autonomy and accountability.',
  },
]

const personalNotes = [
  {
    title: 'Problem-solving philosophy',
    detail:
      'Frame every challenge as a story worth understanding deeply—then unblock teams with lightweight experiments and continuous feedback.',
  },
  {
    title: 'Leadership style',
    detail:
      'Calm, candid, and outcomes-oriented. I model curiosity, invite dissenting perspectives, and celebrate learning moments.',
  },
  {
    title: 'Commitment to mentoring',
    detail:
      'Invest in emerging talent with pair-design sessions, architecture reviews, and growth frameworks tailored to individual goals.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Bridging code craftsmanship, product strategy, and AI-enabled delivery
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            {story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Strengths in focus</h3>
            <div className="grid gap-6">
              {strengths.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-3 text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Beyond the resume</h3>
            <dl className="mt-6 space-y-6">
              {personalNotes.map((note) => (
                <div key={note.title} className="border-l-4 border-blue-200 pl-6">
                  <dt className="text-sm uppercase tracking-wide text-blue-600">{note.title}</dt>
                  <dd className="mt-2 text-slate-700">{note.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
