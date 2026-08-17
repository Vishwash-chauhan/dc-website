import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Menu & Pricing | Premium Catering | Dahi Cheeni",
  description:
    "Explore Dahi Cheeni's exquisite catering menu. Featuring traditional Indian soups, starters, main course, live chaat counters and much more.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
