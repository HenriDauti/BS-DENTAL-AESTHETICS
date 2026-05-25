import { r as reactExports, T as jsxRuntimeExports } from "./server-A1jVNAG6.js";
import { X, u as useLang, L as Link } from "./router-grICdqG-.js";
import { C as ChevronLeft, a as ChevronRight, g as galleryItems } from "./gallery-Bc5DTdnz.js";
import { A as ArrowRight } from "./arrow-right-qGzoFODA.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Lightbox({
  images,
  index,
  onClose,
  onNav
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onNav]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-6",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-6 right-6 text-primary-foreground hover:text-accent",
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onNav((index - 1 + images.length) % images.length);
            },
            className: "absolute left-4 text-primary-foreground hover:text-accent",
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 36 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: images[index].src,
            alt: images[index].alt,
            onClick: (e) => e.stopPropagation(),
            className: "max-h-[85vh] max-w-[90vw] object-contain"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onNav((index + 1) % images.length);
            },
            className: "absolute right-4 text-primary-foreground hover:text-accent",
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 36 })
          }
        )
      ]
    }
  );
}
function gridClass(count) {
  if (count === 1) return "grid grid-cols-1 gap-6 max-w-md mx-auto";
  if (count === 2) return "grid grid-cols-2 gap-6 max-w-2xl mx-auto";
  return "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";
}
function GalleryGrid({ images }) {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: gridClass(images.length), children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(i),
        className: "group relative aspect-[4/5] w-full overflow-hidden bg-muted",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: img.src,
              alt: img.alt,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-accent", children: "Para / Pas" }) })
        ]
      },
      i
    )) }),
    open !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { images, index: open, onClose: () => setOpen(null), onNav: setOpen })
  ] });
}
const showClinicImages = false;
function GalleryPage() {
  const {
    t,
    lang
  } = useLang();
  const [filter, setFilter] = reactExports.useState("all");
  const filtered = reactExports.useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter((g) => g.category === filter);
  }, [filter]);
  const filters = [{
    key: "all",
    label: t.gallery.filters.all
  }, {
    key: "lips",
    label: t.gallery.filters.lips
  }, {
    key: "veneers",
    label: t.gallery.filters.veneers
  }, {
    key: "whitening",
    label: t.gallery.filters.whitening
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.gallery.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl", children: t.gallery.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground", children: t.gallery.subtitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 flex flex-wrap justify-center gap-2", children: filters.map((f) => {
        const active = filter === f.key;
        const base = "flex-none px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors";
        const on = "bg-primary text-primary-foreground";
        const off = "border border-border text-primary/70 hover:border-accent hover:text-accent";
        return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f.key), className: base + " " + (active ? on : off), children: f.label }, f.key);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryGrid, { images: filtered })
    ] }) }),
    showClinicImages,
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-accent/10 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-primary md:text-4xl", children: t.home.ctaTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: t.home.ctaSubtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: [
        t.home.heroCta,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] })
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
