'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface TermsSection {
  [key: string]: string | undefined
}

interface Definition {
  term: string
  description: string
}

interface Services {
  general?: string
  restrictions?: string[]
  betaServices?: string
  thirdPartyServices?: string
  support?: string
}

interface Company {
  name: string
  description: string
}

interface TermsData {
  platformName?: string
  latestUpdate: string
  welcome: string
  intro: string
  company?: Company
  definitions?: Definition[]
  services?: Services
  feesAndPayment?: TermsSection
  privacyAndDataUse?: TermsSection
  proprietaryRights?: TermsSection
  disclaimerAndLiability?: TermsSection
  termAndTermination?: TermsSection
  confidentialInformation?: TermsSection
  forceMajeure?: string
  governingLaw?: TermsSection
  miscellaneous?: TermsSection
}

export default function TermsPage() {
  const [terms, setTerms] = useState<TermsData | null>(null)

  useEffect(() => {
    fetch('/terms.json')
      .then(res => res.json())
      .then((data: TermsData) => setTerms(data))
  }, [])

  if (!terms) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <p className="text-white/60">Loading...</p>
      </main>
    )
  }

  const renderSection = (section?: TermsSection) => {
    if (!section) return null
    return Object.entries(section).map(([key, value], idx) => (
      <p key={idx} className="text-white/70 mb-1">
        <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
      </p>
    ))
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Navbar />

      <main className="container mx-auto px-6 py-20 max-w-4xl flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-white/60 mb-10">
          Last Updated: {terms.latestUpdate}
        </p>

        {/* Introduction */}
        <div className="space-y-4 mb-12 text-white/80">
          <p>{terms.welcome}</p>
          <p>{terms.intro}</p>
        </div>

        {/* Company */}
        {terms.company && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Company</h2>
            <p className="text-white/70">{terms.company.name}</p>
            <p className="text-white/70">{terms.company.description}</p>
          </div>
        )}

        {/* Definitions */}
        {terms.definitions?.length ? (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
            <ul className="list-disc list-inside space-y-1 text-white/70">
              {terms.definitions.map((def, idx) => (
                <li key={idx}>
                  <strong>{def.term}:</strong> {def.description}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Services */}
        {terms.services && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            {terms.services.general && <p className="text-white/70 mb-2">{terms.services.general}</p>}

            {terms.services.restrictions?.length ? (
              <div className="mb-2">
                <p className="font-medium">Restrictions:</p>
                <ul className="list-disc list-inside space-y-1 text-white/70">
                  {terms.services.restrictions.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {terms.services.betaServices && <p className="text-white/70 mb-2">{terms.services.betaServices}</p>}
            {terms.services.thirdPartyServices && <p className="text-white/70 mb-2">{terms.services.thirdPartyServices}</p>}
            {terms.services.support && <p className="text-white/70">{terms.services.support}</p>}
          </div>
        )}

        {/* Other Sections */}
        {renderSection(terms.feesAndPayment) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Fees & Payment</h2>
            {renderSection(terms.feesAndPayment)}
          </div>
        )}

        {renderSection(terms.privacyAndDataUse) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Privacy & Data Use</h2>
            {renderSection(terms.privacyAndDataUse)}
          </div>
        )}

        {renderSection(terms.proprietaryRights) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Proprietary Rights</h2>
            {renderSection(terms.proprietaryRights)}
          </div>
        )}

        {renderSection(terms.disclaimerAndLiability) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer & Liability</h2>
            {renderSection(terms.disclaimerAndLiability)}
          </div>
        )}

        {renderSection(terms.termAndTermination) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Term & Termination</h2>
            {renderSection(terms.termAndTermination)}
          </div>
        )}

        {renderSection(terms.confidentialInformation) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Confidential Information</h2>
            {renderSection(terms.confidentialInformation)}
          </div>
        )}

        {/* Force Majeure */}
        {terms.forceMajeure && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Force Majeure</h2>
            <p className="text-white/70">{terms.forceMajeure}</p>
          </div>
        )}

        {/* Governing Law */}
        {renderSection(terms.governingLaw) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            {renderSection(terms.governingLaw)}
          </div>
        )}

        {/* Miscellaneous */}
        {renderSection(terms.miscellaneous) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Miscellaneous</h2>
            {renderSection(terms.miscellaneous)}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
