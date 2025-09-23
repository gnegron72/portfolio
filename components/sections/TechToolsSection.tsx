const categories = [
  {
    name: 'Programming & Platforms',
    description: 'Languages and cloud ecosystems used to ship resilient products.',
    skills: ['Java', 'TypeScript', 'SQL', 'AWS', 'Terraform', 'Docker'],
  },
  {
    name: 'Product & Agile Tooling',
    description: 'Frameworks that keep teams aligned from discovery to delivery.',
    skills: ['Jira', 'Confluence', 'Miro', 'Figma', 'Notion', 'Productboard'],
  },
  {
    name: 'AI & ML Enablement',
    description: 'Emerging copilots and APIs accelerating research and execution.',
    skills: ['OpenAI GPT APIs', 'Claude Code', 'GitHub Copilot', 'LangChain', 'Vertex AI', 'Custom prompt libraries'],
  },
]

export default function TechToolsSection() {
  return (
    <section id="tech" className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Tech &amp; Tools</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            A toolkit blending engineering rigor, product craft, and AI experimentation
          </h2>
          <p className="text-lg text-slate-200">
            Logos and badges are stand-ins for deeper capability stories—each tool represents a playbook for modern product delivery.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              <p className="mt-3 text-sm text-slate-200">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
