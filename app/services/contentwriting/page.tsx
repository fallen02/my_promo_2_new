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
import ContentImage from '@/app/assets/services/content writing.jpg'

export default function ContentWriting() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={ContentImage}
      />
      <div className="py-24">
        <div className="px-10 lg:px-20 ">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Content Writing Services Include
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
  title: "Content Writing",
  subtitle: "Elevate Your Brand with Professional Content Writing",
  description:
    "At MyPromo, we specialize in crafting high-quality content that captures attention, engages readers, and drives results. Our content writing services are designed to enhance your brand’s voice, convey your message effectively, and support your business goals.",
};
const data = [
  {
    title: "Website Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Develop engaging and SEO-friendly content for your website, including
          homepage, about us, services, and product descriptions. Enhance your
          online presence and convert visitors into customers.
        </p>
      </div>
    ),
  },
  {
    title: "Blog Posts and Articles",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create informative, relevant, and well-researched blog posts and
          articles that position your brand as an industry authority. Drive
          traffic and engage your audience with valuable insights.
        </p>
      </div>
    ),
  },
  {
    title: "Social Media Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Craft compelling social media posts and updates that resonate with
          your audience. Boost engagement and grow your following with tailored
          content for each platform.
        </p>
      </div>
    ),
  },
  {
    title: "Email Newsletters",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Write persuasive email newsletters that capture your audience’s
          interest and drive action. Whether for promotional campaigns or
          regular updates, ensure your emails are effective and engaging.
        </p>
      </div>
    ),
  },
  {
    title: "White Papers and Ebooks",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Produce in-depth white papers and ebooks that provide valuable
          information and establish your brand as a thought leader. Generate
          leads and build credibility with well-researched content.
        </p>
      </div>
    ),
  },
  {
    title: "Press Releases",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Write professional press releases that effectively communicate your
          news and updates. Gain media coverage and enhance your brand’s
          visibility with compelling and newsworthy content.
        </p>
      </div>
    ),
  },
  {
    title: "Product Descriptions",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create detailed and persuasive product descriptions that highlight
          features and benefits. Increase conversions and drive sales with
          content that appeals to your target audience.
        </p>
      </div>
    ),
  },
  {
    title: "Case Studies",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Develop insightful case studies that showcase your successes and
          demonstrate your expertise. Build trust with potential clients by
          highlighting real-world results and testimonials.
        </p>
      </div>
    ),
  },
  {
    title: "Copywriting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Craft persuasive and impactful copy for advertisements, landing pages,
          and promotional materials. Drive conversions and capture attention
          with well-written, engaging content.
        </p>
      </div>
    ),
  },
  {
    title: "SEO Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Optimize your content for search engines with strategic keyword
          integration, meta descriptions, and compelling headlines. Improve your
          search engine rankings and attract organic traffic.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to take",
  dualTitle: "your content to the next level?",
  description:
    "Contact us today to explore how our professional content writing services can enhance your brand’s message and drive results.",
};

const items = [
  {
    title: "Expert Writers",
    description:
      "Our team of experienced writers delivers high-quality content that aligns with your brand’s voice and objectives.",

    icon: (
      <IconClipboardCopy className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Tailored Solutions",
    description:
      "We provide customized content solutions to meet your specific needs and goals.",

    icon: (
      <IconFileBroken className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "SEO Expertise",
    description:
      "Our content is optimized for search engines to improve visibility and drive traffic.",

    icon: (
      <IconSignature className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Engaging and Relevant",
    description:
      "We create content that captures attention and engages your audience effectively.",

    icon: (
      <IconTableColumn className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];
