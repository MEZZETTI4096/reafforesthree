"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Sementes", href: "#sementes" },
  { label: "Cultivos", href: "#cultivos" },
  { label: "A Floresta", href: "#floresta" },
];

function PulseDot({ className = "bg-[#10B981]" }: { className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`inline-block h-2 w-2 rounded-full ${className} shadow-[0_0_12px_currentColor]`}
      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.55, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function StationHeader() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/40 backdrop-blur-xl"
      style={{ boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)" }}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        {/* Logo da Estação */}
        <a href="#top" className="flex items-center gap-3">
          <PulseDot />
          <span className="font-display text-base font-semibold tracking-tight text-slate-50">
            Reafforesthree <span className="text-slate-500">Station</span>
          </span>
          <span className="engraving hidden lg:inline">STN—NAVBAR // ONLINE</span>
        </a>

        {/* Navegação bio-tecnológica */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-ui text-sm font-medium text-slate-300 transition-colors hover:text-[#10B981]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Widget da Dra. Ada */}
        <div className="glass squircle-btn hidden items-center gap-2.5 px-3 py-1.5 sm:flex">
          <PulseDot className="bg-[#A855F7] text-[#A855F7]" />
          <span className="font-display text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-200">
            Dra. Ada
          </span>
          <span className="engraving">AI RESIDENT // ONLINE</span>
        </div>
      </div>
    </header>
  );
}
