import Link from "next/link";

export default function Consulting() {
  const consultingServices = [
    {
      icon: "🎯",
      title: "ডিজিটাল কৌশল পরামর্শ",
      description:
        "আপনার লক্ষ্য বুঝে আমরা কাস্টম ডিজিটাল কৌশল তৈরি করি যা ফলাফল দেয়।",
    },
    {
      icon: "🔍",
      title: "প্রয়োজন মূল্যায়ন",
      description:
        "আপনার ব্র্যান্ডের শক্তি এবং সুযোগ চিহ্নিত করে সর্বোত্তম সমাধান প্রস্তাব করি।",
    },
    {
      icon: "📊",
      title: "বাজার বিশ্লেষণ",
      description:
        "প্রতিযোগী বিশ্লেষণ এবং ট্রেন্ড গবেষণার মাধ্যমে আপনার অবস্থান শক্তিশালী করি।",
    },
    {
      icon: "🚀",
      title: "বাস্তবায়ন পরিকল্পনা",
      description:
        "পরামর্শ থেকে বাস্তবায়ন পর্যন্ত প্রতিটি পদক্ষেপে আমরা আপনার সাথে আছি।",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-balance">
            আমরা আপনার সাথে পরামর্শ করি
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-xl sm:max-w-2xl mx-auto text-balance">
            আপনার ব্যবসার অনন্য চ্যালেঞ্জ বুঝে আমরা সঠিক সমাধান খুঁজে বের করি
            এবং সাফল্যের পথ দেখাই।
          </p>
        </div>

        {/* Consulting Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {consultingServices.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8 border border-primary/10 hover:border-accent/30 transition flex flex-col"
            >
              <div className="text-4xl sm:text-5xl mb-3">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/75 text-sm sm:text-base leading-relaxed flex-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process + Free Consultation */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-6 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Process */}
            <div className="space-y-4 sm:space-y-6 mb-8 md:mb-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                আমাদের পরামর্শ প্রক্রিয়া
              </h3>
              <ul className="space-y-2 sm:space-y-4">
                {[
                  "আপনার সাথে গভীর আলোচনা এবং প্রয়োজন বোঝা",
                  "বাজার গবেষণা এবং প্রতিযোগী বিশ্লেষণ",
                  "কাস্টম কৌশল পরিকল্পনা এবং রোডম্যাপ",
                  "ধাপে ধাপে বাস্তবায়ন এবং নিরীক্ষণ",
                  "ফলাফল ট্র্যাকিং এবং উন্নতি পরামর্শ",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-foreground/90 text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Free Consultation */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-accent font-bold uppercase">
                      বিনামূল্যে পরামর্শ
                    </p>
                    <h4 className="text-2xl sm:text-3xl font-bold text-primary mt-1 sm:mt-2">
                      ৩০ মিনিট
                    </h4>
                    <p className="text-foreground/70 text-sm sm:text-base mt-1 sm:mt-2">
                      বিস্তারিত আলোচনা এবং কৌশল প্রস্তাব
                    </p>
                  </div>
                  <Link href={"/contact"}>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 rounded-lg transition cursor-pointer">
                      এখনই বুক করুন
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
