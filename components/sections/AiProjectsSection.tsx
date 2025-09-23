const upcomingIdeas = [
  'AI pair-programming accelerators for enterprise delivery teams',
  'Product discovery copilots that summarize customer interviews',
  'Governance dashboards blending human feedback with model telemetry',
]

export default function AiProjectsSection() {
  return (
    <section id="ai-projects" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">AI Development Projects</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
          A dedicated space for upcoming AI experiments
        </h2>
        <p className="mt-6 text-lg text-slate-700">
          I am curating a collection of case studies that highlight how AI copilots and generative tooling reshape product development, delivery, and customer support.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {upcomingIdeas.map((idea) => (
            <div key={idea} className="rounded-2xl border border-dashed border-blue-200 p-6 text-left">
              <p className="text-sm font-medium uppercase tracking-wide text-blue-500">Coming soon</p>
              <p className="mt-3 text-slate-700">{idea}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Check back for detailed write-ups, architectural diagrams, and product insights as prototypes move into validation.
        </p>
      </div>
    </section>
  )
}
