import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FeaturesSection } from "@/components/layout/sections/features";
import { HeroSection } from "@/components/layout/sections/hero";
import { Salutation } from "@/components/layout/sections/salutation";
import { ServiceSection } from "@/components/layout/sections/service";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { Marquee } from "@/components/special/marque";
import Image from "next/image";
import Link from "next/link";
import More from "@/app/assets/more.svg";
import More2 from "@/app/assets/more2.svg";

interface ServiceProps {
  name: string;
}

const services: ServiceProps[] = [
  {
    name: "Web Devlopment",
  },
  {
    name: "Search Engine Optimization",
  },
  {
    name: "Social Media Marketing",
  },
  {
    name: "Graphic Design",
  },
  {
    name: "Lead Generation",
  },
  {
    name: "Marketing Automation",
  },
  {
    name: "AI Enhanced Optimization",
  },
  {
    name: "Content Writing",
  },
  {
    name: "Content Marketing",
  },
  {
    name: "Collab Membership",
  },
  {
    name: "Salesforce",
  },
];

export const metadata = {
  title: "MyPromo",
  description: "We turn your digital dreams into groovy realities!",
  // openGraph: {
  //   type: "website",
  //   url: "https://github.com/nobruf/shadcn-landing-page.git",
  //   title: "Shadcn - Landing template",
  //   description: "Free Shadcn landing page for developers",
  //   images: [
  //     {
  //       url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Shadcn - Landing template",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "https://github.com/nobruf/shadcn-landing-page.git",
  //   title: "Shadcn - Landing template",
  //   description: "Free Shadcn landing page for developers",
  //   images: [
  //     "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
  //   ],
  // },
};

export default function Home() {
  return (
    <main className="isolate">
      <HeroSection />

      <section  className="max-w-[90%] mx-auto pb-10 sm:pb-32">
        <div className="mx-auto">
          <Marquee
            className="gap-[6rem] [--duration:25s] bg-orange-950 p-8"
            fade
            innerClassName="gap-[3rem]"
            // pauseOnHover
          >
            {services.map(({ name }) => (
              <div
                key={name}
                className="flex items-center text-2xl md:text-4xl font-bold text-white"
              >
                {name}
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <Salutation />
      <BenefitsSection />
      <FeaturesSection />
      <ServiceSection />
      <section className="pt-15 lg:pt-28 mx-auto max-w-[90%] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center">
          <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-lg font-medium text-primary tracking-wider mb-5">
            What More..
          </h2>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Let’s Learn & Grow Your Buisness
          </h2>
          <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
          Amazing opportunity for the small business owner to learn digital marketing from the experts and grow the business by his own
          </h3>
          </div>
          <Link href={"https://forms.gle/tDaU2cwSwQ2JXzSD7"} target="_blank" className="hidden lg:flex ">
            <Image alt="Whats More" src={More} className="rounded-sm"/>
          </Link>
          <Link href={"https://forms.gle/tDaU2cwSwQ2JXzSD7"} target="_blank" className="flex lg:hidden">
            <Image alt="Whats More" src={More2} className="rounded-sm"/>
          </Link>
        </div>
      </section>

      <section className="pt-15 lg:pt-28 mx-auto max-w-[90%] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl lg:text-5xl w-full font-satisfy font-bold mb-6">
            “The best marketing doesn’t feel like marketing.”{" "}
          </p>
          <p className="text-end w-full text-[15px] lg:text-xl font-semibold text-primary/70">
            -Tom Fishburne, founder and CEO, Marketoonist
          </p>
        </div>
      </section>

      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <ContactSection />
    </main>
  );
}
