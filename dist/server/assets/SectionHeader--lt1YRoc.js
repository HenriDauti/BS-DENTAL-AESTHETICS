import { T as jsxRuntimeExports } from "./server-A1jVNAG6.js";
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  children
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col ${alignClass} max-w-2xl ${align === "center" ? "mx-auto" : ""}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-primary md:text-4xl lg:text-5xl", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-relaxed text-muted-foreground", children: subtitle }),
    children
  ] });
}
export {
  SectionHeader as S
};
