import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dahi Cheeni | Legacy of Trust & Pure Taste in Catering",
  description: "Learn about Dahi Cheeni's heritage, commitment to pure home-style cooking, satvik preparation guidelines, and flawless catering services across Delhi NCR.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
