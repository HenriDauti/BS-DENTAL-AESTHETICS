import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC } from "@/i18n/translations";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryItems, type GalleryCategory } from "@/data/gallery";
import about from "@/assets/about.jpg";
import doctorWorking from "@/assets/team/doctor-working.jpeg";
import doctorInjection from "@/assets/team/doctor-injection.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Fotografi Para & Pas të rezultateve tona në veneers, mbushës buzësh, zbardhim dhe trajtime estetike.",
      },
      { property: "og:title", content: "Galeria BS Dental Clinic & Aesthetics" },
      { property: "og:description", content: "Rezultate reale nga klinika jonë në Kashar, Tiranë." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Filter = "all" | GalleryCategory;

const clinicPhotos = [
  { src: about, alt: "BS Dental Clinic reception" },
  { src: doctorWorking, alt: "BS Dental Clinic treatment room" },
  { src: doctorInjection, alt: "BS Dental Clinic aesthetic suite" },
];
const showClinicImages = false;

function GalleryPage() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter((g) => g.category === filter);
  }, [filter]);

  const filters: Array<{ key: Filter; label: string }> = [
    { key: "all", label: t.gallery.filters.all },
    { key: "lips", label: t.gallery.filters.lips },
    { key: "veneers", label: t.gallery.filters.veneers },
    { key: "whitening", label: t.gallery.filters.whitening },
  ];

  const clinicSubtitle =
    lang === "sq"
      ? "Ambient modern dhe i qetë, i dizajnuar për komoditetin tuaj, steril, i rafinuar dhe gjithmonë i mirëpritur."
      : "A modern, calming space designed for your comfort, sterile, refined and always welcoming.";

  return (
    <>
      <section className="bg-muted py-20 md:py-28">
        <div className="container-x text-center">
          <div className="eyebrow">{t.gallery.eyebrow}</div>
          <span className="gold-divider mt-4 inline-block" />
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl">
            {t.gallery.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            {t.gallery.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x">
          {/* Single scrollable row on mobile, wraps centered on md+ */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {filters.map((f) => {
              const active = filter === f.key;
              const base = "flex-none px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors";
              const on = "bg-primary text-primary-foreground";
              const off = "border border-border text-primary/70 hover:border-accent hover:text-accent";
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={base + " " + (active ? on : off)}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <GalleryGrid images={filtered} />
        </div>
      </section>

      {showClinicImages && (
        <section className="bg-muted py-20">
          <div className="container-x">
            <div className="mb-10 text-center">
              <div className="eyebrow">{t.gallery.eyebrow}</div>
              <span className="gold-divider mt-4 inline-block" />
              <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">
                {t.gallery.clinicTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                {clinicSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clinicPhotos.map((photo, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-accent/10 py-20">
        <div className="container-x text-center">
          <span className="gold-divider inline-block" />
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">
            {t.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t.home.ctaSubtitle}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {t.home.heroCta}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}