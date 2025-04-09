import { Separator } from "@/components/ui/separator";
import { Phone, Mail, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/app/logo.png";

const Services: { title: string; href: string; description: string }[] = [
  {
    title: " Website Development ",
    href: "/services/webdev",
    description:
      "Transform Your Online Presence with Website Development Expert.",
  },
  {
    title: "Search Engine Optimization",
    href: "/services/seo",
    description: "Boost Your Online Visibility with SEO Expert.",
  },
  {
    title: "Social Media Marketing",
    href: "/services/smmarketing",
    description: "Elevate Your Brand with Social Media Marketing Expert.",
  },
  {
    title: "Graphic Design",
    href: "/services/graphicdesign",
    description: "Transform Your Brand with Stunning Graphic Design.",
  },
  {
    title: "Lead Generation",
    href: "/services/leadgen",
    description: " Supercharge Your Sales with Expert Lead Generation.",
  },
  {
    title: "Marketing Automation",
    href: "/services/marketingautomation",
    description:
      "Streamline Your Marketing with Advanced Automation Solutions.",
  },
  {
    title: "AI Enhanced Optimization",
    href: "/services/aioptimization",
    description:
      "Unlock Superior Performance with AI-Enhanced Digital Optimization.",
  },
  {
    title: "Content Writing",
    href: "/services/contentwriting",
    description: "Elevate Your Brand with Professional Content Writing.",
  },
  {
    title: "Content Marketing ",
    href: "/services/contentmarketing",
    description: "Drive Engagement and Growth with Expert Content Marketing.",
  },
  {
    title: "Collab Membership",
    href: "/services/collab",
    description: "Unlock Exclusive Benefits with Our Collab Membership",
  },
  {
    title: "Salesforce CRM",
    href: "/services/salesforce",
    description:
      "We are dedicated to helping businesses like yours unlock the full potential of Salesforce.",
  },
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="container  pb-5  sm:pb-3">
      <div className="p-10 bg-black border border-secondary rounded-2xl">
        <div className="flex justify-between items-start flex-col lg:flex-row gap-4">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image src={Logo} alt="Logo" className="h-10 w-auto" />
            </Link>

            <p className="my-5 max-w-[300px] text-base">
              We are a dream team for the marketing success of Start-ups &
              enterprises across the globe!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/mypromo.fb"
                target="_blank"
                className="p-2 h-fit w-fit bg-primary/20 rounded-full transition duration-500 hover:bg-primary/50"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mypromo.official"
                target="_blank"
                className="p-2 h-fit w-fit bg-primary/20 rounded-full transition duration-500 hover:bg-primary/50"
              >
                <svg
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/mypromofficial"
                target="_blank"
                className="p-2 h-fit w-fit bg-primary/20 rounded-full transition duration-500 hover:bg-primary/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@mypromofficial"
                target="_blank"
                className="p-2 h-fit w-fit bg-primary/20 rounded-full transition duration-500 hover:bg-primary/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg text-primary transition duration-700 opacity-70 hover:opacity-100">
              Quick Links
            </h3>
            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Home
              </Link>
            </div>

            <div>
              <Link href="/about-us" className="opacity-60 hover:opacity-100">
                About Us
              </Link>
            </div>

            <div>
              <Link href="/contact-us" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>
            <div>
              <Link href="/payment" className="opacity-60 hover:opacity-100">
                Payment
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg text-primary transition duration-700 opacity-70 hover:opacity-100">
              Services
            </h3>
            {Services.slice(0, 6).map((service, index) => (
              <div key={index}>
                <Link
                  href={service.href}
                  className="opacity-60 transition duration-500 hover:opacity-100"
                >
                  {service.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg text-primary transition duration-700 opacity-70 hover:opacity-100">
              Services
            </h3>
            {Services.slice(6, 11).map((service, index) => (
              <div key={index}>
                <Link
                  href={service.href}
                  className="opacity-60 transition duration-500 hover:opacity-100"
                >
                  {service.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 max-w-full w-fit ">
            <h3 className="font-bold text-lg text-primary transition duration-700 opacity-70 hover:opacity-100">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4 ">
              <a
                href="tel:+916297654712"
                className="flex flex-row gap-2 items-center group/call"
              >
                <div className="p-2 bg-primary/30 rounded-full group-hover/call:bg-primary/40 transition duration-500">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-primary-foreground group-hover/call:text-primary transition duration-500">
                  +91 6297654712
                </span>
              </a>
              <a
                href="mailto:mypromofficial@gmail.com"
                className="flex flex-row gap-2  items-center group/mail"
              >
                <div className="p-2 bg-primary/30 rounded-full group-hover/mail:bg-primary/40 transition duration-500">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-primary-foreground group-hover/mail:text-primary transition duration-500">
                  mypromofficial@gmail.com
                </span>
              </a>
              <a
                href="mailto:mypromofficial@gmail.com"
                className="flex flex-row gap-2  items-center group/hour"
              >
                <div className="p-2 bg-primary/30 rounded-full group-hour/footer:bg-primary/40 transition duration-500">
                  <CalendarClock className="h-4 w-4" />
                </div>
                <span className="text-primary-foreground group-hover/hour:text-primary transition duration-500">
                  24x7 available
                </span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col justify-between pb-10 lg:flex-row">
          <p className="text-base text-white">
            © Copyright 2024{" "}
            <a href="/" className="text-primary">
              MyPromo
            </a>{" "}
            All rights reserved.
          </p>
          <ul className=" flex flex-row gap-4">
            <li>
              <a
                href="/faq"
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
