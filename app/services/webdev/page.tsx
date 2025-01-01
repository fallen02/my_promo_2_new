import { CTASection } from "@/components/layout/sections/cta";
import PageHeader from "@/components/layout/sections/page-header";
import { PageFooter } from "@/components/layout/sections/page_footer";
import { TextShimmer } from "@/components/ui/text-shimmer";

import { Timeline } from "@/components/ui/timeline-effect";
import Image from "next/image";

const CTADATA = {
  title: "Get Started",
  dualTitle: "Today",
  description:
    "Ready to build or revamp your website? Contact us today to discuss your project and discover how MyPromo can create a powerful online presence for your business.",
};

export default function Webdev() {
  const PageData = {
    title: "Web Development",
    description:
      "At MyPromo we understand that your website is the digital storefront of your business. Our comprehensive website development services are designed to create an online presence that not only captures your brand’s essence but also drives engagement and conversion.",
    subtitle: "Transform Your Online Presence with Website Development Expert",
  };
  const data = [
    {
      title: "Custom Website Design",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We craft bespoke website designs that reflect your brand’s identity
            and resonate with your target audience. Our designs are
            user-friendly, visually appealing, and tailored to meet your
            specific business needs.
          </p>
        </div>
      ),
    },
    {
      title: "Responsive Design",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            In today’s mobile-driven world, having a responsive website is
            crucial. We ensure that your site performs flawlessly across all
            devices and screen sizes, providing a seamless experience for users
            on desktop, tablet, and mobile.
          </p>
        </div>
      ),
    },
    {
      title: "E-Commerce Solutions",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            For businesses looking to sell online, we offer robust e-commerce
            development services. From product listings and shopping carts to
            secure payment gateways and inventory management, we build platforms
            that enhance the shopping experience and drive sales.
          </p>
        </div>
      ),
    },
    {
      title: "Content Management Systems (CMS)",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We specialize in popular CMS platforms like WordPress, Joomla, and
            Drupal, providing you with the tools to easily manage and update
            your website content. Our CMS solutions are intuitive, scalable, and
            tailored to your needs.
          </p>
        </div>
      ),
    },
    {
      title: "Search Engine Optimization (SEO)",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            A well-designed website is only effective if it’s visible. Our
            development process includes on-page SEO optimization to improve
            your site’s search engine rankings and drive organic traffic.
          </p>
        </div>
      ),
    },
    {
      title: "Website Maintenance and Support",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Keeping your website updated and running smoothly is essential. We
            offer ongoing maintenance and support services to ensure that your
            site remains secure, functional, and up-to-date with the latest
            technology.
          </p>
        </div>
      ),
    },
    {
      title: "Performance Optimization",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We focus on optimizing your website’s performance, including fast
            loading times, smooth navigation, and efficient code. Our goal is to
            enhance user experience and reduce bounce rates.
          </p>
        </div>
      ),
    },
    {
      title: "Integration Services",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Whether you need to integrate with third-party tools, CRM systems,
            or marketing platforms, we ensure seamless connectivity to
            streamline your operations and enhance functionality.
          </p>
        </div>
      ),
    },
    {
      title: "UI/UX Design",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Our team emphasizes user experience (UX) and user interface (UI)
            design to ensure that your website is not only visually engaging but
            also easy to navigate and interact with.
          </p>
        </div>
      ),
    },
    {
      title: "Analytics and Reporting",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We implement analytics tools to track your website’s performance,
            gather insights, and provide regular reports. This data helps in
            making informed decisions and optimizing your online strategy.
          </p>
        </div>
      ),
    },
  ];

  const PageFooterData = {
    title: "Why Choose MyPromo?",
    description:
      "At MyPromo, our website development services are designed to deliver high-quality, results-driven solutions. We combine technical expertise with creative design to build websites that not only look great but also perform exceptionally. Our client-centric approach ensures that we understand your goals and deliver a final product that exceeds expectations.",
  };

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
            Our Website Development Services Include
          </h1>
        </div>
        <Timeline data={data} />
      </div>

      <PageFooter
        title={PageFooterData.title}
        description={PageFooterData.description}
      />
      <CTASection
        title={CTADATA.title}
        description={CTADATA.description}
        dualtitle={CTADATA.dualTitle}
      />
    </>
  );
}
