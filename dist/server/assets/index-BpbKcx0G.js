import { r as reactExports, T as jsxRuntimeExports } from "./server-A1jVNAG6.js";
import { c as createLucideIcon, u as useLang, t as translations, a as CLINIC, L as Link } from "./router-grICdqG-.js";
import { S as SectionHeader } from "./SectionHeader--lt1YRoc.js";
import { g as galleryItems, C as ChevronLeft, a as ChevronRight, t as testimonials } from "./gallery-Bc5DTdnz.js";
import { A as ArrowRight } from "./arrow-right-qGzoFODA.js";
import { C as Check } from "./check-boYdam9f.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const hero = "/assets/hero-vrfxoig4.jpg";
const doctorWorking = "/assets/doctor-working-Oy_H5u2c.jpeg";
const doctorPortrait = "/assets/doctor-portrait-DuWx4mPP.jpeg";
function HomePage() {
  const {
    t,
    lang
  } = useLang();
  const services = translations[lang].services.items;
  const beforeAfter = galleryItems.slice(0, 3);
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  const [baSlide, setBaSlide] = reactExports.useState(0);
  const baTouchX = reactExports.useRef(0);
  const [tmSlide, setTmSlide] = reactExports.useState(0);
  const tmTouchX = reactExports.useRef(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden bg-primary text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "", width: 1920, height: 1080, className: "absolute inset-0 h-full w-full object-cover opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x relative grid min-h-[520px] items-center py-16 lg:grid-cols-2 lg:min-h-[640px] lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium uppercase tracking-[0.32em] text-accent", children: t.home.heroEyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 max-w-xl font-serif text-3xl leading-[1.1] md:text-5xl lg:text-6xl", children: t.home.heroTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80 md:mt-6 md:text-base", children: t.home.heroSubtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${CLINIC.email}`, className: "inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-primary-foreground hover:text-primary md:px-6 md:py-3", children: [
            t.home.heroCta,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 border border-primary-foreground/30 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:border-accent hover:text-accent md:px-6 md:py-3", children: t.common.exploreServices })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.home.servicesEyebrow, title: t.home.servicesTitle, subtitle: t.home.servicesSubtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-6 md:mt-16", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", hash: s.slug, className: `group flex flex-col bg-background p-4 transition-colors hover:bg-muted md:p-8 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${i === services.length - 1 && services.length % 2 !== 0 ? "col-span-2 lg:col-span-3 max-lg:items-center max-lg:text-center" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-2xl text-accent/40 transition-colors group-hover:text-accent md:text-4xl", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-serif text-base text-primary md:mt-4 md:text-2xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 hidden flex-1 text-sm leading-relaxed text-muted-foreground sm:block md:mt-3", children: s.short }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-accent md:mt-6 md:gap-2", children: [
          t.common.learnMore,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
        ] })
      ] }, s.slug)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center md:mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground", children: [
        t.common.viewAll,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-14 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: doctorWorking, alt: "Mjek duke kryer trajtim", loading: "lazy", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-lg:text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.home.whyEyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-2xl text-primary md:text-4xl lg:text-5xl", children: t.home.whyTitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-5 md:mt-10 md:space-y-6", children: t.home.pillars.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-base text-primary md:text-lg", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: p.body })
          ] })
        ] }, p.title)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-14 text-primary-foreground md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-[1fr_2fr] md:items-end md:gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-md:text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.32em] text-accent", children: t.home.statsEyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-2xl md:text-4xl", children: t.home.statsTitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-px bg-primary-foreground/10 lg:grid-cols-4", children: t.home.stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary p-5 text-center md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-accent md:text-5xl", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/70 md:mt-3", children: s.label })
      ] }, s.label)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.home.processEyebrow, title: t.home.processTitle, subtitle: t.home.processSubtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-4 md:mt-16", children: t.home.process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-background p-5 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-3xl text-accent/30 md:text-5xl", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-3 block md:mt-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-serif text-base text-primary md:mt-4 md:text-xl", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground md:mt-3 md:text-sm", children: p.body })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-14 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.home.beforeAfterEyebrow, title: t.home.beforeAfterTitle, subtitle: t.home.beforeAfterSubtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 md:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", onTouchStart: (e) => {
          baTouchX.current = e.touches[0].clientX;
        }, onTouchEnd: (e) => {
          const diff = baTouchX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) {
            setBaSlide((s) => (s + (diff > 0 ? 1 : -1) + beforeAfter.length) % beforeAfter.length);
          }
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex transition-transform duration-300 ease-in-out", style: {
          transform: `translateX(-${baSlide * 100}%)`
        }, children: beforeAfter.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] w-full flex-none overflow-hidden bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.src, alt: g.alt, loading: "lazy", className: "h-full w-full object-cover" }) }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setBaSlide((s) => (s - 1 + beforeAfter.length) % beforeAfter.length), "aria-label": "Previous slide", className: "flex h-8 w-8 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: beforeAfter.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setBaSlide(i), "aria-label": `Slide ${i + 1}`, className: `h-1.5 rounded-full transition-all duration-200 ${baSlide === i ? "w-5 bg-accent" : "w-1.5 bg-accent/30"}` }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setBaSlide((s) => (s + 1) % beforeAfter.length), "aria-label": "Next slide", className: "flex h-8 w-8 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:mt-16 md:grid md:grid-cols-3 md:gap-6", children: beforeAfter.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.src, alt: g.alt, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105" }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center md:mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground", children: [
        t.common.viewAll,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-14 text-primary-foreground md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-lg:text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium uppercase tracking-[0.32em] text-accent", children: t.home.doctorsEyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-2xl md:text-4xl lg:text-5xl", children: t.home.doctorsTitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-primary-foreground/75 md:mt-6 md:max-w-md", children: t.home.doctorsBody }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-6 inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent md:mt-8", children: [
          t.nav.about,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden lg:aspect-[4/5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: doctorPortrait, alt: "Mjekët e klinikës BS", loading: "lazy", className: "h-full w-full object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.home.testimonialsEyebrow, title: t.home.testimonialsTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 md:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", onTouchStart: (e) => {
          tmTouchX.current = e.touches[0].clientX;
        }, onTouchEnd: (e) => {
          const diff = tmTouchX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) {
            setTmSlide((s) => (s + (diff > 0 ? 1 : -1) + testimonials.length) % testimonials.length);
          }
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex transition-transform duration-300 ease-in-out", style: {
          transform: `translateX(-${tmSlide * 100}%)`
        }, children: testimonials.map((tm) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative w-full flex-none border border-border bg-muted/40 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute right-5 top-5 text-accent/30", size: 30 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-serif text-base leading-relaxed text-primary", children: [
            '"',
            lang === "sq" ? tm.quote : tm.quoteEn,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-primary", children: tm.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: lang === "sq" ? tm.service : tm.serviceEn })
            ] })
          ] })
        ] }, tm.name)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTmSlide((s) => (s - 1 + testimonials.length) % testimonials.length), "aria-label": "Previous testimonial", className: "flex h-8 w-8 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: testimonials.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTmSlide(i), "aria-label": `Testimonial ${i + 1}`, className: `h-1.5 rounded-full transition-all duration-200 ${tmSlide === i ? "w-5 bg-accent" : "w-1.5 bg-accent/30"}` }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTmSlide((s) => (s + 1) % testimonials.length), "aria-label": "Next testimonial", className: "flex h-8 w-8 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:mt-16 md:grid md:grid-cols-2 md:gap-6", children: testimonials.map((tm) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative border border-border bg-muted/40 p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute right-6 top-6 text-accent/30", size: 30 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-serif text-xl leading-relaxed text-primary", children: [
          '"',
          lang === "sq" ? tm.quote : tm.quoteEn,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-primary", children: tm.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: lang === "sq" ? tm.service : tm.serviceEn })
          ] })
        ] })
      ] }, tm.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-14 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-lg:text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.home.faqEyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-2xl text-primary md:text-4xl lg:text-5xl", children: t.home.faqTitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground md:mt-6 lg:max-w-sm", children: t.home.faqSubtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border-y border-border", children: t.home.faq.map((f, i) => {
        const open = openFaq === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(open ? null : i), className: "flex w-full items-center justify-between gap-4 py-4 text-left md:gap-6 md:py-5", "aria-expanded": open, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-base text-primary md:text-xl", children: f.q }),
            open ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 18, className: "shrink-0 text-accent" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18, className: "shrink-0 text-accent" })
          ] }),
          open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-5 pr-6 text-sm leading-relaxed text-muted-foreground md:pb-6 md:pr-10", children: f.a })
        ] }, f.q);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-accent/10 py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-2xl text-primary md:text-4xl lg:text-5xl", children: t.home.ctaTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:mt-5 md:text-base", children: t.home.ctaSubtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-4 md:mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: [
        t.common.bookAppointment,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  HomePage as component
};
