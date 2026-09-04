import React from "react";
import { Award, Clock, Users, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: Award,
    title: "OSHA-Compliant Workforce",
    desc: "All workers complete site-specific safety orientation before their first shift.",
  },
  {
    icon: Clock,
    title: "Zero Markup on Overtime",
    desc: "Unlike competitors, we don't add a surcharge when your production needs push into OT.",
  },
  {
    icon: Users,
    title: "Industry-Specific Recruiters",
    desc: "Our team is segmented by sector — automotive, food processing, chemical, and more.",
  },
  {
    icon: TrendingUp,
    title: "Performance Guarantee",
    desc: "If a worker underperforms within the first 40 hours, we replace them at no charge.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-[#0B0E14] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=60"
            alt="Aerial view of distribution trucks"
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 sm:right-6 bg-[#F3A125] text-[#0B0E14] p-6 w-[190px]">
            <p className="text-4xl font-extrabold leading-none">20+</p>
            <p className="text-sm font-semibold mt-2 leading-snug">
              Years of Industrial Staffing
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-[11px] tracking-widest font-bold text-[#F3A125] mb-4">
            WHY PLANTFORCE USA
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tight text-[40px] sm:text-[48px] mb-6">
            We know the plant floor
          </h2>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-10 max-w-lg">
            Most staffing agencies send warm bodies. We send workers who know
            the difference between a press brake and a turret punch — and
            show up with the right PPE already on. Our recruiters have plant
            experience, not just HR experience.
          </p>

          <div className="space-y-7">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5">
                <span className="w-11 h-11 shrink-0 flex items-center justify-center border border-[#F3A125]/40 text-[#F3A125]">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-slate-400 text-[14px] leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
