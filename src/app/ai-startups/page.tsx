"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AIStartups() {
  const [activeTab, setActiveTab] = useState("program");
  
  const successStories = [
    {
      name: "VoiceFlow AI",
      description: "Conversational AI platform powering customer service for Fortune 500",
      valuation: "$50M",
      batch: "S23",
      category: "Enterprise AI",
      founders: "Sarah Chen, Mike Rodriguez"
    },
    {
      name: "DataBridge",
      description: "AI-powered data integration platform serving 1000+ enterprises",
      valuation: "$35M", 
      batch: "W23",
      category: "Data & Analytics",
      founders: "Alex Kumar, Jennifer Liu"
    },
    {
      name: "AutoML Studios", 
      description: "No-code machine learning platform for business analysts",
      valuation: "$28M",
      batch: "S22",
      category: "ML Tools",
      founders: "David Park, Rachel Green"
    },
    {
      name: "NeuraChat",
      description: "Advanced chatbot platform with emotional intelligence",
      valuation: "$22M",
      batch: "W22",
      category: "Conversational AI",
      founders: "Tom Wilson, Lisa Zhang"
    },
    {
      name: "VisionTech",
      description: "Computer vision solutions for manufacturing quality control",
      valuation: "$45M",
      batch: "S21",
      category: "Computer Vision",
      founders: "Marcus Johnson, Priya Patel"
    },
    {
      name: "CodeAssist",
      description: "AI-powered code generation and debugging assistant",
      valuation: "$18M",
      batch: "W24",
      category: "Developer Tools",
      founders: "Kevin Lee, Anna Kowalski"
    }
  ]

  const programDetails = {
    program: {
      title: "The Elseif AI Accelerator Program",
      content: [
        {
          title: "$125K Investment",
          description: "We invest $125,000 for 6% equity. No complex terms, no board seats, no hidden fees.",
          icon: "💰"
        },
        {
          title: "3-Month Intensive",
          description: "Work directly with AI experts, successful founders, and industry mentors.",
          icon: "🚀"
        },
        {
          title: "Demo Day",
          description: "Present to 300+ investors, VCs, and strategic partners focused on AI.",
          icon: "🎯"
        },
        {
          title: "Lifetime Network",
          description: "Join 500+ AI startup founders in our exclusive alumni community.",
          icon: "🌐"
        }
      ]
    },
    companies: {
      title: "Our Portfolio Companies",
      content: successStories
    },
    apply: {
      title: "Application Process",
      content: [
        {
          step: "01",
          title: "Submit Application",
          description: "Complete our streamlined application form in under 10 minutes.",
          timeline: "Rolling basis"
        },
        {
          step: "02",
          title: "Technical Review",
          description: "Our AI experts evaluate your technology, market, and team.",
          timeline: "1-2 weeks"
        },
        {
          step: "03",
          title: "Founder Interview",
          description: "10-minute conversation with our investment partners.",
          timeline: "Within 1 week"
        },
        {
          step: "04",
          title: "Investment Decision",
          description: "We make decisions within 48 hours of your interview.",
          timeline: "2 days"
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(13, 211, 176, 0.15) 1px, transparent 0)', 
             backgroundSize: '50px 50px' 
           }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
            <Image
                src="/logo/Logo-dark.png"
                alt="Logo"
                width={72}
                height={72}
                priority
                className="transition-transform group-hover:scale-105"
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1 text-sm text-white/70">
            <Link href="/" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
              Home
            </Link>
            <Link href="/ai-startups" className="rounded-lg px-4 py-2 bg-white/5 text-white">
              AI Startups
            </Link>
            {/* <Link href="/llm-subscribe" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
              LLM Subscribe
            </Link> */}
            <Link href="/ai-school" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
              AI School
            </Link>
            <div className="ml-4">
              <Link
                href="#apply"
                className="rounded-lg bg-[#0DD3B0] px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-[#0DD3B0]/90"
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0DD3B0]/10 border border-[#0DD3B0]/20 px-4 py-2 text-sm text-[#0DD3B0] mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DD3B0] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0DD3B0]"></span>
          </span>
          Winter 2025 Applications Open
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          The AI Startup
          <span className="block bg-gradient-to-r from-[#0DD3B0] via-[#00D4AA] to-cyan-300 bg-clip-text text-transparent">
            Accelerator
          </span>
        </h1>
        
        <p className="mx-auto max-w-3xl text-lg text-white/70 mb-12 leading-relaxed">
          We fund AI startups at the earliest stage. Get world-class mentorship, 
          and access to the resources you need to build the next generation of AI companies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#apply"
            className="group relative inline-flex items-center justify-center rounded-lg bg-[#0DD3B0] px-8 py-4 text-base font-semibold text-black transition-all hover:bg-[#0DD3B0]/90 hover:shadow-xl hover:shadow-[#0DD3B0]/30"
          >
            Apply to Winter 2025
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="#companies"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 text-base font-medium transition-all hover:border-[#0DD3B0]/50 hover:bg-[#0DD3B0]/5"
          >
            View Portfolio
          </Link>
        </div>

        {/* Stats */}
        <div className=" max-w-2xl mx-auto">
          {[
            // { number: "500+", label: "Startups Funded" },
            // { number: "$2.1B", label: "Total Valuation" },
            { number: "85%", label: "Success Rate" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0DD3B0] mb-2">{stat.number}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-white/10 sticky top-[73px] bg-[#0a0a0a]/80 backdrop-blur-xl z-40">
        <div className="container mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { id: 'program', label: 'Program' },
              { id: 'companies', label: 'Companies' },
              { id: 'apply', label: 'Apply' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#0DD3B0] text-[#0DD3B0]'
                    : 'border-transparent text-white/60 hover:text-white/80 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {activeTab === 'program' && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{programDetails.program.title}</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We put founders first. No board seats, no complex terms, just pure support for your vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programDetails.program.content.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>

            {/* What We Don't Do */}
            <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl border border-red-500/20 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-red-400">What We Don't Do</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "We don't take board seats",
                  "We don't demand 20% equity", 
                  "We don't take months to decide",
                  "We don't charge fees",
                  "We don't require business plans",
                  "We don't micromanage your vision"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'companies' && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio Companies</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From early-stage startups to unicorns, our alumni are building the future of AI across industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((company) => (
                <div key={company.name} className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all hover:border-[#0DD3B0]/30 hover:bg-white/10 hover:shadow-xl hover:shadow-[#0DD3B0]/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0DD3B0]/20 flex items-center justify-center text-[#0DD3B0] font-bold text-xl">
                      {company.name.charAt(0)}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#0DD3B0] font-medium">{company.batch}</div>
                      <div className="text-xs text-white/60">{company.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#0DD3B0] transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{company.description}</p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs text-white/50 mb-1">Founders</div>
                        <div className="text-sm text-white/80">{company.founders}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#0DD3B0]">{company.valuation}</div>
                        <div className="text-xs text-white/60">Valuation</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-medium transition-all hover:border-[#0DD3B0]/50 hover:bg-[#0DD3B0]/5"
              >
                View All 500+ Companies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'apply' && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our process is designed to be fast and founder-friendly. Most decisions are made within 3 weeks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programDetails.apply.content.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < programDetails.apply.content.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#0DD3B0]/30 to-transparent -translate-y-1/2 z-10" />
                  )}
                  
                  <div className="text-center relative z-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0DD3B0] to-cyan-400 text-black text-lg font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/70 text-sm mb-3 leading-relaxed">{step.description}</p>
                    <div className="text-xs text-[#0DD3B0] font-medium">{step.timeline}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Application CTA */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0DD3B0]/10 to-cyan-400/10 rounded-3xl blur-3xl" />
              <div className="relative text-center py-16 px-8 rounded-3xl border border-[#0DD3B0]/20 bg-gradient-to-br from-[#0DD3B0]/5 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Apply?
                </h3>
                <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                  Winter 2025 applications close February 15th. The earlier you apply, the more time we have to get to know you.
                </p>
                <Link
                  href="https://apply.elseif.ai"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0DD3B0] px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-[#0DD3B0]/90 hover:shadow-xl hover:shadow-[#0DD3B0]/30"
                >
                  Start Application
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0a0a] mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo/Logo-dark.png" alt="Elseif Logo" width={40} height={40} />
                <span className="text-xl font-semibold">Elseif AI Accelerator</span>
              </div>
              <p className="text-white/60 mb-6 max-w-md">
                Funding AI startups at the earliest stage. Join 500+ founders building the future of artificial intelligence.
              </p>
              <div className="flex items-center gap-4">
                {['Twitter', 'LinkedIn', 'Discord'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#0DD3B0]/30 transition-all"
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Program</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#program" className="text-white/60 hover:text-white transition-colors">Overview</Link></li>
                <li><Link href="#companies" className="text-white/60 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="#apply" className="text-white/60 hover:text-white transition-colors">Apply</Link></li>
                <li><Link href="#apply" className="text-white/60 hover:text-white transition-colors">Demo Day</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#blog" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#events" className="text-white/60 hover:text-white transition-colors">Events</Link></li>
                <li><Link href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/50 text-sm">
              © 2025 Elseif AI Accelerator. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}