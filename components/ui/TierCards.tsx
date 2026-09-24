type Tier = {
  name: string;
  price: string;
  tagline: string;
  perks: string[];
  featured?: boolean;
  cta: { label: string; href: string };
};

const TIERS: Tier[] = [
  {
    name: "Semente",
    price: "R$ 25",
    tagline: "Plante a primeira semente",
    perks: [
      "Nome nos créditos da V1",
      "Acesso antecipado aos builds",
      "Canal exclusivo no Discord",
    ],
    cta: { label: "Apoiar", href: "https://github.com/sponsors/MEZZETTI4096" },
  },
  {
    name: "Dev",
    price: "R$ 75",
    tagline: "Para quem constrói com o ecossistema",
    perks: [
      "Tudo do tier Semente",
      "Acesso ao repositório de examples",
      "Suporte prioritário no GitHub",
    ],
    featured: true,
    cta: { label: "Apoiar", href: "https://github.com/sponsors/MEZZETTI4096" },
  },
  {
    name: "Residente",
    price: "R$ 250",
    tagline: "Membro permanente do estúdio",
    perks: [
      "Tudo do tier Dev",
      "Voto em roadmap trimestral",
      "Sessão mensal com o fundador",
    ],
    cta: { label: "Apoiar", href: "https://github.com/sponsors/MEZZETTI4096" },
  },
  {
    name: "Patrocínio B2B",
    price: "A partir de R$ 500",
    tagline: "Empresas via Open Source Collective",
    perks: [
      "Logo no site e no repositório",
      "Recibo fiscal via OSC",
      "Alinhamento de roadmap corporativo",
    ],
    cta: {
      label: "Falar com o estúdio",
      href: "https://opencollective.com",
    },
  },
];

export default function TierCards() {
  return (
    <section id="tiers" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <header className="mb-10 text-center">
        <p className="engraving mb-3">STN—009 // SUPPORT—STREAM</p>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Escolha seu tier de apoio
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-slate-400">
          Sustentação mensal via{" "}
          <a
            className="text-[#10B981] underline underline-offset-4"
            href="https://github.com/sponsors/MEZZETTI4096"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Sponsors
          </a>{" "}
          e governança fiscal via{" "}
          <a
            className="text-[#10B981] underline underline-offset-4"
            href="https://opencollective.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Source Collective
          </a>
          .
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((t) => (
          <a
            key={t.name}
            href={t.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass glass-lift squircle reticle group relative flex flex-col overflow-hidden p-6 ${
              t.featured
                ? "border-[#10B981]/60 shadow-[0_0_48px_rgba(16,185,129,0.2)]"
                : ""
            }`}
          >
            {t.featured && (
              <span className="squircle-btn absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10B981] px-3 py-0.5 font-ui text-xs font-bold text-black">
                Mais popular
              </span>
            )}
            <h3 className="font-display font-semibold tracking-tight text-slate-50">
              {t.name}
            </h3>
            <p className="mt-1 font-display text-2xl font-light neon-text">
              {t.price}
            </p>
            <p className="mt-1 text-xs text-slate-500">{t.tagline}</p>
            <ul className="mt-4 flex-1 space-y-2">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-slate-400">
                  <span aria-hidden="true" className="text-[#10B981]">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <span
              className={`squircle-btn mt-6 inline-flex items-center justify-center px-4 py-2.5 font-ui text-sm font-semibold transition-all ${
                t.featured
                  ? "bg-[#10B981] text-black group-hover:shadow-[0_0_32px_rgba(16,185,129,0.55)]"
                  : "border border-slate-700 text-slate-100 group-hover:border-[#10B981]/60"
              }`}
            >
              {t.cta.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
