"use client";

import { useEffect } from "react";
import StationHeader from "@/components/ui/StationHeader";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import BentoGrid from "@/components/ui/BentoGrid";
import SeedCard from "@/components/ui/SeedCard";
import LabHud from "@/components/ui/LabHud";
import AuthorCard from "@/components/ui/AuthorCard";
import FundingGoals from "@/components/ui/FundingGoals";
import TierCards from "@/components/ui/TierCards";
import HeroCanvas from "@/components/canvas/HeroCanvas";

const SEEDS = [
  {
    seedId: "#4096",
    title: "Núcleo Sinapse",
    subtitle:
      "Semente base do compilador de pipelines WebGPU — intenções de alto nível viram compute shaders otimizados.",
    framework: "TSL / WebGPU",
    code: "STN—4096 // SEED",
    variant: "emerald" as const,
  },
  {
    seedId: "#0872",
    title: "NodeForge Graft",
    subtitle:
      "Nó visual de shaders TSL com Code Ejection para TypeScript puro — sem lock-in de editor.",
    framework: "TSL / NodeForge",
    code: "STN—0872 // SEED",
    variant: "violet" as const,
  },
  {
    seedId: "#2048",
    title: "Forest Stream",
    subtitle:
      "Template de cena colaborativa com Yjs CRDTs — pronto para enxertos da comunidade.",
    framework: "CRDT / WASM",
    code: "STN—2048 // SEED",
    variant: "copper" as const,
  },
];

export default function Page() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="relative min-h-screen">
      {/* Grade científica de fundo */}
      <div
        aria-hidden="true"
        className="bg-labgrid pointer-events-none fixed inset-0 -z-20"
      />
      <HeroCanvas />

      {/* Véu de legibilidade sobre o canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian"
      />

      <StationHeader />

      {/* STN—001 // Hero da Estação */}
      <section className="mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center">
        <p className="engraving mb-5">STN—001 // SECTOR—04</p>
        <p className="glass squircle-btn mb-8 px-4 py-1.5 font-ui text-xs font-medium uppercase tracking-widest text-[#10B981]">
          Open-Core · Apache 2.0 · Sem Lock-In
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-light leading-tight tracking-tight text-slate-50 sm:text-6xl">
          Reafforesthree{" "}
          <span className="font-semibold neon-text">Station</span>
          <span className="mt-3 block text-2xl font-light text-slate-400 sm:text-3xl">
            o terminal de laboratório para cultivar a Web 3D
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
          Uma estação de pesquisa científica de Web 3D criada por{" "}
          <strong className="text-slate-200">Gabriel Mezzetti</strong>: plante{" "}
          <strong className="text-slate-200">Sementes</strong>, cultive
          projetos, explore{" "}
          <strong className="text-slate-200">A Floresta</strong> comunitária e
          faça <strong className="text-slate-200">Enxertos</strong> — tudo
          direto do navegador, monitorado pela{" "}
          <strong className="text-slate-200">Dra. Ada</strong>.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#sementes" className="cta-primary">
            Explorar Sementes
          </a>
          <a href="#funding" className="cta-ghost">
            Apoiar a Estação
          </a>
        </div>
      </section>

      {/* STN—002 // Marquee duplo */}
      <div className="reveal">
        <InfiniteMarquee />
      </div>

      {/* STN—003 // Grade de Cultivos */}
      <div className="reveal">
        <BentoGrid />
      </div>

      {/* STN—004 // Banco de Sementes */}
      <div className="reveal">
        <section id="sementes" className="mx-auto w-full max-w-6xl px-6 py-20">
          <header className="mb-10">
            <p className="engraving mb-3">STN—004 // GERMPLASM BANK</p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Sementes disponíveis para cultivo
            </h2>
            <p className="mt-2 max-w-2xl text-slate-400">
              Templates base e nós pré-projetados, prontos para virarem
              Cultivos ativos — ou materiais para Enxertos.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SEEDS.map((seed) => (
              <SeedCard key={seed.seedId} {...seed} />
            ))}
          </div>
        </section>
      </div>

      {/* STN—005 // A Floresta */}
      <div className="reveal">
        <section id="floresta" className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="glass squircle reticle relative overflow-hidden p-10 text-center">
            <div
              aria-hidden="true"
              className="glow glow-acid -left-24 -top-24 h-64 w-64"
            />
            <div
              aria-hidden="true"
              className="glow glow-emerald -bottom-24 -right-24 h-64 w-64"
            />
            <p className="engraving relative mb-3">STN—005 // BIO—STREAM: ACTIVE</p>
            <h2 className="relative font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              A Floresta — acervo comunitário de ativos
            </h2>
            <p className="relative mx-auto mt-3 max-w-2xl leading-relaxed text-slate-400">
              A galeria viva dos Archives: cenas, shaders e nós publicados por
              criadores de todo o mundo, versionados e abertos a Enxertos —
              clone, forkar e mesclare materiais sob Apache 2.0.
            </p>
            <a href="#tiers" className="cta-ghost relative mt-8">
              Explorar A Floresta ↗
            </a>
          </div>
        </section>
      </div>

      {/* STN—006 // HUD de Laboratório */}
      <div className="reveal">
        <LabHud />
      </div>

      {/* STN—007 // Dossiê do Fundador */}
      <div className="reveal">
        <AuthorCard />
      </div>

      {/* STN—008 // Metas */}
      <div className="reveal">
        <FundingGoals />
      </div>

      {/* STN—009 // Tiers */}
      <div className="reveal">
        <TierCards />
      </div>

      <footer className="border-t border-slate-800/60 py-10 text-center">
        <p className="engraving mb-4">STN—EOF // BIO—STREAM: ACTIVE</p>
        <p className="text-sm text-slate-500">
          Reafforesthree Station — por Gabriel Mezzetti (Mezzetti⁴⁰⁹⁶ Studio) ·{" "}
          <a
            className="transition-colors hover:text-[#10B981]"
            href="https://spdx.org/licenses/Apache-2.0.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apache 2.0
          </a>{" "}
          ·{" "}
          <a
            className="transition-colors hover:text-[#10B981]"
            href="https://github.com/MEZZETTI4096"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
