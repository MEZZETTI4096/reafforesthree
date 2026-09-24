type SeedVariant = "emerald" | "copper" | "violet";

type SeedCardProps = {
  seedId: string;
  title: string;
  subtitle: string;
  framework: string;
  code: string;
  variant?: SeedVariant;
  href?: string;
};

const VARIANTS: Record<
  SeedVariant,
  { glow: string; accent: string; ring: string }
> = {
  emerald: {
    glow: "glow-emerald",
    accent: "text-[#10B981]",
    ring: "",
  },
  copper: {
    glow: "glow-copper",
    accent: "text-[#FF9F1C]",
    ring: "glass-lift--copper",
  },
  violet: {
    glow: "glow-violet",
    accent: "text-[#A855F7]",
    ring: "glass-lift--violet",
  },
};

export default function SeedCard({
  seedId,
  title,
  subtitle,
  framework,
  code,
  variant = "emerald",
  href = "#",
}: SeedCardProps) {
  const v = VARIANTS[variant];

  return (
    <article
      className={`glass glass-lift squircle reticle relative overflow-hidden p-6 ${v.ring}`}
    >
      {/* Radiação térmica interna */}
      <div
        aria-hidden="true"
        className={`glow -right-16 -top-16 h-48 w-48 ${v.glow}`}
      />

      {/* Código de gravura da seção */}
      <div className="relative mb-4 flex items-center justify-between">
        <span className="engraving">{code}</span>
        <span className="engraving">BIO—STREAM: ACTIVE</span>
      </div>

      {/* Thumbnail com preview 3D em glow térmico radial */}
      <div className="bg-blueprint relative mb-5 h-40 overflow-hidden rounded-squircle-sm border border-slate-800/60 bg-depth">
        <div aria-hidden="true" className={`glow inset-0 ${v.glow}`} />
        <div
          aria-hidden="true"
          className="animate-scan absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-transparent via-white/5 to-transparent"
        />
        <div className="relative flex h-full items-center justify-center">
          <span
            className={`font-display text-5xl font-light ${v.accent} drop-shadow-[0_0_16px_currentColor]`}
          >
            ◇
          </span>
        </div>
        <span className="engraving absolute bottom-2 left-3">{framework}</span>
      </div>

      {/* Telemetria superior */}
      <div className="mb-3 flex flex-wrap items-center gap-3 font-display text-[10px] uppercase tracking-[0.25em] text-slate-500">
        <span>
          SEED_ID: <span className={v.accent}>{seedId}</span>
        </span>
        <span aria-hidden="true" className="h-3 w-px bg-slate-700" />
        <span>FRAMEWORK: {framework}</span>
      </div>

      <h3 className="font-display text-lg font-semibold tracking-tight text-slate-50">
        {title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-400">{subtitle}</p>

      {/* Botão de ação tática */}
      <a
        href={href}
        className="glass squircle-btn mt-6 flex items-center justify-center gap-2 px-4 py-2.5 font-ui text-sm font-medium text-slate-100 transition-all duration-300 hover:border-[#10B981]/60 hover:text-white hover:shadow-[0_0_24px_rgba(16,185,129,0.25)]"
      >
        Fazer Enxerto <span className={v.accent}>[Graft Project]</span>
      </a>
    </article>
  );
}
