export default function SkillsMatrixSection() {
  const skillCategories = [
    {
      category: "Product Strategy",
      skills: [
        "Feature prioritization and roadmap planning",
        "User experience design and research",
        "MVP scoping and validation",
        "Market analysis and competitive positioning"
      ],
      demonstration: "NFL Office Pool: Defined user personas, prioritized features based on user feedback, implemented A/B testing for key workflows"
    },
    {
      category: "Technical Architecture",
      skills: [
        "System design and scalability planning",
        "Technology selection and evaluation",
        "Database design and optimization",
        "API design and microservices"
      ],
      demonstration: "Designed scalable MongoDB schema, implemented RESTful APIs, planned for horizontal scaling with Cloud Run"
    },
    {
      category: "Full-Stack Development",
      skills: [
        "React/TypeScript frontend development",
        "Node.js/Express backend development",
        "Database design and management",
        "Third-party API integration"
      ],
      demonstration: "Built complete React frontend, implemented Express APIs, integrated OAuth and NFL data services"
    },
    {
      category: "Project Management",
      skills: [
        "End-to-end product delivery",
        "Quality assurance and testing strategy",
        "Deployment pipeline management",
        "Cross-functional team coordination"
      ],
      demonstration: "Delivered MVP in 8 weeks, implemented 106+ unit tests, set up automated CI/CD pipeline"
    },
    {
      category: "Business Acumen",
      skills: [
        "User problem identification and validation",
        "Feature value assessment and metrics",
        "Technical debt vs. business value trade-offs",
        "Stakeholder communication and alignment"
      ],
      demonstration: "Identified market gap, validated user needs through surveys, balanced feature development with technical excellence"
    },
    {
      category: "DevOps & Infrastructure",
      skills: [
        "Docker containerization",
        "Cloud deployment and scaling",
        "Monitoring and performance optimization",
        "Security and compliance"
      ],
      demonstration: "Implemented Docker containers, deployed to Google Cloud Run, set up monitoring and alerting systems"
    }
  ]

  return (
    <section id="skills" className="bg-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Skills Demonstration Matrix
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            How each skill category is demonstrated through real project implementation
          </p>
        </div>

        <div className="space-y-8">
          {skillCategories.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Category Title */}
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      {item.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Core Capabilities</h4>
                    <ul className="space-y-3">
                      {item.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-700">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Demonstration */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Demonstrated Through</h4>
                    <div className="bg-slate-50 rounded-lg p-6">
                      <p className="text-slate-700 italic">&ldquo;{item.demonstration}&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Key Differentiators for Technical Product Management
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Code, Don&apos;t Just Spec</h4>
              <p className="text-slate-600 text-sm">Validate technical feasibility firsthand through implementation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Rapid Prototyping</h4>
              <p className="text-slate-600 text-sm">Speed from concept to working solution with technical validation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Technical Debt as Product Decision</h4>
              <p className="text-slate-600 text-sm">Understand how technical tradeoffs impact business outcomes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">User-Centric Engineering</h4>
              <p className="text-slate-600 text-sm">Technical decisions that directly serve user needs and business goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}