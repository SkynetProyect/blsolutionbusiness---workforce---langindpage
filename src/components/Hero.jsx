import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const DISCIPLINES = [
  "CNC Operators",
  "Welders & Fabricators",
  "Forklift Operators",
  "Assembly Line Workers",
  "Quality Control Technicians",
  "Press Operators",
  "Maintenance Mechanics",
  "Warehouse Associates",
  "Chemical Operators",
  "Packaging Line Workers",
  "Material Handlers",
  "Machine Operators",
];

export default function Hero() {
  return (
    <section className="relative bg-[#0B0E14] text-white overflow-hidden">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.35]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091870627-3ffb4ef67c0e?w=1600&q=60')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/85 to-[#0B0E14]/40" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-20 lg:pb-32 grid lg:grid-cols-[1.3fr_0.9fr] gap-14 items-start">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 border border-[#F3A125]/50 px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3A125]" />
            <span className="text-[11px] tracking-widest font-bold text-[#F3A125]">
              NATIONWIDE PLANT STAFFING SINCE 2004
            </span>
          </div>

          <h1 className="font-extrabold uppercase leading-[0.92] tracking-tight text-[56px] sm:text-[72px] lg:text-[80px]">
            <span className="block text-white">America's</span>
            <span className="block text-[#F3A125]">Plant</span>
            <span className="block text-[#F3A125]">Workforce</span>
            <span className="block text-white">Ready to</span>
            <span className="block text-white">Deploy</span>
          </h1>

          <p className="mt-8 max-w-lg text-slate-400 text-[16px] leading-relaxed">
            We connect U.S. manufacturers with skilled, pre-screened plant
            workers — welders, operators, assemblers, and more — deployed to
            your facility fast, compliant, and ready to work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#request"
              className="inline-flex items-center gap-2 bg-[#F3A125] hover:bg-[#e0921a] text-[#0B0E14] font-bold text-[13px] tracking-wide px-6 py-4 transition-colors"
            >
              REQUEST WORKERS NOW <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-bold text-[13px] tracking-wide px-6 py-4 transition-colors"
            >
              VIEW ALL SERVICES <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Right column - disciplines card */}
        <div className="bg-[#11151F]/95 border border-white/10 p-8 backdrop-blur-sm">
          <p className="text-[11px] tracking-widest font-bold text-slate-400 mb-5">
            AVAILABLE DISCIPLINES
          </p>
          <div className="flex flex-wrap gap-2.5 mb-8">
            {DISCIPLINES.map((d) => (
              <span
                key={d}
                className="text-[12px] text-slate-300 border border-white/15 px-3 py-2"
              >
                {d}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <div>
              <p className="text-3xl font-extrabold text-white">48 hrs</p>
              <p className="text-xs text-slate-400 mt-1">
                Average deployment time
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">24/7</p>
              <p className="text-xs text-slate-400 mt-1">
                Emergency staffing line
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
