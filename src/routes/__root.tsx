import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactFab } from "@/components/ContactFab";
import { CLINIC } from "@/i18n/translations";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-primary">404</h1>
        <span className="gold-divider mt-4 inline-block" />
        <p className="mt-4 text-sm text-muted-foreground">
          Faqja që po kërkoni nuk u gjet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-accent hover:text-accent-foreground"
        >
          Ballina
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md">
        <h1 className="font-serif text-2xl text-primary">Diçka shkoi keq</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-accent"
        >
          Provoni përsëri
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BS Dental Clinic & Aesthetics — Stomatologji dhe Estetikë në Tiranë" },
      { name: "description", content: "Klinikë dentare dhe estetike në Kashar, Tiranë. Dentistri estetike, implante, ortodonci dhe trajtime estetike të fytyrës." },
      { name: "author", content: "BS Dental Clinic & Aesthetics" },
      { property: "og:site_name", content: "BS Dental Clinic & Aesthetics" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: CLINIC.name,
          email: CLINIC.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rruga Joklin Persi",
            addressLocality: "Kashar",
            addressRegion: "Tirana",
            addressCountry: "AL",
          },
          geo: { "@type": "GeoCoordinates", latitude: CLINIC.lat, longitude: CLINIC.lng },
          openingHours: ["Mo-Sa 09:00-14:00", "Mo-Sa 16:00-20:00"],
          sameAs: [CLINIC.instagram],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <ContactFab />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
