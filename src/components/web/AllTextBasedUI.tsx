import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import BlurIn from "../ui/blur-in";
import HyperText from "../ui/hyper-text";
import LetterPullup from "../ui/letter-pullup";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import SparklesText from "../ui/sparkles-text";
import WordRotate from "../ui/word-rotate";

export function TextPUllUp({ text }: { text: string }) {
  return (
    <LetterPullup
      words={`${text || "Staggered Letter Pull Up"}`}
      delay={0.05}
    />
  );
}

export function TextScroll({ text }: { text: string }) {
  return (
    <VelocityScroll
      text={`${text || "Mahamudul Hasan Miyad"}`}
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}

export async function TextShiny() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Magic UI</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}

export function TextHyper() {
  return (
    <HyperText
      className="text-4xl font-bold text-black dark:text-white"
      text="Hyper Text"
    />
  );
}

export function TextWordRotate() {
  return (
    <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Word", "Rotate"]}
    />
  );
}
export function BlurInDemo() {
  return (
    <BlurIn
      word="Blur In"
      className="text-4xl font-bold text-black dark:text-white"
    />
  );
}

export function BrandText({ className }: { className?: string }) {
  return <SparklesText text="MiNOX UI" className={cn(className)} />;
}
