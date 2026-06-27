import React from "react";

interface HeadingBlockProps {
  tagline?: string;
  title?: string;
  description?: string;
  tagHeading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  colorScheme?: "pink" | "black" | "white";
  align?: "center" | "left" | "right";
  className?: string;
}

export default function HeadingBlock({
  tagline,
  title,
  description,
  tagHeading = "h2",
  colorScheme = "pink",
  align = "center",
  className = "",
}: HeadingBlockProps) {
  const HeadingTag = tagHeading;

  // Align styles
  const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  // Tagline color
  const taglineColor = colorScheme === "white" ? "text-white/70" : "text-pink-600";

  // Title color
  const titleColor = colorScheme === "white" ? "text-white" : "text-slate-900";

  // Description color
  const descColor = colorScheme === "white" ? "text-white/60" : "text-slate-500";

  return (
    <div className={`${alignClass} ${className} flex flex-col gap-2`}>
      {tagline && (
        <span className={`${taglineColor} font-mono text-[10px] font-bold uppercase tracking-[.15em]`}>
          {tagline}
        </span>
      )}
      {title && (
        <HeadingTag className={`${titleColor} momo-display text-[26px] font-black leading-tight tracking-tight sm:text-3xl md:text-4xl`}>
          {title}
        </HeadingTag>
      )}
      {description && (
        <p className={`${descColor} mt-2 text-xs md:text-sm leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
