import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import Image from "next/image";


interface dataProps {
  title: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  results: string;
  image: string[];
}

export const PortfolioHighlight = ({
  data,
  reversed,
}: {
  data: dataProps;
  reversed?: boolean;
}) => {
  return (
    <div className="relative w-full mx-auto p-10 bg-orange-900/5">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black -z-[5]"></div>
      <div className="relative flex flex-col gap-3 lg:gap-10 rounded-xl z-20 bg-transparent">
        <div
          className={cn(
            "absolute inset-0 opacity-50 -z-10",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />

        <p className="text-2xl lg:text-4xl font-bold mb-4 text-orange-600">
          {data.title}
        </p>
        <div
          className={cn(
            "w-full flex flex-col  gap-6 justify-center ",
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          )}
        >
          <div className="w-full lg:w-1/2">
            <Accordion
              type="single"
              defaultChecked
              collapsible
              className="w-full"
              defaultValue={data.overview}
            >
              <AccordionItem
                value={data.overview}
                className="dark:bg-transparent"
              >
                <AccordionTrigger className="text-xl font-medium">
                  Overview
                </AccordionTrigger>
                <AccordionContent>{data.overview}</AccordionContent>
              </AccordionItem>
              <AccordionItem
                value={data.challenges[0]}
                className="dark:bg-transparent"
              >
                <AccordionTrigger className="text-xl font-medium">
                  Challenges
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-3">
                    {data.challenges.map((challenge, index) => (
                      <p key={index} className="flex flex-row gap-4">
                        <span>{index + 1}</span>
                        {challenge}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value={data.solutions[0]}
                className="dark:bg-transparent"
              >
                <AccordionTrigger className="text-xl font-medium">
                  Solutions
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-3">
                    {data.solutions.map((solution, index) => (
                      <p key={index} className="flex flex-row gap-4">
                        <span>{index + 1}</span>
                        {solution}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value={data.results}
                className="dark:bg-transparent"
              >
                <AccordionTrigger className="text-xl font-medium">
                  Results
                </AccordionTrigger>
                <AccordionContent>{data.results}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={data.image[0]}
              alt="Image"
              height={400}
              width={600}
              className="bg-accent/50 p-1 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
