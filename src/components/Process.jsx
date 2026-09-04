import React from "react";
import { ArrowRight, Phone } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Tell Us Your Need",
    desc: "Submit a workforce request — headcount, skill requirements, timeline, and your facility location. We respond within 2 business hours.",
  },
  {
    num: "02",
    title: "We Source & Screen",
    desc: "Our regional recruiters tap a pre-qualified talent pool. Every candidate is drug-tested, background-checked, and skills-verified before we send a single name.",
  },
  {
    num: "03",
    title: "Workers Report Ready",
    desc: "Your team arrives on time, in proper PPE, briefed on your facility protocols. We handle all onboarding paperwork, payroll, and compliance.",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="bg-[#0B0E14] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 text-center">
        <p className="text-[11px] tracking-widest font-bold text-[#F3A125] mb-4">
          SIMPLE PROCESS
        </p>
        <h2 className="font-extrabold uppercase leading-[0.95] tracking-tight text-[40px] sm:text-[48px] mb-16">
          From request to floor in <br className="hidden sm:block" />
          3 steps
        </h2>

        <div className="grid sm:grid-cols-3 border-t border-white/10 text-left">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`relative px-8 py-10 ${
                i !== STEPS.length - 1 ? "sm:border-r border-white/10" : ""
              }`}
            >
              <span className="absolute top-6 right-6 text-6xl font-extrabold text-white/5 leading-none select-none">
                {step.num}
              </span>
              <p className="text-[#F3A125] font-bold text-sm mb-3">
                {step.num}
              </p>
              <h3 className="text-xl font-extrabold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-[14px] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#request"
            className="inline-flex items-center gap-2 bg-[#F3A125] hover:bg-[#e0921a] text-[#0B0E14] font-bold text-[13px] tracking-wide px-6 py-4 transition-colors"
          >
            START YOUR REQUEST <ArrowRight size={16} />
          </a>
          <a
            href="tel:18005550183"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors"
          >
            <Phone size={16} />
            Or call us: 1-800-555-0183
          </a>
        </div>
      </div>
    </section>
  );
}
