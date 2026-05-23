import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC } from "@/i18n/translations";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", key: "home" as const },
  { to: "/about", key: "about" as const },
  { to: "/services", key: "services" as const },
  { to: "/gallery", key: "gallery" as const },
  { to: "/contact", key: "contact" as const },
];

function LangToggle({ lang, setLang }: { lang: string; setLang: (l: "sq" | "en") => void }) {
  return (
    <div className="flex items-center rounded-full border border-border overflow-hidden text-[11px] font-medium uppercase tracking-[0.15em]">
      <button
        type="button"
        onClick={() => setLang("sq")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "sq" ? "bg-primary text-primary-foreground" : "text-primary/60 hover:text-primary"
        }`}
      >
        SQ
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "en" ? "bg-primary text-primary-foreground" : "text-primary/60 hover:text-primary"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="BS Dental Clinic & Aesthetics" className="h-14 w-14 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-sm text-primary sm:text-lg">BS Dental Clinic</span>
            <span className="text-[9px] tracking-[0.2em] text-accent uppercase sm:text-[10px] sm:tracking-[0.25em]">& Aesthetics</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent font-medium" }}
              inactiveProps={{ className: "text-primary/80" }}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
          
           <a href={`mailto:${CLINIC.email}`}
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
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-accent" }}
                inactiveProps={{ className: "text-primary" }}
                className="border-b border-border/50 py-3 text-sm font-medium"
              >
                {t.nav[l.key]}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <LangToggle lang={lang} setLang={setLang} />
              
              <a  href={`mailto:${CLINIC.email}`}
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