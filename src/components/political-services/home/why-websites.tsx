const benefits = [
  {
    title: "বিশ্বাস এবং বিশ্বাসযোগ্যতা তৈরি করুন",
    description:
      "একটি পেশাদার ওয়েবসাইট ভোটার এবং নাগরিকদের কাছে আপনার কর্তৃত্ব এবং বিশ্বাসযোগ্যতা প্রতিষ্ঠা করে।",
  },
  {
    title: "আপনার বার্তা শেয়ার করুন",
    description:
      "আপনার দৃষ্টিভঙ্গি, নীতি এবং অর্জন সরাসরি আপনার দর্শকদের কাছে যোগাযোগ করুন।",
  },
  {
    title: "প্রচারাভিযান প্রচার",
    description:
      "আপনার প্রচারাভিযান, আসন্ন ইভেন্ট এবং উদ্যোগ দক্ষতার সাথে বৃহত্তর দর্শকদের কাছে প্রচার করুন।",
  },
  {
    title: "ভোটার যোগাযোগ",
    description:
      "নিউজলেটার, আপডেট এবং যোগাযোগ ফর্মের মাধ্যমে ভোটারদের সাথে সরাসরি যোগাযোগ বজায় রাখুন।",
  },
  {
    title: "SEO এবং আবিষ্কারযোগ্যতা",
    description:
      "আপনার অনলাইন দৃশ্যমানতা উন্নত করুন এবং প্রাসঙ্গিক রাজনৈতিক বিষয়ে উচ্চতর র‍্যাঙ্ক করুন।",
  },
];

export default function WhyWebsite() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">
          রাজনীতিবিদদের কেন ওয়েবসাইট দরকার
        </h2>
        <p className="text-center text-muted-foreground mb-10 sm:mb-12 text-base sm:text-lg">
          আজকের ডিজিটাল যুগে, একটি পেশাদার অনলাইন উপস্থিতি রাজনৈতিক সাফল্যের
          জন্য অপরিহার্য
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 border-2 border-border rounded-lg hover:border-primary hover:shadow-lg transition duration-300 ease-in-out bg-white"
            >
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-foreground/80 text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
