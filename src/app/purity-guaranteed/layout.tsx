import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Assurance – Purity Guaranteed | Dahi Cheeni Catering",
  description: "At Dahi Cheeni, purity is not just a promise — it is a responsibility we take seriously. Discover our commitment to clean ingredients, hygienic preparation, and traditional home-style care.",
};

export default function PurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
