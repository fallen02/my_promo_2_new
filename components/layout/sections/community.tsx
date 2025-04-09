import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:min-w-[90%] mx-auto">
          <Card className="bg-black border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <Image 
                src={'/logo.png'}
                alt="logo"
                height={50}
                width={50}
                className="mb-5 h-20 w-auto"
                
                />
                <div>
                Ready to Unlock 
                  <span className=" pl-2 text-primary">Your Business Success?</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
            Trust the power of digital marketing and reach over 5.07 billion people globally. 🚀
            </CardContent>

            <CardFooter>
              <Button asChild className="text-lg">
                <a href="/contact-us">Contact Us</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
