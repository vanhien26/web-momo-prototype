# Styling Guidelines

Use this rulebook to maintain consistent visuals and token adherence across your application when styling components from `@momo-webplatform/mobase`.

## 1. Never Hardcode Magic Values

Avoid using arbitrary values in Tailwind class selectors (e.g. `bg-[#EB2F96]` or `h-[42px]`) or inline styling attributes. Always reference system tokens.

```tsx
// Incorrect
<div className="bg-[#EB2F96] p-[15px] rounded-[10px]" />

// Correct
<div className="bg-pink-500 p-4 rounded-md" />
```

## 2. Using the Brand Pink Color

The brand pink color represents critical interactions (Primary CTAs, active states, active tab highlights).
*   **Text color**: `text-pink-500` (hover states: `hover:text-pink-600`)
*   **Backgrounds**: `bg-pink-500` (hover: `hover:bg-pink-600`, disabled: `bg-pink-500/50`)
*   **Borders**: `border-pink-500`
*   **Light alerts/highlights**: `bg-pink-50 text-pink-500`

## 3. Merge ClassNames using `cn()`

When composing components, or when forwarding the `className` prop, use Mobase's internal utility wrapper to safely merge class definitions without tailwind utility conflicts.

```tsx
import { cn } from "@momo-webplatform/mobase"; // or your project's local helper

interface MyComponentProps {
  className?: string;
  isActive?: boolean;
}

export function MyComponent({ className, isActive }: MyComponentProps) {
  return (
    <div
      className={cn(
        "rounded-md border p-4 transition-colors",
        isActive ? "border-pink-500 bg-pink-50/50" : "border-gray-200 bg-white",
        className
      )}
    >
      Content
    </div>
  );
}
```

## 4. Spacing, Layout & Alignment

*   **Grid and Flex gaps**: Favor Tailwind `gap-*` (e.g. `gap-4`) over sequential margins or deprecating selectors (like `space-x-*` / `space-y-*`).
*   **Wrapper**: Wrap landing page content sections in the `.wrapper` utility block to set standard desktop width maximums and mobile gutters.
    ```tsx
    export default function ContactPage() {
      return (
        <section className="bg-gray-50 py-12">
          <div className="wrapper flex flex-col gap-8">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-gray-600">Get in touch with the MoMo team.</p>
          </div>
        </section>
      );
    }
    ```

## 5. Typography

Avoid altering native heading typography settings in Mobase components. Rely on pre-configured headings (`h1` or `h2` via section parameters) or map text classes according to the size references:
*   Use `font-sans` (System standard).
*   Use standard utility mappings for headers: `text-xl font-bold`, `text-lg font-semibold`, `text-sm text-gray-500`.

---

## 6. Responsive Breakpoints

Mobase uses the standard Tailwind CSS breakpoint system. Apply responsive prefixes consistently:

| Prefix | Min-width | Typical Use |
| :----- | :-------- | :---------- |
| _(none)_ | `0px` | Mobile-first base styles |
| `sm:` | `640px` | Large phones / small tablets |
| `md:` | `768px` | Tablets / landscape phones |
| `lg:` | `1024px` | Laptops / small desktops |
| `xl:` | `1280px` | Standard desktops |
| `2xl:` | `1536px` | Large/wide screens |

```tsx
// Mobile-first pattern
<div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-12">
  <aside className="w-full md:w-64 lg:w-72">Sidebar</aside>
  <main className="flex-1">Content</main>
</div>
```

> **Rule**: Always write mobile styles first (no prefix), then override for larger screens with `md:`, `lg:`, `xl:` prefixes.
