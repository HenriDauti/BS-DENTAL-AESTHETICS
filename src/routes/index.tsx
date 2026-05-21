import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC, translations } from "@/i18n/translations";
import { SectionHeader } from "@/components/SectionHeader";
import { galleryItems, testimonials } from "@/data/gallery";
import hero from "@/assets/hero.jpg";
import doctorWorking from "@/assets/team/doctor-working.jpeg";
import doctorPortrait from "@/assets/team/doctor-portrait.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BS Dental Clinic & Aesthetics — Stomatologji dhe Estetikë në Tiranë" },
      { name: "description", content: "Klinikë moderne dentare dhe estetike në Kashar. Veneers, implante, ortodonci dhe mbushës buzësh me Dr. Bia & Dr. Miti Sinani." },
      { property: "og:title", content: "BS Dental Clinic & Aesthetics" },
      { property: "og:description", content: "Buzëqeshje që frymëzojnë besim. Dentistri estetike & trajtime estetike në Tiranë." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t, lang } = useLang();
  const services = translations[lang].services.items;
  const beforeAfter = galleryItems.slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={hero} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="container-x relative grid min-h-[640px] items-center py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-accent">{t.home.heroEyebrow}</div>
            <span className="gold-divider mt-4" />
            <h1 className="mt-6 max-w-xl font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl">{t.home.heroTitle}</h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80">{t.home.heroSubtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`mailto:${CLINIC.email}`} className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-xs uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-primary-foreground hover:text-primary">
                {t.home.heroCta} <ArrowRight size={14} />
              </a>
              <Link to="/sherbimet" className="inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:border-accent hover:text-accent">
                {t.common.exploreServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.home.servicesEyebrow} title={t.home.servicesTitle} subtitle={t.home.servicesSubtitle} />
          <div className="mt-16 grid gap-px overflow-hidden bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={s.slug} to="/sherbimet/$slug" params={{ slug: s.slug }} className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted">
                <span className="font-serif text-4xl text-accent/40 transition-colors group-hover:text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-2xl text-primary">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent">
                  {t.common.learnMore} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/sherbimet" className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              {t.common.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-muted py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={doctorWorking} alt="Mjek duke kryer trajtim" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
          <div>
            <div className="eyebrow">{t.home.whyEyebrow}</div>
            <span className="gold-divider mt-4" />
            <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl lg:text-5xl">{t.home.whyTitle}</h2>
            <ul className="mt-10 space-y-6">
              {t.home.pillars.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={14} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-primary">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-accent">{t.home.statsEyebrow}</div>
              <span className="gold-divider mt-4 inline-block" />
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">{t.home.statsTitle}</h2>
            </div>
            <div className="grid grid-cols-2 gap-px bg-primary-foreground/10 lg:grid-cols-4">
              {t.home.stats.map((s) => (
                <div key={s.label} className="bg-primary p-6 text-center md:p-8">
                  <div className="font-serif text-4xl text-accent md:text-5xl">{s.value}</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.home.processEyebrow} title={t.home.processTitle} subtitle={t.home.processSubtitle} />
          <div className="mt-16 grid gap-px overflow-hidden bg-border md:grid-cols-2 lg:grid-cols-4">
            {t.home.process.map((p, i) => (
              <div key={p.title} className="relative bg-background p-8">
                <div className="font-serif text-5xl text-accent/30">0{i + 1}</div>
                <span className="gold-divider mt-4 block" />
                <h3 className="mt-4 font-serif text-xl text-primary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-muted py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.home.beforeAfterEyebrow} title={t.home.beforeAfterTitle} subtitle={t.home.beforeAfterSubtitle} />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {beforeAfter.map((g, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden bg-background">
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/galeria" className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              {t.common.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-accent">{t.home.doctorsEyebrow}</div>
            <span className="gold-divider mt-4" />
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl">{t.home.doctorsTitle}</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/75">{t.home.doctorsBody}</p>
            <Link to="/rreth-nesh" className="mt-8 inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent">
              {t.nav.about} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={doctorPortrait} alt="Mjekët e klinikës BS" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.home.testimonialsEyebrow} title={t.home.testimonialsTitle} />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((tm) => (
              <figure key={tm.name} className="relative border border-border bg-muted/40 p-8">
                <Quote className="absolute right-6 top-6 text-accent/30" size={36} />
                <blockquote className="font-serif text-lg leading-relaxed text-primary md:text-xl">
                  “{lang === "sq" ? tm.quote : tm.quoteEn}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <div>
                    <div className="text-sm font-medium text-primary">{tm.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{tm.service}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="eyebrow">{t.home.faqEyebrow}</div>
            <span className="gold-divider mt-4 inline-block" />
            <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl lg:text-5xl">{t.home.faqTitle}</h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{t.home.heroSubtitle}</p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {t.home.faq.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-serif text-lg text-primary md:text-xl">{f.q}</span>
                    {open ? <Minus size={18} className="shrink-0 text-accent" /> : <Plus size={18} className="shrink-0 text-accent" />}
                  </button>
                  {open && <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent/10 py-24">
        <div className="container-x text-center">
          <span className="gold-divider inline-block" />
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl lg:text-5xl">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">{t.home.ctaSubtitle}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${CLINIC.email}`} className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              {t.common.bookAppointment} <ArrowRight size={14} />
            </a>
            <Link to="/kontakt" className="inline-flex items-center gap-2 border border-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
