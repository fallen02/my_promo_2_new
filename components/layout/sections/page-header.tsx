import { TextScramble } from "@/components/ui/text-scramble";
import Image from "next/image";

export default function PageHeader({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;

}) {
  return (
    <div className="relative isolate overflow-hidden  py-24 sm:py-40  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] ">
      <div aria-hidden="true"  className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-orange-600/50 opacity-10"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-orange-600/40 to-primary opacity-20"
        />
      </div>
      <div className="mx-auto max-w-full px-10 lg:px-20 z-50">
        <div className="mx-auto max-w-[90%] lg:mx-0">
          
          <TextScramble duration={1} className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            {title}
          </TextScramble>
          
          <TextScramble duration={2} className="text-3xl leading-8 mt-5">
            {subtitle}
          </TextScramble>

          <TextScramble as={'p'} duration={4} className="mt-3 text-lg leading-8 text-muted-foreground">
            {description}
          </TextScramble >
          
        </div>
      </div>
    </div>
  );
}
