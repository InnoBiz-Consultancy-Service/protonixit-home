import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google"; // বাংলা ফন্টের জন্য সেরা
import "./ebook.css";

// বাংলা ফন্ট সেটআপ
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "তুমিও হবে কোটিপতি | সফল ব্যবসার ২০টি মাস্টার গাইডলাইন",
  description: "বাংলাদেশের প্রেক্ষাপটে জিরো থেকে সফল উদ্যোক্তা হওয়ার ২০টি প্রমাণিত বিজনেস আইডিয়া ও রোডম্যাপ। মাত্র ৯৯ টাকায় আজই সংগ্রহ করুন।",
  keywords: ["Business Ideas Bangladesh", "Entrepreneurship", "E-book", "ProtonixIT", "তুমিও হবে কোটিপতি", "ব্যবসা শিক্ষা"],
  authors: [{ name: "ProtonixIT" }],
  openGraph: {
    title: "তুমিও হবে কোটিপতি - ই-বুক",
    description: "মাত্র ৯৯ টাকায় শুরু করুন আপনার কোটিপতি হওয়ার যাত্রা! ২০টি বাস্তবমুখী বিজনেস আইডিয়া।",
    url: "https://kotipoti.protonixit.com", // এখানে আপনার আসল ডোমেইন দিন
    siteName: "ProtonixIT",
    images: [
      {
        url: "/og-image.jpg", // public ফোল্ডারে এই নামে একটি ছবি রাখবেন (১২০০x৬৩০ পিক্সেল)
        width: 1200,
        height: 630,
        alt: "তুমিও হবে কোটিপতি ই-বুক কভার",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "তুমিও হবে কোটিপতি | ২০টি বিজনেস আইডিয়া",
    description: "সহজ ভাষায় ব্যবসার পূর্ণাঙ্গ গাইডলাইন।",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.variable} font-sans antialiased`}>
        {/* আপনি চাইলে এখানে একটি গ্লোবাল নেভিগেশন বার রাখতে পারেন */}
        <main>{children}</main>
        
        {/* পিক্সেল বা এনালিটিক্স স্ক্রিপ্ট এখানে যোগ করা যাবে */}
      </body>
    </html>
  );
}