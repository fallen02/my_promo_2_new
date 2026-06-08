import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MyPromo | Digital Marketing Agency in Kolkata",
  description:
    "Contact MyPromo for SEO, website development, social media marketing, lead generation, Google Business Profile optimization and Salesforce consulting services.",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}