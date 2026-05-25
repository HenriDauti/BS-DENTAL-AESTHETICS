import { T as jsxRuntimeExports } from "./server-A1jVNAG6.js";
import { c as createLucideIcon, u as useLang, t as translations, a as CLINIC, L as Link } from "./router-grICdqG-.js";
import { S as SectionHeader } from "./SectionHeader--lt1YRoc.js";
import { A as ArrowRight } from "./arrow-right-qGzoFODA.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const HIGHLIGHT_ICONS = [Heart, ShieldCheck, Sparkles];
function AboutPage() {
  const {
    t,
    lang
  } = useLang();
  const services = translations[lang].services.items;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.about.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl", children: t.about.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground", children: t.about.intro }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground", children: t.about.mission }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${CLINIC.email}`, className: "inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: [
        t.common.bookConsultation,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.home.whyEyebrow, title: t.about.highlightsTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-3 gap-px bg-border", children: t.about.highlights.map((h, i) => {
        const Icon = HIGHLIGHT_ICONS[i] ?? Heart;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted p-4 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-serif text-xl text-primary md:text-2xl", children: h.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-3 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: h.body })
        ] }, h.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-16 lg:grid-cols-2 lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-lg:text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.services.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-primary md:text-4xl", children: t.about.servicesPreviewTitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground max-lg:text-center", children: t.about.servicesBody }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-lg:text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "mt-8 inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground", children: [
          t.common.viewAll,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border-y border-border", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", hash: s.slug, className: "group flex items-center justify-between gap-6 py-6 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-primary transition-colors group-hover:text-accent", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs leading-relaxed text-muted-foreground", children: s.short })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100" })
      ] }, s.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-16 lg:grid-cols-2 lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-lg:text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.about.missionEyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-primary md:text-4xl lg:text-5xl", children: t.about.missionTitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground max-lg:text-center", children: t.about.missionBody })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8 lg:pt-2", children: t.about.missionPoints.map((mp) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 border-l-2 border-accent pl-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-primary", children: mp.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: mp.body })
      ] }) }, mp.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mx-auto mt-6 max-w-2xl font-serif text-2xl italic leading-relaxed text-primary-foreground md:text-3xl", children: [
        "“",
        t.about.quote,
        "”"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-xs uppercase tracking-[0.24em] text-accent", children: [
        "— ",
        CLINIC.name
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.about.missionEyebrow, title: t.about.valuesTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 gap-px bg-border lg:grid-cols-4", children: t.about.values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-accent", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: v.body })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-accent/10 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-primary md:text-4xl lg:text-5xl", children: t.home.ctaTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-base text-muted-foreground", children: t.home.ctaSubtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: [
        t.common.bookAppointment,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
