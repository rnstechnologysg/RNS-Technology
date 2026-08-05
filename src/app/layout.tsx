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
        {/* JSON-LD structured data — invisible to users, indexed by Google & AI crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RNS Technology Pte. Ltd.",
              "alternateName": "RNS Technology",
              "url": "https://rnstechnologysg.com",
              "logo": "https://rnstechnologysg.com/logo.png",
              "description": "RNS Technology Pte. Ltd. is a Singapore-based company specialising in workforce solutions and engineering technical support for the railway, construction, and infrastructure sectors.",
              "foundingLocation": {
                "@type": "Place",
                "addressCountry": "SG",
                "addressLocality": "Singapore"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SG",
                "addressLocality": "Singapore"
              },
              "areaServed": "Singapore",
              "knowsAbout": [
                "Railway Engineering",
                "Workforce Solutions",
                "Engineering Technical Support",
                "Infrastructure",
                "Construction"
              ],
              "employee": [
                {
                  "@type": "Person",
                  "name": "Dinesh",
                  "jobTitle": "Chief Executive Officer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "RNS Technology Pte. Ltd."
                  }
                }
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "RNS Technology Pte. Ltd."
              },
              "sameAs": [
                "https://rnstechnologysg.com"
              ]
            })
          }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
