import { SocialMedia } from "./partial/SocialMedia";
import { Website } from "./partial/Website";
import { Logo } from "./partial/Logo";
import { Graphics } from "./partial/Graphics";

export function Projects() {
  return (
    <section className="py-32">
      <div className="container max-w-7xl">
        <div className="text-center flex justify-center items-center flex-col mb-8">
          <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider mb-5">
            Projects
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Some Projects We Have Done
          </h2>
        </div>
        <div className="flex flex-col gap-20">
          <Website />
          <SocialMedia />
          <Logo />
          <Graphics />
        </div>
      </div>
    </section>
  );
}
