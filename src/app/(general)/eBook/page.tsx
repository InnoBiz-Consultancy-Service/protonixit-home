"use client";
import React, { useState } from 'react';
import { ShoppingCart, BookOpen, Star, CheckCircle, MessageCircle, Heart, X } from 'lucide-react';

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // পপ-আপের জন্য স্টেট
  const [userReview, setUserReview] = useState("");

  const chapters = [
    "স্মার্ট এফ-কমার্স: ফেসবুক ব্র্যান্ড তৈরি", "এগ্রো-ফার্মিং ২.০: উচ্চমূল্যের ফল চাষ",
    "রিয়েল এস্টেট সোর্সিং: ব্রোকারেজ বিজনেস", "ক্লিনিং ও মেইনটেন্যান্স সার্ভিস",
    "রপ্তানিমুখী হস্তশিল্প", "ক্লাউড কিচেন ফুড বিজনেস",
    "লজিস্টিক ও কুরিয়ার সার্ভিস", "এড-টেক বা অনলাইন কোর্স",
    "অর্গানিক ফুড সাপ্লাই", "রিসাইক্লিং বিজনেস",
    "বুটিক ও ফ্যাশন হাউস", "イভেন্ট ম্যানেজমেন্ট",
    "পোল্ট্রি ও ফিশারি: বৈজ্ঞানিক পদ্ধতি", "সফটওয়্যার ও আইটি সলিউশন",
    "ট্যুরিজম ও ট্রাভেল এজেন্সি", "পুরানো গাড়ি কেনাবেচা (Resale)",
    "কাস্টমাইজড গিফট শপ", "ফার্মাসিউটিক্যাল ডিস্ট্রিবিউশন",
    "প্রিন্টিং ও প্যাকেজিং", "কনসালটেন্সি ফার্ম"
  ];

  const reviews = [
    { name: "আরিফ হোসেন", rating: 5, comment: "বইটি পড়ার পর আমার বিজনেস আইডিয়া একদম বদলে গেছে। বিশেষ করে চ্যাপ্টার ১৪ আমার খুব কাজে লেগেছে।" },
    { name: "সাদিয়া ইসলাম", rating: 4, comment: "খুবই বাস্তবসম্মত গাইডলাইন। ৯৯ টাকায় এর চেয়ে ভালো কিছু হতে পারে না।" },
    { name: "রাকিবুল হাসান", rating: 5, comment: "আমি অলরেডি চ্যাপ্টার ১২ অনুযায়ী কাজ শুরু করেছি। ধন্যবাদ লেখককে!" }
  ];

  const handleOrder = () => {
    window.open("https://wa.me/8801705323509?text=আমি 'তুমিও হবে কোটিপতি' ই-বুকটি কিনতে চাই। পেমেন্ট ডিটেইলস দিন।", "_blank");
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userReview.trim().length > 5) {
      setShowPopup(true); // পপ-আপ দেখাবে
      setUserReview("");
      // ৩ সেকেন্ড পর পপ-আপ অটোমেটিক বন্ধ হয়ে যাবে
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      
      {/* Success Pop-up Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center relative animate-in zoom-in duration-300">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-teal-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">অভিনন্দন!</h3>
            <p className="text-gray-600">আপনার রিভিউটি সফলভাবে সাবমিট হয়েছে। আপনার মতামতের জন্য ধন্যবাদ।</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-teal-700 via-teal-900 to-slate-900 text-white pt-32 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">তুমিও হবে কোটিপতি</h1>
          <p className="text-xl md:text-2xl mb-12 text-teal-50 max-w-3xl mx-auto leading-relaxed opacity-90">
            বাংলাদেশের প্রেক্ষাপটে জিরো থেকে সফল উদ্যোক্তা হওয়ার ২০টি মাস্টার গাইডলাইন
          </p>
          <button 
            onClick={handleOrder}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-full text-xl shadow-2xl flex items-center justify-center mx-auto transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingCart className="mr-3" /> অর্ডার করতে চাই - মাত্র ৯৯/-
          </button>
          <p className="mt-6 text-sm text-teal-200 opacity-80 italic">১০০০+ কপি ইতিমধ্যে বিক্রয় হয়েছে</p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-teal-100 text-center -mt-16 relative z-20">
          <h2 className="text-2xl font-bold mb-4 text-gray-700 italic">"কোটিপতি হওয়া কি শুধু ভাগ্যের ব্যাপার?"</h2>
          {!showIntro ? (
            <button 
              onClick={() => setShowIntro(true)}
              className="bg-teal-50 text-teal-700 px-8 py-3 rounded-full font-semibold flex items-center justify-center mx-auto hover:bg-teal-100 transition-colors border border-teal-200"
            >
              <BookOpen className="mr-2" /> একটু পড়ে দেখতে চাই...
            </button>
          ) : (
            <div className="text-left animate-in fade-in slide-in-from-top-4 duration-500">
              <h3 className="text-xl font-bold text-teal-800 mb-4 border-b border-teal-100 pb-2">ভূমিকা:</h3>
              <p className="leading-relaxed text-gray-600 whitespace-pre-line text-lg">
                প্রিয় পাঠক,<br/>
                আপনার কি মনে হয় কোটিপতি হওয়াটা শুধু স্বপ্নের ব্যাপার? নাকি হাতে গোনা কিছু মানুষের জন্য বরাদ্দ? যদি এমনটা ভেবে থাকেন, তাহলে এই বইটি আপনার সেই ধারণা বদলে দেবে। বাংলাদেশ একটি অপার সম্ভাবনার দেশ, যেখানে সঠিক আইডিয়া, কঠোর পরিশ্রম আর একটু স্মার্ট কৌশলের মাধ্যমে যে কেউই তার আর্থিক অবস্থার পরিবর্তন ঘটাতে পারে।<br/><br/>
                এই বইটি আপনাকে এমন ২০টি প্রমানিত এবং কার্যকরী পদ্ধতি শেখাবে, যা বাংলাদেশের বর্তমান বাজারে অত্যন্ত সফল। এখানে কোনো অলৌকিক ফর্মুলা নেই, আছে বাস্তবভিত্তিক কৌশল যা আপনাকে শূন্য থেকে শুরু করে একজন সফল উদ্যোক্তা এবং একজন কোটিপতি হিসেবে গড়ে তুলতে সাহায্য করবে।<br/><br/>
                শুভকামনা!
              </p>
              <button onClick={() => setShowIntro(false)} className="mt-6 text-sm text-teal-500 font-bold hover:text-teal-700 uppercase tracking-widest">বন্ধ করুন</button>
            </div>
          )}
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="h-1 w-12 bg-teal-500 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800">বইটিতে যা যা থাকছে</h2>
            <div className="h-1 w-12 bg-teal-500 ml-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {chapters.map((chapter, index) => (
              <div key={index} className="flex items-start p-5 bg-teal-50 rounded-xl hover:bg-teal-100 transition-all cursor-default group border border-teal-50">
                <span className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1 shadow-sm">{index + 1}</span>
                <span className="font-medium text-slate-700 group-hover:text-teal-900">{chapter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 px-4 bg-slate-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 text-slate-800">পাঠক কি বলছেন?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-teal-500 relative transition-transform hover:-translate-y-2">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-2">
                  <Heart className="text-teal-500 fill-teal-500" size={24} />
                </div>
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{rev.comment}"</p>
                <p className="font-bold text-teal-900">— {rev.name}</p>
              </div>
            ))}
          </div>
          
          {/* Review Submit Area */}
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-inner border border-teal-50">
            <form onSubmit={handleReviewSubmit}>
              <h3 className="text-xl font-bold mb-6 text-teal-800 flex items-center justify-center">
                <MessageCircle className="mr-2" /> আপনার মতামত দিন
              </h3>
              <textarea 
                value={userReview}
                onChange={(e) => setUserReview(e.target.value)}
                required
                className="w-full p-4 rounded-xl border-2 border-gray-100 mb-6 focus:border-teal-500 outline-none transition-all min-h-[140px]" 
                placeholder="বইটি সম্পর্কে আপনার মূল্যবান মতামত লিখুন..."
              ></textarea>
              <button 
                type="submit"
                className="bg-teal-600 text-white px-12 py-3 rounded-full font-bold hover:bg-teal-700 shadow-lg transition-all hover:scale-105"
              >
                সাবমিট করুন
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl font-bold mb-4 tracking-wider text-teal-400">তুমিও হবে কোটিপতি</p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="mb-2 text-gray-400">প্রকাশক: <span className="text-white font-bold text-lg">ProtonixIT</span></p>
          <p className="text-gray-500 text-sm italic mb-10">"আমরা বিশ্বাস করি, প্রতিটি আইডিয়ার মাঝেই লুকিয়ে আছে একটি বিশাল সাম্রাজ্য।"</p>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>© ২০২৬ সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="mt-4 md:mt-0">আপনার উদ্যোগের ডিজিটাল পার্টনার।</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed right-6 bottom-6 z-50">
         <button 
            onClick={handleOrder}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
            title="এখনই কিনুন"
          >
            <ShoppingCart size={28} />
          </button>
      </div>
    </div>
  );
}