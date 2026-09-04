import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: ["Temporary Staffing", "Direct Hire", "On-Site Management", "Workforce Consulting"],
  },
  {
    title: "Industries",
    links: ["Automotive", "Food Processing", "Chemical", "Metals & Fab"],
  },
  {
    title: "Company",
    links: ["About PlantForce", "Careers", "Safety Standards", "Client Portal"],
  },
];

export default function CTAFooter() {
  return (
    <>
      {/* CTA */}
      <section
        id="request"
        className="relative bg-[#0B0E14] text-white text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=60')",
          }}
        />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-28">
          <p className="text-[11px] tracking-widest font-bold text-[#F3A125] mb-5">
            GET STARTED TODAY
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tight text-[40px] sm:text-[56px] lg:text-[64px] max-w-4xl mx-auto">
            Need workers on your floor by next week?
          </h2>
          <p className="text-slate-400 text-[16px] mt-7 max-w-xl mx-auto">
            Submit a staffing request and a dedicated recruiter will reach out
            within 2 hours — no commitment required.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F3A125] hover:bg-[#e0921a] text-[#0B0E14] font-bold text-[13px] tracking-wide px-7 py-4 transition-colors"
            >
              SUBMIT A STAFFING REQUEST <ArrowRight size={16} />
            </a>
            <a
              href="tel:18005550183"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-bold text-[13px] tracking-wide px-7 py-4 transition-colors"
            >
              <Phone size={16} />
              CALL 1-800-555-0183
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0B0E14] text-white border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-9 flex items-center justify-center bg-[#F3A125] text-[#0B0E14] font-extrabold text-sm">
                PF
              </span>
              <span className="font-extrabold text-lg tracking-tight">
                PLANTFORCE <span className="text-[#F3A125]">USA</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              America's trusted source for qualified plant and industrial
              workers since 2004.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <a href="tel:18005550183" className="flex items-center gap-2 hover:text-white">
                <Phone size={14} /> 1-800-555-0183
              </a>
              <a href="mailto:staff@plantforceusa.com" className="flex items-center gap-2 hover:text-white">
                <Mail size={14} /> staff@plantforceusa.com
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] tracking-widest font-bold text-slate-400 mb-5">
                {col.title.toUpperCase()}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} PlantForce USA. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
