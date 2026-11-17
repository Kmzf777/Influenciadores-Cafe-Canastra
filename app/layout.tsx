import type { Metadata, Viewport } from "next";
import KitScripts from "@/components/KitScripts";
import "./globals.css";

// tasteskill 2.5 — type: product (site-kind other)
// deal: hero product (photograph), palette warm-paper-walnut, type besley (archivo, the first, is a wide
// technical face that clashes with the brushed Canastra logo and the kraft bags), nav-split, footer-columns,
// close-type, rhythm dark-band, buttons arrow, mark: the client's logo. moments: word-highlight, pinned-chapters.

export const metadata: Metadata = {
  title: "Time Canastra: guia do criador do Café Canastra no TikTok Shop",
  description: "O guia dos criadores do Café Canastra: quanto dá pra ganhar, o kit, os vídeos e as LIVES.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.png" },
  openGraph: { type: "website", images: ["/share.jpg"] },
  twitter: { card: "summary_large_image" },
  other: { "site-kind": "other", "page-type": "product" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f3ec",
};

const tokens = `:root {
  --p-bg: #f7f3ec; --p-surface: #ede6da; --p-ink: #2a2622; --p-muted: #665e55;
  --p-accent: #7a4a2c; --p-accent-ink: #ffffff; --p-action: #7a4a2c; --p-action-ink: #ffffff;
  --p-inv-bg: #2a2622; --p-inv-surface: #36322e; --p-inv-ink: #f7f3ec; --p-inv-muted: #a29e98;
  --p-inv-accent: #f7f3ec; --p-inv-accent-ink: #2a2622; --p-inv-action: #f7f3ec; --p-inv-action-ink: #2a2622;
  --font-display: "Besley", Georgia, serif;
  --font-text: "Albert Sans", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.02em;
  --display-tracking-xl: -0.026em;
}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-type="product" data-radius="soft" data-buttons="arrow" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Besley:wght@400..700&family=Albert+Sans:wght@400..600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style dangerouslySetInnerHTML={{ __html: tokens }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
              "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)",
          }}
        />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/word-highlight/moment.js" />
        <link rel="modulepreload" href="/assets/moments/pinned-chapters/moment.js" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <KitScripts />
      </body>
    </html>
  );
}
