import { siteMetadata } from "@/lib/metadata";

export default function AuthorCard() {
  const { author } = siteMetadata;

  return (
    <section id="founder" className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="glass-strong squircle reticle relative mx-auto max-w-3xl overflow-hidden p-8 sm:p-10">
        {/* Radiação térmica interna */}
        <div
          aria-hidden="true"
          className="glow glow-emerald -left-20 -top-20 h-56 w-56"
        />

        <div className="relative mb-6 flex items-center justify-between">
          <span className="engraving">DOSSIÉ // FOUNDER—01</span>
          <span className="engraving">CLEARANCE: FULL</span>
        </div>

        <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div
            aria-hidden="true"
            className="flex h-24 w-24 shrink-0 select-none items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#0f766e] font-display text-3xl font-black text-black shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          >
            GM
          </div>

          <div className="text-center sm:text-left">
            <h2 className="font-display text-xl font-semibold tracking-tight text-slate-50">
              {author.name}
            </h2>
            <p className="font-ui text-sm text-[#10B981]">
              {author.jobTitle} · {author.studio}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Criador da Reafforesthree Station, desenvolve na interseção de
              gráficos em tempo real, WebGPU e software livre. Cultiva a
              estação sob Apache 2.0 para que qualquer criador crie em 3D
              direto do navegador — sem instalação e sem lock-in.
            </p>
            <a
              href={author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost mt-6"
            >
              Portfólio ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
