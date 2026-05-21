import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC, translations } from "@/i18n/translations";
import { serviceImage } from "@/data/serviceImages";

export const Route = createFileRoute("/sherbimet/$slug")({
  loader: ({ params }) => {
    const item = translations.sq.services.items.find((s) => s.slug === params.slug);
    if (!item) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const sq = translations.sq.services.items.find((s) => s.slug === params.slug);
    const title = sq ? `${sq.title} — BS Dental Clinic & Aesthetics` : "Shërbim";
    return {
      meta: [
        { title },
        { name: "description", content: sq?.short ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: sq?.short ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/sherbimet/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/sherbimet/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const { t, lang } = useLang();
  const items = translations[lang].services.items;
  const service = items.find((s) => s.slug === slug)!;
  const others = items.filter((s) => s.slug !== slug).slice(0, 3);
  const img = serviceImage[slug];

  return (
    <>
      {/* Hero with image */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="container-x relative py-20 md:py-28">
          <Link to="/sherbimet" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/70 hover:text-accent">
            <ArrowLeft size={14} /> {t.services.eyebrow}
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-accent">{t.services.eyebrow}</div>
              <span className="gold-divider mt-4 inline-block" />
              <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl">{service.title}</h1>
            </div>
            <p className="text-base leading-relaxed text-primary-foreground/80">{service.short}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-base leading-relaxed text-primary/85">{service.full}</p>
            <h3 className="mt-12 font-serif text-2xl text-primary">{lang === "sq" ? "Çfarë përfshin" : "What's included"}</h3>
            <span className="gold-divider mt-3 inline-block" />
            <ul className="mt-6 space-y-4">
              {service.features.map((f) => (
                <li key={f} className="flex gap-3 border-b border-border pb-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-primary/85">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${CLINIC.email}?subject=${encodeURIComponent(service.title)}`}
              className="mt-10 inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {t.common.bookAppointment} <ArrowRight size={14} />
            </a>
          </div>
          <aside className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={img} alt={service.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="border border-border bg-muted/40 p-6">
              <h4 className="font-serif text-lg text-primary">{t.common.hours}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{t.common.hoursValue}</p>
              <h4 className="mt-6 font-serif text-lg text-primary">{t.common.address}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{t.common.addressValue}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container-x">
          <div className="eyebrow">{t.services.eyebrow}</div>
          <span className="gold-divider mt-4 inline-block" />
          <h2 className="mt-4 font-serif text-2xl text-primary md:text-3xl">
            {lang === "sq" ? "Shërbime të tjera" : "Other services"}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} to="/sherbimet/$slug" params={{ slug: s.slug }} className="group overflow-hidden bg-background transition-colors hover:bg-primary hover:text-primary-foreground">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={serviceImage[s.slug]} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground group-hover:text-primary-foreground/75">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent">
                    {t.common.learnMore} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
