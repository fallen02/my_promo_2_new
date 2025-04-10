import Image from "next/image";
import { PortfolioHighlight } from "@/components/layout/portfolioHighlight";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { CTASection } from "@/components/layout/sections/cta";
import { Projects } from "@/components/layout/sections/Projects";
import Meat99 from "@/app/assets/meat99.png";
import Geniuslane from "@/app/assets/Geniuslane.png";
import explore1 from "@/app/assets/exploreourwork1.jpg";
import explore2 from "@/app/assets/exploreourwork2.jpg";
import explore3 from "@/app/assets/exploreourwork3.jpg";
import explore4 from "@/app/assets/exploreourwork4.jpg";
import explore5 from "@/app/assets/exploreourwork5.jpg";
import { Marquee } from "@/components/special/marque";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}
const HighLightData = [
  {
    title: "Revitalizing Assigna solution’s Social Media Presence",
    overview:
      "Assigna Solution is the Assignment service provider who eagerly wanted a Geniune Social Media Agency and finally we both were connected.",
    challenges: [
      "The biggest challenge was to overcome the crowded competition of assignment services through organic marketing.",
      "They wanted social media branding that suits his business and collect more reach of his profiles.",
      "They wanted a stunning website with complete information about them, the website that works as a lead magnet as well as a funnel.",
    ],

    solutions: [
      "We have got their requirements & need. Consulted them what we’re going to and started a well-planned social media organic marketing that lead to the best organic student base(all over the world) who are really interested in his services.",
      "We build the website of Assigna Solution at an affordable cost that worthed for them in each aspect.",
    ],
    results:
      "The branding & organic reach and engagement got a boost and the student requirement for services got a boost",
    image: [
      "https://cdn.sanity.io/images/5mpqfrus/production/8d68a0c55a853a877125b4727756c3a329796a31-1891x872.jpg",
    ],
  },
  {
    title: "Revitalizing Meat99’s Social Media Presence",
    overview:
      "Meat99 is basically an e-commerce brand who sells raw meats within Gurgaon, Haryana. They come to us for the social media marketing.",
    challenges: [
      " The challenge was to increase Meat99’s organic reach& followers.",
    ],
    solutions: [
      "We started organic marketing campaign on several topics like #meat99_billa, #gharwalapyar(in valentines day) etc And started creating reels on it.",
    ],
    results:
      "The organic video view got a massive increase. The profile reach and followers got increased within 15 days.",
    image: [Meat99],
  },
  {
    title: "Enhancing Lead Generation for Geniuslane",
    overview:
      "Geniuslane is a pioneer in healthcare sector. They provide best early intervention, diagnosis and treatment for neurodiverse children. They needed the best agency who can provide them the best lead generation service.",
    challenges: [
      "The industry is unknown for people as well as there are no such keywords available related to Geniuslane’s services in the facebook detailed targeting section.",
    ],
    solutions: [
      "We have first sort out the fundamental problems with the organic social media management. Then we started running ads and gained expected result.",
    ],
    results:
      "All the centres og Geniuslane in India and centre in the UK got high quality leads that converted easily.",
    image: [Geniuslane],
  },
];
const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Debasish Das",
    userName: "Founder, Cluster Engineers",
    comment:
      "MyPromo’s expertise has been a game-changer for our business. Their innovative strategies and commitment to delivering results have significantly boosted our digital presence and brand recognition.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Rudra Narayan Mishra",
    userName: "Director, Assigna Solution",
    comment:
      "The team at MyPromo delivered beyond our expectations. From creative solutions to outstanding execution, their work has driven impressive growth and success for our brand.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Debasish Das",
    userName: "Founder, Cluster Engineers",
    comment:
      "MyPromo’s expertise has been a game-changer for our business. Their innovative strategies and commitment to delivering results have significantly boosted our digital presence and brand recognition.",
    rating: 5.0,
  },
];
const CTADATA = {
  title: "Join Us on ",
  dualTitle: "Your Digital Journey",
  description:
    "Ready to see how we can transform your ideas into impactful results? Contact us today to discuss your project and discover how our expertise can drive your success.",
};
export default function PortfolioPage() {
  return (
    <main>
      <div className="relative isolate -z-10">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-700">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-primary to-black opacity-30"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl flex flex-col gap-3">
                <h1 className="text-4xl font-bold text-primary tracking-tight  sm:text-5xl">
                  Explore Our Work
                </h1>
                <p className="text-lg text-gray-200">
                  From viral sensations to brand transformations, we’ve done it
                  all.
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      alt="Explore US"
                      src={explore1}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={300}
                      height={400}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      alt="Explore Us"
                      src={explore2}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      alt="Explore Us"
                      src={explore3}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      alt="Explore Us"
                      src={explore4}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      alt="Explore Us"
                      src={explore5}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Highlighted Projects */}
      <section className="pt-15 lg:pt-28 mx-auto max-w-7xl">
        <div className="w-full flex justify-center items-center mb-10">
          <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider mb-5">
            Highlighted Projects
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          {HighLightData.map((data, index) => (
            <PortfolioHighlight
              key={index}
              data={{
                ...data,
                image: data.image.map((img) =>
                  typeof img === "string" ? img : img.src
                ),
              }}
              reversed={index === 1 ? true : false}
            />
          ))}
        </div>
      </section>
      <Projects />
      <Feature />

      <TestimonialSection />

      <CTASection
        title={CTADATA.title}
        description={CTADATA.description}
        dualtitle={CTADATA.dualTitle}
      />
    </main>
  );
}




const Feature = ({
  features = [
    "Franchise",
    "*",
    "Education",
    "*",
    "Healthcare",
    "*",
    "E-commerce",
    "*",
    "Hotel & Restaurant",
    "*",
    "Agency & Consultation",
    "*",
  ],
}) => {
  return (
    <section className="max-w-[90%] mx-auto py-5 lg:py-10">
      <h1 className="text-center pb-10 text-2xl lg:text-4xl">Industries We Serve</h1>
      <div className="mx-auto">
        <Marquee
          className="gap-[3rem] [--duration:25s] bg-orange-950 p-8 "
          fade
          innerClassName="gap-[3rem] "
          // pauseOnHover
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-2xl md:text-4xl font-bold text-white"
            >
              {feature}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
