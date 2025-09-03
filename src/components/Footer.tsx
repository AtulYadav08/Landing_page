'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
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
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
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
  )
}

