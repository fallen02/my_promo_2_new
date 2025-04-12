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
import AIimage from '@/app/assets/services/AI Enhanced Optimization.jpg'

export default function MarketingAutomation() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={AIimage}
      />
      <div className="py-24">
        <div className="px-10 lg:px-20 ">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our AI-Enhanced Digital Optimization Services Include
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
  title: "AI Enhanced Digital Optimization",
  subtitle: "Unlock Superior Performance with AI-Enhanced Digital Optimization",
  description:
    "At MyPromo, we utilize advanced artificial intelligence to elevate your digital marketing strategy. Our AI-enhanced digital optimization services are designed to improve efficiency, personalize customer interactions, and deliver actionable insights that drive success.",
};
const data = [
  {
    title: "Personalized User Experiences",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Implement AI-driven personalization to tailor content and
          recommendations based on user behavior and preferences. Deliver unique
          experiences that boost engagement and conversion rates.
        </p>
      </div>
    ),
  },
  {
    title: "Predictive Analytics",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Use AI to analyze historical data and predict future trends, customer
          behaviors, and market shifts. Make proactive decisions to stay ahead
          of the competition.
        </p>
      </div>
    ),
  },
  {
    title: "Automated Content Generation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Leverage AI tools to create high-quality, consistent content
          efficiently. From blog posts to social media updates, ensure your
          content strategy is scalable and effective.
        </p>
      </div>
    ),
  },
  {
    title: "Dynamic Pricing Models",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Apply AI to adjust pricing in real-time based on demand, competition,
          and other market factors. Optimize pricing strategies to maximize
          revenue and profitability.
        </p>
      </div>
    ),
  },
  {
    title: "Advanced Ad Targeting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Enhance ad campaigns with AI-powered targeting and optimization.
          Analyze user data to deliver ads to the right audience at the right
          time, increasing ROI and reducing wasted spend.
        </p>
      </div>
    ),
  },
  {
    title: "Intelligent Customer Segmentation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Utilize AI to segment your audience more precisely. Identify patterns
          and create targeted marketing strategies for each segment to drive
          better engagement and conversion.
        </p>
      </div>
    ),
  },
  {
    title: "AI-Powered Chatbots",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Deploy intelligent chatbots to provide instant customer support,
          handle inquiries, and guide users through their journey. Improve
          response times and enhance user satisfaction.
        </p>
      </div>
    ),
  },
  {
    title: "Data-Driven Insights",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Analyze large datasets with AI to uncover actionable insights and
          trends. Make informed decisions based on comprehensive, real-time
          data.
        </p>
      </div>
    ),
  },
  {
    title: "Campaign Automation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Automate campaign management and optimization with AI. Continuously
          monitor performance and make real-time adjustments to improve outcomes
          and efficiency.
        </p>
      </div>
    ),
  },
  {
    title: "Fraud Detection",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Implement AI to detect and prevent fraudulent activities, such as
          click fraud or account breaches. Protect your marketing investments
          and ensure data integrity.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to transform",
  dualTitle: "your digital marketing with AI?",
  description:
    "Contact us today to discover how our AI-enhanced digital optimization services can help you achieve your goals and drive exceptional results.",
};

const items = [
  {
    title: "Cutting-Edge Technology",
    description:
      "Leverage the latest AI innovations to enhance your digital marketing strategy.",

    icon: (
      <IconClipboardCopy className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Enhanced Efficiency",
    description:
      "Automate and optimize processes for improved efficiency and scalability.",

    icon: (
      <IconFileBroken className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Personalized Engagement",
    description:
      "Deliver tailored experiences that resonate with your audience.",

    icon: (
      <IconSignature className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Data-Driven Strategies",
    description:
      "Make informed decisions with powerful AI analytics and insights.",

    icon: (
      <IconTableColumn className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];
