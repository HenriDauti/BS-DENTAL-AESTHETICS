import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC } from "@/i18n/translations";
import logo from "@/assets/logo.png";

const COORDS = { lat: 41.324177, lng: 19.780306 };
const MAP_EMBED = `https://maps.google.com/maps?q=${COORDS.lat},${COORDS.lng}&z=17&output=embed`;

export function Footer() {
  const { t, lang } = useLang();

  const serviceLinks = [
    { hash: "dentistri-estetike", label: lang === "sq" ? "Dentistri Estetike" : "Aesthetic Dentistry" },
    { hash: "endodonti-protetike", label: lang === "sq" ? "Endodonti & Protetikë" : "Endodontics & Prosthetics" },
    { hash: "implante-kirurgji", label: lang === "sq" ? "Implante & Kirurgji" : "Implants & Surgery" },
    { hash: "ortodonci-maskerina", label: lang === "sq" ? "Ortodonci & Maskerina" : "Orthodontics & Aligners" },
    { hash: "facial-fillers-treatment", label: lang === "sq" ? "Trajtime Estetike" : "Aesthetic Treatments" },
  ];

  const tagline =
    lang === "sq"
      ? "BS Dental Clinic & Aesthetics ofron kujdes dentar profesional me teknologjinë më të fundit dhe përkujdesje personale. Misioni ynë është të krijojmë buzëqeshje të shëndetshme dhe të bukura."
      : "BS Dental Clinic & Aesthetics delivers professional dental care with the latest technology and a personal touch. Our mission is to create healthy, beautiful smiles.";

  const hours =
    lang === "sq"
      ? "E Hënë – E Diel: 09:00 – 20:00"
      : "Monday – Sunday: 09:00 – 20:00";

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">

      {/* Main columns
          Mobile  (default):  2-col grid
            Row 1 — Brand spans both cols
            Row 2 — Services | Sitemap  (side by side ✓)
            Row 3 — Contact spans both cols
          Desktop (lg):       4-col grid, all in one row
      */}
      <div className="container-x grid grid-cols-2 gap-10 py-16 lg:grid-cols-4">

        {/* Brand — full width on mobile, 1 col on desktop */}
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-14 w-14 object-contain brightness-0 invert" />
            <div className="leading-tight">
              <div className="font-serif text-xl">BS Dental Clinic</div>
              <div className="text-[10px] tracking-[0.25em] text-accent uppercase">& Aesthetics</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed">{tagline}</p>
        </div>

        {/* Services — col 1 on mobile */}
        <div>
          <h4 className="font-serif text-base text-accent">{t.nav.services}</h4>
          <span className="gold-divider mt-2 mb-4" />
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {serviceLinks.map((s) => (
              <li key={s.hash}>
                <Link to="/services" hash={s.hash} className="hover:text-accent transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sitemap (Pages) — col 2 on mobile, same row as Services */}
        <div>
          <h4 className="font-serif text-base text-accent">{t.footer.sitemap}</h4>
          <span className="gold-divider mt-2 mb-4" />
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent transition-colors">{t.nav.home}</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">{t.nav.about}</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">{t.nav.services}</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">{t.nav.gallery}</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Contact — full width on mobile, 1 col on desktop */}
        <div className="col-span-2 lg:col-span-1">
          <h4 className="font-serif text-base text-accent">{t.footer.contact}</h4>
          <span className="gold-divider mt-2 mb-4" />
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
              <span>{t.common.addressValue}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={14} className="mt-0.5 shrink-0 text-accent" />
              <span>{hours}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 shrink-0 text-accent" />
              <a href={`mailto:${CLINIC.email}`} className="break-all hover:text-accent transition-colors">
                {CLINIC.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram size={14} className="mt-0.5 shrink-0 text-accent" />
              <a href={CLINIC.instagram} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                {CLINIC.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Map */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-x pt-8 pb-0">
          <div className="flex items-center gap-2 mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
            <MapPin size={12} className="text-accent" />
            <span>{t.common.addressValue}</span>
          </div>
          <div className="overflow-hidden rounded-2xl" style={{ height: "220px" }}>
            <iframe
              title="BS Dental Clinic location"
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 mt-8">
        <div className="container-x py-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {CLINIC.name}. {t.footer.rights}
        </div>
      </div>

    </footer>
  );
}