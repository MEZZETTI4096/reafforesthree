import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { buildJsonLd, siteMetadata } from "@/lib/metadata";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-exo2",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Reafforesthree Station — Estação de Pesquisa de Web 3D por Gabriel Mezzetti",
  description:
    "Reafforesthree Station é o terminal de laboratório do ecossistema 3D Open-Core web-first criado por Gabriel Mezzetti: Sementes, Cultivos, A Floresta e Enxertos sobre Engine WebGPU. Apache 2.0, sem lock-in.",
  keywords: [
    "Gabriel Mezzetti",
    "Reafforesthree Station",
    "Sementes 3D",
    "Cultivos",
    "A Floresta",
    "Enxertos",
    "Dra. Ada",
    "WebGPU Game Engine",
    "TSL Shaders",
    "Compilador Sinapse",
    "NodeForge",
    "Open Source Collective",
    "Apache 2.0",
    "Mezzetti4096 Studio",
  ],
  authors: [
    { name: "Gabriel Mezzetti", url: "https://mezzetti4096.github.io/" },
  ],
  creator: "Gabriel Mezzetti (Mezzetti⁴⁰⁹⁶ Studio)",
  openGraph: {
    title: "Reafforesthree Station — Estação de Pesquisa de Web 3D Open-Core",
    description:
      "Terminal de laboratório do ecossistema 3D web-first: Sementes, Cultivos, A Floresta e Enxertos por Gabriel Mezzetti.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${exo2.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
        {/* Satoshi + Switzer via Fontshare (fontes oficiais dessas famílias) */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700&f[]=switzer@400,500&display=swap"
        />
        <meta name="author" content={siteMetadata.author.name} />
        <meta name="description" content={siteMetadata.description} />
      </head>
      <body className="bg-obsidian font-body text-slate-100 antialiased selection:bg-[#10B981] selection:text-black">
        {children}
      </body>
    </html>
  );
}
