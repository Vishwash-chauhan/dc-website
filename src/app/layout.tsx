import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
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

export const metadata: Metadata = {
  title: "Dahi Cheeni | Legacy of Trust, Taste of Tradition | Exquisite Indian Catering",
  description: "Exquisite Indian Catering for Life's Auspicious Moments. From intimate weddings to spiritual celebrations, we deliver curated menus and authentic satvik options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6F0] text-[#74290F] font-sans">
        <QuoteModalProvider>
          <Navbar />
          {children}
        </QuoteModalProvider>
      </body>
    </html>
  );
}
