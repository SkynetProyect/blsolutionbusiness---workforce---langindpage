import React from "react";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    name: "Automotive Manufacturing",
    workers: "2,100+ Workers",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=60",
  },
  {
    name: "Food & Beverage Processing",
    workers: "1,800+ Workers",
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=60",
  },
  {
    name: "Chemical & Petrochemical",
    workers: "940+ Workers",
    img: "https://images.unsplash.com/photo-1581093458791-9d09dd68a0f0?w=800&q=60",
  },
  {
    name: "Metals & Fabrication",
    workers: "1,200+ Workers",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=60",
  },
  {
    name: "Plastics & Rubber",
    workers: "760+ Workers",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=60",
  },
  {
    name: "Warehousing & Distribution",
    workers: "3,200+ Workers",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=60",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-[#0B0E14] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24">
        <p className="text-[11px] tracking-widest font-bold text-[#F3A125] mb-4">
          INDUSTRIES WE SERVE
        </p>
        <h2 className="font-extrabold uppercase leading-[0.95] tracking-tight text-[40px] sm:text-[48px] max-w-3xl mb-14">
          Sector expertise across American manufacturing
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <a
              key={ind.name}
              href="#"
              className="group relative h-[260px] overflow-hidden block"
            >
              <img
                src={ind.img}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/30 to-transparent" />
              <span className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center bg-[#F3A125] text-[#0B0E14] opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={16} />
              </span>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[#F3A125] text-xs font-bold tracking-wide mb-2">
                  {ind.workers.toUpperCase()}
                </p>
                <h3 className="text-xl font-extrabold text-white">
                  {ind.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
