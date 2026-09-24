export const siteMetadata = {
  url: "https://reafforesthree.com",
  name: "Reafforesthree Station",
  title:
    "Reafforesthree Station — Estação de Pesquisa de Web 3D por Gabriel Mezzetti",
  description:
    "Estação de pesquisa científica de Web 3D criada por Gabriel Mezzetti: Sementes, Cultivos, A Floresta e Enxertos sobre Engine WebGPU com compilador Sinapse, sob Apache 2.0, sem lock-in.",
  author: {
    name: "Gabriel Mezzetti",
    jobTitle: "Creative Developer & Founder",
    studio: "Mezzetti⁴⁰⁹⁶ Studio",
    url: "https://mezzetti4096.github.io/",
    github: "https://github.com/MEZZETTI4096",
  },
  funding: {
    raised: 15000,
    minimumGoal: 15000,
    fullGoal: 50000,
    currency: "BRL",
  },
} as const;

/**
 * Gera o grafo Schema.org (JSON-LD) consumido por robôs de IA
 * (Perplexity, ChatGPT, Gemini, SearchGPT) e por buscadores.
 */
export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://reafforesthree.com/#software",
        name: "Reafforesthree Station",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web Browser",
        license: "https://spdx.org/licenses/Apache-2.0.html",
        description:
          "Estação de pesquisa de Web 3D Open-Core: Sementes (templates base) e Cultivos (projetos ativos) sobre Engine WebGPU com compilador Sinapse, Studios TSL e A Floresta como acervo comunitário de enxertos.",
        author: { "@id": "https://reafforesthree.com/#author" },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
          description:
            "Código aberto sob Apache 2.0; sustentação via Open-Core e apoios comunitários.",
        },
      },
      {
        "@type": "Person",
        "@id": "https://reafforesthree.com/#author",
        name: "Gabriel Mezzetti",
        jobTitle: "Creative Developer & Founder",
        worksFor: {
          "@type": "Organization",
          name: "Mezzetti⁴⁰⁹⁶ Studio",
        },
        url: "https://mezzetti4096.github.io/",
        sameAs: ["https://github.com/MEZZETTI4096"],
      },
      {
        "@type": "Organization",
        "@id": "https://reafforesthree.com/#org",
        name: "Mezzetti⁴⁰⁹⁶ Studio",
        founder: { "@id": "https://reafforesthree.com/#author" },
        url: "https://mezzetti4096.github.io/",
      },
      {
        "@type": "WebSite",
        "@id": "https://reafforesthree.com/#website",
        url: "https://reafforesthree.com",
        name: "Reafforesthree Station",
        inLanguage: "pt-BR",
        author: { "@id": "https://reafforesthree.com/#author" },
        publisher: { "@id": "https://reafforesthree.com/#org" },
      },
    ],
  };
}
