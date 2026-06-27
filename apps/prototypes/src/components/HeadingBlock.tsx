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

  const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  // Dùng CSS variable thay vì Tailwind color class — hoạt động với mọi theme
  const taglineStyle =
    colorScheme === "white"
      ? { color: "rgba(255,255,255,0.7)" }
      : { color: "#d82d8b" }; // MoMo pink, không đổi theo theme

  const titleStyle =
    colorScheme === "white"
      ? { color: "#ffffff" }
      : { color: "var(--text-main)" }; // tự thích nghi light/dark/contrast

  const descStyle =
    colorScheme === "white"
      ? { color: "rgba(255,255,255,0.6)" }
      : { color: "var(--text-sub)" }; // tự thích nghi light/dark/contrast

  return (
    <div className={`${alignClass} ${className} flex flex-col gap-2`}>
      {tagline && (
        <span
          className="font-mono text-[10px] font-bold uppercase tracking-[.15em]"
          style={taglineStyle}
        >
          {tagline}
        </span>
      )}
      {title && (
        <HeadingTag
          className="momo-display text-[26px] font-black leading-tight tracking-tight sm:text-3xl md:text-4xl"
          style={titleStyle}
        >
          {title}
        </HeadingTag>
      )}
      {description && (
        <p
          className={`mt-2 text-xs md:text-sm leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
          style={descStyle}
        >
          {description}
        </p>
      )}
    </div>
  );
}
