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
import LeadImage from '@/app/assets/services/lead generation.jpg'

export default function LeadGenaration() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={LeadImage}
      />
      <div className="py-24">
        <div className="px-10 lg:px-20 ">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Lead Generation Services Include
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
  title: "Lead Generation",
  description:
    "At MyPromo, we specialize in generating high-quality leads that drive business growth. Our comprehensive lead generation strategies are designed to attract, engage, and convert potential customers into valuable prospects.",
  subtitle: "Supercharge Your Sales with Expert Lead Generation",
};
const data = [
  {
    title: "Targeted Campaigns",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Design and execute targeted marketing campaigns that reach your ideal
          audience based on demographics, behavior, and interests. We use
          data-driven approaches to ensure your campaigns are optimized for
          maximum impact.
        </p>
      </div>
    ),
  },
  {
    title: "Lead Magnets",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Create compelling lead magnets such as eBooks, whitepapers, and free trials that provide value to your audience and encourage them to share their contact information.
        </p>
      </div>
    ),
  },
  {
    title: "Landing Page Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Develop and optimize high-converting landing pages that capture leads effectively. We focus on design, copywriting, and calls-to-action to maximize conversion rates.
        </p>
      </div>
    ),
  },
  {
    title: "Email Marketing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Implement email marketing strategies that nurture leads through personalized and engaging content. Our services include creating email sequences, managing campaigns, and analyzing performance.
        </p>
      </div>
    ),
  },
  {
    title: "Social Media Lead Generation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Utilize social media platforms to attract and engage potential leads. We create targeted ads, engaging posts, and lead capture forms that drive interest and conversions.
        </p>
      </div>
    ),
  },
  {
    title: "Search Engine Marketing (SEM)",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Leverage paid search advertising to capture high-intent leads. We manage PPC campaigns, optimize ad copy, and track performance to ensure your ads reach the right audience.
        </p>
      </div>
    ),
  },
  {
    title: "Content Marketing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Develop valuable content that attracts and engages potential leads. This includes blog posts, articles, and case studies that drive traffic and generate interest in your offerings.
        </p>
      </div>
    ),
  },
  {
    title: "Webinars and Events",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Host and promote webinars and events that provide valuable information and attract potential leads. We handle all aspects, including promotion, registration, and follow-up.
        </p>
      </div>
    ),
  },
  {
    title: "CRM Integration",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Integrate lead generation efforts with your Customer Relationship Management (CRM) system to streamline lead tracking, nurturing, and conversion.
        </p>
      </div>
    ),
  },
  {
    title: "Lead Scoring and Qualification",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Implement lead scoring systems to prioritize and qualify leads based on their engagement and likelihood to convert. This helps focus efforts on the most promising prospects.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to supercharge",
  dualTitle: "your sales with high-quality leads?",
  description:
    "Contact us today to learn how our lead generation services can help you attract, engage, and convert potential customers.",
};

const items = [
  {
    title: "Proven Strategies",
    description:
      "Our lead generation techniques are backed by data and industry best practices to deliver measurable results.",

    icon: (
      <IconClipboardCopy className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Customized Solutions",
    description:
      "We tailor our lead generation strategies to align with your business goals and target audience.",

    icon: (
      <IconFileBroken className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "High-Quality Leads",
    description:
      "We focus on attracting leads that are more likely to convert, ensuring a higher return on investment.",

    icon: (
      <IconSignature className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Transparent Reporting",
    description:
      " Receive detailed reports on lead generation performance, including metrics, insights, and recommendations.",

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
