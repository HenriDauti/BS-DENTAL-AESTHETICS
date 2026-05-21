import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryItems, type GalleryCategory } from "@/data/gallery";
import clinicPlaceholder from "@/assets/clinic-placeholder.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — BS Dental Clinic & Aesthetics" },
      { name: "description", content: "Fotografi Para & Pas të rezultateve tona në veneers, mbushës buzësh, zbardhim dhe trajtime estetike." },
      { property: "og:title", content: "Galeria — BS Dental Clinic & Aesthetics" },
      { property: "og:description", content: "Rezultate reale nga klinika jonë në Kashar, Tiranë." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GalleryPage,
});

type Filter = "all" | GalleryCategory;

function GalleryPage() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter],
  );

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.gallery.filters.all },
    { key: "lips", label: t.gallery.filters.lips },
    { key: "veneers", label: t.gallery.filters.veneers },
    { key: "whitening", label: t.gallery.filters.whitening },
  ];

  return (
    <>
      <section className="bg-muted py-20 md:py-28">
        <div className="container-x text-center">
          <div className="eyebrow">{t.gallery.eyebrow}</div>
          <span className="gold-divider mt-4 inline-block" />
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl">
            {t.gallery.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">{t.gallery.subtitle}</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors ${
                  filter === f.key
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-primary/70 hover:border-accent hover:text-accent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <GalleryGrid images={filtered} />
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={clinicPlaceholder} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary/60">
              <span className="text-xs uppercase tracking-[0.32em] text-accent">{t.common.comingSoon}</span>
            </div>
          </div>
          <div>
            <div className="eyebrow">{t.gallery.eyebrow}</div>
            <span className="gold-divider mt-4 inline-block" />
            <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">{t.gallery.clinicTitle}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.gallery.clinicSoon}</p>
          </div>
        </div>
      </section>

      <section className="bg-accent/10 py-20">
        <div className="container-x text-center">
          <span className="gold-divider inline-block" />
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.home.ctaSubtitle}</p>
          <a
            href="mailto:bs.dental.aesthetics@gmail.com"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-accent hover:text-accent-foreground"
          >
            {t.home.heroCta}
          </a>
        </div>
      </section>
    </>
  );
}
