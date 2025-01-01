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

import quoteImage from '@/app/assets/quote.avif'

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

      <section id="sponsors" className="max-w-[90%] mx-auto pb-10 sm:pb-32">
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
        
        <div className="flex flex-col items-center justify-center">
        {/* <Image 
          src={quoteImage}
          alt="Quote"
          height={500}
          width={500}
          className="h-full w-auto max-w-[500px]"
          /> */}

          <p className="text-3xl lg:text-5xl w-full font-satisfy font-bold mb-6">“The best marketing doesn’t feel like marketing.” </p>
          <p className="text-end w-full text-[15px] lg:text-xl font-semibold text-primary/70" >-Tom Fishburne, founder and CEO, Marketoonist</p>

        </div>

      </section>

      <TestimonialSection />
      <TeamSection />
      <CommunitySection />

      

      <ContactSection />
    </main>
  );
}
