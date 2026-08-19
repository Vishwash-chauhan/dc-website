import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramCTA from "@/components/InstagramCTA";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dahicheenicatering.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dahi Cheeni | Legacy of Trust, Taste of Tradition | Exquisite Indian Catering",
    template: "%s | Dahi Cheeni Catering",
  },
  description:
    "Exquisite Indian Catering for Life's Auspicious Moments. From intimate weddings to spiritual celebrations, we deliver curated menus, pure vegetarian, and onion- and garlic-free options across Delhi NCR.",
  keywords: [
    "Dahi Cheeni",
    "Indian Catering Delhi NCR",
    "Pure Veg Catering Delhi",
    "Gurugram Caterers",
    "Noida Catering Services",
    "Faridabad Catering",
    "Ghaziabad Catering",
    "No Onion No Garlic Catering",
    "Griha Pravesh Catering",
    "Baby Shower Catering",
    "Pooja Havan Catering",
    "Wedding Catering Delhi",
  ],
  authors: [{ name: "Dahi Cheeni" }],
  creator: "Dahi Cheeni",
  publisher: "Dahi Cheeni",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Dahi Cheeni Catering",
    title: "Dahi Cheeni | Legacy of Trust, Taste of Tradition",
    description:
      "Exquisite Indian Catering for Life's Auspicious Moments in Delhi NCR. Curated pure vegetarian menus & flawless service.",
    images: [
      {
        url: "/dc_logo_full.svg",
        width: 1200,
        height: 1200,
        alt: "Dahi Cheeni Catering Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dahi Cheeni | Exquisite Indian Catering",
    description:
      "Legacy of Trust, Taste of Tradition. Premium Indian Catering across Delhi, Gurugram, Noida, Faridabad, Ghaziabad.",
    images: ["/dc_logo_full.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Dahi Cheeni Catering",
    "image": `${baseUrl}/hero-buffet-new.png`,
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "+91-98100-00000",
    "priceRange": "₹₹",
    "servesCuisine": ["Indian", "Pure Vegetarian", "North Indian"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi NCR",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Gurugram" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Faridabad" },
      { "@type": "City", "name": "Ghaziabad" }
    ],
    "description": "Exquisite Indian Catering for Life's Auspicious Moments across Delhi NCR"
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6F0] text-[#8C3316] font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <InstagramCTA />
        <Footer />
      </body>
    </html>
  );
}
