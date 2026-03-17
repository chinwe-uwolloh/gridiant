"use client";

import { useEffect, useState } from "react";

export function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const total = 36;
    const tick = () => {
      frame += 1;
      const next = value * (frame / total);
      setDisplay(next);
      if (frame < total) requestAnimationFrame(tick);
    };
    tick();
  }, [value]);

  return <>{prefix}{display.toFixed(decimals)}{suffix}</>;
}
