import type React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
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
