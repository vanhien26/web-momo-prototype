import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import localFont from "next/font/local";
import ToasterClient from "@/components/layout/ToasterClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const momoTrustSans = localFont({
  src: [
    { path: "../public/fonts/MoMoTrustSans-Light.otf", weight: "300" },
    { path: "../public/fonts/MoMoTrustSans-Regular.otf", weight: "400" },
    { path: "../public/fonts/MoMoTrustSans-Medium.otf", weight: "500" },
  ],
  variable: "--font-momo-trust-sans",
});

const momoTrustDisplay = localFont({
  src: "../public/fonts/MoMoTrustDisplay.otf",
  variable: "--font-momo-trust-display",
});

export const metadata: Metadata = {
  title: "Prototype Lab — MoMo",
  description: "React shell cho Prototype Lab và các demo tĩnh của MoMo Web Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${momoTrustSans.variable} ${momoTrustDisplay.variable}`}>
      <body style={{ fontFamily: "var(--font-be-vietnam-pro), system-ui, sans-serif" }}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <ToasterClient />
      </body>
    </html>
  );
}
