import { CTASection } from "@/components/layout/sections/cta";
import { CTAWithCard } from "@/components/layout/sections/cta-with-card";
import PageHeader from "@/components/layout/sections/page-header";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Timeline } from "@/components/ui/timeline-effect";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
import SocialImage from '@/app/assets/services/social media marketing pictures.jpg'


export default function SocilMediaMarketing() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={PageData.image}
      />
      <div className="py-24">
        <div className="px-10 lg:px-20 ">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Social Media Marketing Services Include
          </h1>
        </div>
        <Timeline data={data} />
      </div>
      <CTAWithCard items = {items} title = 'Why Choose MyPromo?'/>
      <CTASection
        title={CTADATA.title}
        description={CTADATA.description}
        dualtitle={CTADATA.dualTitle}
      />
      
    </>
  );
}

const PageData = {
  title: "Social Media Marketing",
  description:
    "At MyPromo, we help businesses like yours thrive in the digital world through targeted, data-driven social media marketing strategies. Our services are designed to boost your brand's online presence, engage with your audience, and drive measurable results.",
  subtitle: "Elevate Your Brand with  Social Media Marketing Expert",
  image: SocialImage
};
const data = [
  {
    title: "Social Media Strategy",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We develop a tailored strategy to align with your business goals and
          target audience. This includes planning content themes, posting
          schedules, and engagement tactics.
        </p>
      </div>
    ),
  },
  {
    title: "Content Creation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Crafting high-quality, engaging content that resonates with your
          audience. This includes eye-catching graphics, compelling copy, and
          interactive elements like polls and stories.
        </p>
      </div>
    ),
  },
  {
    title: "Account Management",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Handling day-to-day activities on your social media profiles. We
          manage posts, respond to comments, and engage with your community to
          maintain a vibrant online presence.
        </p>
      </div>
    ),
  },
  {
    title: "Advertising Campaigns",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Designing and managing targeted social media ads to reach specific
          demographics. Our campaigns are optimized for conversions and can
          include various formats like carousel ads, video ads, and sponsored
          posts.
        </p>
      </div>
    ),
  },
  {
    title: "Analytics and Reporting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Providing detailed reports on your social media performance. We track
          key metrics such as engagement rates, follower growth, and campaign
          ROI to measure success and adjust strategies.
        </p>
      </div>
    ),
  },
  {
    title: "Influencer Partnerships",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Connecting with influencers to promote your brand and reach a wider
          audience. We handle influencer outreach, campaign coordination, and
          performance tracking.
        </p>
      </div>
    ),
  },
  {
    title: "Social Media Audit",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Conducting a thorough analysis of your current social media presence
          to identify strengths, weaknesses, and opportunities for improvement.
        </p>
      </div>
    ),
  },
  {
    title: "Community Building",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Developing strategies to foster a loyal community around your brand.
          This includes engaging with followers, managing online reputation, and
          creating a strong brand voice.
        </p>
      </div>
    ),
  },
  {
    title: "Trend Monitoring",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Keeping up with the latest social media trends and algorithm changes
          to ensure your strategies are up-to-date and effective.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Get Started ",
  dualTitle: "Today",
  description:
    "Ready to build or revamp your business? Contact us today to discuss your project and discover how MyPromo can create a powerful online presence for your business.",
};
const PageFooterData = {
  title: "Why Choose MyPromo?",
  description:
    "At MyPromo, we are dedicated to delivering SEO solutions that drive tangible results. Our approach combines in-depth analysis, strategic planning, and cutting-edge techniques to enhance your online visibility and achieve your business goals. With a focus on transparency and communication, we ensure you are always informed about your SEO progress.",
};


const items = [
    {
      title: "Tailored Strategies",
      description: "Custom social media plans designed to meet your unique business objectives.",

      icon: <IconClipboardCopy className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />,
    },
    {
      title: "Engaging Content",
      description: "Creative and compelling content that drives engagement and builds brand loyalty.",

      icon: <IconFileBroken className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />,
    },
    {
      title: "Expert Management",
      description: "Experienced professionals who handle all aspects of your social media presence.",

      icon: <IconSignature className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />,
    },
    {
      title: "Proven Results",
      description:
        "Analytics and insights that guide decision-making and maximize ROI.",

      icon: <IconTableColumn className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />,
    },

  ];