"use client";
import { BackgroundBeams } from "@/components/ui/background-beam";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import banner from "@/app/assets/banner-dark.png";

export const HeroSection = () => {
  // const { theme } = useTheme();
  return (
    <div className="container max-w-[90%] px-0 lg:px-20 flex flex-row md:flex-row gap-20 my-[100px] md:my-[160px]">
      <div className="w-full lg:max-w-full text-center md:text-start z-10">
        <span className="px-3 py-1.5 rounded-full bg-card text-sm font-medium">
          🌟 Certified Digital Marketing Professional
        </span>
        <h4 className="mb-6 text-4xl lg:text-7xl mt-[30px] font-bold">
          Hey <span className="text-primary">Start-Up Heroes</span>
        </h4>
        <p className="text-[1rem] lg:text-lg font-medium text-secondary-foreground">
          We Are Here To Get You High Through Our Innovative Digital Marketing
          Solutions!
        </p>
        <p className="text-[1rem] lg:text-lg font-medium text-secondary-foreground mb-12">
          Get an unique business & marketing strategy designed only for you!
        </p>
        <div className="max-w-screen-md space-y-8 md:space-y-8 md:space-x-4 flex justify-center items-center lg:justify-start">
          <Link href="/about-us">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              {/* <AceternityLogo /> */}
              <span className="hover:text-primary">Contact Us Now </span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
};
