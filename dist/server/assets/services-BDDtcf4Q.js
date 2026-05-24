import { T as jsxRuntimeExports } from "./server-BtEOeexM.js";
import { u as useLang, L as Link } from "./router-BUVDBSpv.js";
import { C as Check } from "./check-Sr_gexyS.js";
import { A as ArrowRight } from "./arrow-right-D-sx4Pdx.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const dentistri = "/assets/Dentistri%20Estetike-DbliDOxo.png";
const endodonti = "/assets/Endodonti%20_%20Protetik%C3%AB-C7tXUXe1.png";
const implante = "/assets/Implante%20_%20Kirurgji-p_yhQHXk.png";
const ortodonci = "/assets/Ortodonci%20_%20Maskerina%20Transparente-BKMWaOzT.png";
const facialFillers = "/assets/Facial%20Fillers%20_%20Facial%20Treatment-Bwbzhx0G.png";
const serviceImage = {
  "dentistri-estetike": dentistri,
  "endodonti-protetike": endodonti,
  "implante-kirurgji": implante,
  "ortodonci-maskerina": ortodonci,
  "facial-fillers-treatment": facialFillers
};
function ServicesPage() {
  const {
    t,
    lang
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.services.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl", children: t.services.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground", children: t.services.subtitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background pb-20 md:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x space-y-0", children: t.services.items.map((s, i) => {
      const reverse = i % 2 === 1;
      const isLast = i === t.services.items.length - 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: s.slug, className: `grid gap-10 lg:grid-cols-2 ${i === 0 ? "pt-15 pb-20 md:pb-24" : "py-20 md:py-24"} ${!isLast ? "border-b border-border" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `min-h-[280px] overflow-hidden bg-muted ${reverse ? "lg:order-2" : "lg:order-1"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: serviceImage[s.slug], alt: s.title, loading: "lazy", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: reverse ? "lg:order-1" : "lg:order-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-4xl text-accent/40", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-3 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-serif text-3xl text-primary md:text-4xl", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm italic text-accent/80", children: s.short }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-relaxed text-muted-foreground", children: s.full }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-serif text-lg text-primary", children: lang === "sq" ? "Çfarë përfshin" : "What's included" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-2 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: s.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 border-b border-border pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "mt-0.5 shrink-0 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-primary/85", children: f })
          ] }, f)) })
        ] })
      ] }, s.slug);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-accent/10 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-primary md:text-4xl", children: t.contact.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: t.contact.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: [
        t.common.bookAppointment,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
