import { CTASection } from "@/components/layout/sections/cta";
import PageHeader from "@/components/layout/sections/page-header";
import { PageFooter } from "@/components/layout/sections/page_footer";
import { TextShimmer } from "@/components/ui/text-shimmer";

import { Timeline } from "@/components/ui/timeline-effect";
import Image from "next/image";

export default function Webdev() {
  const PageData = {
    title: "Search Engine Optimization",
    description:
      "At MyPromo, we specialize in optimizing your online presence to enhance visibility, drive organic traffic, and improve search engine rankings. Our SEO services are designed to help your business stand out in a crowded digital landscape and attract high-quality leads.",
    subtitle: "Boost Your Online Visibility with  SEO Expert",
  };
  const data = [
    {
      title: "Keyword Research",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We conduct thorough keyword research to identify the most relevant
            and high-performing keywords for your business. This ensures that
            your content targets the right search terms and reaches your
            intended audience.
          </p>
        </div>
      ),
    },
    {
      title: "On-Page SEO",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Our on-page optimization focuses on enhancing individual web pages
            to rank higher and attract relevant traffic. This includes
            optimizing meta tags, headers, images, and content for targeted
            keywords.
          </p>
        </div>
      ),
    },
    {
      title: "Technical SEO",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We address the technical aspects of your website to improve its
            performance and search engine crawlability. This involves optimizing
            site speed, mobile-friendliness, URL structure, and fixing technical
            issues that may affect rankings.
          </p>
        </div>
      ),
    },
    {
      title: "Content Creation and Optimization",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Quality content is key to SEO success. We create and optimize
            engaging, valuable content that aligns with your target audience’s
            needs and interests while incorporating relevant keywords.
          </p>
        </div>
      ),
    },
    {
      title: "Link Building",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Our link building strategies focus on acquiring high-quality
            backlinks from reputable websites. This helps to enhance your site’s
            authority and improve its ranking potential.
          </p>
        </div>
      ),
    },
    {
      title: "Local SEO",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            For businesses targeting local customers, we optimize your online
            presence to improve visibility in local search results. This
            includes optimizing your Google My Business profile, local
            citations, and ensuring consistent NAP (Name, Address, Phone Number)
            information.
          </p>
        </div>
      ),
    },
    {
      title: "SEO Audits",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We perform comprehensive SEO audits to assess your website’s current
            performance and identify areas for improvement. Our audits cover
            technical SEO, on-page factors, and backlink profiles.
          </p>
        </div>
      ),
    },
    {
      title: "Competitive Analysis",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We analyze your competitors’ SEO strategies to identify
            opportunities and develop tactics to outperform them. This helps you
            stay ahead in your industry and capture a larger market share.
          </p>
        </div>
      ),
    },
    {
      title: "Analytics and Reporting",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We track and measure the performance of your SEO campaigns using
            advanced analytics tools. Our detailed reports provide insights into
            keyword rankings, traffic trends, and ROI, enabling data-driven
            decisions.
          </p>
        </div>
      ),
    },
    {
      title: "Continuous Optimization",
      content: (
        <div>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            SEO is an ongoing process. We continually monitor your website’s
            performance, stay updated with search engine algorithm changes, and
            make necessary adjustments to keep your SEO strategy effective and
            competitive.
          </p>
        </div>
      ),
    },
  ];

  const CTADATA = {
    title: "Elevate Your",
    dualTitle: "Search Engine Presence",
    description:
      "Ready to enhance your search engine rankings and drive more organic traffic to your website? Contact us today to discuss how our SEO services can help you achieve long-term success in the digital marketplace.",
  };
  const PageFooterData = {
    title: "Why Choose MyPromo?",
    description:
      "At MyPromo, we are dedicated to delivering SEO solutions that drive tangible results. Our approach combines in-depth analysis, strategic planning, and cutting-edge techniques to enhance your online visibility and achieve your business goals. With a focus on transparency and communication, we ensure you are always informed about your SEO progress.",
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

          <h1 className="text-3xl lg:text-4xl">Our SEO Services Include</h1>
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
