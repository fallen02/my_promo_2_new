import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Lightbulb",
    title: "Innovative Ideas",
    description: "Out-of-the-box ideas that get noticed.",
  },
  {
    icon: "Activity",
    title: "Transformation",
    description: "We transform numbers into magic.",
  },
  {
    icon: "Activity",
    title: "Marketing Ideas",
    description: "Always ahead of the curve.",
  },
  {
    icon: "Sparkle",
    title: "We are fans",
    description: "We’re not just your partners, we're your biggest fans!",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container w-[90%] py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider mb-5">
            Our Formula
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We always try our fullest to get our lovely clients high with our
            self-made formulas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 stroke-1 group-hover/number:stroke-black group-hover/number:text-primary/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
