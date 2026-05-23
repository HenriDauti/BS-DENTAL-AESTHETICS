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
import logoUrl from "@/assets/logo.png"; 

function NotFoundComponent() {
  const router = useRouter();
  router.navigate({ to: "/" });
  return null;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  router.navigate({ to: "/" });
  return null;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BS Dental Clinic & Aesthetics" },
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
        { rel: "icon", href: logoUrl, type: "image/png" },

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
          openingHours: ["Mo-Su 09:00-14:00", "Mo-Su 16:00-20:00"],
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
