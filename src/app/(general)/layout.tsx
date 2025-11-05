import type React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import "./general.css";

export const metadata: Metadata = {
  title: "ProtonixIt - Empowering Your Business with Technology",
  description:
    "Professional digital services including web development, app development, digital marketing, Video editing and UI/UX design in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
