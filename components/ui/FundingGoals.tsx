import { siteMetadata } from "@/lib/metadata";

const brl = (v: number) =>
  v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export default function FundingGoals() {
  const { raised, minimumGoal, fullGoal } = siteMetadata.funding;
  const progress = Math.min((raised / fullGoal) * 100, 100);
  const minMark = (minimumGoal / fullGoal) * 100;

  return (
    <section id="funding" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="glass squircle reticle relative overflow-hidden p-8 sm:p-10">
        {/* Radiação térmica cobre (energia de conexão) */}
        <div
          aria-hidden="true"
          className="glow glow-copper -right-24 -top-24 h-64 w-64"
        />

        <div className="relative mb-8 flex flex-wrap items-center justify-between gap-3">
          <span className="engraving">STN—008 // FUND—STREAM: ACTIVE</span>
          <span className="engraving">GOVERNANÇA: OSC</span>
        </div>

        <header className="relative mb-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Metas da V1
          </h2>
          <p className="mt-2 text-slate-400">
            Meta mínima {brl(minimumGoal)} · Meta completa {brl(fullGoal)} — os
            recursos sustentam o cultivo integral do ecossistema.
          </p>
        </header>

        <div className="relative mb-4 flex items-end justify-between">
          <div>
            <span className="font-display text-4xl font-light neon-text">
              {brl(raised)}
            </span>
            <span className="ml-2 text-lg text-slate-500">
              / {brl(fullGoal)}
            </span>
          </div>
          <span className="font-display text-sm font-semibold text-slate-400">
            {progress.toFixed(0)}%
          </span>
        </div>

        <div
          role="progressbar"
          aria-valuenow={raised}
          aria-valuemin={0}
          aria-valuemax={fullGoal}
          aria-label="Progresso de arrecadação da V1"
          className="relative h-4 w-full overflow-hidden rounded-full border border-slate-800 bg-slate-950"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#0f766e] via-[#10B981] to-[#84CC16] shadow-[0_0_24px_rgba(16,185,129,0.6)] transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
          {/* Marcador da meta mínima */}
          <span
            aria-hidden="true"
            className="absolute top-0 h-full w-px bg-[#FF9F1C]"
            style={{ left: `${minMark}%` }}
          />
        </div>

        <div className="relative mt-2 flex justify-between font-display text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <span>R$ 0</span>
          <span className="text-[#FF9F1C]">meta mínima</span>
          <span>{brl(fullGoal)}</span>
        </div>
      </div>
    </section>
  );
}
