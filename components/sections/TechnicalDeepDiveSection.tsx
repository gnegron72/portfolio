'use client'

import { useState } from 'react'
import Button from '../ui/Button'

type Tab = 'architecture' | 'code' | 'devops'

export default function TechnicalDeepDiveSection() {
  const [activeTab, setActiveTab] = useState<Tab>('architecture')

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    {
      key: 'architecture',
      label: 'Architecture',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      key: 'code',
      label: 'Code Samples',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      key: 'devops',
      label: 'DevOps & Deployment',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="technical" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Technical Deep-Dives
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Detailed technical implementation showing problem-solving approach and engineering decisions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex bg-slate-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {activeTab === 'architecture' && (
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">System Architecture Overview</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Technology Stack Rationale</h4>
                    <div className="space-y-3 text-slate-700">
                      <p><strong>Frontend:</strong> React with TypeScript for type safety and maintainability</p>
                      <p><strong>Backend:</strong> Node.js/Express APIs with TypeScript for consistent language stack</p>
                      <p><strong>Database:</strong> MongoDB for flexible document structure and rapid development</p>
                      <p><strong>Infrastructure:</strong> Google Cloud Run for serverless scaling and cost efficiency</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Scalability Considerations</h4>
                    <div className="space-y-3 text-slate-700">
                      <p>Stateless API design for horizontal scaling</p>
                      <p>Database indexing strategy for query performance</p>
                      <p>Caching layer for frequently accessed data</p>
                      <p>Event-driven architecture for real-time updates</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Data Flow Architecture</h4>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="bg-blue-100 text-blue-800 p-3 rounded">
                      React Frontend
                    </div>
                    <div className="text-center text-slate-500">↓ HTTP/REST</div>
                    <div className="bg-green-100 text-green-800 p-3 rounded">
                      Express.js API Layer
                    </div>
                    <div className="text-center text-slate-500">↓ Mongoose ODM</div>
                    <div className="bg-purple-100 text-purple-800 p-3 rounded">
                      MongoDB Database
                    </div>
                    <div className="text-center text-slate-500">→ External APIs</div>
                    <div className="bg-orange-100 text-orange-800 p-3 rounded">
                      NFL Data & OAuth Services
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Code Samples & Patterns</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Database Schema Design</h4>
                  <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
{`// User and Pool Management Schema
interface User {
  _id: ObjectId;
  email: string;
  displayName: string;
  googleId: string;
  pools: ObjectId[];
  createdAt: Date;
}

interface Pool {
  _id: ObjectId;
  name: string;
  adminId: ObjectId;
  members: PoolMember[];
  settings: PoolSettings;
  currentWeek: number;
  isActive: boolean;
}

interface Pick {
  userId: ObjectId;
  poolId: ObjectId;
  week: number;
  games: GamePick[];
  tiebreaker?: number;
  submittedAt: Date;
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">API Design Pattern</h4>
                  <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
{`// RESTful API with TypeScript validation
export const submitPicks = async (req: Request, res: Response) => {
  try {
    const { poolId, week, picks, tiebreaker } = req.body;
    const userId = req.user.id;
    
    // Validation middleware ensures type safety
    const validatedPicks = await validatePickSubmission({
      poolId, week, picks, tiebreaker, userId
    });
    
    // Transaction ensures data consistency  
    const result = await Pick.findOneAndUpdate(
      { userId, poolId, week },
      { picks: validatedPicks, tiebreaker, submittedAt: new Date() },
      { upsert: true, new: true }
    );
    
    res.json({ success: true, picks: result });
  } catch (error) {
    logger.error('Pick submission failed', error);
    res.status(400).json({ error: error.message });
  }
};`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Testing Methodology</h4>
                  <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
{`// Comprehensive unit testing with Jest
describe('PickService', () => {
  beforeEach(async () => {
    await setupTestDatabase();
  });

  test('should calculate weekly scores correctly', async () => {
    const picks = await createTestPicks();
    const games = await createTestGames();
    
    const scores = await PickService.calculateWeeklyScores(picks, games);
    
    expect(scores).toHaveLength(3);
    expect(scores[0].totalCorrect).toBe(12);
    expect(scores[0].tiebreakerDiff).toBe(3);
  });

  test('should handle tiebreaker scenarios', async () => {
    // Test implementation for edge cases
  });
});`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'devops' && (
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">DevOps & Deployment Pipeline</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">CI/CD Pipeline</h4>
                    <div className="space-y-3 text-slate-700">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        GitHub Actions for automated testing
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        Docker containerization for consistent environments
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        Google Cloud Run for serverless deployment
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        Automated database migrations
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Monitoring & Reliability</h4>
                    <div className="space-y-3 text-slate-700">
                      <p>Application performance monitoring with Google Cloud Operations</p>
                      <p>Error tracking and alerting for production issues</p>
                      <p>Database performance monitoring and query optimization</p>
                      <p>Automated health checks and rollback procedures</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Deployment Architecture</h4>
                  <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
{`# Dockerfile - Multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 8080
CMD ["npm", "start"]

# Cloud Run Configuration  
service: nfl-office-pool
region: us-central1
traffic:
  - percent: 100
    revision: latest
scaling:
  minInstances: 0
  maxInstances: 10`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View Skills Matrix
          </Button>
        </div>
      </div>
    </section>
  )
}