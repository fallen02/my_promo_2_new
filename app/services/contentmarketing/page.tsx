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

export default function ContentMarketing() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
      />
      <div className="py-24">
        <div className="px-10 lg:px-20 ">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Content Marketing Services Include
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
  title: "Content Marketing",
  subtitle: "Drive Engagement and Growth with Expert Content Marketing",
  description:
    "At MyPromo, we specialize in content marketing strategies designed to captivate your audience, build brand authority, and drive measurable results. Our comprehensive approach ensures that your content not only reaches your target audience but also compels them to take action.",
};
const data = [
  {
    title: "Content Strategy Development",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create a robust content marketing strategy tailored to your business
          goals, target audience, and industry trends. Define objectives, key
          messages, and content formats that will drive success.
        </p>
      </div>
    ),
  },
  {
    title: "Content Creation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Develop high-quality content that resonates with your audience and
          aligns with your brand’s voice. This includes blog posts, articles,
          infographics, videos, and more.
        </p>
      </div>
    ),
  },
  {
    title: "SEO Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Optimize content for search engines to improve visibility and drive
          organic traffic. Implement strategic keyword integration, meta
          descriptions, and SEO best practices to enhance search rankings.
        </p>
      </div>
    ),
  },
  {
    title: "Content Distribution",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Ensure your content reaches the right audience through strategic
          distribution channels. Utilize social media, email marketing, and
          partnerships to maximize reach and engagement.
        </p>
      </div>
    ),
  },
  {
    title: "Social Media Management",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Manage and execute content on social media platforms to boost
          engagement, grow your audience, and drive traffic to your website.
          Create and schedule posts, interact with followers, and analyze
          performance.
        </p>
      </div>
    ),
  },
  {
    title: "Email Marketing Campaigns",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Design and implement email marketing campaigns that deliver valuable
          content directly to your audience’s inbox. Develop newsletters,
          promotional emails, and automated sequences to nurture leads and
          retain customers.
        </p>
      </div>
    ),
  },
  {
    title: "Content Curation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Curate relevant and valuable content from industry sources to
          complement your original content. Share curated content to provide
          additional value to your audience and establish thought leadership.
        </p>
      </div>
    ),
  },
  {
    title: "Analytics and Reporting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Monitor and measure the performance of your content marketing efforts
          using advanced analytics tools. Track key metrics such as engagement,
          traffic, and conversion rates to refine your strategy and improve
          results.
        </p>
      </div>
    ),
  },
  {
    title: "Content Repurposing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Maximize the value of your content by repurposing it into various
          formats. Transform blog posts into infographics, videos, or social
          media posts to reach different segments of your audience.
        </p>
      </div>
    ),
  },
  {
    title: "Brand Storytelling",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Craft compelling brand stories that connect with your audience on an
          emotional level. Use storytelling techniques to convey your brand’s
          mission, values, and unique selling points.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to elevate",
  dualTitle: " your content marketing strategy?",
  description:
    "Contact us today to learn how our content marketing services can help you engage your audience, build brand authority, and achieve your business goals.",
};

const items = [
  {
    title: "Strategic Approach",
    description:
      "We develop and execute content marketing strategies that align with your business objectives and target audience.",

    icon: (
      <IconClipboardCopy className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "High-Quality Content",
    description:
      "Our team creates engaging and valuable content that enhances your brand’s credibility and drives action.",

    icon: (
      <IconFileBroken className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "SEO Expertise",
    description:
      "We optimize content to improve search engine rankings and attract organic traffic.",

    icon: (
      <IconSignature className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Comprehensive Services",
    description:
      "From strategy development to content creation and distribution, we offer a full suite of content marketing services.",

    icon: (
      <IconTableColumn className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];
