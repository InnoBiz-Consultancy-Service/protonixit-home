import type React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./political.css";
import { Noto_Sans_Bengali } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";
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
        {/* WhatsApp Sticky Button */}
        <a
          href="https://wa.me/8801705323509"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
          aria-label="Contact on WhatsApp"
        >
          {/* Lighting/Pulsing Effect এর জন্য একটি পিং অ্যানিমেশন */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
          
          <FaWhatsapp size={32} />
          
          {/* Hover করলে লেখা দেখাবে (Optional) */}
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
            WhatsApp
          </span>
        </a>
      </body>
    </html>
  );
}
