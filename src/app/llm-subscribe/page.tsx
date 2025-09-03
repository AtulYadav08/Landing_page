'use client'
import Link from 'next/link'
// import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LLMSubscribePage() {
  const plans = [
    { id: 'starter', name: 'Starter', price: '$49', points: ['100k tokens / mo', 'Shared throughput', 'Email support'] },
    { id: 'growth', name: 'Growth', price: '$249', points: ['1M tokens / mo', 'Priority routing', 'SLA & analytics'] },
    { id: 'enterprise', name: 'Enterprise', price: 'Custom', points: ['Dedicated capacity', 'Private models', 'SAML, SSO & SLA'] }
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Subscription Plans */}
      <section className="container mx-auto flex-1 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LLM Subscriptions</h1>
          <p className="text-white/70 text-lg">
            Simple, predictable pricing to access a catalog of world-class LLMs. Pick a tier that fits prototyping, growth, or production.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map(p => (
            <div 
              key={p.id} 
              className="rounded-2xl border border-white/10 p-8 bg-gradient-to-br from-white/5 to-transparent hover:bg-white/5 transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
              <div className="text-4xl font-bold mb-4">
                {p.price}
                {p.price !== 'Custom' && (
                  <span className="text-white/60 text-base font-normal">/mo</span>
                )}
              </div>
              <ul className="text-white/70 mb-6 space-y-2">
                {p.points.map(pt => <li key={pt}>• {pt}</li>)}
              </ul>
              <Link 
                href="/signup" 
                className="w-full inline-block text-center rounded-lg bg-[#0DD3B0] px-4 py-3 text-black font-semibold"
              >
                Get started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-center text-white/60">
          Need a custom setup?{" "}
          <Link href="/contact" className="text-[#0DD3B0]">Contact Sales</Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
