'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'


export default function AISchoolEducation() {
  const courses = [
    { title: 'Production LLMs (8 weeks)', desc: 'Model selection, fine-tuning patterns, and production best practices.' },
    { title: 'RAG in Practice (1 day)', desc: 'Hands-on workshop: embeddings, vector stores, and evaluation.' },
    { title: 'Agent Engineering (4 weeks)', desc: 'Design and test tool-using agents and safety patterns.' }
  ]

  const tracks = [
    { title: 'AI Foundations', desc: 'Core concepts: LLMs, embeddings, tokenization, safety.' },
    { title: 'Applied RAG', desc: 'Design retrieval layers, vector stores, and evaluation.' },
    { title: 'Agents & Automation', desc: 'Build tool-using agents, workflows, and ops.' },
    { title: 'ML for Product', desc: 'Productizing models, deployment, and monitoring.' }
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Elseif AI School</h1>
        <p className="text-white/70 text-lg mb-8">
          Cohort-based learning & self-paced tracks — practical skills for teams building real AI products.
        </p>
        {/*
        <Link 
          href="/ai-school/apply" 
          className="inline-flex items-center gap-2 rounded-lg bg-[#0DD3B0] px-6 py-3 text-black font-semibold"
        >
          Join the next cohort
        </Link>
        */}

            <Link 
          href="http://sandbox.elseif.ai/signin" 
          className="inline-flex items-center gap-2 rounded-lg bg-[#0DD3B0] px-6 py-3 text-black font-semibold"
        >
          Get Started
        </Link>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map(c => (
            <div key={c.title} className="rounded-2xl border border-white/10 p-6 hover:bg-white/5 transition">
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-white/70 mb-4">{c.desc}</p>
              {/*
              <Link href="/ai-school/apply" className="text-[#0DD3B0]">Apply →</Link>
              */}
            </div>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">Learning Tracks</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tracks.map(t => (
            <div key={t.title} className="rounded-2xl border border-white/10 p-6 hover:bg-white/5 transition">
              <h3 className="text-xl font-semibold mb-2">{t.title}</h3>
              <p className="text-white/70 mb-4">{t.desc}</p>
              <div className="text-sm text-white/60">Format: self-paced + live labs</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      
      <section className="py-16 text-center">
        <Link 
          href="/ai-school" 
          className="inline-flex items-center gap-2 rounded-lg bg-[#0DD3B0] px-6 py-3 text-black font-semibold"
        >
          Explore AI School
        </Link>
      </section>
     
      
      <Footer />
    </main>
  )
}
