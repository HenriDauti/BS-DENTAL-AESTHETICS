import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC } from "@/i18n/translations";
import { serviceImage } from "@/data/serviceImages";

export const Route = createFileRoute("/sherbimet/")({
  head: () => ({
    meta: [
      { title: "Shërbimet — BS Dental Clinic & Aesthetics" },
      { name: "description", content: "Dentistri estetike, endodonti, implante, ortodonci dhe trajtime estetike të fytyrës në një klinikë të vetme në Tiranë." },
      { property: "og:title", content: "Shërbimet — BS Dental Clinic & Aesthetics" },
      { property: "og:description", content: "Gama e plotë e shërbimeve dentare dhe estetike." },
      { property: "og:url", content: "/sherbimet" },
    ],
    links: [{ rel: "canonical", href: "/sherbimet" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();
  return (
    <>
      <section className="bg-muted py-20 md:py-28">
        <div className="container-x text-center">
          <div className="eyebrow">{t.services.eyebrow}</div>
          <span className="gold-divider mt-4 inline-block" />
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl">{t.services.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">{t.services.subtitle}</p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container-x space-y-20 md:space-y-28">
          {t.services.items.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.slug}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={serviceImage[s.slug]}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-serif text-4xl text-accent/40">0{i + 1}</div>
                  <span className="gold-divider mt-3 inline-block" />
                  <h2 className="mt-3 font-serif text-3xl text-primary md:text-4xl">{s.title}</h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.full}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {s.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-primary/85">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/sherbimet/$slug"
                      params={{ slug: s.slug }}
                      className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {t.common.learnMore} <ArrowRight size={14} />
                    </Link>
                    <a
                      href={`mailto:${CLINIC.email}?subject=${encodeURIComponent(s.title)}`}
                      className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {t.common.bookConsultation}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-accent/10 py-20">
        <div className="container-x text-center">
          <span className="gold-divider inline-block" />
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">{t.contact.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.contact.subtitle}</p>
          <a
            href={`mailto:${CLINIC.email}`}
            className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-accent hover:text-accent-foreground"
          >
            {t.common.bookAppointment} <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
