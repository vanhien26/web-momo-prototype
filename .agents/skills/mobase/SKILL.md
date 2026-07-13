---
name: mobase
version: "1.0.0"
description: "Manages @momo-webplatform/mobase components and projects — composing, styling, and building UI with MoMo's design system. Provides component docs, usage patterns, and design token reference. Use when working with mobase components in React/Next.js projects."
user-invocable: false
triggers:
  - "@momo-webplatform/mobase"
  - "mobaseTW"
  - "HeroSection"
  - "SectionBlock"
  - "HeadingBlock"
  - "ButtonsBlock"
globs:
  - "**/*.tsx"
  - "**/*.ts"
  - "tailwind.config.*"
  - "next.config.*"
---

# Mobase AI Agent Skill

This skill provides comprehensive context, coding rules, component API references, and styling guidelines for `@momo-webplatform/mobase` — MoMo's core web UI design system built on React, Radix UI primitives, Tailwind CSS, and Class Variance Authority (CVA).

Use this skill to write high-quality, type-safe, accessible, and premium UI components and page layouts aligned with MoMo's design principles.

## Core Principles

1. **Import Only From the Package**
   Never copy-paste raw components or re-implement custom widgets for core design components. Always import from `@momo-webplatform/mobase`.
   ```tsx
   // Correct
   import { Button, Dialog, Switch } from "@momo-webplatform/mobase";
   ```

2. **Compose, Don't Reinvent**
   Create complex interfaces by combining primitive components rather than writing custom HTML/CSS. Use compound components (`DialogContent`, `SelectContent`, etc.) according to their structure rules.

3. **Adhere to the Design Token System**
   Use semantic color tokens and spacing utilities provided by the `mobaseTW` Tailwind CSS plugin. Avoid hardcoded hex, RGB, or arbitrary spacing values. Prefer `text-pink-500` (brand color) or semantic shades over raw codes.

4. **Favor Variant Props Over Class Overrides**
   Configure layout, spacing, and styling using component-level props (e.g., `variant`, `size`, `template`) before attempting class-name overrides. Use `className` primarily for external layouts (grid positioning, flex-container alignments).

5. **Follow Semantic HTML & Accessibility (a11y)**
   Use semantic elements, proper heading hierarchy (`h1`, `h2`), and ensure that ARIA attributes or labels are correctly mapped (especially when composing inputs, dialogs, or drawers).

## Critical Guidelines Reference

Detailed instructions are split into domain-specific modules:

*   **[Installation & Setup](installation.md)**: Details package installation, peer dependencies, and Tailwind configuration.
*   **[Component Inventory & API Guide](components.md)**: Catalog of all components with props and usage examples.
*   **[Design Tokens & Theming](customization.md)**: Token values for colors, border radius, z-index, typography, and layout.
*   **[Styling Guidelines (rules/styling.md)](rules/styling.md)**: Coding rules for colors, spacing, typography, and responsive design.
*   **[Composition Conventions (rules/composition.md)](rules/composition.md)**: Layout patterns for Dialogs, Drawers, Tabs, Carousels, and compound components.
*   **[Forms & Inputs (rules/forms.md)](rules/forms.md)**: Integration guides for form elements with `react-hook-form` and validation.
*   **[Section Blocks & Templates (rules/sections.md)](rules/sections.md)**: Rules for writing landing sections using templates and content structures.
*   **[Navigation & Layout Flow (rules/navigation.md)](rules/navigation.md)**: Setting up global headers, sticky navigation, topbars, and footers.

## Auto-Detection & Project Context

To verify if the project uses `@momo-webplatform/mobase`, check:
1. `package.json` contains `"@momo-webplatform/mobase"` in dependencies.
2. `tailwind.config.js` or `tailwind.config.mjs` imports `mobaseTW` from `@momo-webplatform/mobase` and registers it in `plugins`.
3. Build outputs verify next.config's `transpilePackages` includes `@momo-webplatform/mobase`.
