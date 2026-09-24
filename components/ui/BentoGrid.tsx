import type { ReactNode } from "react";

type Surface = {
  id: string;
  code: string;
  surface: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  accent: "emerald" | "acid" | "copper" | "violet";
  href: string;
};

const SURFACES: Surface[] = [
  {
    id: "engine",
    code: "STN—101 // SEEDS",
    surface: "Sementes",
    title: "Engine / Sinapse",
    subtitle: "Game Engine WebGPU",
    description:
      "Game engine web-first com compilador Sinapse: escreva intenções, o compilador gera pipelines WebGPU otimizados.",
    icon: "◈",
    accent: "emerald",
    href: "#sementes",
  },
  {
    id: "studios",
    code: "STN—102 // CROPS",
    surface: "Cultivos",
    title: "Studios / NodeForge",
    subtitle: "Estúdio de Shaders TSL",
    description:
      "Edição visual de shaders TSL com Yjs CRDTs e Code Ejection para TypeScript puro — sem lock-in de editor.",
    icon: "◇",
    accent: "violet",
    href: "#sementes",
  },
  {
    id: "archives",
    code: "STN—103 // FOREST",
    surface: "A Floresta",
    title: "Archives",
    subtitle: "Acervo Social de Remixes",
    description:
      "O acervo vivo da comunidade: publique, versionar e faça Enxertos de cenas e shaders — tudo sob Apache 2.0.",
    icon: "◆",
    accent: "acid",
    href: "#floresta",
  },
  {
    id: "hub",
    code: "STN—104 // HUB",
    surface: "Hub",
    title: "Hub de Arrecadação",
    subtitle: "Sustentação da Estação",
    description:
      "Transparência de metas, tiers de apoio e governança fiscal via Open Source Collective e GitHub Sponsors.",
    icon: "◉",
    accent: "copper",
    href: "#funding",
  },
];

function accentClasses(accent: Surface["accent"]) {
  switch (accent) {
    case "violet":
      return {
        glow: "glow-violet",
        ring: "glass-lift--violet",
        text: "text-[#A855F7]",
        chip: "border-[#A855F7]/30 text-[#A855F7]",
      };
    case "acid":
      return {
        glow: "glow-acid",
        ring: "",
        text: "text-[#84CC16]",
        chip: "border-[#84CC16]/30 text-[#84CC16]",
      };
    case "copper":
      return {
        glow: "glow-copper",
        ring: "glass-lift--copper",
        text: "text-[#FF9F1C]",
        chip: "border-[#FF9F1C]/30 text-[#FF9F1C]",
      };
    default:
      return {
        glow: "glow-emerald",
        ring: "",
        text: "text-[#10B981]",
        chip: "border-[#10B981]/30 text-[#10B981]",
      };
  }
}

export default function BentoGrid() {
  return (
    <section id="cultivos" className="mx-auto w-full max-w-6xl px-6 py-20">
      <header className="mb-10">
        <p className="engraving mb-3">STN—003 // CULTIVATION GRID</p>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          As 4 Superfícies do Ecossistema
        </h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Arquitetura Open-Core: o núcleo é open source (Apache 2.0) e as
          camadas avançadas sustentam o desenvolvimento sem aprisionar ninguém.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SURFACES.map((s) => {
          const c = accentClasses(s.accent);
          return (
            <a
              key={s.id}
              href={s.href}
              className={`glass glass-lift squircle reticle group relative flex flex-col overflow-hidden p-6 ${c.ring}`}
            >
              <div
                aria-hidden="true"
                className={`glow -right-16 -top-16 h-40 w-40 ${c.glow}`}
              />
              <div className="relative mb-4 flex items-center justify-between">
                <span className="engraving">{s.code}</span>
                <span
                  aria-hidden="true"
                  className={`font-display text-2xl font-light ${c.text}`}
                >
                  {s.icon}
                </span>
              </div>
              <h3 className="relative font-display text-lg font-semibold tracking-tight text-slate-50">
                {s.title}
              </h3>
              <p className="relative text-xs uppercase tracking-widest text-slate-500">
                {s.surface} · {s.subtitle}
              </p>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {s.description}
              </p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                <span
                  className={`rounded-squircle-sm border px-3 py-0.5 text-xs ${c.chip}`}
                >
                  {s.surface}
                </span>
                <span className="rounded-squircle-sm border border-slate-800 px-3 py-0.5 text-xs text-slate-400">
                  {s.subtitle}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
