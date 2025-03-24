import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MyPromo | Services",
    description: "Landing template from Shadcn",
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
