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

import SalesForceImage from '@/app/assets/services/salesforce crm.jpg'

export default function Salesforce() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image = {SalesForceImage}
      />
      <div className="py-24">
        <div className="px-10 lg:px-20 ">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">Our Salesforce Services</h1>
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
  title: "Salesforce CRM",
  subtitle: "Unlock the full potential of Salesforce with MyPromo",
  description:
    "At MyPromo, we are dedicated to helping businesses like yours unlock the full potential of Salesforce. Our expertise in Salesforce implementation, customization, and optimization allows us to deliver tailored CRM solutions that drive sales growth, enhance customer relationships, and streamline your operations. Whether you’re new to Salesforce or looking to take your existing setup to the next level, we have the tools, knowledge, and experience to make it happen.",
};
const data = [
  {
    title: "Salesforce Implementation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Start your Salesforce journey with confidence. We guide you through
          the entire implementation process, from setup to launch, ensuring a
          smooth transition.
        </p>
      </div>
    ),
  },
  {
    title: "Customization & Development",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Our team customizes Salesforce to meet the unique demands of your
          business, building tailored solutions that improve workflow and drive
          efficiency.
        </p>
      </div>
    ),
  },
  {
    title: "Salesforce Integrations",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Connect Salesforce to your other business tools, such as marketing
          platforms, e-commerce systems, or customer service software, for a
          streamlined, all-in-one solution.
        </p>
      </div>
    ),
  },
  {
    title: "Data Migration",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Moving your data into Salesforce can be a daunting task. We ensure a
          seamless, secure migration of your existing data into the Salesforce
          ecosystem with minimal disruption.
        </p>
      </div>
    ),
  },
  {
    title: "Training & Support",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Our team provides comprehensive training for your staff, so they can
          get the most out of Salesforce. We also offer ongoing support to
          address any issues or challenges you face.
        </p>
      </div>
    ),
  },
  {
    title: "Automation of Business Processes",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Save time and reduce human error by automating repetitive tasks, from
          customer follow-ups to lead management.
        </p>
      </div>
    ),
  },
  {
    title: "Enhanced Customer Insights",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Gain a 360-degree view of your customers, allowing you to make
          informed decisions, personalize communications, and build stronger
          relationships.
        </p>
      </div>
    ),
  },
  {
    title: "Boost Sales & Revenue",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Optimize your sales process with Salesforce’s powerful tools, such as
          lead scoring, forecasting, and pipeline management, to close deals
          faster and grow your revenue.
        </p>
      </div>
    ),
  },
  {
    title: "Scalability",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Whether you&apos;re a small business or a large enterprise, Salesforce
          can scale with you. As your business expands, we ensure that your CRM
          system grows and adapts to your needs.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to",
  dualTitle: " Transform Your Business?",
  description:
    "Let MyPromo help you harness the full power of Salesforce. Contact us today for a free consultation and start your journey toward smarter CRM solutions, improved sales processes, and stronger customer relationships.",
};

const items = [
  {
    title: "Custom Solutions",
    description:
      "We understand that every business is unique. Our team works closely with you to design and implement Salesforce solutions that align with your specific needs and goals.",

    icon: (
      <IconClipboardCopy className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Expert Support",
    description:
      "From initial consultation to ongoing support, our certified Salesforce professionals are with you every step of the way, ensuring your CRM system is optimized for success.",

    icon: (
      <IconFileBroken className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Seamless Integration",
    description:
      "We specialize in integrating Salesforce with your existing systems, providing a unified view of your customers and making your business processes more efficient.",

    icon: (
      <IconSignature className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Ongoing Optimization",
    description:
      "As your business grows, so do your CRM needs. We continuously monitor and optimize your Salesforce platform to ensure you’re always getting the most out of it.",

    icon: (
      <IconTableColumn className="h-10 w-10  bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];
