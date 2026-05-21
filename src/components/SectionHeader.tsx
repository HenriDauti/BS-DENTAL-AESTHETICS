import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignClass} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <span className="gold-divider mt-4" />
      <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
      {children}
    </div>
  );
}
