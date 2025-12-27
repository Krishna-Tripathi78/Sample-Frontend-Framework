"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Project Setup",
    content: "Welcome to our Full-Stack Development Tutorial. We'll build a complete e-commerce application using modern technologies and best practices.",
    url: "localhost:3000",
    interface: "setup"
  },
  {
    id: 2,
    title: "Frontend Development",
    content: "Let's start building our React frontend with TypeScript. We'll create responsive components using Tailwind CSS and implement state management.",
    terminal: "🚀 React development server starting...\n✅ TypeScript compiler initialized\n📦 Tailwind CSS configured\n🎨 Component library ready",
    url: "localhost:3000/dashboard",
    interface: "frontend"
  },
  {
    id: 3,
    title: "Backend API",
    content: "Now we'll develop our Node.js backend with Express. Setting up RESTful APIs, authentication middleware, and database connections.",
    terminal: "🚀 React development server starting...\n✅ TypeScript compiler initialized\n📦 Tailwind CSS configured\n🎨 Component library ready\n🔗 Express server running on port 5000\n🛡️ JWT authentication configured\n🗄️ MongoDB connection established",
    url: "localhost:3000/api/products",
    interface: "backend"
  },
  {
    id: 4,
    title: "Database Integration",
    content: "Integrating MongoDB with Mongoose ODM. Creating schemas, implementing CRUD operations, and setting up data validation.",
    terminal: "🚀 React development server starting...\n✅ TypeScript compiler initialized\n📦 Tailwind CSS configured\n🎨 Component library ready\n🔗 Express server running on port 5000\n🛡️ JWT authentication configured\n🗄️ MongoDB connection established\n📊 Database schemas created\n✨ CRUD operations implemented",
    url: "localhost:3000/products",
    interface: "database"
  },
  {
    id: 5,
    title: "Testing & Deployment",
    content: "Writing unit tests with Jest, integration tests, and deploying to production using Docker containers and AWS services.",
    terminal: "🚀 React development server starting...\n✅ TypeScript compiler initialized\n📦 Tailwind CSS configured\n🎨 Component library ready\n🔗 Express server running on port 5000\n🛡️ JWT authentication configured\n🗄️ MongoDB connection established\n📊 Database schemas created\n✨ CRUD operations implemented\n🧪 Test suites passing (95% coverage)\n🐳 Docker containers built\n🌐 Deployed to AWS ECS\n📈 Monitoring & logging active",
    url: "myapp.com",
    interface: "production"
  },
  {
    id: 6,
    title: "Performance Optimization",
    content: "Optimizing application performance with code splitting, lazy loading, caching strategies, and CDN implementation.",
    terminal: "🚀 React development server starting...\n✅ TypeScript compiler initialized\n📦 Tailwind CSS configured\n🎨 Component library ready\n🔗 Express server running on port 5000\n🛡️ JWT authentication configured\n🗄️ MongoDB connection established\n📊 Database schemas created\n✨ CRUD operations implemented\n🧪 Test suites passing (95% coverage)\n🐳 Docker containers built\n🌐 Deployed to AWS ECS\n📈 Monitoring & logging active\n⚡ Code splitting implemented\n🚀 Lazy loading optimized\n💾 Redis caching active\n🌍 CloudFront CDN configured",
    url: "myapp.com/optimized",
    interface: "optimized"
  }
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([1]);

  const handleStepClick = (stepId: number) => {
    if (stepId <= Math.max(...completedSteps) + 1) {
      setCurrentStep(stepId);
      if (!completedSteps.includes(stepId)) {
        setCompletedSteps([...completedSteps, stepId]);
      }
    }
  };

  const currentStepData = steps.find(step => step.id === currentStep);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-inter">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 font-inter tracking-tight">Full-Stack Development Tutorial</h1>
          
          {/* PROGRESS LINE */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <motion.div
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center text-sm font-semibold ${
                    completedSteps.includes(step.id)
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : currentStep === step.id
                      ? 'border-blue-500 text-blue-500 bg-white'
                      : 'border-gray-300 text-gray-400 bg-white'
                  }`}
                  onClick={() => handleStepClick(step.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {completedSteps.includes(step.id) ? '✓' : step.id}
                </motion.div>
                
                {index < steps.length - 1 && (
                  <motion.div
                    className={`w-16 h-0.5 mx-2 ${
                      completedSteps.includes(steps[index + 1].id) ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: completedSteps.includes(steps[index + 1].id) ? 1 : 0 
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ originX: 0 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT SIDE - TEXT BOX */}
          <div className="flex justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: currentStep % 2 === 0 ? -20 : 20
                }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-xl p-6 border border-gray-100 inline-block max-w-md backdrop-blur-sm"
              >
                <div className="text-gray-900 whitespace-pre-line leading-relaxed font-medium">
                  {currentStepData?.content}
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => {
                      if (currentStep < steps.length) {
                        handleStepClick(currentStep + 1);
                      }
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition-colors shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE - BROWSER MOCKUP */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            
            {/* BROWSER HEADER */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded px-3 py-1 text-sm text-gray-600">
                  {currentStepData?.url || "localhost:3000"}
                </div>
              </div>
            </div>

            {/* DYNAMIC INTERFACE */}
            {currentStepData?.interface === 'setup' && (
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚙️</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Project Initialization</h2>
                  <p className="text-gray-600">Setting up development environment...</p>
                  <div className="mt-6">
                    <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            )}

            {currentStepData?.interface === 'frontend' && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                    ⚛️ React Dashboard
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Modern e-commerce frontend</p>
                </div>
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <div className="text-lg mb-1">🛍️</div>
                    <div className="text-xs font-semibold">Products</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <div className="text-lg mb-1">🛒</div>
                    <div className="text-xs font-semibold">Cart</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <div className="text-lg mb-1">👤</div>
                    <div className="text-xs font-semibold">Profile</div>
                  </div>
                </div>
              </div>
            )}

            {currentStepData?.interface === 'backend' && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-gray-800">🔧 API Endpoints</div>
                  <p className="text-sm text-gray-600 mt-2">RESTful backend services</p>
                </div>
                <div className="space-y-2 max-w-sm mx-auto">
                  <div className="bg-white p-2 rounded text-xs font-mono">
                    <span className="text-green-600 font-bold">GET</span> /api/products
                  </div>
                  <div className="bg-white p-2 rounded text-xs font-mono">
                    <span className="text-blue-600 font-bold">POST</span> /api/auth/login
                  </div>
                  <div className="bg-white p-2 rounded text-xs font-mono">
                    <span className="text-orange-600 font-bold">PUT</span> /api/users/:id
                  </div>
                </div>
              </div>
            )}

            {currentStepData?.interface === 'database' && (
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-gray-800">🗄️ Database Schema</div>
                  <p className="text-sm text-gray-600 mt-2">MongoDB collections</p>
                </div>
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <div className="text-sm font-semibold text-purple-600">Users</div>
                    <div className="text-xs text-gray-500">1,247 docs</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <div className="text-sm font-semibold text-purple-600">Products</div>
                    <div className="text-xs text-gray-500">856 docs</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <div className="text-sm font-semibold text-purple-600">Orders</div>
                    <div className="text-xs text-gray-500">2,341 docs</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <div className="text-sm font-semibold text-purple-600">Reviews</div>
                    <div className="text-xs text-gray-500">4,123 docs</div>
                  </div>
                </div>
              </div>
            )}

            {currentStepData?.interface === 'production' && (
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-gray-800">🌐 Production Dashboard</div>
                  <p className="text-sm text-gray-600 mt-2">Live application metrics</p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm font-semibold text-gray-700">Active Users</div>
                    <div className="text-lg font-bold text-green-600">2,847</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <div className="text-sm font-semibold text-gray-700">Revenue</div>
                    <div className="text-lg font-bold text-green-600">$12.4K</div>
                  </div>
                </div>
              </div>
            )}

            {currentStepData?.interface === 'optimized' && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-gray-800">⚡ Performance Metrics</div>
                  <p className="text-sm text-gray-600 mt-2">Optimized application stats</p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="text-sm font-semibold text-gray-700">Load Time</div>
                    <div className="text-lg font-bold text-green-600">0.8s</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm font-semibold text-gray-700">Performance</div>
                    <div className="text-lg font-bold text-green-600">98/100</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* TERMINAL */}
        {currentStepData?.terminal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 ml-2">System Console</span>
            </div>
            <div className="whitespace-pre-line">{currentStepData.terminal}</div>
          </motion.div>
        )}
      </div>
    </div>
  );
}


