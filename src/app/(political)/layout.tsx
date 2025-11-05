import type React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./political.css";
import { Noto_Sans_Bengali } from "next/font/google";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Political Website & Branding Services | Protonix IT",
  description:
    "Protonix IT offers professional website and digital branding solutions for political leaders, MPs, chairmen, ministers, and public representatives in Bangladesh. Build trust, showcase your work, and connect with people digitally.",
  keywords: [
    "political website",
    "political branding",
    "MP website Bangladesh",
    "chairman website",
    "minister portfolio site",
    "digital campaign website",
    "Protonix IT",
  ],
  authors: [{ name: "Protonix IT Team", url: "https://protonixit.com" }],
  openGraph: {
    title: "Political Website & Digital Branding by Protonix IT",
    description:
      "Build your political brand online with Protonix IT. Custom websites, campaign platforms, and digital presence for political leaders and public representatives.",
    url: "https://protonixit.com/political-websites",
    siteName: "Protonix IT",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protonix IT - Political Branding Services",
    description:
      "We create modern, responsive websites and branding solutions for political leaders in Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://protonixit.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={notoSansBengali.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
