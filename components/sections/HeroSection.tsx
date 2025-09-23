import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                Technical Product Builder
              </h1>
              
              <p className="py-6 text-xl">
                Technical Product Manager with 16 years of experience - I build products by writing code, not just specs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 text-lg">
                <div className="flex items-center">
                  <div className="badge badge-primary badge-sm mr-3"></div>
                  11 years software engineering
                </div>
                <div className="flex items-center">
                  <div className="badge badge-secondary badge-sm mr-3"></div>
                  5 years product management
                </div>
              </div>
              
              <p className="text-lg italic opacity-70">
                From concept to deployment: I prototype, architect, and ship products with rapid technology adoption and solution delivery.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg">
                View Case Study
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 shadow-2xl">
              <div className="w-full h-full bg-slate-900 rounded-xl p-6 font-mono text-green-400 overflow-hidden">
                <div className="space-y-2 text-sm">
                  <div className="text-blue-400">{'//'} Technical Product Manager</div>
                  <div className="text-yellow-400">const</div>
                  <div className="ml-2">buildProduct = (idea) =&gt; {'{'}</div>
                  <div className="ml-4">const prototype = code(idea)</div>
                  <div className="ml-4">const architecture = design(prototype)</div>
                  <div className="ml-4">const product = deploy(architecture)</div>
                  <div className="ml-4 text-green-400">return product</div>
                  <div className="ml-2">{'}'}</div>
                  <div className="pt-4 text-slate-500">
                    <div>→ React</div>
                    <div>→ TypeScript</div>
                    <div>→ Node.js</div>
                    <div>→ Express</div>
                    <div>→ MongoDB</div>
                    <div>→ Docker</div>
                    <div>→ GitHub Actions</div>
                    <div>→ Google Cloud Run</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}