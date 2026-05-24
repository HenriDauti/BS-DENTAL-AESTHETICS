import { r as reactExports, T as jsxRuntimeExports } from "./server-BtEOeexM.js";
import { c as createLucideIcon, u as useLang, t as translations, C as Clock, a as CLINIC, M as MapPin, b as Mail, P as Phone, I as Instagram } from "./router-BUVDBSpv.js";
import { A as ArrowRight } from "./arrow-right-D-sx4Pdx.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode);
class EmailJSResponseStatus {
  constructor(_status = 0, _text = "Network Error") {
    this.status = _status;
    this.text = _text;
  }
}
const createWebStorage = () => {
  if (typeof localStorage === "undefined")
    return;
  return {
    get: (key) => Promise.resolve(localStorage.getItem(key)),
    set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    remove: (key) => Promise.resolve(localStorage.removeItem(key))
  };
};
const store = {
  origin: "https://api.emailjs.com",
  blockHeadless: false,
  storageProvider: createWebStorage()
};
const buildOptions = (options) => {
  if (!options)
    return {};
  if (typeof options === "string") {
    return {
      publicKey: options
    };
  }
  if (options.toString() === "[object Object]") {
    return options;
  }
  return {};
};
const init = (options, origin = "https://api.emailjs.com") => {
  if (!options)
    return;
  const opts = buildOptions(options);
  store.publicKey = opts.publicKey;
  store.blockHeadless = opts.blockHeadless;
  store.storageProvider = opts.storageProvider;
  store.blockList = opts.blockList;
  store.limitRate = opts.limitRate;
  store.origin = opts.origin || origin;
};
const sendPost = async (url, data, headers = {}) => {
  const response = await fetch(store.origin + url, {
    method: "POST",
    headers,
    body: data
  });
  const message = await response.text();
  const responseStatus = new EmailJSResponseStatus(response.status, message);
  if (response.ok) {
    return responseStatus;
  }
  throw responseStatus;
};
const validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey || typeof publicKey !== "string") {
    throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
  }
  if (!serviceID || typeof serviceID !== "string") {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID || typeof templateID !== "string") {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
};
const validateTemplateParams = (templateParams) => {
  if (templateParams && templateParams.toString() !== "[object Object]") {
    throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  }
};
const isHeadless = (navigator2) => {
  return navigator2.webdriver || !navigator2.languages || navigator2.languages.length === 0;
};
const headlessError = () => {
  return new EmailJSResponseStatus(451, "Unavailable For Headless Browser");
};
const validateBlockListParams = (list, watchVariable) => {
  if (!Array.isArray(list)) {
    throw "The BlockList list has to be an array";
  }
  if (typeof watchVariable !== "string") {
    throw "The BlockList watchVariable has to be a string";
  }
};
const isBlockListDisabled = (options) => {
  return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
  return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
  if (isBlockListDisabled(options))
    return false;
  validateBlockListParams(options.list, options.watchVariable);
  const value = getValue(params, options.watchVariable);
  if (typeof value !== "string")
    return false;
  return options.list.includes(value);
};
const blockedEmailError = () => {
  return new EmailJSResponseStatus(403, "Forbidden");
};
const validateLimitRateParams = (throttle, id) => {
  if (typeof throttle !== "number" || throttle < 0) {
    throw "The LimitRate throttle has to be a positive number";
  }
  if (id && typeof id !== "string") {
    throw "The LimitRate ID has to be a non-empty string";
  }
};
const getLeftTime = async (id, throttle, storage) => {
  const lastTime = Number(await storage.get(id) || 0);
  return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
  if (!options.throttle || !storage) {
    return false;
  }
  validateLimitRateParams(options.throttle, options.id);
  const id = options.id || defaultID;
  const leftTime = await getLeftTime(id, options.throttle, storage);
  if (leftTime > 0) {
    return true;
  }
  await storage.set(id, Date.now().toString());
  return false;
};
const limitRateError = () => {
  return new EmailJSResponseStatus(429, "Too Many Requests");
};
const send = async (serviceID, templateID, templateParams, options) => {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = opts.storageProvider || store.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  validateParams(publicKey, serviceID, templateID);
  validateTemplateParams(templateParams);
  if (templateParams && isBlockedValueInParams(blockList, templateParams)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  const params = {
    lib_version: "4.4.1",
    user_id: publicKey,
    service_id: serviceID,
    template_id: templateID,
    template_params: templateParams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};
const validateForm = (form) => {
  if (!form || form.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  }
};
const findHTMLForm = (form) => {
  return typeof form === "string" ? document.querySelector(form) : form;
};
const sendForm = async (serviceID, templateID, form, options) => {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = store.storageProvider || opts.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  const currentForm = findHTMLForm(form);
  validateParams(publicKey, serviceID, templateID);
  validateForm(currentForm);
  const formData = new FormData(currentForm);
  if (isBlockedValueInParams(blockList, formData)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  formData.append("lib_version", "4.4.1");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", publicKey);
  return sendPost("/api/v1.0/email/send-form", formData);
};
const emailjs = {
  init,
  send,
  sendForm,
  EmailJSResponseStatus
};
const SERVICE_ID = "service_6gkwio9";
const TEMPLATE_ID = "template_npxxs24";
const PUBLIC_KEY = "5nIQGOslaEK_rTDHJ";
const COOLDOWN_MS = 6e4;
const LS_KEY = "bs_form_last_sent";
function validate(form, lang) {
  const e = {};
  const sq = lang === "sq";
  if (!form.name.trim() || form.name.trim().length < 2)
    e.name = sq ? "Emri duhet të ketë të paktën 2 karaktere." : "Name must be at least 2 characters.";
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    e.email = sq ? "Ju lutemi shkruani një email të vlefshëm." : "Please enter a valid email address.";
  if (form.phone.trim() && !/^[+\d\s\-()]{6,20}$/.test(form.phone))
    e.phone = sq ? "Numri i telefonit nuk është i vlefshëm." : "Phone number is not valid.";
  if (!form.service)
    e.service = sq ? "Ju lutemi zgjidhni një shërbim." : "Please select a service.";
  if (!form.message.trim() || form.message.trim().length < 10)
    e.message = sq ? "Mesazhi duhet të ketë të paktën 10 karaktere." : "Message must be at least 10 characters.";
  return e;
}
function AppointmentForm() {
  const { t, lang } = useLang();
  const services = translations[lang].services.items;
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [touched, setTouched] = reactExports.useState({});
  const [status, setStatus] = reactExports.useState("idle");
  const [cooldownLeft, setCooldownLeft] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const last = Number(localStorage.getItem(LS_KEY) ?? 0);
    const remaining = COOLDOWN_MS - (Date.now() - last);
    if (remaining > 0) setCooldownLeft(Math.ceil(remaining / 1e3));
  }, []);
  reactExports.useEffect(() => {
    if (cooldownLeft <= 0) return;
    const id = setTimeout(() => {
      setCooldownLeft((s) => {
        if (s <= 1) setStatus("idle");
        return s - 1;
      });
    }, 1e3);
    return () => clearTimeout(id);
  }, [cooldownLeft]);
  function touch(field) {
    setTouched((t2) => ({ ...t2, [field]: true }));
  }
  function onChange(field, value) {
    const next = { ...form, [field]: value };
    setForm(next);
    if (touched[field]) {
      setErrors(validate(next, lang));
    }
  }
  async function onSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, service: true, message: true });
    const errs = validate(form, lang);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const last = Number(localStorage.getItem(LS_KEY) ?? 0);
    if (Date.now() - last < COOLDOWN_MS) return;
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "—",
          service: form.service || "—",
          message: form.message
        },
        PUBLIC_KEY
      );
      localStorage.setItem(LS_KEY, String(Date.now()));
      setCooldownLeft(Math.ceil(COOLDOWN_MS / 1e3));
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    }
  }
  const inputBase = "w-full border bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent";
  function inputCls(field) {
    const hasError = touched[field] && errors[field];
    return inputBase + (hasError ? " border-red-400" : " border-border");
  }
  const isBusy = status === "sending";
  const isBlocked = cooldownLeft > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, noValidate: true, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            required: true,
            className: inputCls("name"),
            placeholder: t.contact.form.name,
            value: form.name,
            onChange: (e) => onChange("name", e.target.value),
            onBlur: () => {
              touch("name");
              setErrors(validate(form, lang));
            }
          }
        ),
        touched.name && errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            required: true,
            type: "email",
            className: inputCls("email"),
            placeholder: t.contact.form.email,
            value: form.email,
            onChange: (e) => onChange("email", e.target.value),
            onBlur: () => {
              touch("email");
              setErrors(validate(form, lang));
            }
          }
        ),
        touched.email && errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: errors.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: inputCls("phone"),
            placeholder: t.contact.form.phone,
            value: form.phone,
            onChange: (e) => onChange("phone", e.target.value),
            onBlur: () => {
              touch("phone");
              setErrors(validate(form, lang));
            }
          }
        ),
        touched.phone && errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: errors.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            className: inputCls("service"),
            value: form.service,
            onChange: (e) => onChange("service", e.target.value),
            onBlur: () => {
              touch("service");
              setErrors(validate(form, lang));
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t.contact.form.service }),
              services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.title, children: s.title }, s.slug))
            ]
          }
        ),
        touched.service && errors.service && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: errors.service })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          rows: 5,
          className: inputCls("message") + " resize-none",
          placeholder: t.contact.form.message,
          value: form.message,
          onChange: (e) => onChange("message", e.target.value),
          onBlur: () => {
            touch("message");
            setErrors(validate(form, lang));
          }
        }
      ),
      touched.message && errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: errors.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: isBusy || isBlocked,
        className: "inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50",
        children: isBusy ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 14, className: "animate-spin" }),
          lang === "sq" ? "Duke dërguar..." : "Sending..."
        ] }) : isBlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: lang === "sq" ? `Prisni ${cooldownLeft}s` : `Wait ${cooldownLeft}s` }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          t.contact.form.submit,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      }
    ),
    status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-accent", children: lang === "sq" ? "✓ Mesazhi u dërgua! Do t'ju kontaktojmë së shpejti." : "✓ Message sent! We'll be in touch soon." }),
    status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-400", children: lang === "sq" ? "Ndodhi një gabim. Provoni përsëri ose na kontaktoni direkt." : "Something went wrong. Please try again or contact us directly." })
  ] });
}
function ContactPage() {
  const {
    t
  } = useLang();
  const cardHref = (kind) => kind === "email" ? "mailto:" + CLINIC.email : kind === "phone" ? "tel:" + CLINIC.phone : kind === "address" ? CLINIC.mapsUrl : kind === "instagram2" ? CLINIC.instagram2 : CLINIC.instagram;
  const cardIcon = (kind) => kind === "email" ? Mail : kind === "phone" ? Phone : kind === "address" ? MapPin : Instagram;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.contact.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-4 inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mx-auto mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-6xl", children: t.contact.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground", children: t.contact.subtitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 lg:grid-cols-5 gap-px bg-border", children: t.contact.cards.map((c, i) => {
        const Icon = cardIcon(c.kind);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: cardHref(c.kind), target: c.kind === "email" ? void 0 : "_blank", rel: "noreferrer", className: `group flex flex-col bg-background p-4 transition-colors hover:bg-muted md:p-10 ${i < 3 ? "col-span-2" : "col-span-3"} lg:col-span-1`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent md:h-12 md:w-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 break-all font-serif text-sm text-primary md:text-xl", children: c.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 hidden text-sm text-muted-foreground md:block", children: c.hint }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-accent md:mt-6 md:gap-2", children: [
            c.cta,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 11 })
          ] })
        ] }, c.kind);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "shrink-0 text-accent" }),
        t.common.hoursValue
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-16 lg:grid-cols-2 lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-lg:text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.contact.formEyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-3 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-primary md:text-4xl", children: t.contact.formTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: t.contact.formSubtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentForm, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-lg:text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: t.contact.map }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider mt-3 inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-primary md:text-4xl", children: t.common.addressValue }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: t.common.hoursValue })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "BS Dental Clinic & Aesthetics — Map", src: "https://www.google.com/maps?q=" + CLINIC.lat + "," + CLINIC.lng + "&z=16&output=embed", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "h-80 w-full border-0 lg:h-96" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: CLINIC.mapsUrl, target: "_blank", rel: "noreferrer", className: "mt-4 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 13 }),
          t.common.address,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
