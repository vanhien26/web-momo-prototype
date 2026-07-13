# Component Catalog & Quick API Reference

This document catalogs all UI components available in `@momo-webplatform/mobase`, grouped by category. Use this reference to verify exported names, props, and typical import structures.

---

## 1. UI Primitives

### Button
Standard button supporting loading states, icon slots, and Radix `asChild` slot rendering.
- **Import:** `import { Button } from "@momo-webplatform/mobase"`
- **Props type:** `ButtonProps`
- **Key props:**
  - `variant?: "primary" | "secondary" | "outline" | "tonal" | "danger" | "transparent"` (default: `"primary"`)
  - `size?: "default" | "sm" | "lg"` (default: `"default"`)
  - `asChild?: boolean` — renders as custom child element (e.g. Next.js `<Link>`)
  - `isLoading?: boolean` — shows a spinner icon
  - `isDisabled?: boolean`
- **Example:**
  ```tsx
  <Button variant="secondary" size="sm" isLoading={false}>
    Confirm Action
  </Button>

  // With Next.js Link (asChild pattern)
  <Button asChild variant="outline">
    <Link href="/dashboard">Go to Dashboard</Link>
  </Button>
  ```

### ActionButton
Extended `Button` that handles `href` links, scroll-to-element, new tab, and QR dialog triggers. Used inside `ButtonsBlock`.
- **Import:** `import { ActionButton } from "@momo-webplatform/mobase"`
- **Props type:** `ActionButtonProps` (extends `ButtonProps`)
- **Key props:**
  - `action?: string | (() => void)` — URL string, element ID (`#section-id`), or callback
  - `newTab?: boolean` — opens href in a new tab
  - `offset?: number` — scroll offset in px when scrolling to element ID
  - `dialogQrProps?: Partial<DialogQrProps>` — opens a QR dialog instead of navigating

### TextButton
Text-only clickable link-style button with no background.
- **Import:** `import { TextButton } from "@momo-webplatform/mobase"`
- **Example:** `<TextButton href="/terms">Read more</TextButton>`

### IconButton
Circular or square button optimized for a single icon.
- **Import:** `import { IconButton } from "@momo-webplatform/mobase"`
- **Props:** Standard `ButtonProps`, designed for Lucide icon children.

### Badge
Small status indicator or counter chip.
- **Import:** `import { Badge } from "@momo-webplatform/mobase"`
- **Key props:**
  - `variant?: "primary" | "secondary" | "success" | "error" | "warning" | "info"`
- **Example:** `<Badge variant="success">Active</Badge>`

### Label
Accessible form label element.
- **Import:** `import { Label } from "@momo-webplatform/mobase"`
- **Example:** `<Label htmlFor="email">Email address</Label>`

### Spinner
Animated loading spinner.
- **Import:** `import { Spinner } from "@momo-webplatform/mobase"`
- **Example:** `<Spinner size="sm" />`

### Skeleton
Placeholder shimmer element for loading states.
- **Import:** `import { Skeleton } from "@momo-webplatform/mobase"`
- **Example:** `<Skeleton className="h-10 w-full rounded-md" />`

### Progressbar
Linear progress indicator.
- **Import:** `import { Progressbar } from "@momo-webplatform/mobase"`
- **Key props:** `value?: number` (0–100), `className?: string`
- **Example:** `<Progressbar value={65} />`

### Slider
Range input slider.
- **Import:** `import { Slider } from "@momo-webplatform/mobase"`
- **Key props:** `defaultValue?: number[]`, `min`, `max`, `step`, `onValueChange`

### Switch
Toggle on/off switch (Radix UI).
- **Import:** `import { Switch } from "@momo-webplatform/mobase"`
- **Example:** `<Switch checked={isEnabled} onCheckedChange={setIsEnabled} />`

### AspectRatio
Utility wrapper that enforces a specific width-to-height ratio.
- **Import:** `import { AspectRatio } from "@momo-webplatform/mobase"`
- **Key props:** `ratio?: number` (default: `1`)
- **Example:**
  ```tsx
  <AspectRatio ratio={16 / 9}>
    <img src="..." alt="..." className="object-cover w-full h-full" />
  </AspectRatio>
  ```

---

## 2. Form Components

### TextInput
Input with built-in label, error state, helper message, and optional clear button.
- **Import:** `import { TextInput } from "@momo-webplatform/mobase"`
- **Props type:** `TextInputProps`
- **Key props:**
  - `label?: string`
  - `message?: string` — helper or error text displayed below the input
  - `isError?: boolean`
  - `size?: 1 | 2` — `1` = compact (40px), `2` = default (48px)
  - `withClearButton?: boolean`
  - `onClickClear?: (value: string) => void`
- **Example:**
  ```tsx
  <TextInput
    label="Email Address"
    placeholder="name@momo.vn"
    isError={false}
    message="We'll never share your email."
    size={2}
  />
  ```

### TextArea
Multi-line text input with the same label/message/error API as `TextInput`.
- **Import:** `import { TextArea } from "@momo-webplatform/mobase"`
- **Key props:** `label?`, `message?`, `isError?`, `rows?`

### Select (Compound)
Dropdown using Radix UI Select primitives.
- **Import:** `import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator } from "@momo-webplatform/mobase"`
- **Root props:** `label?`, `message?`, `isError?`, `size?: 1 | 2`
- **Example:**
  ```tsx
  <Select defaultValue="apple" label="Select a fruit">
    <SelectTrigger>
      <SelectValue placeholder="Choose one..." />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  ```

### Combobox
Searchable select dropdown with keyboard navigation.
- **Import:** `import { Combobox } from "@momo-webplatform/mobase"`
- **Key props:** `options: { label: string; value: string }[]`, `placeholder?`, `onSelect?`

### DatePicker
Date selection popover with calendar view.
- **Import:** `import { DatePicker } from "@momo-webplatform/mobase"`
- **Key props:** `selected?: Date`, `onSelect?: (date: Date) => void`, `label?`, `placeholder?`

### DateSelect
Segmented date input (day / month / year selects).
- **Import:** `import { DateSelect } from "@momo-webplatform/mobase"`

### Calendar
Standalone calendar widget (used internally by `DatePicker`).
- **Import:** `import { Calendar } from "@momo-webplatform/mobase"`
- **Key props:** Extends `react-day-picker` `DayPickerSingleProps`

### InputOTP
One-time password input with segmented slots.
- **Import:** `import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@momo-webplatform/mobase"`
- **Key props:** `maxLength: number`, `value?`, `onChange?`
- **Example:**
  ```tsx
  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
  ```

### SearchBar
Styled search input with icon and clear action.
- **Import:** `import { SearchBar } from "@momo-webplatform/mobase"`
- **Key props:** `placeholder?`, `value?`, `onChange?`, `onClear?`

### Checkbox
Radix-based checkbox with label support.
- **Import:** `import { Checkbox } from "@momo-webplatform/mobase"`
- **Key props:** `checked?`, `onCheckedChange?`, `disabled?`
- **Example:**
  ```tsx
  <div className="flex items-center gap-2">
    <Checkbox id="terms" checked={accepted} onCheckedChange={setAccepted} />
    <Label htmlFor="terms">I accept the terms</Label>
  </div>
  ```

### RadioGroup (Compound)
Radio button group using Radix primitives.
- **Import:** `import { RadioGroup, RadioGroupItem } from "@momo-webplatform/mobase"`
- **Example:**
  ```tsx
  <RadioGroup value={selected} onValueChange={setSelected}>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option-a" id="opt-a" />
      <Label htmlFor="opt-a">Option A</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option-b" id="opt-b" />
      <Label htmlFor="opt-b">Option B</Label>
    </div>
  </RadioGroup>
  ```

### Choicebox
Card-style radio/checkbox selection — visually richer than `RadioGroup`.
- **Import:** `import { Choicebox, ChoiceboxItem } from "@momo-webplatform/mobase"`
- **Key props:** `type?: "single" | "multiple"`, `value?`, `onValueChange?`

### Form (React Hook Form Integration)
Context wrappers to bind inputs to `react-hook-form`. See [rules/forms.md](rules/forms.md) for full examples.
- **Import:** `import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@momo-webplatform/mobase"`
- **Notes:**
  - `Form` acts as `FormProvider` — spread `useForm()` result with `{...form}`
  - `FormField` wraps `Controller` — requires `control` and `name` props
  - `FormControl` wraps the actual input component
  - `FormMessage` auto-renders validation errors

### FormLeadSupport
Pre-composed lead capture form with common fields (name, email, phone).
- **Import:** `import { FormLeadSupport } from "@momo-webplatform/mobase"`

---

## 3. Navigation & Structure

### Tabs (Compound)
Tab navigation using Radix Tabs primitives.
- **Import:** `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@momo-webplatform/mobase"`
- **TabsList props:** `size?: "base" | "sm"`, `isDivider?: boolean`
- **Example:**
  ```tsx
  <Tabs defaultValue="account" className="w-full">
    <TabsList size="base" isDivider>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="security">Security</TabsTrigger>
    </TabsList>
    <TabsContent value="account" className="py-4">Account settings.</TabsContent>
    <TabsContent value="security" className="py-4">Security options.</TabsContent>
  </Tabs>
  ```

### Accordion (Compound)
Collapsible content sections using Radix Accordion.
- **Import:** `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@momo-webplatform/mobase"`
- **Accordion props:** `type: "single" | "multiple"`, `collapsible?: boolean`
- **Example:**
  ```tsx
  <Accordion type="single" collapsible>
    <AccordionItem value="faq-1">
      <AccordionTrigger>What is Mobase?</AccordionTrigger>
      <AccordionContent>Mobase is MoMo's design system.</AccordionContent>
    </AccordionItem>
  </Accordion>
  ```

### Breadcrumb (Compound)
Hierarchical page navigation trail.
- **Import:** `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@momo-webplatform/mobase"`
- **Example:**
  ```tsx
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="/products">Products</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>Detail</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
  ```

### NavigationMenu (Compound)
Horizontal mega-menu with hover-activated submenus (Radix NavigationMenu).
- **Import:** `import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@momo-webplatform/mobase"`

### Pagination
Page number navigation for lists and tables.
- **Import:** `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@momo-webplatform/mobase"`
- **Example:**
  ```tsx
  <Pagination>
    <PaginationContent>
      <PaginationItem><PaginationPrevious href="?page=1" /></PaginationItem>
      <PaginationItem><PaginationLink href="?page=2" isActive>2</PaginationLink></PaginationItem>
      <PaginationItem><PaginationNext href="?page=3" /></PaginationItem>
    </PaginationContent>
  </Pagination>
  ```

### DropdownMenu (Compound)
Context/dropdown menu using Radix DropdownMenu.
- **Import:** `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@momo-webplatform/mobase"`
- **Example:**
  ```tsx
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Options</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  ```

### Stepper
Step-by-step progress indicator for multi-step flows.
- **Import:** `import { Stepper } from "@momo-webplatform/mobase"`
- **Key props:** `steps: { label: string }[]`, `currentStep: number`

### ProgressSteps
Visual progress steps indicator (similar to Stepper, optimized for horizontal layout).
- **Import:** `import { ProgressSteps } from "@momo-webplatform/mobase"`

---

## 4. Overlay & Feedback

### Dialog (Compound)
Modal overlay for confirmations and focused flows. Built on Radix Dialog.
- **Import:** `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from "@momo-webplatform/mobase"`
- **DialogContent props:**
  - `size?: "sm" | "md" | "lg" | "xl"` (default: `"md"`)
  - `position?: "center" | "left" | "right" | "bottom"`
  - `hideCloseBtn?: boolean`
  - `isFull?: boolean` — full viewport on mobile
- **DialogBody props:** `isCondensed?: boolean`
- **DialogFooter props:** `isDivider?: boolean`
- **⚠ Rule:** Always include `DialogTitle` inside `DialogHeader` for accessibility (ARIA requirement).
- **Example:** See [rules/composition.md](rules/composition.md).

### AlertDialog (Compound)
Blocking confirmation dialog that requires explicit user action.
- **Import:** `import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "@momo-webplatform/mobase"`
- **Example:**
  ```tsx
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="danger">Delete Account</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  ```

### Drawer (Compound)
Bottom-sheet panel using Vaul, optimized for mobile.
- **Import:** `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerBody, DrawerFooter, DrawerClose } from "@momo-webplatform/mobase"`
- **DrawerContent props:** `hideCloseButton?: boolean`
- **Example:** See [rules/composition.md](rules/composition.md).

### DialogQr
Specialized dialog that renders a QR code for app downloads or payment links.
- **Import:** `import { DialogQr } from "@momo-webplatform/mobase"`
- **Key props:** `qrLink: string` (required), `title?`, `description?`

### Popover (Compound)
Non-modal floating panel anchored to a trigger.
- **Import:** `import { Popover, PopoverTrigger, PopoverContent } from "@momo-webplatform/mobase"`
- **Example:**
  ```tsx
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <p className="text-sm text-gray-600">Popover content here.</p>
    </PopoverContent>
  </Popover>
  ```

### Toast / Toaster
Ephemeral notification alerts. Requires `<Toaster />` at root layout level.
- **Import:** `import { useToast, toast, Toaster } from "@momo-webplatform/mobase"`
- **Toast variants:** `"success" | "warning" | "error"` (default: default style)
- **⚠ Rule:** Place `<Toaster />` once in the root layout, not per page.
- **Example:**
  ```tsx
  // Root layout
  import { Toaster } from "@momo-webplatform/mobase";
  export default function RootLayout({ children }) {
    return <div>{children}<Toaster /></div>;
  }

  // In any component
  const { toast } = useToast();
  toast({ title: "Saved", description: "Your changes were saved.", variant: "success" });
  ```

### Command
Command palette / keyboard shortcut menu (cmdk-based).
- **Import:** `import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from "@momo-webplatform/mobase"`

### Callout
Static inline alert/info box (not a toast — always visible).
- **Import:** `import { Callout } from "@momo-webplatform/mobase"`
- **Key props:** `variant?: "info" | "warning" | "error" | "success"`, `title?`, `description?`
- **Example:** `<Callout variant="warning" title="Heads up" description="This action is irreversible." />`

### Tooltip
Hover label for icons or abbreviated elements.
- **Import:** `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@momo-webplatform/mobase"`
- **⚠ Rule:** Wrap the component tree in `<TooltipProvider>` once (typically in root layout).
- **Example:**
  ```tsx
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton><InfoIcon /></IconButton>
      </TooltipTrigger>
      <TooltipContent>More information</TooltipContent>
    </Tooltip>
  </TooltipProvider>
  ```

### Comment
User comment or review card.
- **Import:** `import { Comment } from "@momo-webplatform/mobase"`

### ReadMoreLite
Truncated text block with an expand toggle.
- **Import:** `import { ReadMoreLite } from "@momo-webplatform/mobase"`
- **Key props:** `lines?: number` — number of lines before truncation

---

## 5. Layout & Content

### Card (Compound)
Content container with optional header, body, and footer sub-sections.
- **Import:** `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@momo-webplatform/mobase"`
- **⚠ Rule:** `CardHeader` should always contain `CardTitle` (and optionally `CardDescription`) for semantic structure.
- **Example:**
  ```tsx
  <Card>
    <CardHeader>
      <CardTitle>Plan Details</CardTitle>
      <CardDescription>Your current subscription</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">Pro plan — unlimited projects</p>
    </CardContent>
    <CardFooter>
      <Button variant="outline" size="sm">Manage Plan</Button>
    </CardFooter>
  </Card>
  ```

### Carousel (Compound)
Horizontal/vertical sliding carousel using Embla Carousel.
- **Import:** `import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots } from "@momo-webplatform/mobase"`
- **Carousel props:** `opts?: EmblaOptionsType` (e.g. `{ align: "start", loop: true }`), `orientation?: "horizontal" | "vertical"`
- **CarouselItem props:** Use `className` with `basis-*` to control item width (e.g. `"md:basis-1/2 lg:basis-1/3"`).
- **Example:** See [rules/composition.md](rules/composition.md).

### HeadingGroup (Compound)
Structural group for page headings with tagline, title, and description.
- **Import:** `import { HeadingGroup, Heading, HeadingSub, HeadingTagline } from "@momo-webplatform/mobase"`
- **Note:** Prefer using `HeadingBlock` from `CommonBlocks` for section headings; use `HeadingGroup` only for custom compositions.

### HorizontalScroll
Horizontal scrollable container with optional snap behavior.
- **Import:** `import { HorizontalScroll } from "@momo-webplatform/mobase"`

### LightboxGallery
Image grid with full-screen lightbox on click.
- **Import:** `import { LightboxGallery } from "@momo-webplatform/mobase"`
- **Key props:** `images: { src: string; alt: string }[]`

---

## 6. Section Blocks

Section blocks are layout-heavy components for marketing and landing pages. All extend `SectionBlockProps` (`idSection`, `className`, `background`) and use a structured data schema pattern. See [rules/sections.md](rules/sections.md) for full usage guide.

**Common shared data types:**

```ts
// HeadingBlockProps — title, description, tagline for a section heading
type HeadingBlockProps = {
  title?: string;
  description?: string;       // Supports HTML strings
  tagline?: string;
  tagHeading?: "h1" | "h2";  // Default: "h2"
  align?: "center" | "left" | "right";
  colorScheme?: "pink" | "black" | "white";
  sizeHeading?: "small" | "large";
}

// dataButton — item shape for ButtonsBlockProps.buttons[]
type dataButton = ActionButtonProps & {
  btnName: string;  // Button label (supports HTML strings)
  action?: string | (() => void);  // URL, element ID, or callback
}

// ButtonsBlockProps — CTA button group data
type ButtonsBlockProps = {
  align?: "center" | "left" | "right";
  isFullInMobile?: boolean;
  buttons?: dataButton[];  // Max 2 buttons rendered
}
```

### HeroSection
Top-of-page hero block with headline, CTAs, media, and stat counters.
- **Import:** `import { HeroSection } from "@momo-webplatform/mobase"`
- **Props type:** `HeroContentProps`
- **Key props:**
  - `template: 1 | 2 | 3` — layout variant
  - `dataHeading: HeadingBlockProps`
  - `dataButtons?: ButtonsBlockProps`
  - `dataMedia?: { src: string; type: "image" | "video"; alt?: string }`
  - `dataStats?: { label: string; count: string }[]`

### FeatureSection
Feature highlights grid — icons, titles, and descriptions.
- **Import:** `import { FeatureSection } from "@momo-webplatform/mobase"`
- **Key props:** `template: number`, `dataHeading`, `dataButtons`, `dataFeatures: FeatureItemProps[]`

### FAQSection
Accordion-based FAQ layout.
- **Import:** `import { FAQSection } from "@momo-webplatform/mobase"`
- **Key props:** `template: number`, `dataHeading`, `dataButtons`, `dataFAQ: DataFAQProps[]`
- **DataFAQProps:** `{ question: string; answer: string; contents?: ContentsProps[] }`

### CTASection
Call-to-action banner section.
- **Import:** `import { CTASection } from "@momo-webplatform/mobase"`
- **Key props:** `template: number`, `dataHeading`, `dataButtons`

### BlogSection
Blog post card grid section.
- **Import:** `import { BlogSection } from "@momo-webplatform/mobase"`
- **Key props:** `template: number`, `dataHeading`, `dataButtons`, `dataBlog: DataBlogProps`

### NewsSection
News article card grid section.
- **Import:** `import { NewsSection } from "@momo-webplatform/mobase"`
- **Key props:** `template: number`, `dataHeading`, `dataButtons`, `dataNews: DataNewsProps`

### TestimonialSection
Customer testimonials / reviews carousel.
- **Import:** `import { TestimonialSection } from "@momo-webplatform/mobase"`
- **Key props:** `template: number`, `dataHeading`, `dataTestimonials`

### SocialProofSection
Logos, metrics, or trust signals showcase.
- **Import:** `import { SocialProofSection } from "@momo-webplatform/mobase"`
- **Key props:** `template: number`, `dataHeading`, `dataLogos`

### MetricsSection
Key statistics / metrics highlight block.
- **Import:** `import { MetricsSection } from "@momo-webplatform/mobase"`
- **Key props:** `dataHeading`, `dataMetrics: DataMetricsProps[]`
- **DataMetricsProps:** `{ label: string; value: string; description?: string }`

### HowItWorksSection
Step-by-step process explanation section.
- **Import:** `import { HowItWorksSection } from "@momo-webplatform/mobase"`
- **Key props:** `template: number`, `dataHeading`, `dataSteps`

### GuideSection
Tutorial / guide step section with media.
- **Import:** `import { GuideSection } from "@momo-webplatform/mobase"`
- **Key props:** `template: number`, `dataHeading`, `dataGuide: GuideDataProps`

### GiftListSection
Promotional gift/reward listing section.
- **Import:** `import { GiftListSection } from "@momo-webplatform/mobase"`

### CommonBlocks (Structural Primitives)
Shared building blocks used internally by all section blocks. Use these to compose custom sections.
- **Import:** `import { SectionBlock, HeadingBlock, ButtonsBlock } from "@momo-webplatform/mobase"`
- **SectionBlock:** Root `<section>` wrapper with `idSection`, `background`, `className`
- **HeadingBlock:** Renders tagline + title + description from `HeadingBlockProps`
- **ButtonsBlock:** Renders up to 2 CTA buttons from `ButtonsBlockProps`
- **Example:** See [rules/sections.md](rules/sections.md).

---

## 7. Business Components

### Payment
MoMo-branded payment method selection UI.
- **Import:** `import { Payment } from "@momo-webplatform/mobase"`

### PaymentResult
Post-payment result confirmation screen.
- **Import:** `import { PaymentResult } from "@momo-webplatform/mobase"`

### QRPayment
QR code payment flow UI.
- **Import:** `import { QRPayment } from "@momo-webplatform/mobase"`

---

## 8. Site-Level Components

### HeaderNavigation
Full-width site header with logo, navigation menu, and optional right-side slot. See [rules/navigation.md](rules/navigation.md).
- **Import:** `import { HeaderNavigation } from "@momo-webplatform/mobase"`
- **Key props:**
  - `dataMenu: MainNavItem[]` — navigation items with optional children (dropdown)
  - `serviceInfo: { logo: string; name: string; url: string }`
  - `isSticky?: boolean` (default: `true`)
  - `alignDropdown?: "left" | "right" | "center"`
  - `hasDownloadApp?: boolean`
  - `navigationRight?: React.ReactNode`

### Footer
Site-wide footer with primary and secondary link columns.
- **Import:** `import { Footer } from "@momo-webplatform/mobase"`
- **Key props:**
  - `primaryMenu?: FooterData`
  - `secondaryMenu?: FooterData`
  - **FooterData format:** `{ heading?: string; lists: { title: string; url: string; newTab?: boolean; icon?: React.ReactNode }[] }`

### Topbar
Slim announcement bar displayed above the header.
- **Import:** `import { Topbar } from "@momo-webplatform/mobase"`
- **Key props:** `content?: TopbarContentProps` — text, link, dismissible

---

## Quick Import Cheatsheet

```tsx
// Primitives
import { Button, ActionButton, TextButton, IconButton, Badge, Label, Spinner, Skeleton, Progressbar, Slider, Switch, AspectRatio } from "@momo-webplatform/mobase";

// Forms
import { TextInput, TextArea, Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, Combobox, DatePicker, DateSelect, Calendar, InputOTP, InputOTPGroup, InputOTPSlot, SearchBar, Checkbox, RadioGroup, RadioGroupItem, Choicebox, Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@momo-webplatform/mobase";

// Navigation
import { Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent, Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, Pagination, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Stepper, ProgressSteps } from "@momo-webplatform/mobase";

// Overlay / Feedback
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel, Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerBody, DrawerFooter, Popover, PopoverTrigger, PopoverContent, useToast, toast, Toaster, Callout, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Command } from "@momo-webplatform/mobase";

// Layout / Content
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots, HeadingGroup, HorizontalScroll, LightboxGallery } from "@momo-webplatform/mobase";

// Section Blocks
import { HeroSection, FeatureSection, FAQSection, CTASection, BlogSection, NewsSection, TestimonialSection, SocialProofSection, MetricsSection, HowItWorksSection, GuideSection, GiftListSection, SectionBlock, HeadingBlock, ButtonsBlock } from "@momo-webplatform/mobase";

// Business
import { Payment, PaymentResult, QRPayment } from "@momo-webplatform/mobase";

// Site-level
import { HeaderNavigation, Footer, Topbar } from "@momo-webplatform/mobase";

// Utilities
import { cn } from "@momo-webplatform/mobase";
```
