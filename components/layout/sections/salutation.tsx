"use client";
import Player from "next-video/player";
import { Button } from "@/components/ui/button";


export const Salutation = () => {
  return (
    <div className="container max-w-full lg:max-w-[90%] grid lg:grid-cols-2 gap-20  px-4 my-[120px] md:my-[050px]">
      <div className=" flex flex-col max-w-[100%] lg:max-w-[600px] justify-center items-center lg:items-start  gap-1">
        <h4 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider">
          About Us
        </h4>
        <h4 className="text-3xl lg:text-4xl font-bold mt-5">
          Welcome to MyPromo
        </h4>
        <h4 className="text-xl lg:text-2xl font-bold mt-2">To Get You High!</h4>
        <p className="text-sm lg:text-lg text-muted-foreground mt-5">
          We turn your digital dreams into groovy realities! Are you ready to
          jazz up your brand and rock the internet? You&apos;ve landed at the right
          place. We blend creativity, strategy, team effort and a whole lot of
          positivity to make your brand shine brighter like STARS! At MyPromo
          your brand is :
        </p>

        <div className="w-full my-10 md:max-w-[100%] flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-primary/30 rounded-full ring-8 ring-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-cpu h-6 w-6"
              >
                <rect width="16" height="16" x="4" y="4" rx="2" />
                <rect width="6" height="6" x="9" y="9" rx="1" />
                <path d="M15 2v2" />
                <path d="M15 20v2" />
                <path d="M2 15h2" />
                <path d="M2 9h2" />
                <path d="M20 15h2" />
                <path d="M20 9h2" />
                <path d="M9 2v2" />
                <path d="M9 20v2" />
              </svg>
            </div>
            <p className="text-2xl font-medium">Fuelled by Technology </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-primary/30 rounded-full ring-8 ring-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-cpu h-6 w-6"
              >
                <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                <path d="m8 6 2-2" />
                <path d="m18 16 2-2" />
                <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
            </div>
            <p className="text-2xl font-medium">Inspired by Creativity</p>
          </div>
        </div>

        <div>
          <Button className="py-3 px-6" asChild><a href="/contact-us">Get Started</a></Button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        {/* <Image width={650} height={300} src={image} alt="shadcnkit" /> */}
        <Player
          style={{ width: "100%" }}
          src="/video.mp4"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
