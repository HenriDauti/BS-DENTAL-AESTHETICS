import { useState, useEffect } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const COOLDOWN_MS = 60_000; // 1 minute between submissions
const LS_KEY = "bs_form_last_sent";

type Status = "idle" | "sending" | "success" | "error";

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

function validate(
  form: { name: string; email: string; phone: string; service: string; message: string },
  lang: "sq" | "en",
): Errors {
  const e: Errors = {};
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

export function AppointmentForm() {
  const { t, lang } = useLang();
  const services = translations[lang].services.items;

  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [cooldownLeft, setCooldownLeft] = useState(0);

  // Restore cooldown on mount
  useEffect(() => {
    const last = Number(localStorage.getItem(LS_KEY) ?? 0);
    const remaining = COOLDOWN_MS - (Date.now() - last);
    if (remaining > 0) setCooldownLeft(Math.ceil(remaining / 1000));
  }, []);

  // Tick the cooldown counter
  useEffect(() => {
    if (cooldownLeft <= 0) return;
    const id = setTimeout(() => {
      setCooldownLeft((s) => {
        if (s <= 1) setStatus("idle");
        return s - 1;
      });
    }, 1000);
    return () => clearTimeout(id);
  }, [cooldownLeft]);

  function touch(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  function onChange(field: string, value: string) {
    const next = { ...form, [field]: value };
    setForm(next);
    if (touched[field]) {
      setErrors(validate(next, lang));
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mark all as touched and validate
    setTouched({ name: true, email: true, phone: true, service: true, message: true });
    const errs = validate(form, lang);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Cooldown guard
    const last = Number(localStorage.getItem(LS_KEY) ?? 0);
    if (Date.now() - last < COOLDOWN_MS) return;

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          phone:      form.phone || "—",
          service:    form.service || "—",
          message:    form.message,
        },
        PUBLIC_KEY,
      );
      localStorage.setItem(LS_KEY, String(Date.now()));
      setCooldownLeft(Math.ceil(COOLDOWN_MS / 1000));
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full border bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent";

  function inputCls(field: keyof Errors) {
    const hasError = touched[field] && errors[field];
    return inputBase + (hasError ? " border-red-400" : " border-border");
  }

  const isBusy = status === "sending";
  const isBlocked = cooldownLeft > 0;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">

      {/* Name + Email */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <input
            required
            className={inputCls("name")}
            placeholder={t.contact.form.name}
            value={form.name}
            onChange={(e) => onChange("name", e.target.value)}
            onBlur={() => { touch("name"); setErrors(validate(form, lang)); }}
          />
          {touched.name && errors.name && (
            <p className="text-xs text-red-400">{errors.name}</p>
          )}
        </div>
        <div className="space-y-1">
          <input
            required
            type="email"
            className={inputCls("email")}
            placeholder={t.contact.form.email}
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            onBlur={() => { touch("email"); setErrors(validate(form, lang)); }}
          />
          {touched.email && errors.email && (
            <p className="text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <input
            className={inputCls("phone")}
            placeholder={t.contact.form.phone}
            value={form.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            onBlur={() => { touch("phone"); setErrors(validate(form, lang)); }}
          />
          {touched.phone && errors.phone && (
            <p className="text-xs text-red-400">{errors.phone}</p>
          )}
        </div>
        <div className="space-y-1">
          <select
            className={inputCls("service")}
            value={form.service}
            onChange={(e) => onChange("service", e.target.value)}
            onBlur={() => { touch("service"); setErrors(validate(form, lang)); }}
          >
            <option value="">{t.contact.form.service}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
          {touched.service && errors.service && (
            <p className="text-xs text-red-400">{errors.service}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <textarea
          rows={5}
          className={inputCls("message") + " resize-none"}
          placeholder={t.contact.form.message}
          value={form.message}
          onChange={(e) => onChange("message", e.target.value)}
          onBlur={() => { touch("message"); setErrors(validate(form, lang)); }}
        />
        {touched.message && errors.message && (
          <p className="text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isBusy || isBlocked}
        className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isBusy ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            {lang === "sq" ? "Duke dërguar..." : "Sending..."}
          </>
        ) : isBlocked ? (
          <>
            {lang === "sq" ? `Prisni ${cooldownLeft}s` : `Wait ${cooldownLeft}s`}
          </>
        ) : (
          <>
            {t.contact.form.submit} <ArrowRight size={14} />
          </>
        )}
      </button>

      {/* Feedback */}
      {status === "success" && (
        <p className="text-sm text-accent">
          {lang === "sq"
            ? "✓ Mesazhi u dërgua! Do t'ju kontaktojmë së shpejti."
            : "✓ Message sent! We'll be in touch soon."}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          {lang === "sq"
            ? "Ndodhi një gabim. Provoni përsëri ose na kontaktoni direkt."
            : "Something went wrong. Please try again or contact us directly."}
        </p>
      )}
    </form>
  );
}