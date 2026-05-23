import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock, Instagram, ArrowRight, ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC } from "@/i18n/translations";
import { AppointmentForm } from "@/components/AppointmentForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { name: "description", content: "Na kontaktoni në bs.dental.aesthetics@gmail.com ose vizitoni klinikën tonë në Rrugën Joklin Persi, Kashar, Tiranë." },
      { property: "og:title", content: "Kontakt — BS Dental Clinic & Aesthetics" },
      { property: "og:description", content: "Rezervoni konsultën tuaj në klinikën BS." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();

  const cardHref = (kind: string) =>
    kind === "email"
      ? "mailto:" + CLINIC.email
      : kind === "address"
      ? CLINIC.mapsUrl
      : CLINIC.instagram;

  const cardIcon = (kind: string) =>
    kind === "email" ? Mail : kind === "address" ? MapPin : Instagram;

  return (
    <>
      {/* Hero */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-x text-center">
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <span className="gold-divider mt-4 inline-block" />
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl">
            {t.contact.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-background py-20">
        <div className="container-x">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {t.contact.cards.map((c) => {
              const Icon = cardIcon(c.kind);
              return (
                
                 <a key={c.kind}
                  href={cardHref(c.kind)}
                  target={c.kind === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex flex-col bg-background p-10 transition-colors hover:bg-muted"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon size={20} />
                  </span>
                  <div className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {c.title}
                  </div>
                  <div className="mt-2 font-serif text-xl text-primary">{c.value}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.hint}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent">
                    {c.cta} <ExternalLink size={12} />
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Clock size={16} className="shrink-0 text-accent" />
            {t.common.hoursValue}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-muted py-20 md:py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* Form */}
          <div>
            <div className="eyebrow">{t.contact.formEyebrow}</div>
            <span className="gold-divider mt-3 inline-block" />
            <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">
              {t.contact.formTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.contact.formSubtitle}
            </p>
            <div className="mt-8">
              <AppointmentForm />
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col">
            <div className="eyebrow">{t.contact.map}</div>
            <span className="gold-divider mt-3 inline-block" />
            <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">
              {t.common.addressValue}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.common.hoursValue}
            </p>
            <div className="mt-6 overflow-hidden border border-border">
              <iframe
                title="BS Dental Clinic & Aesthetics — Map"
                src={"https://www.google.com/maps?q=" + CLINIC.lat + "," + CLINIC.lng + "&z=16&output=embed"}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 lg:h-96"
              />
            </div>
            
             <a href={CLINIC.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.18em] text-accent hover:text-primary transition-colors"
            >
              <MapPin size={13} />
              {t.common.address} <ArrowRight size={12} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}