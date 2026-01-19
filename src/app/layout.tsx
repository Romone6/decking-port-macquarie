import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { BUSINESS_NAME } from "@/lib/constants";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://deckingpm.com'),
  title: {
    default: `${BUSINESS_NAME} | Quality Timber & Composite Decks`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: "Port Macquarie's most trusted deck builders. Expert installation of timber and composite decking, pergolas, and privacy screens. Quality craftsmanship by locals.",
  keywords: ["Decking Port Macquarie", "deckingpm", "timber decks", "composite decking", "deck repairs", "pergolas", "privacy screens", "outdoor carpentry", "NSW Mid North Coast"],
  authors: [{ name: BUSINESS_NAME }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://deckingpm.com",
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | Decking & Outdoor Carpentry`,
    description: "Expert decking services in Port Macquarie and the Mid North Coast. Built to last by locals.",
    images: [
      {
        url: "/gallery/mannys-deck.png",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} Quality Decking`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.jpg' },
      { url: '/logo/cropped-decking-logo-2-1.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/logo/cropped-decking-logo-2-1.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    shortcut: '/icon.jpg',
    apple: [
      { url: '/logo/cropped-decking-logo-2-1.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
