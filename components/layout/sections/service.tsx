import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconSeo,
  IconDeviceImacCode,
  IconBrandAdobePhotoshop,
  IconAutomation,
  IconEdit,
  IconActivity,
  IconHeartHandshake,
} from "@tabler/icons-react";
import Link from "next/link";

export function ServiceSection() {
  const features = [
    {
      title: "Website Development",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconDeviceImacCode />,
      link: "/services/webdev",
    },
    {
      title: "Search Engine Optimization",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconSeo />,
      link: "/services/seo",
    },
    {
      title: "Social Media Marketing",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
      link: "/services/smmarketing",
    },
    {
      title: "Graphic Design",
      description: "We just cannot be taken down by anyone.",
      icon: <IconBrandAdobePhotoshop />,
      link: "/services/graphicdesign",
    },
    {
      title: "Lead Generation",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
      link: "/services/leadgen",
    },
    {
      title: "Marketing Automation",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconAutomation />,
      link: "/services/marketingautomation",
    },
    {
      title: "AI Enhanced Digital Optimization",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
      link: "/services/aioptimization",
    },
    {
      title: "Content Writing",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconEdit />,
      link: "/services/contentwriting",
    },
    {
      title: "Content Marketing",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconActivity />,
      link: "/services/contentmarketing",
    },
    {
      title: "Collab Membership",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeartHandshake />,
      link: "/services/collab",
    },
    {
      title: "Salesforce",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
      link: "/services/salesforce",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center">
        <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider mb-5">
          Services
        </h2>
      </div>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Grow Your Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            index={index}
            link={feature.link}
          />
        ))}
      </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}) => {
  return (
    <Link
      href={link}
      prefetch = {true}
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4 || index === 8) &&
          "lg:border-l dark:border-neutral-800",
        index < 8 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 ml-4 relative z-10 p-2 text-primary  bg-primary/10 w-fit rounded-full">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary/80 group-hover/feature:text-primary">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </Link>
  );
};
