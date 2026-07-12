import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Catering Services | Dahi Cheeni | Delhi NCR",
  description: "Explore Dahi Cheeni's premium catering services. From Griha Pravesh and Poojas to weddings and family functions, we bring culinary excellence to your table.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
