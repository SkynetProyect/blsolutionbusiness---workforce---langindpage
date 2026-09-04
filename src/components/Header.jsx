import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0E14] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <span className="w-9 h-9 flex items-center justify-center bg-[#F3A125] text-[#0B0E14] font-extrabold text-sm tracking-tight">
            PF
          </span>
          <span className="text-white font-extrabold text-lg tracking-tight">
            PLANTFORCE <span className="text-[#F3A125]">USA</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-wide font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-7">
          <a
            href="tel:18005550183"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <Phone size={15} />
            1-800-555-0183
          </a>
          <a
            href="#request"
            className="bg-[#F3A125] hover:bg-[#e0921a] text-[#0B0E14] font-bold text-[13px] tracking-wide px-5 py-3 transition-colors"
          >
            REQUEST WORKERS →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0B0E14] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-slate-300 hover:text-white"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a href="tel:18005550183" className="flex items-center gap-2 text-sm text-slate-300">
            <Phone size={15} />
            1-800-555-0183
          </a>
          <a
            href="#request"
            className="bg-[#F3A125] text-center text-[#0B0E14] font-bold text-[13px] tracking-wide px-5 py-3"
          >
            REQUEST WORKERS →
          </a>
        </div>
      )}
    </header>
  );
}
