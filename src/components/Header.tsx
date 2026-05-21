import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC } from "@/i18n/translations";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", key: "home" as const },
  { to: "/rreth-nesh", key: "about" as const },
  { to: "/sherbimet", key: "services" as const },
  { to: "/galeria", key: "gallery" as const },
  { to: "/kontakt", key: "contact" as const },
];

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="BS Dental Clinic & Aesthetics" className="h-12 w-12 object-contain" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-lg text-primary">BS Dental Clinic</span>
            <span className="text-[10px] tracking-[0.25em] text-accent uppercase">& Aesthetics</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-sm font-medium text-primary/80 transition-colors hover:text-accent"
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 text-xs font-medium text-primary/60 md:flex">
            <button
              type="button"
              onClick={() => setLang("sq")}
              className={lang === "sq" ? "text-accent" : "hover:text-primary"}
            >
              SQ
            </button>
            <span className="text-border">/</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-accent" : "hover:text-primary"}
            >
              EN
            </button>
          </div>
          <a
            href={`mailto:${CLINIC.email}`}
            className="hidden bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:inline-flex"
          >
            {t.nav.book}
          </a>
          <button
            type="button"
            className="text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium text-primary"
              >
                {t.nav[l.key]}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <button onClick={() => setLang("sq")} className={lang === "sq" ? "text-accent" : ""}>SQ</button>
                <span>/</span>
                <button onClick={() => setLang("en")} className={lang === "en" ? "text-accent" : ""}>EN</button>
              </div>
              <a
                href={`mailto:${CLINIC.email}`}
                className="bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground"
              >
                {t.nav.book}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
