import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Custom Catering Quote | Dahi Cheeni | Delhi NCR",
  description: "Request a custom quote for your auspicious occasion. Dahi Cheeni offers clean, home-style premium catering, custom menus, and strict satvik options.",
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
