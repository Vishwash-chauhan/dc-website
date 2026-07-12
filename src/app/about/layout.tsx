import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dahi Cheeni | Our Legacy & Culinary Philosophy",
  description: "Learn about Dahi Cheeni's rich culinary legacy, purity values, and commitment to premium home-style catering in Delhi NCR.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
