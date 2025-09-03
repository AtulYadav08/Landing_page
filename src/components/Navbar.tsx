'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo/Logo-dark.png"
            alt="Logo"
            width={72}
            height={72}
            priority
            className="transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm text-white/70">
          <Link href="/" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
            Home
          </Link>
          <Link href="/ai-startups" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
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
              href="/#apply"
              className="rounded-lg bg-[#0DD3B0] px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-[#0DD3B0]/90"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
