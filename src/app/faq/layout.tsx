import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dahi Cheeni | Catering FAQs",
  description: "Find answers to frequently asked questions about Dahi Cheeni's premium home-style catering services, customization options, satvik purity rules, and logistics.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
