'use client'
import Link from 'next/link'
// import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function AISchoolPage() {
  const courses = [
    { title: 'Production LLMs (8 weeks)', desc: 'Model selection, fine-tuning patterns, and production best practices.' },
    { title: 'RAG in Practice (1 day)', desc: 'Hands-on workshop: embeddings, vector stores, and evaluation.' },
    { title: 'Agent Engineering (4 weeks)', desc: 'Design and test tool-using agents and safety patterns.' }
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero + Courses */}
      <section className="container mx-auto flex-1 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elseif AI School</h1>
          <p className="text-white/70 text-lg">
            Cohort-based learning and self-paced courses taught by practitioners — practical skills for teams building AI products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map(c => (
            <div key={c.title} className="rounded-2xl border border-white/10 p-6 hover:bg-white/5 transition">
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-white/70 mb-4">{c.desc}</p>
              {/* <Link href="/ai-school/apply" className="text-[#0DD3B0]">Apply →</Link> */}
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-center">
          {/* <Link 
            href="/ai-school/apply" 
            className="inline-flex items-center gap-2 rounded-lg bg-[#0DD3B0] px-6 py-3 text-black font-semibold"
          >
            Join the next cohort
          </Link> */}
       <Link 
          href="http://sandbox.elseif.ai/signin" 
          className="inline-flex items-center gap-2 rounded-lg bg-[#0DD3B0] px-6 py-3 text-black font-semibold"
        >
          Get Started
        </Link>
        </div>
      </section>

      {/* Footer stays at bottom */}
      <Footer />
    </main>
  )
}
