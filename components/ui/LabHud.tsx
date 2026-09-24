"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Metric = {
  id: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  color: string;
};

const METRICS: Metric[] = [
  { id: "fps", label: "FPS", unit: "fps", min: 112, max: 144, color: "#10B981" },
  { id: "vram", label: "VRAM", unit: "%", min: 32, max: 54, color: "#FF9F1C" },
  { id: "compute", label: "COMPUTE PASSES", unit: "p/f", min: 4, max: 12, color: "#A855F7" },
];

const ECG_POINTS = [
  "0,20 30,20 38,6 46,34 54,20 100,20",
  "100,20 130,20 138,6 146,34 154,20 200,20",
  "200,20 230,20 238,6 246,34 254,20 300,20",
  "300,20 330,20 338,6 346,34 354,20 400,20",
  "400,20 430,20 438,6 446,34 454,20 500,20",
  "500,20 530,20 538,6 546,34 554,20 600,20",
].join(" ");

export default function LabHud() {
  const [values, setValues] = useState<number[]>(METRICS.map((m) => m.min));

  useEffect(() => {
    const id = setInterval(() => {
      setValues((prev) =>
        prev.map((v, i) => {
          const m = METRICS[i];
          const span = m.max - m.min;
          const next = v + (Math.random() - 0.5) * span * 0.3;
          return Math.min(m.max, Math.max(m.min, next));
        })
      );
    }, 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hud" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="glass squircle reticle relative overflow-hidden p-8">
        {/* Radiação térmica ácida (vida orgânica em execução) */}
        <div
          aria-hidden="true"
          className="glow glow-acid -bottom-28 left-1/3 h-72 w-72"
        />

        <div className="relative mb-8 flex flex-wrap items-center justify-between gap-3">
          <span className="engraving">LAB—HUD // BIO-STREAM: ACTIVE</span>
          <span className="engraving">STN—TELEMETRY // SECTOR—04</span>
        </div>

        <div className="relative grid gap-4 sm:grid-cols-3">
          {METRICS.map((m, i) => {
            const pct = ((values[i] - m.min) / (m.max - m.min)) * 100;
            return (
              <div key={m.id} className="glass rounded-squircle-sm p-5">
                <div className="flex items-center justify-between font-display text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  <span>{m.label}</span>
                  <span style={{ color: m.color }}>● LIVE</span>
                </div>
                <div
                  className="mt-3 font-display text-3xl font-light tracking-tight"
                  style={{ color: m.color }}
                >
                  {Math.round(values[i])}
                  <span className="ml-1.5 text-xs uppercase text-slate-500">
                    {m.unit}
                  </span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800/80">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: m.color, boxShadow: `0 0 12px ${m.color}` }}
                    animate={{ width: `${pct}%` }}
                    transition={{ type: "spring", stiffness: 60, damping: 16 }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Linha biométrica (ECG do fluxo de renderização) */}
        <div className="relative mt-6 overflow-hidden rounded-squircle-sm border border-slate-800/60 bg-depth px-2 py-3">
          <svg viewBox="0 0 600 40" className="h-10 w-full" aria-hidden="true">
            <polyline
              points={ECG_POINTS}
              fill="none"
              stroke="#84CC16"
              strokeWidth="1.5"
              className="animate-ecg"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <span className="engraving absolute right-3 top-2">BIO—STREAM</span>
        </div>

        <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3">
          <span className="engraving">CUT—LASER // STN—001</span>
          <span className="engraving">DRA. ADA // MONITORANDO CULTIVOS</span>
        </div>
      </div>
    </section>
  );
}
