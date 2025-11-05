const features = [
  {
    title: "স্বয়ংক্রিয় ব্যাকআপ",
    description: "আপনার সমস্ত ডেটা নিরাপদে স্বয়ংক্রিয়ভাবে ব্যাকআপ করা হয়",
  },
  {
    title: "দ্রুত লোডিং",
    description: "বিশ্বমানের CDN দ্রুত কর্মক্ষমতা নিশ্চিত করে",
  },
  {
    title: "SSL সিকিউরিটি",
    description: "আপনার ওয়েবসাইট সম্পূর্ণ এনক্রিপ্টেড এবং সুরক্ষিত",
  },
  {
    title: "ভিডিও হোস্টিং",
    description: "সীমাহীন ভিডিও হোস্টিং এবং স্ট্রিমিং সুবিধা",
  },
  {
    title: "ইমেইল ক্যাম্পেইন",
    description: "বাল্ক ইমেইল পাঠান এবং ট্র্যাক করুন সহজেই",
  },
  {
    title: "মোবাইল অ্যাপ",
    description: "আপনার ওয়েবসাইট পরিচালনা করুন যেকোনো জায়গা থেকে",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 text-primary">
          শক্তিশালী বৈশিষ্ট্য
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
