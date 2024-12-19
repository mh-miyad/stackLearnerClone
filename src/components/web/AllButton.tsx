import { cn } from "@/lib/utils";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "../ui/animated-subscribe-button";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import { RainbowButton } from "../ui/rainbow-button";
import RippleButton from "../ui/ripple-button";
import ShimmerButton from "../ui/shimmer-button";
import ShinyButton from "../ui/shiny-button";

export function RainBtn({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <RainbowButton className={cn(className, "w-full")}>
      {text || "Rainbow Button"}
    </RainbowButton>
  );
}
export function ShimmerBtn() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Shimmer Button
        </span>
      </ShimmerButton>
    </div>
  );
}

export function ShinyBtn() {
  return <ShinyButton>Shiny Button</ShinyButton>;
}

export function BtnAnimateOne({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className="relative justify-center">
      <InteractiveHoverButton text={text} className={className} />
    </div>
  );
}

export function BtnSubscribe() {
  return (
    <AnimatedSubscribeButton
      buttonColor="#000000"
      buttonTextColor="#ffffff"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          Subscribe{" "}
          <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 size-4" />
          Subscribed{" "}
        </span>
      }
    />
  );
}

export function BtnRipple({ color }: { color: string }) {
  return (
    <RippleButton rippleColor={`${color || "#ADD8E6"}`}>Click me</RippleButton>
  );
}
