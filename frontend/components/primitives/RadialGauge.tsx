"use client";

import { motion } from "framer-motion";

export function RadialGauge({ value, label }: { value: number; label: string }) {
  const normalized = Math.max(0, Math.min(100, value));
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (normalized / 100) * circumference;

  return (
    <div className="flex items-center gap-3">
      <svg width="110" height="110" viewBox="0 0 110 110">
        <circle cx="55" cy="55" r={radius} fill="none" stroke="rgba(216,226,234,0.15)" strokeWidth="10" />
        <motion.circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="url(#g1)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          transform="rotate(-90 55 55)"
        />
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9dd4ff" />
            <stop offset="100%" stopColor="#7af4c6" />
          </linearGradient>
        </defs>
        <text x="55" y="59" textAnchor="middle" className="fill-iceMist text-lg font-semibold">{normalized}%</text>
      </svg>
      <p className="max-w-[120px] text-sm text-slateAsh">{label}</p>
    </div>
  );
}
