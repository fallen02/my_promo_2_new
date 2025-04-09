"use client";
import { BackgroundBeams } from "@/components/ui/background-beam";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="container max-w-[90%] px-0 lg:px-20 flex flex-row md:flex-row gap-20 my-[100px] md:my-[160px]">
      <div className="w-full lg:max-w-full text-center md:text-start z-10">
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
              <span className="hover:text-primary">Contact Us Now </span>
            </HoverBorderGradient>
          </Link>
        </div>
        <div className="pl-3 mt-5 flex gap-5">
          <div className="flex flex-col gap-5 bg-accent/30 p-5 rounded-xl backdrop-blur-xl">
            <p className="text-3xl font-cursive text-orange-600 font-semibold">Certified</p>
            <p>Digital Marketing & IT Professionals*</p>
          </div>
          <div className="flex flex-col gap-5 bg-accent/30 p-5 rounded-xl backdrop-blur-xl">
            <p className="text-3xl font-cursive text-orange-600 font-semibold">5+ years</p>
            <p> of Industry Experience</p>
          </div>
          
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
};
