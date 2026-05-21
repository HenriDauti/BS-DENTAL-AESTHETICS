import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Heart, CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC, translations } from "@/i18n/translations";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/rreth-nesh")({
  head: () => ({
    meta: [
      { title: "Rreth Nesh — BS Dental Clinic & Aesthetics" },
      { name: "description", content: "Njihuni me BS Dental Clinic & Aesthetics — klinikë moderne dentare dhe estetike në Kashar, Tiranë." },
      { property: "og:title", content: "Rreth Nesh — BS Dental Clinic & Aesthetics" },
      { property: "og:description", content: "Klinikë dentare dhe estetike me përkushtim ndaj cilësisë dhe estetikës natyrale." },
      { property: "og:url", content: "/rreth-nesh" },
    ],
    links: [{ rel: "canonical", href: "/rreth-nesh" }],
  }),
  component: AboutPage,
});

const HIGHLIGHT_ICONS = [Heart, ShieldCheck, Sparkles] as const;

function AboutPage() {
  const { t, lang } = useLang();
  const services = translations[lang].services.items;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-x text-center">
          <div className="eyebrow">{t.about.eyebrow}</div>
          <span className="gold-divider mt-4 inline-block" />
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl">
            {t.about.title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t.about.intro}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t.about.mission}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${CLINIC.email}`}
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t.common.bookConsultation} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.about.eyebrow} title={t.about.highlightsTitle} />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {t.about.highlights.map((h, i) => {
              const Icon = HIGHLIGHT_ICONS[i] ?? Heart;
              return (
                <div key={h.title} className="bg-muted p-10">
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

      {/* ── Services — left narrative + right list ───────────────────── */}
      <section className="bg-muted py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <div className="eyebrow">{t.services.eyebrow}</div>
            <span className="gold-divider mt-4 inline-block" />
            <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">
              {t.about.servicesPreviewTitle}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t.about.servicesBody}
            </p>
            <Link
              to="/sherbimet"
              className="mt-8 inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t.common.viewAll} <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right — service rows */}
          <div className="divide-y divide-border border-y border-border">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/sherbimet"
                hash={s.slug}
                className="group flex items-center justify-between gap-6 py-6 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <CheckCircle2 size={16} />
                  </span>
                  <div>
                    <div className="font-serif text-lg text-primary transition-colors group-hover:text-accent">
                      {s.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {s.short}
                    </div>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="eyebrow">{t.about.missionEyebrow}</div>
            <span className="gold-divider mt-4 inline-block" />
            <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
              {t.about.missionTitle}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t.about.missionBody}
            </p>
          </div>
          <div className="space-y-8 lg:pt-2">
            {t.about.missionPoints.map((mp) => (
              <div key={mp.title} className="flex gap-6 border-l-2 border-accent pl-6">
                <div>
                  <h3 className="font-serif text-xl text-primary">{mp.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mp.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ────────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-x text-center">
          <span className="gold-divider inline-block" />
          <blockquote className="mx-auto mt-6 max-w-2xl font-serif text-2xl italic leading-relaxed text-primary-foreground md:text-3xl">
            &ldquo;{t.about.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-accent">
            — {CLINIC.name}
          </p>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="bg-muted py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.about.eyebrow} title={t.about.valuesTitle} />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <h3 className="font-serif text-xl text-accent">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-accent/10 py-24">
        <div className="container-x text-center">
          <span className="gold-divider inline-block" />
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
            {t.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            {t.home.ctaSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${CLINIC.email}`}
              className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t.common.bookAppointment} <ArrowRight size={14} />
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 border border-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}