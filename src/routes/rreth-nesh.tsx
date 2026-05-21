import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Heart } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC, translations } from "@/i18n/translations";
import { SectionHeader } from "@/components/SectionHeader";
import about from "@/assets/about.jpg";
import doctorPortrait from "@/assets/team/doctor-portrait.jpeg";
import doctorInjection from "@/assets/team/doctor-injection.jpeg";

export const Route = createFileRoute("/rreth-nesh")({
  head: () => ({
    meta: [
      { title: "Rreth Nesh — BS Dental Clinic & Aesthetics" },
      { name: "description", content: "Njihuni me Dr. Bia Sinani dhe Dr. Miti Sinani, themeluesit e BS Dental Clinic & Aesthetics në Kashar, Tiranë." },
      { property: "og:title", content: "Rreth Nesh — BS Dental Clinic & Aesthetics" },
      { property: "og:description", content: "Mjekë stomatologë me përkushtim ndaj cilësisë dhe estetikës natyrale." },
      { property: "og:url", content: "/rreth-nesh" },
    ],
    links: [{ rel: "canonical", href: "/rreth-nesh" }],
  }),
  component: AboutPage,
});

const ICONS = [Heart, ShieldCheck, Sparkles];

function AboutPage() {
  const { t, lang } = useLang();
  const doctorImages = [doctorPortrait, doctorInjection];
  const services = translations[lang].services.items;

  return (
    <>
      {/* Hero */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-x text-center">
          <div className="eyebrow">{t.about.eyebrow}</div>
          <span className="gold-divider mt-4 inline-block" />
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl">{t.about.title}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={about} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">{t.about.intro}</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.about.mission}</p>
            <a href={`mailto:${CLINIC.email}`} className="mt-10 inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              {t.common.bookConsultation} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-muted py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.about.eyebrow} title={t.about.highlightsTitle} />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {t.about.highlights.map((h, i) => {
              const Icon = ICONS[i] ?? Heart;
              return (
                <div key={h.title} className="bg-background p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-primary">{h.title}</h3>
                  <span className="gold-divider mt-3 inline-block" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-background py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.services.eyebrow} title={t.about.servicesPreviewTitle} subtitle={t.about.servicesPreviewBody} />
          <div className="mt-12 grid gap-px overflow-hidden bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={s.slug} to="/sherbimet/$slug" params={{ slug: s.slug }} className="group bg-background p-8 transition-colors hover:bg-muted">
                <span className="font-serif text-3xl text-accent/40 group-hover:text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-muted py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.about.eyebrow} title={t.about.doctorsTitle} />
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {t.about.doctors.map((d, i) => (
              <article key={d.name} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-background">
                  <img src={doctorImages[i]} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-6">
                  <h3 className="font-serif text-2xl text-primary">{d.name}</h3>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-accent">{d.role}</div>
                  <span className="gold-divider mt-4" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-x">
          <div className="text-[10px] uppercase tracking-[0.32em] text-accent">{t.about.eyebrow}</div>
          <span className="gold-divider mt-4 inline-block" />
          <h2 className="mt-4 max-w-xl font-serif text-3xl md:text-4xl lg:text-5xl">{t.about.valuesTitle}</h2>
          <div className="mt-12 grid gap-px bg-primary-foreground/10 md:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((v) => (
              <div key={v.title} className="bg-primary p-8">
                <h3 className="font-serif text-xl text-accent">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
