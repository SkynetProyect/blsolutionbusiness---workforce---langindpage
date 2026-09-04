import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Temporary Staffing",
    desc: "Rapid deployment of qualified plant workers for peak demand, seasonal surges, or short-term project needs. We maintain a ready pool across every major discipline.",
    points: ["48-hour deployment", "Pre-screened & drug-tested", "All trades & skill levels"],
  },
  {
    title: "Direct Hire Placement",
    desc: "Permanent placements for critical plant roles. Our recruiters source, vet, and deliver candidates who are ready to contribute from day one.",
    points: ["Full background checks", "Skills assessment testing", "90-day replacement guarantee"],
  },
  {
    title: "On-Site Management",
    desc: "A dedicated PlantForce supervisor manages your contingent workforce on the floor — handling scheduling, compliance, and performance so you don't have to.",
    points: ["Dedicated site supervisor", "Real-time headcount reporting", "Safety compliance management"],
  },
  {
    title: "Workforce Consulting",
    desc: "Strategic labor planning for facility expansions, new product launches, or operational restructuring. We analyze your workflow and build a staffing model that fits.",
    points: ["Labor cost modeling", "Ramp-up planning", "Compliance auditing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0B0E14] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] tracking-widest font-bold text-[#F3A125] mb-4">
              WHAT WE OFFER
            </p>
            <h2 className="font-extrabold uppercase leading-[0.95] tracking-tight text-[40px] sm:text-[48px] max-w-2xl">
              Staffing solutions built for the plant floor
            </h2>
          </div>
          <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
            Every service we offer is designed around the realities of
            industrial operations — tight schedules, safety requirements,
            and zero tolerance for unreliable workers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 border-t border-l border-white/10">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="border-r border-b border-white/10 p-10"
            >
              <h3 className="text-2xl font-extrabold mb-4">{s.title}</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
                {s.desc}
              </p>
              <ul className="space-y-3 mb-7">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-[#F3A125] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#F3A125] font-bold text-[13px] tracking-wide hover:gap-3 transition-all"
              >
                LEARN MORE <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
