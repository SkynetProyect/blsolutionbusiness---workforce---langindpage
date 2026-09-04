import React from "react";
import { Users, Building2, MapPin, TrendingUp } from "lucide-react";

const STATS = [
  { icon: Users, value: "12,400+", label: "Workers Placed" },
  { icon: Building2, value: "380+", label: "Client Companies" },
  { icon: MapPin, value: "38", label: "States Served" },
  { icon: TrendingUp, value: "97%", label: "Client Retention" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#F3A125]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3.5">
            <Icon size={26} strokeWidth={1.75} className="text-[#0B0E14] shrink-0" />
            <div>
              <p className="text-2xl font-extrabold text-[#0B0E14] leading-none">
                {value}
              </p>
              <p className="text-sm text-[#0B0E14]/80 mt-1">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
