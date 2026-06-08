import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MyPromo | Digital Marketing Agency in Kolkata",
  description:
    "Learn about MyPromo, a digital marketing agency offering SEO, website development, social media marketing, lead generation and Salesforce consulting services.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}