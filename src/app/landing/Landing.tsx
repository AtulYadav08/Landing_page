'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import styles from './landing.module.css'
import { initParallaxGlows, initTilt, initParallaxCards } from './landing.motion'
import { StickyScroll } from '@/components/StickyScrollReveal'

const featuresContent = [
  {
    title: "Sophisticated Workflow in Minutes",
    description: "Drag and drop to visually create AI apps and workflows that are capable of diverse tasks and evolving needs. Build complex AI applications without writing a single line of code using our intuitive visual interface.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"126\\" height=\\"126\\"><path d=\\"M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z\\" fill=\\"rgb(136, 136, 136, 0.2)\\" fill-rule=\\"evenodd\\"/></svg>")',
          backgroundSize: '64px',
          backgroundRepeat: 'repeat',
        }} />
        <video 
          src="/videos/7s7npBPHAvVymrSQzDUuqYZvwF8.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
  {
    title: "Amplify with Any Global Large Language Models",
    description: "Connect with 100+ LLMs including GPT-4, Claude, Gemini, and open-source models. Switch between models seamlessly and optimize performance for your specific use cases with intelligent model routing.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"126\\" height=\\"126\\"><path d=\\"M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z\\" fill=\\"rgb(136, 136, 136, 0.2)\\" fill-rule=\\"evenodd\\"/></svg>")',
          backgroundSize: '64px',
          backgroundRepeat: 'repeat',
        }} />
        <video 
          src="/videos/QscSmH2VqGHPqGADVemUtB5ZZpQ.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
  {
    title: "Launch Right Away",
    description: "Deploy your AI applications instantly with one-click deployment. No complex infrastructure setup required - from prototype to production in minutes with automatic scaling and global CDN distribution.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"126\\" height=\\"126\\"><path d=\\"M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z\\" fill=\\"rgb(136, 136, 136, 0.2)\\" fill-rule=\\"evenodd\\"/></svg>")',
          backgroundSize: '64px',
          backgroundRepeat: 'repeat',
        }} />
        <video 
          src="/videos/4Orkx39zO08szc2whqxg4iqE.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
  {
    title: "Build Upon Other's Creation",
    description: "Access a marketplace of pre-built templates and components. Customize existing solutions or start from scratch - collaborate with the community and share your innovations to accelerate AI development.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"126\\" height=\\"126\\"><path d=\\"M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z\\" fill=\\"rgb(136, 136, 136, 0.2)\\" fill-rule=\\"evenodd\\"/></svg>")',
          backgroundSize: '64px',
          backgroundRepeat: 'repeat',
        }} />
        
        {/* Replace video with img but same styling */}
        <img 
          src="\videos\importdsl.png" 
          alt="Marketplace preview"
          className="h-full w-full object-contain"
        />
  
       
      </div>
    ),
  },
  
];


export default function Landing() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return
    const elements = containerRef.current.querySelectorAll(`.${styles.reveal}`)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inView')
        }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Custom cursor
  useEffect(() => {
    const dot = document.createElement('div')
    dot.className = styles.cursorDot
    document.body.appendChild(dot)
    let raf = 0
    let x = 0, y = 0
    let tx = 0, ty = 0
    const speed = 0.18

    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY
      cancelAnimationFrame(raf)
      const loop = () => {
        x += (tx - x) * speed
        y += (ty - y) * speed
        dot.style.transform = `translate(${x}px, ${y}px)`
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }
    const onEnter = () => dot.classList.remove(styles.cursorHidden)
    const onLeave = () => dot.classList.add(styles.cursorHidden)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
      dot.remove()
    }
  }, [])

  // Parallax effects
  useEffect(() => {
    if (!containerRef.current) return
    const cleanupGlows = initParallaxGlows(containerRef.current)
    const cleanupTilt = initTilt(containerRef.current)
    const cleanupCards = initParallaxCards(containerRef.current)
    return () => { cleanupGlows?.(); cleanupTilt?.(); cleanupCards?.() }
  }, [])

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col overflow-x-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(13, 211, 176, 0.15) 1px, transparent 0)', 
             backgroundSize: '50px 50px' 
           }} />
      
      {/* Animated glow effects */}
      <div data-glow="cyan" className="pointer-events-none absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-gradient-to-r from-[#0DD3B0] to-[#00D4AA] opacity-20 blur-3xl will-change-transform" />
      <div data-glow="teal" className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-gradient-to-l from-[#0DD3B0] to-cyan-400 opacity-15 blur-3xl will-change-transform" />
      <div data-glow="green" className="pointer-events-none absolute -left-40 bottom-20 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-[#00D4AA] to-emerald-400 opacity-10 blur-3xl will-change-transform" />

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
              <div className="absolute inset-0 bg-[#0DD3B0] rounded-full opacity-0 blur-md group-hover:opacity-20 transition-opacity" />
            </div>
    
          </Link>
          
          <nav className="hidden items-center gap-1 text-sm text-white/70 lg:flex animate-fade-up"
     style={{ animationDelay: '200ms' }}>
  <Link href="/" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
    Home
  </Link>
  <Link href="https://elseif-1e88b178.mintlify.app/en/getting-started/elseif-for-education" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
    Docs
  </Link>
  <Link href="/education" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
    Education
  </Link>
  {/* <Link href="/llm-subscribe" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
    LLM Subscribe
  </Link> */}
  <Link href="/ai-school" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
    AI School
  </Link>
  <Link href="/ai-startups" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
    AI Startups
  </Link>

  <div className="ml-4 flex items-center gap-3">
    <Link
      href="http://sandbox.elseif.ai/signin"
      className="rounded-lg bg-[#0DD3B0] px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-[#0DD3B0]/90 hover:shadow-lg hover:shadow-[#0DD3B0]/20"
    >
      Start for free
    </Link>
  </div>
</nav>


          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 text-center max-w-6xl">
        <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0DD3B0]/10 border border-[#0DD3B0]/20 px-4 py-2 text-sm text-[#0DD3B0] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DD3B0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0DD3B0]"></span>
            </span>
            LLMOps platform for the next generation of AI
          </div>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 animate-fade-up" 
            style={{ animationDelay: '400ms' }}>
         Build Production-Ready Agentic
          <span className="block bg-gradient-to-r from-[#0DD3B0] via-[#00D4AA] to-cyan-300 bg-clip-text text-transparent">
            AI Solutions
          </span>
        </h1>
        
        <p className="mx-auto max-w-3xl text-lg lg:text-xl text-white/70 mb-12 leading-relaxed animate-fade-up" 
           style={{ animationDelay: '500ms' }}>
          The open LLMOps platform for building and operating generative AI applications. 
          Create, deploy and operate AI apps based on any LLMs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" 
             style={{ animationDelay: '600ms' }}>
          <Link
            href="http://sandbox.elseif.ai/signin"
            className="group relative inline-flex items-center justify-center rounded-lg bg-[#0DD3B0] px-8 py-4 text-base font-semibold text-black transition-all hover:bg-[#0DD3B0]/90 hover:shadow-xl hover:shadow-[#0DD3B0]/30 hover:-translate-y-0.5"
          >
            Start building for free
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 text-base font-medium transition-all hover:border-[#0DD3B0]/50 hover:bg-[#0DD3B0]/5 hover:text-white"
          >
            Watch demo
          </Link>
        </div>

        {/* Hero Visual */}
        <div className="relative mx-auto max-w-5xl animate-fade-up" style={{ animationDelay: '700ms' }}>
          <div className="relative aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-[#111111] to-[#0a0a0a] overflow-hidden shadow-2xl">
            <video 
              autoPlay 
              playsInline 
              muted 
              loop 
              className="h-full w-full object-cover"
              poster="videos/section2.mp4"
            >
              <source src="/videos/section2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Floating elements */}
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-lg bg-black/60 backdrop-blur-sm px-3 py-2 text-sm">
              <div className="w-2 h-2 bg-[#0DD3B0] rounded-full animate-pulse" />
              <span className="text-white/90">Live AI Studio</span>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0DD3B0]/20 to-cyan-400/20 blur-3xl scale-105 opacity-50" />
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Bring your AI vision to life.
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From sketch to live, bring your AI vision to life and beyond.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <StickyScroll content={featuresContent} />
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm uppercase tracking-wider font-medium">Trusted by 800k+ developers and teams</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {['Rakuten', 'Salesforce', 'Zapier', 'Notion', 'Anthropic', 'DeepMind'].map((company) => (
            <div key={company} className="text-white/40 hover:text-white/80 transition-colors text-lg font-semibold">
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* Why Elseif Section */}
    <section className="container mx-auto px-6 py-24">
        <div className={`text-center mb-16 ${styles.reveal} ${styles.scale}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why choose Elseif
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Elseif is the leading ElseifAI platform that enables developers and non-tech teams to build, deploy and operate AI apps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: <AnimatedBrainIcon />,
              title: "Visual Orchestration",
              description: "Design complex AI workflows with our intuitive visual canvas. Drag, drop, and connect nodes to build sophisticated applications without coding.",
              features: ["Visual workflow builder", "Pre-built templates", "Custom components"]
            },
            {
              icon: <AnimatedRocketIcon />,
              title: "Ready-to-Use",
              description: "Deploy production-ready AI applications in minutes. From chatbots to content generators, get started with proven templates.",
              features: ["One-click deployment", "Built-in hosting", "Instant scaling"]
            },
            {
              icon: <AnimatedGearsIcon />,
              title: "Full Customization", 
              description: "Complete control over your AI applications. Customize every aspect from model selection to user experience.",
              features: ["Multiple LLM support", "Custom branding", "Advanced configurations"]
            }
          ].map((feature, index) => (
            <div key={feature.title} 
                 className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 transition-all hover:border-[#0DD3B0]/30 hover:bg-white/10 hover:shadow-xl hover:shadow-[#0DD3B0]/10 ${styles.reveal} ${index === 0 ? styles.left : index === 1 ? styles.scale : styles.right} ${styles.delay100}`}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0DD3B0] transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.features.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <svg className="w-4 h-4 text-[#0DD3B0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-gradient-to-br from-[#111111]/50 to-[#0a0a0a]/50 border-y border-white/5">
        <div className="container mx-auto px-6 py-24">
          <div className={`text-center mb-16 ${styles.reveal} ${styles.scale}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Build any AI application
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From simple chatbots to complex AI workflows, Elseif provides the tools you need to create applications that solve real problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: <AnimatedChatbotIcon />,
                title: "AI Chatbots",
                description: "Create intelligent conversational agents that understand context and provide meaningful responses.",
                image: "chat",
                features: ["Multi-turn conversations", "Context awareness", "Custom personalities"]
              },
              {
                icon: <AnimatedAgentIcon />,
                title: "AI Agents",
                description: "Build autonomous agents that can perform complex tasks and make decisions on behalf of users.",
                image: "agent",
                features: ["Goal-oriented behavior", "Tool integration", "Multi-step reasoning"]
              },
              {
                icon: <AnimatedRAGIcon />,
                title: "RAG Applications", 
                description: "Transform your knowledge base into intelligent systems that answer questions and provide insights.",
                image: "rag",
                features: ["Document processing", "Semantic search", "Source attribution"]
              },
              {
                icon: <AnimatedContentIcon />,
                title: "Content Generation",
                description: "Generate high-quality content at scale with AI-powered writing and creative applications.",
                image: "content",
                features: ["Multiple formats", "Brand consistency", "Quality control"]
              }
            ].map((useCase, index) => (
              <div key={useCase.title} 
                   className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 transition-all hover:border-[#0DD3B0]/30 hover:bg-white/10 hover:shadow-xl hover:shadow-[#0DD3B0]/10 ${styles.reveal} ${index % 2 === 0 ? styles.left : styles.right} ${index < 2 ? styles.delay100 : styles.delay200}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0DD3B0] transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {useCase.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1 h-1 bg-[#0DD3B0] rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLMOps Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className={`text-center mb-16 ${styles.reveal} ${styles.scale}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete LLMOps capabilities
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to build, deploy, and manage AI applications in production.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {[
            {
               icon: <AnimatedModelIcon />,
              title: "Model Management",
              description: "Support for 100+ LLMs including GPT, Claude, Gemini, and open-source models."
            },
            {
              icon: <AnimatedObservabilityIcon />,
              title: "Observability",
              description: "Monitor performance, costs, and user interactions with detailed analytics."
            },
            {
              icon: <AnimatedSecurityIcon />,
              title: "Security & Privacy",
              description: "Enterprise-grade security with data encryption and privacy controls."
            },
            {
              icon: <AnimatedGlobeIcon />,
              title: "Multi-Language",
              description: "Built-in support for multiple languages and international deployment."
            },
            {
              icon: <AnimatedAPIIcon />,
              title: "API Access",
              description: "RESTful APIs and SDKs for seamless integration with existing systems."
            },
            {
              icon: <AnimatedScalingIcon />,
              title: "Auto Scaling",
              description: "Automatic scaling based on demand with cost optimization."
            },
            {
              icon: <AnimatedDevOpsIcon />,
              title: "DevOps Ready",
              description: "CI/CD pipelines, version control, and collaborative development."
            },
            {
               icon: <AnimatedRoutingIcon />,
              title: "Smart Routing",
              description: "Intelligent load balancing and model selection based on context."
            }
          ].map((feature, index) => (
            <div key={feature.title} 
                 className={`group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all hover:border-[#0DD3B0]/30 hover:bg-white/10 hover:shadow-lg hover:shadow-[#0DD3B0]/10 ${styles.reveal} ${styles.scale}`}
                 style={{ animationDelay: `${(index % 4) * 100}ms` }}>
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-[#0DD3B0] transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      {/* <section className="bg-gradient-to-br from-[#111111]/50 to-[#0a0a0a]/50 border-y border-white/5">
        <div className="container mx-auto px-6 py-24">
          <div className={`text-center mb-16 ${styles.reveal} ${styles.scale}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Start for free, scale as you grow. No hidden fees, no vendor lock-in.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sandbox",
                price: "Free",
                period: "forever",
                description: "Perfect for getting started and prototyping",
                features: [
                  "200 AI calls per month",
                  "Visual workflow builder",
                  "Basic templates",
                  "Community support"
                ],
                cta: "Start for free",
                popular: false
              },
              {
                name: "Professional",
                price: "$59",
                period: "per month",
                description: "For individuals and small teams building AI apps",
                features: [
                  "10,000 AI calls per month",
                  "Advanced workflows",
                  "Premium templates",
                  "Priority support",
                  "Team collaboration"
                ],
                cta: "Start free trial",
                popular: true
              },
              {
                name: "Team",
                price: "$159",
                period: "per month",
                description: "For teams that need advanced features and control",
                features: [
                  "50,000 AI calls per month",
                  "Custom integrations",
                  "Advanced analytics",
                  "SLA guarantee",
                  "Custom models"
                ],
                cta: "Contact sales",
                popular: false
              }
            ].map((plan, index) => (
              <div key={plan.name} 
                   className={`relative rounded-2xl border ${plan.popular ? 'border-[#0DD3B0]/30 bg-gradient-to-br from-[#0DD3B0]/10 to-transparent' : 'border-white/10 bg-gradient-to-br from-white/5 to-transparent'} p-8 transition-all hover:border-[#0DD3B0]/30 hover:bg-white/10 hover:shadow-xl hover:shadow-[#0DD3B0]/10 ${styles.reveal} ${styles.scale}`}
                   style={{ animationDelay: `${index * 100}ms` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#0DD3B0] text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-white/60 ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-white/60 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#0DD3B0]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full rounded-lg py-3 font-semibold transition-all ${plan.popular 
                  ? 'bg-[#0DD3B0] text-black hover:bg-[#0DD3B0]/90 hover:shadow-lg hover:shadow-[#0DD3B0]/20' 
                  : 'border border-white/20 text-white hover:border-[#0DD3B0]/50 hover:bg-[#0DD3B0]/10'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0DD3B0]/10 to-cyan-400/10 rounded-3xl blur-3xl" />
          <div className="relative text-center py-20 px-8 rounded-3xl border border-[#0DD3B0]/20 bg-gradient-to-br from-[#0DD3B0]/5 to-transparent">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Start building with Elseif today
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Join 800,000+ developers and teams building the future of AI applications. 
              Get started in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="http://sandbox.elseif.ai/signin"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0DD3B0] px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-[#0DD3B0]/90 hover:shadow-xl hover:shadow-[#0DD3B0]/30"
              >
                Start building for free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-medium transition-all hover:border-[#0DD3B0]/50 hover:bg-[#0DD3B0]/5"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>

     {/* Footer */}
<footer className="border-t border-white/10 bg-[#0a0a0a]">
  <div className="container mx-auto px-6 py-16">
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Logo + About + Socials */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo/Logo-dark.png" alt="Logo" width={62} height={62} />
        </div>
        <p className="text-white/60 mb-8 max-w-md">
          The open LLMOps platform for building and deploying production-ready AI applications. 
          Empowering developers to create the future of AI.
        </p>
        {/* <div className="flex items-center gap-4">
          {['GitHub', 'Twitter', 'LinkedIn', 'Discord'].map((social) => (
            <a
              key={social}
              href={`#${social.toLowerCase()}`} 
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#0DD3B0]/30 hover:bg-[#0DD3B0]/10 transition-all"
            >
              {social.charAt(0)}
            </a>
          ))}
        </div> */}
      </div>
      
      {/* Footer Navigation Sections */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {[
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        // { name: "Contact", href: "/contact" },
        { name: "Signup", href: "http://sandbox.elseif.ai/signin" }
      ]
    },
    // {
    //   title: "Community",
    //   links: [
    //     { name: "Partner", href: "/" },
    //     { name: "Support", href: "/" },
    //     { name: "Talk to us", href: "/" },
    //     { name: "Join us", href: "/" }
    //   ]
    // },
    // {
    //   title: "Agreements",
    //   links: [
    //     { name: "Cookie Settings", href: "/" },
    //     { name: "Data Protection Agreement", href: "/" },
    //     { name: "Marketplace Agreement", href: "/" }
    //   ]
    // },
    // {
    //   title: "Certification",
    //   links: [
    //     { name: "ISO", href: "/certifications/iso" },
    //     { name: "SOC2", href: "/certifications/soc2" },
    //     { name: "GDPR", href: "/certifications/gdpr" }
    //   ]
    // }
  ].map((section) => (
    <div key={section.title}>
      <h4 className="font-semibold text-white mb-4">{section.title}</h4>
      {/* Modified: single row instead of vertical list */}
      <div className="flex items-center gap-8">
        {section.links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white/60 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  ))}
</div>
      </div>

    {/* Bottom row */}
    <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-white/50 text-sm">
        © {new Date().getFullYear()} Elseif. All rights reserved.
      </div>
    </div>
  </div>
</footer>


    </main>
  )

}


