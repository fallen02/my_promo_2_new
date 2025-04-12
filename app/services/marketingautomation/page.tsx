import { CTASection } from "@/components/layout/sections/cta";
import { CTAWithCard } from "@/components/layout/sections/cta-with-card";
import PageHeader from "@/components/layout/sections/page-header";
import { TextShimmer } from "@/components/ui/text-shimmer";

import { Timeline } from "@/components/ui/timeline-effect";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import SocailAutomate from '@/app/assets/services/marketing automation.jpg'

export default function MarketingAutomation() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={SocailAutomate}
      />
      <div className="py-24">
        <div className="px-10 lg:px-20 ">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Marketing Automation Services Include
          </h1>
        </div>
        <Timeline data={data} />
      </div>
      <CTAWithCard items={items} title="Why Choose MyPromo?" />
      <CTASection
        title={CTADATA.title}
        description={CTADATA.description}
        dualtitle={CTADATA.dualTitle}
      />
    </>
  );
}

const PageData = {
  title: "Marketing Automation",
  subtitle: "Streamline Your Marketing with Advanced Automation Solutions",
  description:
    "At MyPromo, we provide cutting-edge marketing automation services designed to optimize your marketing efforts, increase efficiency, and drive better results. Our solutions automate repetitive tasks, enhance customer engagement, and deliver personalized experiences that convert leads into loyal customers.",
};
const data = [
  {
    title: "Automated Email Campaigns",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create and manage automated email sequences that nurture leads, drive
          engagement, and convert prospects into customers. We design
          personalized email workflows based on user behavior and preferences.
        </p>
      </div>
    ),
  },
  {
    title: "Lead Scoring and Segmentation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Implement automated lead scoring to prioritize prospects based on
          their engagement and likelihood to convert. Segment your audience to
          deliver targeted and relevant content.
        </p>
      </div>
    ),
  },
  {
    title: "Behavioral Triggers",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Set up automated triggers that respond to user actions, such as
          website visits or abandoned carts. Engage users with timely, relevant
          content that drives them further down the sales funnel.
        </p>
      </div>
    ),
  },
  {
    title: "CRM Integration",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Integrate marketing automation with your Customer Relationship
          Management (CRM) system to streamline lead management, track
          interactions, and maintain a unified view of customer data.
        </p>
      </div>
    ),
  },
  {
    title: "Social Media Automation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Schedule and automate social media posts, monitor engagement, and
          manage interactions. Use automation tools to analyze social media
          performance and optimize your strategy.
        </p>
      </div>
    ),
  },
  {
    title: "Content Personalization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Deliver personalized content and offers based on user behavior,
          preferences, and demographics. Enhance the relevance of your
          communications to increase engagement and conversions.
        </p>
      </div>
    ),
  },
  {
    title: "Analytics and Reporting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Track and measure the performance of your automated campaigns with
          detailed analytics and reports. Gain insights into key metrics such as
          open rates, click-through rates, and conversion rates to refine your
          strategy.
        </p>
      </div>
    ),
  },
  {
    title: "Workflow Automation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Automate complex marketing workflows, including lead nurturing,
          follow-up sequences, and customer onboarding processes. Improve
          efficiency and ensure consistent communication.
        </p>
      </div>
    ),
  },
  {
    title: "A/B Testing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Conduct automated A/B tests to compare different versions of your
          emails, landing pages, and ads. Optimize your campaigns based on
          performance data to maximize results.
        </p>
      </div>
    ),
  },
  {
    title: "Multi-Channel Campaigns",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Manage and automate marketing campaigns across multiple channels,
          including email, social media, and web. Ensure a cohesive and
          consistent message throughout all touchpoints.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to transform",
  dualTitle: "your marketing with automation?",
  description:
    "Contact us today to discover how our marketing automation services can streamline your processes, enhance customer experiences, and drive better results.",
};

const items = [
  {
    title: "Tailored Automation Solutions",
    description:
      "We design and implement automation strategies that align with your specific business goals and marketing objectives.",

    icon: (
      <IconClipboardCopy className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Enhanced Efficiency",
    description:
      "Automate repetitive tasks to save time and focus on strategic activities that drive growth.",

    icon: (
      <IconFileBroken className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Personalized Experiences",
    description:
      "Deliver targeted, personalized content that resonates with your audience and improves engagement.",

    icon: (
      <IconSignature className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Data-Driven Insights",
    description:
      " Utilize advanced analytics to track performance, measure success, and make informed decisions.",

    icon: (
      <IconTableColumn className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  // {
  //   title: "Transparent Reporting",
  //   description: "Regular updates on your social media performance with clear and actionable insights.",
  //   header: (
  //     <Image
  //       src="/demo-img.jpg"
  //       alt="The Dawn of Innovation"
  //       width={400}
  //       height={200}
  //       layout="responsive"
  //     />
  //   ),
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  // },
];
