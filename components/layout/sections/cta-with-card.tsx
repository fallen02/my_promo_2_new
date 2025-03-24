import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextShimmer } from "@/components/ui/text-shimmer";
import React from "react";

interface ItemsProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function CTAWithCard({ items, title }: { items: ItemsProps[], title: string }) {
  return (
    <>
      <div className=" py-5">
        <div className="px-5 lg:px-10">
          <div className="bg-primary/20 px-4 py-1 w-fit rounded-full mb-5">
            <TextShimmer className=" [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              Why Us
            </TextShimmer>
          </div>
          <h1 className="text-3xl lg:text-4xl ">{title}</h1>
          <BentoGrid className=" mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                // header={item.header}
                icon={item.icon}
                // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </>
  );
}
