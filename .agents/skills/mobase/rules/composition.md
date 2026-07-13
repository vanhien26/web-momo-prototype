# Component Composition Guidelines

Mobase uses a compound component pattern (multi-part components) for its interactive UI elements. This guide defines how to structure these compositions for accessibility, functionality, and styling.

---

## 1. Dialog Modal Structure

All Dialog triggers must map to a `Dialog` container. Always include a `DialogTitle` (either directly or within `DialogHeader`) to comply with accessibility standards (ARIA label requirements).

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  Button
} from "@momo-webplatform/mobase";

export function ConfirmModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Modal</Button>
      </DialogTrigger>
      <DialogContent size="md" position="center" isFull={false}>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Please confirm to proceed.
          </DialogDescription>
        </DialogHeader>
        <DialogBody isCondensed={false}>
          <p className="text-sm text-gray-600">
            Are you sure you want to delete this resource?
          </p>
        </DialogBody>
        <DialogFooter isDivider={true}>
          <Button variant="outline">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

---

## 2. Drawer Structure (Vaul)

Drawer uses a bottom-sheet panel (powered by Vaul) optimized for mobile layouts.

```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  Button
} from "@momo-webplatform/mobase";

export function MobileDrawerMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DrawerTrigger>
      <DrawerContent hideCloseButton={false}>
        <DrawerHeader>
          <DrawerTitle>Settings Panel</DrawerTitle>
          <DrawerDescription>Configure application settings.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <div className="flex flex-col gap-4 py-4">
            <button className="text-left py-2 font-medium">Profile</button>
            <button className="text-left py-2 font-medium">Billing</button>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button className="w-full">Close Panel</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
```

---

## 3. Tabs Layout

`TabsTrigger` buttons must reside in a `TabsList` wrapper. Match values on `TabsTrigger` with their corresponding `TabsContent`.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@momo-webplatform/mobase";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList size="sm" isDivider={true}>
        <TabsTrigger value="details">My Details</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="py-4">
        Details content goes here.
      </TabsContent>
      <TabsContent value="security" className="py-4">
        Security options go here.
      </TabsContent>
    </Tabs>
  );
}
```

---

## 4. Carousel Composition (Embla)

The `Carousel` handles sliding viewports using Context and Embla API hooks.

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots
} from "@momo-webplatform/mobase";

export function ProductCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} orientation="horizontal">
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">Item 1</CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">Item 2</CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">Item 3</CarouselItem>
      </CarouselContent>
      {/* Controls */}
      <CarouselPrevious />
      <CarouselNext />
      {/* Indicator dots */}
      <CarouselDots />
    </Carousel>
  );
}
```

---

## 5. Toast Feedback Alerts

To render alerts, register the `<Toaster />` component at your global layout level. Use the hook `useToast` or direct `toast()` function.

```tsx
// 1. In your root App or Layout component (e.g. _app.tsx or layout.tsx)
import { Toaster } from "@momo-webplatform/mobase";

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
}

// 2. In your page view
import { useToast } from "@momo-webplatform/mobase";

export function PaymentTrigger() {
  const { toast } = useToast();

  const handlePay = () => {
    toast({
      title: "Processing Payment",
      description: "We are verifying your transaction.",
      variant: "success" // "success" | "warning" | "error"
    });
  };

  return <Button onClick={handlePay}>Pay Now</Button>;
}
```

---

## 6. Radix Slot `asChild` Pattern

Use `asChild` on components (such as `Button`, `IconButton`, `DialogTrigger`, `DrawerTrigger`) when nesting clickable elements like Next.js `<Link>` or custom routes. This avoids rendering nested nested clickable elements (`<a>` tags inside `<button>`).

```tsx
import Link from "next/link";
import { Button } from "@momo-webplatform/mobase";

// Correct
<Button asChild variant="outline">
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>

// Incorrect (causes markup hydration warnings)
<Button variant="outline">
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```
