import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import image2 from "@/app/assets/underneath - Ready to unlock your success.jpg";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="container py-20 sm:py-20">
          <div className="flex flex-col gap-5">
            <Image
              src={"/logo.png"}
              alt="logo"
              height={50}
              width={50}
              
            />
            <h1 className="text-4xl">
              Ready to Unlock
              <span className=" pl-2 text-primary">Your Business Success?</span>
            </h1>
            <p className="lg:w-[80%] text-xl text-muted-foreground">
              Trust the power of digital marketing and reach over 5.07 billion
              people globally. 🚀
            </p>
            <Button asChild className="text-lg w-fit">
              <a href="/contact-us">Contact Us</a>
            </Button>
          </div>
        </div>
        <div className="">
          <Image
            src={image2}
            height={1100}
            width={800}
            alt="Hii"
            className="rounded-lg"
          />
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
