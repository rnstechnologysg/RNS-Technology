"use client";

import { LucideIcon } from "lucide-react";

interface PlaceholderProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  ratio?: "square" | "video" | "wide" | "tall";
  className?: string;
}

export function Placeholder({
  icon: Icon,
  title,
  description,
  ratio = "video",
  className = "",
}: PlaceholderProps) {
  const aspectRatios = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]",
  };

  return (
    <div
      className={`w-full ${aspectRatios[ratio]} rounded-[24px] bg-sidebar/40 border border-border flex flex-col items-center justify-center p-8 text-center ${className}`}
    >
      {Icon && <Icon className="w-12 h-12 text-muted-foreground/40 mb-4 stroke-[1.5]" />}
      <div className="font-semibold text-muted-foreground/60 mb-2 tracking-tight text-sm uppercase">
        {title}
      </div>
      <p className="text-sm text-muted-foreground/40 max-w-[250px]">
        {description}
      </p>
    </div>
  );
}
