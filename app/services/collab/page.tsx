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
import ColabImage from '@/app/assets/services/marketing collab membership.jpg'

export default function ContentMarketing() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={ColabImage}
      />
      <div className="py-24">
        <div className="px-10 lg:px-20 ">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
          Benefits of Collab Membership
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
  title: "Collab Membership",
  subtitle: "Unlock Exclusive Benefits with Our Collab Membership",
  description:
    "At MyPromo, our Collab Membership is designed to foster collaboration, provide valuable resources, and create opportunities for growth. Join our community to gain access to exclusive tools, insights, and networking opportunities that will enhance your business and drive success.",
};
const data = [
  {
    title: "Exclusive Access",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Enjoy access to premium content, tools, and resources tailored to support your business needs. From industry reports to advanced marketing tools, gain insights that are not available to the general public.
        </p>
      </div>
    ),
  },
  {
    title: "Networking Opportunities",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Connect with like-minded professionals, industry leaders, and potential partners through our exclusive events and forums. Expand your network and explore collaboration opportunities that drive mutual growth.
        </p>
      </div>
    ),
  },
  {
    title: "Collaborative Projects",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Participate in collaborative projects and initiatives designed to foster innovation and partnership. Work together with other members on joint ventures, research, and creative endeavors.
        </p>
      </div>
    ),
  },
  {
    title: "Training and Workshops",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Attend exclusive training sessions and workshops led by industry experts. Enhance your skills, stay updated with the latest trends, and gain practical knowledge that can be applied to your business.
        </p>
      </div>
    ),
  },
  {
    title: "Early Access to Features",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Be the first to experience new features, tools, and updates before they are released to the public. Provide feedback and influence the development of future offerings.
        </p>
      </div>
    ),
  },
  {
    title: "Discounts and Offers",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Benefit from special discounts and offers on services, products, and events. Enjoy cost savings while accessing top-notch resources and opportunities.
        </p>
      </div>
    ),
  },
  {
    title: "Member-Only Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Access a wealth of member-only content, including in-depth guides, case studies, and exclusive research. Stay informed and make data-driven decisions with the latest industry insights.
        </p>
      </div>
    ),
  },
  {
    title: "Collaborative Tools",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Utilize advanced tools and platforms designed to facilitate collaboration, project management, and communication. Streamline your workflow and enhance productivity with our curated selection of tools.
        </p>
      </div>
    ),
  },
  {
    title: "Recognition and Awards",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
        Gain recognition for your contributions and achievements within the community. Participate in awards and recognition programs that highlight your successes and innovations.
        </p>
      </div>
    ),
  },

];

const CTADATA = {
  title: "Ready to unlock",
  dualTitle: " the full potential of collaboration?",
  description:
    "Join our Collab Membership today and take advantage of exclusive benefits designed to help you grow and succeed.",
};

const items = [
  {
    title: "Enhanced Collaboration",
    description:
      "Foster meaningful connections and partnerships with professionals and organizations that share your goals and values.",

    icon: (
      <IconClipboardCopy className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Exclusive Resources",
    description:
      "Access valuable tools, content, and insights that are tailored to support your business growth and success.",

    icon: (
      <IconFileBroken className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "Stay ahead of the curve with ongoing training and workshops led by experts in your industry.",

    icon: (
      <IconSignature className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Increased Visibility",
    description:
      "Gain exposure and recognition within a vibrant community of innovators and leaders.",

    icon: (
      <IconTableColumn className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];
