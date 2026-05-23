import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { serviceImage } from "@/data/serviceImages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { name: "description", content: "Dentistri estetike, endodonti, implante, ortodonci dhe trajtime estetike të fytyrës në një klinikë të vetme në Tiranë." },
      { property: "og:title", content: "Shërbimet — BS Dental Clinic & Aesthetics" },
      { property: "og:description", content: "Gama e plotë e shërbimeve dentare dhe estetike." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-x text-center">
          <div className="eyebrow">{t.services.eyebrow}</div>
          <span className="gold-divider mt-4 inline-block" />
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl">
            {t.services.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Service entries */}
      <section className="bg-background pb-20 md:pb-24">
        <div className="container-x space-y-0">
          {t.services.items.map((s, i) => {
            const reverse = i % 2 === 1;
            const isLast = i === t.services.items.length - 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className={`grid gap-10 lg:grid-cols-2 ${
                  i === 0 ? "pt-15 pb-20 md:pb-24" : "py-20 md:py-24"
                } ${!isLast ? "border-b border-border" : ""}`}
              >
                {/* Image */}
                <div
                  className={`min-h-[280px] overflow-hidden bg-muted ${
                    reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={serviceImage[s.slug]}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className={reverse ? "lg:order-1" : "lg:order-2"}>
                  <div className="font-serif text-4xl text-accent/40">0{i + 1}</div>
                  <span className="gold-divider mt-3 inline-block" />
                  <h2 className="mt-3 font-serif text-3xl text-primary md:text-4xl">{s.title}</h2>
                  <p className="mt-2 text-sm italic text-accent/80">{s.short}</p>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.full}</p>

                  <h3 className="mt-8 font-serif text-lg text-primary">
                    {lang === "sq" ? "Çfarë përfshin" : "What's included"}
                  </h3>
                  <span className="gold-divider mt-2 inline-block" />
                  <ul className="mt-4 space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 border-b border-border pb-3">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                        <span className="text-sm text-primary/85">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent/10 py-20">
        <div className="container-x text-center">
          <span className="gold-divider inline-block" />
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">{t.contact.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.contact.subtitle}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {t.common.bookAppointment} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}