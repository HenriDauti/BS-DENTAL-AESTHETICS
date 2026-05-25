import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC, translations } from "@/i18n/translations";
import { SectionHeader } from "@/components/SectionHeader";
import { galleryItems, testimonials } from "@/data/gallery";
import hero from "@/assets/hero.jpg";
import doctorWorking from "@/assets/team/doctor-working.jpeg";
import doctorPortrait from "@/assets/team/doctor-portrait.jpeg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { t, lang } = useLang();
  const services = translations[lang].services.items;
  const beforeAfter = galleryItems.slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Before/After carousel
  const [baSlide, setBaSlide] = useState(0);
  const baTouchX = useRef(0);

  // Testimonials carousel
  const [tmSlide, setTmSlide] = useState(0);
  const tmTouchX = useRef(0);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={hero} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="container-x relative grid min-h-[520px] items-center py-16 lg:grid-cols-2 lg:min-h-[640px] lg:py-32">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-accent">{t.home.heroEyebrow}</div>
            <span className="gold-divider mt-4" />
            <h1 className="mt-6 max-w-xl font-serif text-3xl leading-[1.1] md:text-5xl lg:text-6xl">{t.home.heroTitle}</h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80 md:mt-6 md:text-base">{t.home.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
              <a href={`mailto:${CLINIC.email}`} className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-primary-foreground hover:text-primary md:px-6 md:py-3">
                {t.home.heroCta} <ArrowRight size={14} />
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 border border-primary-foreground/30 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:border-accent hover:text-accent md:px-6 md:py-3">
                {t.common.exploreServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services — 2 cols on mobile, 5th item centered */}
      <section className="bg-background py-14 md:py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.home.servicesEyebrow} title={t.home.servicesTitle} subtitle={t.home.servicesSubtitle} />
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-6 md:mt-16">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className={`group flex flex-col bg-background p-4 transition-colors hover:bg-muted md:p-8 ${
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                } ${
                  i === services.length - 1 && services.length % 2 !== 0
                    ? "col-span-2 lg:col-span-3 max-lg:items-center max-lg:text-center"
                    : ""
                }`}
              >
                <span className="font-serif text-2xl text-accent/40 transition-colors group-hover:text-accent md:text-4xl">0{i + 1}</span>
                <h3 className="mt-2 font-serif text-base text-primary md:mt-4 md:text-2xl">{s.title}</h3>
                <p className="mt-1 hidden flex-1 text-sm leading-relaxed text-muted-foreground sm:block md:mt-3">{s.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-accent md:mt-6 md:gap-2">
                  {t.common.learnMore} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              {t.common.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-muted py-14 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
            <img src={doctorWorking} alt="Mjek duke kryer trajtim" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
          <div>
            <div className="max-lg:text-center">
              <div className="eyebrow">{t.home.whyEyebrow}</div>
              <span className="gold-divider mt-4 inline-block" />
              <h2 className="mt-4 font-serif text-2xl text-primary md:text-4xl lg:text-5xl">{t.home.whyTitle}</h2>
            </div>
            <ul className="mt-6 space-y-5 md:mt-10 md:space-y-6">
              {t.home.pillars.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={14} />
                  </span>
                  <div>
                    <h3 className="font-serif text-base text-primary md:text-lg">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-14 text-primary-foreground md:py-20">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-end md:gap-10">
            <div className="max-md:text-center">
              <div className="text-[10px] uppercase tracking-[0.32em] text-accent">{t.home.statsEyebrow}</div>
              <span className="gold-divider mt-4 inline-block" />
              <h2 className="mt-4 font-serif text-2xl md:text-4xl">{t.home.statsTitle}</h2>
            </div>
            <div className="grid grid-cols-2 gap-px bg-primary-foreground/10 lg:grid-cols-4">
              {t.home.stats.map((s) => (
                <div key={s.label} className="bg-primary p-5 text-center md:p-8">
                  <div className="font-serif text-3xl text-accent md:text-5xl">{s.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/70 md:mt-3">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-14 md:py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.home.processEyebrow} title={t.home.processTitle} subtitle={t.home.processSubtitle} />
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-4 md:mt-16">
            {t.home.process.map((p, i) => (
              <div key={p.title} className="relative bg-background p-5 md:p-8">
                <div className="font-serif text-3xl text-accent/30 md:text-5xl">0{i + 1}</div>
                <span className="gold-divider mt-3 block md:mt-4" />
                <h3 className="mt-3 font-serif text-base text-primary md:mt-4 md:text-xl">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:mt-3 md:text-sm">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After — carousel on mobile, grid on desktop */}
      <section className="bg-muted py-14 md:py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.home.beforeAfterEyebrow} title={t.home.beforeAfterTitle} subtitle={t.home.beforeAfterSubtitle} />

          {/* Mobile carousel */}
          <div className="mt-10 md:hidden">
            <div
              className="overflow-hidden"
              onTouchStart={(e) => { baTouchX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                const diff = baTouchX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) {
                  setBaSlide((s) => (s + (diff > 0 ? 1 : -1) + beforeAfter.length) % beforeAfter.length);
                }
              }}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${baSlide * 100}%)` }}
              >
                {beforeAfter.map((g, i) => (
                  <div key={i} className="aspect-[4/5] w-full flex-none overflow-hidden bg-background">
                    <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                onClick={() => setBaSlide((s) => (s - 1 + beforeAfter.length) % beforeAfter.length)}
                aria-label="Previous slide"
                className="flex h-8 w-8 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-2">
                {beforeAfter.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setBaSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-200 ${baSlide === i ? "w-5 bg-accent" : "w-1.5 bg-accent/30"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setBaSlide((s) => (s + 1) % beforeAfter.length)}
                aria-label="Next slide"
                className="flex h-8 w-8 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:mt-16 md:grid md:grid-cols-3 md:gap-6">
            {beforeAfter.map((g, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden bg-background">
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              {t.common.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-primary py-14 text-primary-foreground md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <div className="max-lg:text-center">
              <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-accent">{t.home.doctorsEyebrow}</div>
              <span className="gold-divider mt-4 inline-block" />
              <h2 className="mt-4 font-serif text-2xl md:text-4xl lg:text-5xl">{t.home.doctorsTitle}</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75 md:mt-6 md:max-w-md">{t.home.doctorsBody}</p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent md:mt-8">
              {t.nav.about} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
            <img src={doctorPortrait} alt="Mjekët e klinikës BS" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials — carousel on mobile, grid on desktop */}
      <section className="bg-background py-14 md:py-24">
        <div className="container-x">
          <SectionHeader eyebrow={t.home.testimonialsEyebrow} title={t.home.testimonialsTitle} />

          {/* Mobile carousel */}
          <div className="mt-10 md:hidden">
            <div
              className="overflow-hidden"
              onTouchStart={(e) => { tmTouchX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                const diff = tmTouchX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) {
                  setTmSlide((s) => (s + (diff > 0 ? 1 : -1) + testimonials.length) % testimonials.length);
                }
              }}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${tmSlide * 100}%)` }}
              >
                {testimonials.map((tm) => (
                  <figure key={tm.name} className="relative w-full flex-none border border-border bg-muted/40 p-6">
                    <Quote className="absolute right-5 top-5 text-accent/30" size={30} />
                    <blockquote className="font-serif text-base leading-relaxed text-primary">
                      &ldquo;{lang === "sq" ? tm.quote : tm.quoteEn}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <span className="h-px w-8 bg-accent" />
                      <div>
                        <div className="text-sm font-medium text-primary">{tm.name}</div>
                        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {lang === "sq" ? tm.service : tm.serviceEn}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                onClick={() => setTmSlide((s) => (s - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
                className="flex h-8 w-8 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTmSlide(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-200 ${tmSlide === i ? "w-5 bg-accent" : "w-1.5 bg-accent/30"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTmSlide((s) => (s + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="flex h-8 w-8 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:mt-16 md:grid md:grid-cols-2 md:gap-6">
            {testimonials.map((tm) => (
              <figure key={tm.name} className="relative border border-border bg-muted/40 p-8">
                <Quote className="absolute right-6 top-6 text-accent/30" size={30} />
                <blockquote className="font-serif text-xl leading-relaxed text-primary">
                  &ldquo;{lang === "sq" ? tm.quote : tm.quoteEn}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <div>
                    <div className="text-sm font-medium text-primary">{tm.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {lang === "sq" ? tm.service : tm.serviceEn}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-14 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <div className="max-lg:text-center">
              <div className="eyebrow">{t.home.faqEyebrow}</div>
              <span className="gold-divider mt-4 inline-block" />
              <h2 className="mt-4 font-serif text-2xl text-primary md:text-4xl lg:text-5xl">{t.home.faqTitle}</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:mt-6 lg:max-w-sm">{t.home.faqSubtitle}</p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {t.home.faq.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left md:gap-6 md:py-5"
                    aria-expanded={open}
                  >
                    <span className="font-serif text-base text-primary md:text-xl">{f.q}</span>
                    {open ? <Minus size={18} className="shrink-0 text-accent" /> : <Plus size={18} className="shrink-0 text-accent" />}
                  </button>
                  {open && <p className="pb-5 pr-6 text-sm leading-relaxed text-muted-foreground md:pb-6 md:pr-10">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent/10 py-16 md:py-24">
        <div className="container-x text-center">
          <span className="gold-divider inline-block" />
          <h2 className="mt-4 font-serif text-2xl text-primary md:text-4xl lg:text-5xl">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:mt-5 md:text-base">{t.home.ctaSubtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              {t.common.bookAppointment} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}