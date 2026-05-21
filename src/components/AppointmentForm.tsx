import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CLINIC, translations } from "@/i18n/translations";

export function AppointmentForm() {
  const { t, lang } = useLang();
  const services = translations[lang].services.items;
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `${t.contact.formEyebrow} — ${form.name || ""}`.trim();
    const body =
      `${t.contact.form.name}: ${form.name}\n` +
      `${t.contact.form.email}: ${form.email}\n` +
      `${t.contact.form.phone}: ${form.phone}\n` +
      `${t.contact.form.service}: ${form.service}\n\n` +
      `${t.contact.form.message}:\n${form.message}\n`;
    window.location.href = `mailto:${CLINIC.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputCls =
    "w-full border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          className={inputCls}
          placeholder={t.contact.form.name}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          type="email"
          className={inputCls}
          placeholder={t.contact.form.email}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className={inputCls}
          placeholder={t.contact.form.phone}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <select
          className={inputCls}
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option value="">{t.contact.form.service}</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <textarea
        rows={5}
        className={inputCls}
        placeholder={t.contact.form.message}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {t.contact.form.submit} <ArrowRight size={14} />
      </button>
    </form>
  );
}
