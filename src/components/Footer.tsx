import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC } from "@/i18n/translations";
import logo from "@/assets/logoraw.jpeg";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 object-contain brightness-0 invert" />
            <div className="leading-tight">
              <div className="font-serif text-xl">BS Dental Clinic</div>
              <div className="text-[10px] tracking-[0.25em] text-accent uppercase">& Aesthetics</div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm text-primary-foreground/70">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-serif text-base text-accent">{t.footer.sitemap}</h4>
          <span className="gold-divider mt-2 mb-4" />
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent">{t.nav.home}</Link></li>
            <li><Link to="/rreth-nesh" className="hover:text-accent">{t.nav.about}</Link></li>
            <li><Link to="/sherbimet" className="hover:text-accent">{t.nav.services}</Link></li>
            <li><Link to="/galeria" className="hover:text-accent">{t.nav.gallery}</Link></li>
            <li><Link to="/kontakt" className="hover:text-accent">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base text-accent">{t.footer.contact}</h4>
          <span className="gold-divider mt-2 mb-4" />
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0 text-accent" />
              <span>{t.common.addressValue}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={14} className="mt-1 shrink-0 text-accent" />
              <span>{t.common.hoursValue}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1 shrink-0 text-accent" />
              <a href={`mailto:${CLINIC.email}`} className="break-all hover:text-accent">
                {CLINIC.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram size={14} className="mt-1 shrink-0 text-accent" />
              <a href={CLINIC.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
                {CLINIC.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {CLINIC.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
