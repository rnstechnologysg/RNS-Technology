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
    template: "%s | RNS Technology Pte. Ltd.",
    default: "RNS Technology Pte. Ltd. | Workforce & Engineering Solutions",
  },
  description: "RNS Technology Pte. Ltd. provides expert workforce solutions and engineering technical support across railway, construction, and infrastructure sectors in Singapore.",
  metadataBase: new URL(process.env.SITE_URL || 'https://rnstechnologysg.com'),
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://rnstechnologysg.com",
    siteName: "RNS Technology Pte. Ltd.",
    title: "RNS Technology Pte. Ltd. | Workforce & Engineering Solutions",
    description: "Expert workforce solutions and engineering technical support across Singapore's railway, construction, and infrastructure sectors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RNS Technology Pte. Ltd. | Workforce & Engineering Solutions",
    description: "Expert workforce solutions and engineering technical support across Singapore's railway, construction, and infrastructure sectors.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RNS Technology Pte. Ltd.",
  legalName: "RNS Technology Pte. Ltd.",
  url: "https://rnstechnologysg.com",
  logo: "https://rnstechnologysg.com/icon.svg",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore",
    },
  },
  areaServed: "SG",
  description:
    "RNS Technology Pte. Ltd. provides expert workforce solutions and engineering technical support across railway, construction, and infrastructure sectors in Singapore.",
  member: [
    {
      "@type": "OrganizationRole",
      member: {
        "@type": "Person",
        name: "Dinesh",
        jobTitle: "Chief Executive Officer",
      },
      roleName: "CEO",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@rnstechnologysg.com",
    areaServed: "SG",
    availableLanguage: "English",
  },
  sameAs: ["https://www.rnstechnologysg.com"],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
