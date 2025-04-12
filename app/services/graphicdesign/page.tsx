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
import GraphicsImage from '@/app/assets/services/graphics design.jpg'

export default function GraphicDesign() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={GraphicsImage}
      />
      <div className="py-24">
        <div className="px-10 lg:px-20 ">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Graphic Design Services Include
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
  title: "Graphic Design",
  description:
    "At MyPromo, we specialize in delivering exceptional graphic design services that bring your vision to life. From eye-catching visuals to cohesive brand identities, our designs are crafted to captivate your audience and elevate your brand.",
  subtitle: "Transform Your Brand with Stunning Graphic Design",
};
const data = [
  {
    title: "Brand Identity Design",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create a strong and memorable brand identity with logos, color
          schemes, typography, and brand guidelines that reflect your business
          values and resonate with your target audience.
        </p>
      </div>
    ),
  },
  {
    title: "Marketing Materials",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Design effective marketing materials such as brochures, flyers,
          posters, and banners that effectively communicate your message and
          attract potential customers.
        </p>
      </div>
    ),
  },
  {
    title: "Social Media Graphics",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Develop engaging graphics for your social media profiles, including
          cover images, post designs, and ad creatives that enhance your online
          presence and drive engagement.
        </p>
      </div>
    ),
  },
  {
    title: "Web and Mobile Design",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Design user-friendly and visually appealing websites and mobile apps
          that provide a seamless user experience and align with your brand’s
          aesthetics.
        </p>
      </div>
    ),
  },
  {
    title: "Print Design",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create high-quality print designs for business cards, letterheads,
          packaging, and other materials that make a lasting impression.
        </p>
      </div>
    ),
  },
  {
    title: "Infographics",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Craft informative and visually engaging infographics that simplify
          complex information and make it easy for your audience to understand
          and share.
        </p>
      </div>
    ),
  },
  {
    title: "Presentation Design",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Design professional and visually compelling presentations that
          effectively communicate your ideas and engage your audience during
          meetings and pitches.
        </p>
      </div>
    ),
  },
  {
    title: "Custom Illustrations",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Develop unique and creative illustrations tailored to your brand’s
          needs, including custom icons, mascots, and other visual elements.
        </p>
      </div>
    ),
  },
  {
    title: "Design Consultation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Offer expert advice on design strategies and best practices to ensure
          that your visual assets align with your business goals and brand
          identity.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to elevate your brand with",
  dualTitle: "stunning graphic design?",
  description:
    "Contact us today to discuss how our design services can help you make a powerful visual impact and achieve your business goals.",
};

const items = [
  {
    title: "Creative Excellence",
    description:
      "Our team of skilled designers brings creativity and innovation to every project, ensuring that your designs stand out.",

    icon: (
      <IconClipboardCopy className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Tailored Solutions",
    description:
      "We provide customized design solutions that align with your brand’s vision and objectives.",

    icon: (
      <IconFileBroken className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Attention to Detail",
    description:
      "We focus on every detail to deliver high-quality designs that exceed your expectations.",

    icon: (
      <IconSignature className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Timely Delivery",
    description:
      "We adhere to deadlines and deliver designs promptly without compromising quality.",

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
