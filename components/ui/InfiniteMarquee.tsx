const TECH_ROW = [
  "TypeScript",
  "WebGPU",
  "TSL Shaders",
  "Compute Shaders",
  "Yjs CRDTs",
  "WebAssembly",
  "React / Next.js",
  "Apache 2.0 License",
];

const STATION_ROW = [
  "Sementes",
  "Cultivos",
  "A Floresta",
  "Enxertos [Graft]",
  "Dra. Ada // AI Resident",
  "Gabriel Mezzetti — Fundador",
  "Open Source Collective (OSC)",
  "GitHub Sponsors",
];

function Track({
  items,
  direction,
}: {
  items: readonly string[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-fade overflow-hidden">
      <div
        className={`flex w-max items-center gap-8 py-2 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8"
          >
            <code className="glass squircle-btn rounded-squircle-sm px-4 py-1.5 font-ui text-sm font-medium text-slate-200">
              [{item}]
            </code>
            <span aria-hidden="true" className="text-[#10B981]">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function InfiniteMarquee() {
  return (
    <section
      aria-label="Tecnologias e vocabulário da Estação"
      className="marquee-hover relative w-full space-y-3 border-y border-slate-800/60 bg-depth/60 py-6"
    >
      <Track items={TECH_ROW} direction="left" />
      <Track items={STATION_ROW} direction="right" />
    </section>
  );
}
