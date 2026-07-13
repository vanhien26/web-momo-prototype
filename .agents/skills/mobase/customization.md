# Design Tokens & Theming Reference

This guide details the token values and layout parameters exposed by the `@momo-webplatform/mobase` Tailwind CSS plugin (`mobaseTW()`). Use these values as utility classes or theme mappings to guarantee consistent styling.

## 1. Color System

Mobase defines standard color palettes. Each palette exports shades from `50` to `900` along with a `DEFAULT` key.

### Brand Color
*   **Pink**: The core brand color of MoMo.
    *   `DEFAULT` / `500`: `#EB2F96` (RGB var: `--mobase-pink-500`)
    *   Shades: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
    *   Tailwind utility examples: `text-pink-500`, `bg-pink-50`, `hover:bg-pink-600`, `border-pink-200`

### Common Palettes
*   **Gray**: Primary neutral system (`gray-50` to `gray-900`).
    *   `gray-900`: `#1C171A` (Primary body color selector)
    *   `gray-500`: Neutral subtexts
*   **Blue**: System informational palette (`blue-500` = `#429cff`)
*   **Green**: Success feedback palette (`green-500` = `#34c759`)
*   **Red**: Danger & Error feedback palette (`red-500` = `#f74e57`)
*   **Yellow**, **Orange**, **Purple**: Supporting categorical colors.

---

## 2. Typography

Mobase maps specific font sizes and line heights. Always use these rather than arbitrary `text-[x px]` tailwind utilities.

| Token | Size | Line Height | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **xxs** | `0.625rem` (10px) | `1rem` (16px) | `text-xxs` |
| **xs** | `0.75rem` (12px) | `1.125rem` (18px) | `text-xs` |
| **sm** | `0.875rem` (14px) | `1.25rem` (20px) | `text-sm` |
| **base** | `1rem` (16px) | `1.5rem` (24px) | `text-base` |
| **lg** | `1.125rem` (18px) | `1.75rem` (28px) | `text-lg` |
| **xl** | `1.25rem` (20px) | `1.875rem` (30px) | `text-xl` |
| **2xl** | `1.5rem` (24px) | `2rem` (32px) | `text-2xl` |
| **3xl** | `1.875rem` (30px) | `2.5rem` (40px) | `text-3xl` |
| **4xl** | `2.25rem` (36px) | `2.75rem` (44px) | `text-4xl` |
| **5xl** | `3rem` (48px) | `1` | `text-5xl` |
| **6xl** | `3.75rem` (60px) | `1` | `text-6xl` |
| **7xl** | `4.5rem` (72px) | `1` | `text-7xl` |
| **8xl** | `6rem` (96px) | `1` | `text-8xl` |
| **9xl** | `8rem` (128px) | `1` | `text-9xl` |

---

## 3. Border Radius

Mobase extends the default Tailwind rounded values. They resolve to CSS variables loaded onto the `:root` pseudo-class.

*   `rounded-none`: `0`
*   `rounded-sm`: `var(--mobase-radius-sm)`
*   `rounded` (default): `var(--mobase-radius-default)`
*   `rounded-md`: `var(--mobase-radius-md)`
*   `rounded-lg`: `var(--mobase-radius-lg)`
*   `rounded-xl`: `var(--mobase-radius-xl)`
*   `rounded-2xl`: `var(--mobase-radius-2xl)`
*   `rounded-3xl`: `var(--mobase-radius-3xl)`
*   `rounded-full`: `9999px`

---

## 4. Shadow System

Mobase customizes the shadows scale:

*   `shadow-small` / `shadow-sm`: Small shadows for buttons, inputs.
*   `shadow-medium` / `shadow-md`: Default shadows for cards, popovers, dropdown lists.
*   `shadow-large` / `shadow-lg`: Prominent shadow layers for overlays, dialog boxes, and drawer panels.

---

## 5. Z-Index Scale

Mobase establishes semantic indexes for overlays, avoiding standard values (like `z-50`).

*   `z-negative`: `-1` (Background grids)
*   `z-workbench`: `0` (Workspace panel sheets)
*   `z-default`: `1` (Floating static details)
*   `z-workbench-header`: `10` (Stickied table headers)
*   `z-modal`: `100` (Overlay backdrops)
*   `z-modal-content`: `101` (Active modal windows)
*   `z-dropdown`: `1000` (Context dropdown lists)
*   `z-tooltip`: `10000` (Hover triggers)
*   `z-notification`: `100000` (Push alerts, banner messages)

---

## 6. Layout Utilities

Mobase includes a custom responsive utility block:

*   **`.wrapper`**: Use this class to standardize margins and maximum content width for layout container groups.
    ```css
    .wrapper {
      max-width: 72rem; /* 1152px */
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      margin-left: auto;
      margin-right: auto;
    }
    @media (min-width: 768px) {
      .wrapper {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
    ```
