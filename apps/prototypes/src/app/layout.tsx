import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const momoTrust = localFont({
  src: "../../public/assets/fonts/momo-trust/MoMoTrustDisplay.otf",
  variable: "--font-momo-trust",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MoMo Prototype Store",
  description: "Kho prototype tương tác của MoMo Web Platform — quản lý toàn bộ demo UI trong một ứng dụng Next.js duy nhất.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${momoTrust.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
