# Mobase AI Agent Skills Integration Guide

This directory contains a suite of AI Agent Skills (system instructions, component specs, and styling/composition rules) for the `@momo-webplatform/mobase` component library. 

AI coding assistants (such as Cursor, Claude Code, GitHub Copilot, Continue.dev, and Windsurf) use these files to write precise, correct, and premium quality UI components that match the MoMo Web design system standards.

---

## 📂 File Structure Overview

These files form a complete reference library for your AI agents. Do not modify these rules unless you are intentionally customizing design standards for your local project:

- **[`SKILL.md`](SKILL.md)**: The entrypoint file. Defines core principles (e.g., import conventions, token adherence) and lists overall routing instructions for agents.
- **[`components.md`](components.md)**: A exhaustive catalog of all 68+ Mobase components with their TypeScript interfaces, exact prop signatures, and code examples.
- **[`customization.md`](customization.md)**: Reference guide for design tokens, Tailwinds themes, and CSS color/layout rules.
- **[`installation.md`](installation.md)**: Standard guide to package setup, Tailwind configs, peer dependencies, and Next.js transpilation instructions.
- **`rules/`**: Domain-specific coding rules:
  - **[`styling.md`](rules/styling.md)**: Rules for colors, typography, spacing, and responsive design breakpoints.
  - **[`composition.md`](rules/composition.md)**: Best practices for compound components, layout containers, and Radix UI compositions.
  - **[`forms.md`](rules/forms.md)**: Standard integration patterns for inputs, select menus, validations, and `react-hook-form`.
  - **[`sections.md`](rules/sections.md)**: Structural rules for writing landing page templates and blocks (such as `HeroSection`, `FAQSection`, etc.).
  - **[`navigation.md`](rules/navigation.md)**: Structure for sticky headers, side navigation, footers, and page flow.

---

## 🚀 How to Wire Skills Into Consumer Projects

To use these skills in a consumer project, developers must manually copy this directory and instruct their local AI agent tool. Follow these simple steps:

### Step 1: Copy the Skills Folder
Copy the `skills/mobase/` folder from the root of this repository and place it at the root of your consumer project:
```bash
# Example directory tree in the consumer project:
your-project-root/
├── skills/
│   └── mobase/
│       ├── README.md
│       ├── SKILL.md
│       ├── components.md
│       ├── customization.md
│       ├── installation.md
│       └── rules/
│           ├── composition.md
│           ├── forms.md
│           ├── navigation.md
│           ├── sections.md
│           └── styling.md
├── package.json
└── src/
```

### Step 2: Configure Your Specific AI Agent Tool
Configure your preferred AI code assistant by creating the appropriate configuration/adapter file shown below:

---

### 1. Cursor (`.cursor/rules/mobase.mdc`)
Cursor uses `.mdc` rule files to bind rules to specific file paths or file changes.

Create a file named `.cursor/rules/mobase.mdc` in your project root with the following content:

```markdown
---
description: "Guidelines, coding standards, and API reference for using MoMo Web Base (Mobase) components"
globs: "**/*.tsx, **/*.ts, tailwind.config.*, next.config.*"
alwaysApply: false
---
# Mobase UI Agent Rules

This project uses `@momo-webplatform/mobase` for its core web UI component library. When writing or editing UI components, page templates, custom layouts, or Tailwind/Next.js configurations, you must read and adhere to the guidelines defined in the local skills directory.

## Core Rules Index

- **Entrypoint & Core Principles**: Read [SKILL.md](../../skills/mobase/SKILL.md)
- **Component References & API Props**: Read [components.md](../../skills/mobase/components.md)
- **Design Tokens & Theme Customization**: Read [customization.md](../../skills/mobase/customization.md)
- **Installation, Tailwind & Next Configs**: Read [installation.md](../../skills/mobase/installation.md)

## Sub-Rules & Conventions

- **Visual Layouts & Styling Rules**: Read [rules/styling.md](../../skills/mobase/rules/styling.md)
- **Compound Components & React Compositions**: Read [rules/composition.md](../../skills/mobase/rules/composition.md)
- **Form Integration & Validations**: Read [rules/forms.md](../../skills/mobase/rules/forms.md)
- **Page Sections & Templates**: Read [rules/sections.md](../../skills/mobase/rules/sections.md)
- **Site Headers, Footers & Navigation**: Read [rules/navigation.md](../../skills/mobase/rules/navigation.md)
```

---

### 2. Claude Code (`CLAUDE.md`)
Claude Code reads `CLAUDE.md` at the project root to understand local coding rules, build patterns, and design instructions.

Add the following section to your `CLAUDE.md` file in the project root:

```markdown
## Mobase Component Library & UI Guidelines

This project utilizes the `@momo-webplatform/mobase` UI library. You must follow the design token, composition, and API guidelines established in the project's local skills files:

*   **Core Guidelines & Setup**:
    *   Setup instructions: `skills/mobase/installation.md`
    *   Core principles: `skills/mobase/SKILL.md`
*   **Component Documentation**:
    *   API interface reference: `skills/mobase/components.md`
    *   Theme tokens & colors: `skills/mobase/customization.md`
*   **Coding Conventions**:
    *   Layout styling: `skills/mobase/rules/styling.md`
    *   Compound components: `skills/mobase/rules/composition.md`
    *   Form validation (`react-hook-form` + `zod`): `skills/mobase/rules/forms.md`
    *   Landing page template blocks: `skills/mobase/rules/sections.md`
    *   Navigation & headers: `skills/mobase/rules/navigation.md`
```

---

### 3. GitHub Copilot (`.github/copilot-instructions.md`)
GitHub Copilot reads `.github/copilot-instructions.md` (or `.github/copilot-instructions` folder files) to gain workspace context.

Create or append the following to `.github/copilot-instructions.md` in the project root:

```markdown
# Mobase Design System Guide

Always implement UI features and layouts using the `@momo-webplatform/mobase` component library. You must follow the instructions, API specs, and rules detailed in the local `skills/mobase/` directory:

- Core rules and library import paths: Refer to `skills/mobase/SKILL.md`
- Comprehensive component documentation and React prop definitions: Refer to `skills/mobase/components.md`
- Tailwind CSS color variables and spacing values: Refer to `skills/mobase/customization.md`
- Layout styling and responsive rules: Refer to `skills/mobase/rules/styling.md`
- Component structure and composition: Refer to `skills/mobase/rules/composition.md`
- Form controls and validation setup: Refer to `skills/mobase/rules/forms.md`
- Section-based page templates (e.g., HeroSection): Refer to `skills/mobase/rules/sections.md`
- Header, Footer, and sticky topbars: Refer to `skills/mobase/rules/navigation.md`
```

---

### 4. Continue.dev (`.continue/config.json`)
For Continue.dev, you can index these skills as a local docs source so they are searchable via `@docs` or `@mobase`.

Add the following block to your `.continue/config.json` inside the `"docs"` array:

```json
{
  "docs": [
    {
      "name": "mobase",
      "startUrl": "skills/mobase/SKILL.md",
      "root": "skills/mobase"
    }
  ]
}
```

This registers the Mobase skills directory as a documentation provider in Continue. You can then reference it in the sidebar chat using `@mobase` or `@docs`.

---

### 5. Windsurf / Sourcegraph Cody
For AI agents that support reading local markdown rules or files (such as Windsurf memory or Cody files):
- Point the agent to the `skills/mobase/` folder.
- You can prompt: *"Use the components, spacing rules, and layout styles defined in the skills/mobase folder. Refactor using these rules."*

---

## 🛠️ Verification Checklist
When copy-pasting code generated by your AI:
1. **No Absolute Dev URLs**: Verify the agent does not output internal dev URLs (such as `dev1.momo.vn:3000`). All images, assets, or endpoints must use production-ready placeholders or variables.
2. **Prop Compliance**: Ensure custom buttons match the signature defined in the components list:
   - Use `{ btnName: string, action?: string | (() => void) }` for action buttons inside sections, rather than `{ name: string, link: string }`.
3. **Responsive Classes**: Ensure components utilize standard styling grid/flex wrappers rather than custom-coded styles outside of `mobaseTW` token themes.
