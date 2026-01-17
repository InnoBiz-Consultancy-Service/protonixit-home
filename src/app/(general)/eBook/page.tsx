"use client";
import React, { useState } from 'react';
import { ShoppingCart, BookOpen, Star, CheckCircle, MessageCircle } from 'lucide-react';

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(false);

  const chapters = [
    "স্মার্ট এফ-কমার্স: ফেসবুক ব্র্যান্ড তৈরি", "এগ্রো-ফার্মিং ২.০: উচ্চমূল্যের ফল চাষ",
    "রিয়েল এস্টেট সোর্সিং: ব্রোকারেজ বিজনেস", "ক্লিনিং ও মেইনটেন্যান্স সার্ভিস",
    "রপ্তানিমুখী হস্তশিল্প", "ক্লাউড কিচেন ফুড বিজনেস",
    "লজিস্টিক ও কুরিয়ার সার্ভিস", "এড-টেক বা অনলাইন কোর্স",
    "অর্গানিক ফুড সাপ্লাই", "রিসাইক্লিং বিজনেস",
    "বুটিক ও ফ্যাশন হাউস", "ইভেন্ট ম্যানেজমেন্ট",
    "পোল্ট্রি ও ফিশারি: বৈজ্ঞানিক পদ্ধতি", "সফটওয়্যার ও আইটি সলিউশন",
    "ট্যুরিজম ও ট্রাভেল এজেন্সি", "পুরানো গাড়ি কেনাবেচা (Resale)",
    "কাস্টমাইজড গিফট শপ", "ফার্মাসিউটিক্যাল ডিস্ট্রিবিউশন",
    "প্রিন্টিং ও প্যাকেজিং", "কনসালটেন্সি ফার্ম"
  ];

  const reviews = [
    { name: "আরিফ হোসেন", rating: 5, comment: "বইটি পড়ার পর আমার বিজনেস আইডিয়া একদম বদলে গেছে। বিশেষ করে চ্যাপ্টার ১৪ আমার খুব কাজে লেগেছে।" },
    { name: "সাদিয়া ইসলাম", rating: 4, comment: "খুবই বাস্তবসম্মত গাইডলাইন। ৯৯ টাকায় এর চেয়ে ভালো কিছু হতে পারে না।" },
    { name: "রাকিবুল হাসান", rating: 5, comment: "আমি অলরেডি চ্যাপ্টার ১২ অনুযায়ী কাজ শুরু করেছি। ধন্যবাদ লেখককে!" }
  ];

  const handleOrder = () => {
    window.open("https://wa.me/8801705323509?text=আমি 'তুমিও হবে কোটিপতি' ই-বুকটি কিনতে চাই। পেমেন্ট ডিটেইলস দিন।", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">তুমিও হবে কোটিপতি</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">বাংলাদেশের প্রেক্ষাপটে জিরো থেকে সফল উদ্যোক্তা হওয়ার ২০টি মাস্টার গাইডলাইন</p>
        <button 
          onClick={handleOrder}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg flex items-center justify-center mx-auto transition-transform hover:scale-105"
        >
          <ShoppingCart className="mr-2" /> অর্ডার করতে চাই - মাত্র ৯৯/-
        </button>
      </header>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-bold mb-4 italic text-gray-700">"কোটিপতি হওয়া কি শুধু ভাগ্যের ব্যাপার?"</h2>
          {!showIntro ? (
            <button 
              onClick={() => setShowIntro(true)}
              className="text-blue-600 font-semibold flex items-center justify-center mx-auto hover:underline"
            >
              <BookOpen className="mr-2" /> একটু পড়ে দেখতে চাই...
            </button>
          ) : (
            <div className="text-left animate-fade-in">
              <h3 className="text-xl font-bold text-blue-800 mb-2">ভূমিকা:</h3>
              <p className="leading-relaxed text-gray-600 whitespace-pre-line">
                প্রিয় পাঠক, আপনার কি মনে হয় কোটিপতি হওয়াটা শুধু স্বপ্নের ব্যাপার? নাকি হাতে গোনা কিছু মানুষের জন্য বরাদ্দ? বাংলাদেশ একটি অপার সম্ভাবনার দেশ... (বাকি অংশটুকু এখানে থাকবে)
              </p>
              <button onClick={() => setShowIntro(false)} className="mt-4 text-sm text-gray-400">বন্ধ করুন</button>
            </div>
          )}
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">বইটিতে যা যা থাকছে (সূচিপত্র)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {chapters.map((chapter, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                <span className="font-medium text-gray-700">অধ্যায় {index + 1}: {chapter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">পাঠক কি বলছেন?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex mb-2 text-yellow-400">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 text-sm mb-4">"{rev.comment}"</p>
                <p className="font-bold text-gray-800">- {rev.name}</p>
              </div>
            ))}
          </div>
          
          {/* Review Submit Area */}
          <div className="bg-blue-50 p-8 rounded-2xl border-2 border-dashed border-blue-200 text-center">
            <h3 className="text-xl font-bold mb-4 text-blue-800 text-center flex items-center justify-center">
              <MessageCircle className="mr-2" /> আপনার রিভিউ দিন
            </h3>
            <textarea className="w-full p-4 rounded-lg border border-gray-200 mb-4 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="বইটি আপনার কেমন লেগেছে?"></textarea>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700">রিভিউ সাবমিট করুন</button>
          </div>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden flex justify-between items-center z-50">
        <span className="text-2xl font-bold text-blue-700">৳৯৯</span>
        <button onClick={handleOrder} className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold">অর্ডার করুন</button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 text-center">
        <p className="mb-2">প্রকাশক: <strong>ProtonixIT</strong></p>
        <p className="text-gray-400 text-sm">© ২০২৬ সর্বস্বত্ব সংরক্ষিত।</p>
        <p className="mt-4 text-xs text-gray-500">আপনার উদ্যোগের ডিজিটাল পার্টনার।</p>
      </footer>
    </div>
  );
}