import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Catering Menu | Dahi Cheeni | Authentic Indian Flavors",
  description: "Browse Dahi Cheeni's premium home-style catering menu. From street-style chaats to rich main course curries, explore our custom offerings.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
