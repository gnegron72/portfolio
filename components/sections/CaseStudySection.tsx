import Button from '../ui/Button'

export default function CaseStudySection() {
  return (
    <section id="case-study" className="bg-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Pick &apos;Em: Zero to Production
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A complete case study demonstrating full-stack development, product strategy, and technical leadership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Challenge */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">The Product Challenge</h3>
            <div className="space-y-4 text-slate-700">
              <p><strong>Business Context:</strong> Personal project to solve a real user need</p>
              <p><strong>User Problem:</strong> Complex weekly predictions, group management, authentication</p>
              <p><strong>Success Metrics:</strong> Active users, group engagement, technical reliability</p>
            </div>
          </div>

          {/* Technical Strategy */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Technical Product Strategy</h3>
            <div className="space-y-4 text-slate-700">
              <p><strong>Technology Selection:</strong> TypeScript, MongoDB, Google Cloud for speed vs. scalability</p>
              <p><strong>Architecture Decisions:</strong> Microservices approach with clear separation of concerns</p>
              <p><strong>Integration Strategy:</strong> OAuth, NFL data APIs, email systems</p>
            </div>
          </div>

          {/* Implementation */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Full-Stack Implementation</h3>
            <div className="space-y-4 text-slate-700">
              <p><strong>Frontend:</strong> React architecture, responsive design, user experience optimization</p>
              <p><strong>Backend:</strong> TypeScript APIs, database design, authentication systems</p>
              <p><strong>Infrastructure:</strong> Docker containerization, CI/CD, cloud deployment</p>
            </div>
          </div>
        </div>

        {/* Product Evolution */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Product & Technical Evolution</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Quality & Testing</h4>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  106+ comprehensive unit tests
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  TypeScript strict mode enforcement
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comprehensive error handling
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Product Management</h4>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Feature roadmap and technical debt management
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance optimization and scalability
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  User feedback integration and iteration
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View Technical Deep-Dive
          </Button>
        </div>
      </div>
    </section>
  )
}