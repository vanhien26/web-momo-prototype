# Section Blocks & Templates Guide

Mobase includes modular block sections designed to rapidly compile responsive landing, product, and marketing pages. All sections inherit a template configuration system.

---

## 1. The Template Pattern

Rather than composing raw section containers, import high-level modules (like `HeroSection` or `FeatureSection`) and specify their layout structure using the numerical `template` prop.

```tsx
import { HeroSection } from "@momo-webplatform/mobase";

export function FrontPageHero() {
  const headingData = {
    title: "The Ultimate Design Experience",
    description: "Build products faster with pre-made, custom widgets.",
    tagline: "MoMo Platform",
    align: "center" as const,
    colorScheme: "pink" as const,
    sizeHeading: "large" as const
  };

  const buttonData = {
    align: "center" as const,
    isFullInMobile: true,
    buttons: [
      {
        btnName: "Get Started Now",
        action: "https://www.momo.vn",
        variant: "primary" as const
      },
      {
        btnName: "Learn More",
        action: "/docs",
        variant: "outline" as const
      }
    ]
  };

  return (
    <HeroSection
      template={1} // Numerical template key (1, 2, or 3)
      idSection="homepage-hero"
      background="#FFF5FA"
      dataHeading={headingData}
      dataButtons={buttonData}
      dataMedia={{
        src: "https://homepage.momocdn.net/img/hero.png",
        type: "image",
        alt: "Hero Banner Graphic"
      }}
    />
  );
}
```

---

## 2. Common Structural Sub-Blocks

Mobase uses shared block layouts from `CommonBlocks` to structure header headings and navigation button grids in sections:

### HeadingBlock
Provides taglines, main titles, and description blocks.
*   **Props (`HeadingBlockProps`):**
    *   `title?: string`
    *   `description?: string`
    *   `tagline?: string`
    *   `align?: "center" | "left" | "right"`
    *   `colorScheme?: "pink" | "black" | "white"`
    *   `tagHeading?: "h1" | "h2"`

### ButtonsBlock
Standardizes spacing and sizing of CTA buttons in grid/flex groupings.
*   **Props (`ButtonsBlockProps`):**
    *   `align?: "center" | "left" | "right"`
    *   `isFullInMobile?: boolean`
    *   `buttons?: dataButton[]` — max 2 items rendered
*   **`dataButton` shape:** (extends `ActionButtonProps`)
    *   `btnName: string` — button label (supports HTML strings)
    *   `action?: string | (() => void)` — URL, `#element-id` for scroll, or callback function
    *   `variant?: "primary" | "secondary" | "outline" | "tonal" | "danger" | "transparent"`
    *   `newTab?: boolean` — open link in new tab
    *   `dialogQrProps?: Partial<DialogQrProps>` — trigger QR dialog instead of navigating

---

## 3. Creating Custom Section Layouts

If a pre-built block (like `HeroSection` or `FeatureSection`) does not fit your requirements, compose a custom block using the structural wrapper `SectionBlock` to ensure token styling matches (paddings, colors).

```tsx
import { SectionBlock, HeadingBlock, ButtonsBlock } from "@momo-webplatform/mobase";

export function CustomPromoBanner() {
  return (
    <SectionBlock idSection="custom-promo" background="#ffffff" className="border-y border-gray-100">
      <div className="wrapper py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <HeadingBlock
          title="Exclusive Partner Offer"
          description="Get up to 20% cashback when paying via MoMo."
          align="left"
        />
        <ButtonsBlock
          buttons={[
            {
              btnName: "Claim Reward",
              action: "/promo/claim",
              variant: "primary"
            }
          ]}
        />
      </div>
    </SectionBlock>
  );
}
```
