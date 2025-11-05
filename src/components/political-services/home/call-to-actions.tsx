"use client";

import Link from "next/link";

export default function CallToAction() {
  const whatsappNumber = "+8801581891023";
  const whatsappMessage =
    "আমি আমার নেতৃত্ব ব্র্যান্ডের জন্য একটি রাজনৈতিক ওয়েবসাইট সম্পর্কে আলোচনা করতে আগ্রহী।";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-balance">
          আজই আপনার রাজনৈতিক ওয়েবসাইট চালু করুন
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 text-balance leading-relaxed">
          যারা তাদের অনলাইন উপস্থিতি রূপান্তরিত করেছেন তাদের সাথে যোগ দিন।
          আমাদের বিশেষজ্ঞদের সাথে বিনামূল্যে পরামর্শের জন্য সময় নির্ধারণ করুন।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link href={"/contact"}>
            <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-3 rounded-lg transition cursor-pointer">
              বিনামূল্যে পরামর্শ বুক করুন
            </button>
          </Link>

          <button
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition cursor-pointer"
            onClick={handleWhatsApp}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.574-2.326 1.392-3.154 2.387-.828.995-1.386 2.133-1.638 3.362-.263 1.314-.21 2.479.158 3.61.368 1.13 1.012 2.197 1.857 3.114.845.916 1.858 1.684 3.016 2.226 1.158.542 2.428.815 3.654.815 1.225 0 2.496-.273 3.654-.815 1.158-.542 2.171-1.31 3.016-2.226.845-.917 1.489-1.984 1.857-3.114.368-1.131.421-2.296.158-3.61-.252-1.229-.81-2.367-1.638-3.362-.828-.995-1.916-1.813-3.154-2.387a9.87 9.87 0 00-4.255-.949z" />
            </svg>
            WhatsApp এ চ্যাট করুন
          </button>
        </div>
      </div>
    </section>
  );
}
