import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Satisfy } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { FooterSection } from "@/components/layout/sections/footer";
import { FooterNew } from "@/components/layout/sections/footer_new";
import { Toaster } from "@/components/ui/toaster";
import { FloatingButton } from "@/components/FloatingButton";

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

export const metadata: Metadata = {
  title: "MyPromo",
  description: "To get you high on the digital world!",
  icons: {
    icon: "/favicon.png",
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
          satisfy.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FooterSection />
          <Toaster />
          <FloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
