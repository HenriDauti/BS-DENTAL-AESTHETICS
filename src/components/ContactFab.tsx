import { Mail } from "lucide-react";
import { CLINIC } from "@/i18n/translations";

export function ContactFab() {
  return (
    <a
      href={`mailto:${CLINIC.email}`}
      aria-label="Email us"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
    >
      <Mail size={22} />
    </a>
  );
}
