import Link from "next/link";
import type { Route } from "next";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: Route;
  variant?: "primary" | "secondary";
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition soft-hover";
const styles = {
  primary: "bg-gradient-to-r from-emerald-300 to-cyan-300 text-[#07111a]",
  secondary: "border border-white/15 bg-white/[0.04] text-iceMist hover:bg-white/[0.1]",
} as const;

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const classes = `${base} ${styles[variant]} ${className}`.trim();
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes}>{children}</button>;
}
