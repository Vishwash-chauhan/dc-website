import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dahi Cheeni | Exquisite Indian Catering",
  description: "Learn about how Dahi Cheeni collects, uses, and protects your information when you request a catering quote or book our services.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
