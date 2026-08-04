import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers";

// SF Pro Display — primary UI & body font
const sfProDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

// SF Pro Rounded — accent / display headings
const sfProRounded = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro-Rounded-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Rounded-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Rounded-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-rounded",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | RNS Enterprise",
    default: "RNS | The Future of Enterprise Work",
  },
  description: "A world-class enterprise platform designed to scale with your business. Experience unmatched performance, security, and design.",
  metadataBase: new URL(process.env.SITE_URL || 'https://rns.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "RNS Enterprise",
    title: "RNS | The Future of Enterprise Work",
    description: "A world-class enterprise platform designed to scale with your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RNS | The Future of Enterprise Work",
    description: "A world-class enterprise platform designed to scale with your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sfProDisplay.variable} ${sfProRounded.variable} ${geistMono.variable} h-full antialiased suppressHydrationWarning overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
