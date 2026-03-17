"use client";

import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/primitives/AnimatedNumber";

export function QuantumSavingsMeter({ valueKwh, maxKwh = 30 }: { valueKwh: number; maxKwh?: number }) {
  const progress = Math.max(0, Math.min(100, (valueKwh / maxKwh) * 100));

  return (
    <div className="glass-card p-5">
      <p className="text-xs uppercase tracking-[0.12em] text-emerald-200/80">Quantum energy saved</p>
      <p className="mt-2 text-2xl font-semibold text-iceMist">
        <AnimatedNumber value={valueKwh} decimals={1} suffix=" kWh" />
      </p>
      <p className="mt-1 text-sm text-slateAsh">Measured savings from quantum-powered optimization this session.</p>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
