import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { serviceImage } from "@/data/serviceImages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Shërbimet — BS Dental Clinic & Aesthetics | Veneers, Implante, Ortodonci Tiranë" },
      {
        name: "description",
        content:
          "Dentistri estetike (veneers Emax), implante dentare, ortodonci me maskerina transparente, endodonci, protetikë dhe trajtime estetike të fytyrës (facial fillers) në Kashar, Tiranë.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "BS Dental Clinic & Aesthetics" },
      { property: "og:title", content: "Shërbimet — BS Dental Clinic & Aesthetics" },
      {
        property: "og:description",
        content:
          "Gama e plotë e shërbimeve dentare dhe estetike: veneers, implante, ortodonci, endodonci dhe facial fillers në Tiranë.",
      },
      { property: "og:url", content: "https://bsdentalaesthetics.al/services" },
      { property: "og:image", content: "https://bsdentalaesthetics.al/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://bsdentalaesthetics.al/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Kryefaqja", item: "https://bsdentalaesthetics.al/" },
            { "@type": "ListItem", position: 2, name: "Shërbimet", item: "https://bsdentalaesthetics.al/services" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Shërbimet e BS Dental Clinic & Aesthetics",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "MedicalProcedure",
                name: "Dentistri Estetike — Veneers Emax",
                description: "Veneers porcelani Emax, faseta kompozite, zbardhim laser dhe dizajn dixhital i buzëqeshjes.",
                url: "https://bsdentalaesthetics.al/services#dentistri-estetike",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "MedicalProcedure",
                name: "Endodonci & Protetikë",
                description: "Trajtim kanalesh me rotativë, kurora zirkonia dhe ura fikse mbi implante.",
                url: "https://bsdentalaesthetics.al/services#endodonti-protetike",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "MedicalProcedure",
                name: "Implante Dentare & Kirurgji Orale",
                description: "Implante dentare premium, augmentim kockor, sinus lift dhe nxjerrje kirurgjikale.",
                url: "https://bsdentalaesthetics.al/services#implante-kirurgji",
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "MedicalProcedure",
                name: "Ortodonci & Maskerina Transparente",
                description: "Drejtim dhëmbësh me maskerina transparente ose aparate qeramike dhe metalike.",
                url: "https://bsdentalaesthetics.al/services#ortodonci-maskerina",
              },
            },
            {
              "@type": "ListItem",
              position: 5,
              item: {
                "@type": "MedicalProcedure",
                name: "Facial Fillers & Trajtime Estetike",
                description: "Mbushës buzësh me hijaluronik, trajtime rinovuese dhe estetikë e fytyrës.",
                url: "https://bsdentalaesthetics.al/services#facial-fillers-treatment",
              },
            },
          ],
        }),
      },
    ],
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