import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Menu & Pricing | Pure Veg & Satvik Dishes | Dahi Cheeni",
  description:
    "Explore Dahi Cheeni's exquisite catering menu. Featuring traditional Indian soups, starters, main course, live chaat counters, and onion- and garlic-free Satvik options across Delhi NCR.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
