import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dahi Cheeni | Exquisite Indian Catering",
  description: "Read Dahi Cheeni's catering service terms and conditions, including booking policies, customization timelines, and our vegetarian standards.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
