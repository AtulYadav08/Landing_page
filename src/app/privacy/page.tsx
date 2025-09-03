'use client'
import { useEffect, useState } from 'react'
// import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  const [policy, setPolicy] = useState<any>(null)

  useEffect(() => {
    fetch('/privacy.json')
      .then(res => res.json())
      .then(data => setPolicy(data))
  }, [])

  if (!policy) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <p className="text-white/60">Loading...</p>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Navbar />

      <main className="container mx-auto px-6 py-20 max-w-4xl flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{policy.title}</h1>
        <p className="text-sm text-white/60 mb-10">
          Last Updated: {policy.last_updated}
        </p>

        {/* Introduction */}
        {policy.introduction && (
          <div className="space-y-4 mb-12 text-white/80">
            <p>{policy.introduction.welcome}</p>
            <p>{policy.introduction.notice}</p>
          </div>
        )}

        {/* Sections */}
        <div className="space-y-12">
          {policy.sections.map((sec: any, i: number) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold mb-4">{sec.heading}</h2>

              {Array.isArray(sec.content) &&
                sec.content.map((c: string, idx: number) => (
                  <p key={idx} className="text-white/70 mb-2">{c}</p>
                ))}

              {sec.content?.subsections &&
                sec.content.subsections.map((sub: any, idx: number) => (
                  <div key={idx} className="mb-6">
                    <h3 className="text-lg font-medium mb-2">{sub.title}</h3>
                    <ul className="list-disc list-inside space-y-1 text-white/70">
                      {sub.details.map((d: string, k: number) => (
                        <li key={k}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}

              {sec.content?.examples && (
                <ul className="list-disc list-inside space-y-1 text-white/70">
                  {sec.content.examples.map((ex: string, idx: number) => (
                    <li key={idx}>{ex}</li>
                  ))}
                </ul>
              )}

              {sec.content?.controller && (
                <div className="space-y-2 text-white/70">
                  <p><strong>Controller:</strong> {sec.content.controller}</p>
                  <p><strong>Email:</strong> {sec.content.email}</p>
                  {sec.content.representative_eu && (
                    <div className="mt-2">
                      <h4 className="font-medium">EU Representative:</h4>
                      <p>{sec.content.representative_eu.company}</p>
                      <p>{sec.content.representative_eu.name}</p>
                      <p>{sec.content.representative_eu.email}</p>
                      <p>{sec.content.representative_eu.tel}</p>
                      <p>{sec.content.representative_eu.address}</p>
                    </div>
                  )}
                  {sec.content.complaints && (
                    <p><strong>Complaints:</strong> {sec.content.complaints}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
