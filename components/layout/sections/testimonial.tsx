"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import user from '@/app/assets/blue-circle-with-white-user.png'
import { StaticImageData } from "next/image";

interface ReviewProps {
  image: StaticImageData;
  name: string;
  caption: string
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: user,
    name: "Debasish Das",
    caption: "DD",
    userName: "Founder, Cluster Engineers",
    comment:
      "Absolutely the best website development company at this affordable price range! The quality, speed, and support are as I expected. I Loved working with them. Highly recommended!",
    rating: 5.0,
  },
  {
    image: user,
    name: "Rudra Narayan Mishra",
    caption: "RM",
    userName: "Director, Assigna Solution",
    comment:
      "Working with MyPromo has been a game-changer for our business. Their team is professional, knowledgeable, and truly understands how to drive results. Since partnering with them, we’ve seen a significant growth to our social media channels. They developed a stunning website for us at a very affordable cost. Overall I’m so much satisfied with MyPromo.",
    rating: 4.8,
  },

  {
    image: user,
    name: "Pradip Maity",
    caption: "PM",
    userName: "JK Consulting Services",
    comment:
      "I have found gem in Kolkata. MyPromo does the same they assure. 5 on 5 for them.",
    rating: 4.9,
  },
  
  {
    image: user,
    name: "Sk Samim",
    caption: "SS",
    userName: "Franchise Owner, Jio Mart Digital",
    comment:
      "The team is really good. I am satisfied with the social media and lead generation services.",
    rating: 5.0,
  },
  {
    image: user,
    name: "Sk Rejabul",
    caption: "SR",
    userName: "Franchise Owner, Dr Fixit",
    comment:
      "The best social media agency I have ever met. The best part is I have directly in contact with the founder and she supported a lot to grow my business in Purba Medinipur.",
    rating: 4.9,
  },
 
  {
    image: user,
    name: "Sanjeev Sardana",
    caption: "SS",
    userName: "Founder, Shreejee Travellines",
    comment:
      "Good service in affordable price. They have a really caring nature.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center flex justify-center items-center flex-col mb-8">
        <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider mb-5">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Know what our lovely clients say about us
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="text-xl font-semibold bg-orange-600/10">{review.caption}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg text-orange-700">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
