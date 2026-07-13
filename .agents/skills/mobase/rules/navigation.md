# Navigation & Layout Flow Guide

Use this rulebook to construct standardized header bars, secondary sub-links, navigation menus, and footers across the application.

---

## 1. Primary Page Structure Flow

Every main view layout should follow this vertical hierarchy to maintain UI alignment:

```tsx
import { Topbar, HeaderNavigation, Footer } from "@momo-webplatform/mobase";

const MENU_ITEMS = [
  { title: "Home", url: "/" },
  {
    title: "Products",
    url: "/products",
    children: [
      { title: "E-Wallet", url: "/products/wallet" },
      { title: "Mini Apps", url: "/products/miniapps" }
    ]
  },
  { title: "About Us", url: "/about" }
];

const FOOTER_PRIMARY = {
  heading: "Solutions",
  lists: [
    { title: "Online Payments", url: "/solutions/online" },
    { title: "Offline QR", url: "/solutions/qr" }
  ]
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Global Top alert bar */}
      <Topbar />

      {/* 2. Global Navigation */}
      <HeaderNavigation
        dataMenu={MENU_ITEMS}
        serviceInfo={{
          logo: "https://homepage.momocdn.net/img/logo.png",
          name: "MoMo Developers",
          url: "/"
        }}
        isSticky={true}
        alignDropdown="left"
      />

      {/* 3. Main Viewport */}
      <main className="flex-grow">{children}</main>

      {/* 4. Global Footer */}
      <Footer primaryMenu={FOOTER_PRIMARY} />
    </div>
  );
}
```

---

## 2. HeaderNavigation API Parameters

*   **`isSticky?: boolean`** (default: `true`): Locks the header bar to the top of the viewport on scroll.
*   **`alignDropdown?: "left" | "right" | "center"`** (default: `"left"`): Aligns drop-down menu cards.
*   **`hasDownloadApp?: boolean`**: Automatically injects MoMo app download links in the mobile wrapper menu.
*   **`navigationRight?: React.ReactNode`**: Hook to inject custom buttons (e.g. login links or language togglers) next to the main menu.

---

## 3. Footer Columns

The `Footer` component splits listings into primary and secondary links.
*   **`primaryMenu?: FooterData`**: Renders on the left side (or top in mobile views).
*   **`secondaryMenu?: FooterData`**: Renders secondary resources (e.g. terms, licenses).
*   **`FooterItem` format:** `{ title: string; url: string; newTab?: boolean; icon?: React.ReactNode }`
