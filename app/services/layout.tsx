import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing Services in Kolkata | MyPromo",
  description:
    "Explore MyPromo services including SEO, website development, social media marketing, lead generation, Google Business Profile optimization and Salesforce consulting services.",
  };

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return(
        <main className="isolate bg-black overflow-hidden">
            {children}
        </main>
    )
}
