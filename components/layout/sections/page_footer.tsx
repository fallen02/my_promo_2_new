import { TextShimmer } from "@/components/ui/text-shimmer";

export const PageFooter = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className=" py-5 lg:px-10">
      <div className="px-10 lg:px-20">
        <div className="bg-primary/20 px-4 py-1 w-fit rounded-full mb-5">
          <TextShimmer className=" [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
            Why Us
          </TextShimmer>
        </div>
        <h1 className="text-3xl lg:text-4xl">{title}</h1>
        <p className="text-lg lg:text-lg text-muted-foreground mt-5">
          {description}
        </p>
      </div>
    </div>
  );
};
