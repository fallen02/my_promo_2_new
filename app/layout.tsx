import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Satisfy, Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";

import { Toaster } from "@/components/ui/toaster";
import { FloatingButton } from "@/components/FloatingButton";
import { Toaster as HotToast } from "react-hot-toast";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const satisfy = Satisfy({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-satisty",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: {
    default: "MyPromo | Digital Marketing Agency in Kolkata",
    template: "%s | MyPromo",
  },
  description:
    "MyPromo offers SEO, website development, social media marketing, lead generation, Google Business Profile optimization, and Salesforce consulting services in Kolkata.",
  keywords: [
    "Digital Marketing Agency in Kolkata",
    "SEO Company in Kolkata",
    "Website Development Company in Kolkata",
    "Social Media Marketing Agency Kolkata",
    "Lead Generation Services India",
    "Salesforce Consultant India",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "MyPromo | Digital Marketing Agency in Kolkata",
    description:
      "SEO, website development, social media marketing, lead generation and Salesforce consulting services.",
    url: "https://mypromo.in",
    siteName: "MyPromo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-black antialiased",
          poppins.className,
          satisfy.variable,
          openSans.variable
        )}
      >
        <LocalBusinessSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FooterSection />
          <FloatingButton />
          <HotToast position="top-right" reverseOrder={false} />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
