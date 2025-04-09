import Image from "next/image";
import whatsapp from "@/app/assets/whatsapp.svg";
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
import Meat99 from "@/app/assets/meat99.png"
import Geniuslane from "@/app/assets/Geniuslane.png"
import { Projects } from "@/components/layout/sections/Projects";

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
      "The biggest challenge was to overcome the crowded competition of assignment services through organic marketing. ",
      "They wanted social media branding that suits his business and collect more reach of his profiles.",
      "They wanted a stunning website with complete information about them, the website that works as a lead magnet as well as a funnel.",
    ],

    solutions: [
      "We have got their requirements & need. Consulted them what we’re going to and started a well-planned social media organic marketing that lead to the best organic student base(all over the world) who are really interested in his services. ",
      "We build the website of Assigna Solution at an affordable cost that worthed for them in each aspect.",
    ],
    results:
      "The branding & organic reach and engagement got a boost and the student requirement for services got a boost",
    image: ['https://cdn.sanity.io/images/5mpqfrus/production/8d68a0c55a853a877125b4727756c3a329796a31-1891x872.jpg'],
  },
  {
    title: "Revitalizing Meat99’s Social Media Presence",
    overview:
      "We were tasked with creating and executing a brand awareness campaign for a new product launch.",
    challenges: ["Establishing brand recognition in a competitive market."],
    solutions: [
      "Developed a compelling brand narrative, designed engaging promotional materials, and orchestrated a high-impact launch event.",
    ],
    results:
      "The campaign garnered widespread media coverage, increased brand recognition by 50%, and generated a 30% rise in product sales.",
    image: [Meat99],
  },
  {
    title: "Enhancing Lead Generation for Geniuslane",
    overview:
      "Focused on boosting lead generation through targeted digital marketing strategies.",
    challenges: [
      "Low lead conversion rates and ineffective lead capture mechanisms.",
    ],
    solutions: [
      "We optimized landing pages, crafted high-converting lead magnets, and executed targeted email marketing campaigns.",
    ],
    results:
      "Led to a 70% increase in qualified leads, improved lead conversion rates by 40%, and a substantial increase in overall ROI.",
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
                      alt=""
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
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
                      alt=""
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
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
                      alt=""
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
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
      <TestimonialSection />
      <Feature />

      <CTASection
        title={CTADATA.title}
        description={CTADATA.description}
        dualtitle={CTADATA.dualTitle}
      />
    </main>
  );
}

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center flex justify-center items-center flex-col mb-8">
        <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider mb-5">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Client Success Stories
        </h2>
      </div>

      <Carousel
        opts={{
          align: "center",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Feature13Props {
  features?: Feature[];
}

const Feature = ({
  features = [
    {
      id: "feature-1",
      title: "Franchise",
      description:
        "Leveraging cutting-edge solutions for tech companies to stay ahead in a fast-paced industry.",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-metaverse-background_23-2149272282.jpg?t=st=1743347187~exp=1743350787~hmac=c3b1e0f049940d283aed95dcd1aa9b4f08e84ab9fa70850b180b60c6f23a3268&w=740",
    },
    {
      id: "feature-2",
      title: "Educational",
      description:
        "Driving sales and enhancing customer experiences through strategic marketing and design.",
      image:
        "https://img.freepik.com/free-vector/ecommerce-campaign-concept-illustration_114360-8222.jpg?t=st=1743346997~exp=1743350597~hmac=e5b9a9d6a1d8f702eb8006bb0dd79afc751be0c593668bdc4ae85d3062a16a71&w=740",
    },
    {
      id: "feature-1",
      title: "Healthcare",
      description:
        "Crafting impactful campaigns and content to effectively communicate with patients and professionals.",
      image:
        "https://img.freepik.com/free-vector/flat-national-doctor-s-day-illustration_23-2149437381.jpg?t=st=1744139790~exp=1744143390~hmac=c9dea380064f20d706d77f7d9caebbf2ec83532834dc5e00cb6afb1a225b55e1&w=740",
    },
    {
      id: "feature-2",
      title: "E-commerce",
      description:
        "Developing strategies to build trust and engage with clients in a highly regulated industry.",
      image:
        "https://img.freepik.com/free-vector/employee-working-office-interior-workplace-flat-vector-illustration_1150-37459.jpg?t=st=1743347976~exp=1743351576~hmac=dcbd7ab2c29d8f470994860a77d510bec85aba3b31d53387731013f2951c637a&w=740",
    },
  ],
}: Feature13Props) => {
  return (
    <section className="py-32">
      <div className="container max-w-7xl">
        <div className="text-center flex justify-center items-center flex-col mb-8">
          <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider mb-5">
          Industries
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Industries We Serve
          </h2>
        </div>
        <div className="mt-20 grid gap-9 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-between rounded-xl bg-gray-900/30"
            >
              <div className="flex justify-between gap-10 border-b border-gray-900">
                <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                  <h3 className="text-2xl md:text-4xl text-orange-600">
                    {feature.title}
                  </h3>
                </div>
                <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                    height={200}
                    width={200}
                  />
                </div>
              </div>
              <div className="p-4 text-gray-200 md:p-8">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
