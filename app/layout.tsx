import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/content/site";
import { education } from "@/content/education";
import { ThemeProvider, themeInitScript } from "@/components/providers/theme-provider";
import { ToastProvider } from "@/components/providers/toast-provider";
import { SkipLink } from "@/components/chrome/skip-link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanjayportfolio-new.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Sanjay Subash is a software engineer and product engineer who works beyond implementation — across product development, software architecture, engineering processes, technology strategy, and R&D.",
  keywords: [
    "Sanjay Subash",
    "Software Engineer",
    "Product Engineer",
    "Full Stack Software Engineer",
    "AI Systems",
    "Product Design",
    "Data Intelligence",
    "Software Architecture",
    "Technology Strategy",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      "Building AI-powered products where engineering, design and data meet.",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      "Building AI-powered products where engineering, design and data meet.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.ico" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: ["Software Engineer", "Product Engineer"],
  url: siteUrl,
  email: `mailto:${siteConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  alumniOf: education.map((e) => ({
    "@type": "EducationalOrganization",
    name: e.institution,
  })),
  knowsAbout: [
    "Product Engineering",
    "Software Architecture",
    "Full Stack Development",
    "AI Systems",
    "Data Analytics",
    "MERN Stack",
    "Java",
    "Python",
  ],
  sameAs: [siteConfig.linkedin, siteConfig.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the pre-paint script writes data-theme on
    // <html> before React hydrates, so server and client markup differ here
    // by design.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>
          <ToastProvider>
            <SkipLink />
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
