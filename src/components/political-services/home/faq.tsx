const faqs = [
  {
    question: "কেন একজন রাজনৈতিক ব্যক্তির নিজের ওয়েবসাইট থাকা দরকার?",
    answer:
      "আজকের ডিজিটাল যুগে জনগণের সাথে সরাসরি যোগাযোগ রাখতে ওয়েবসাইট হলো সবচেয়ে আধুনিক মাধ্যম। এখানে আপনি আপনার জীবনী, কাজের আপডেট, উন্নয়নমূলক প্রকল্প, ও ভবিষ্যৎ পরিকল্পনা তুলে ধরতে পারেন — যা জনগণের আস্থা বাড়ায়।",
  },
  {
    question: "আমি কি আমার ওয়েবসাইটে নিজে আপডেট দিতে পারবো?",
    answer:
      "হ্যাঁ, অবশ্যই পারবেন। আমরা এমনভাবে ওয়েবসাইট তৈরি করি যাতে আপনি সহজেই নিউজ, ইভেন্ট, ছবি বা বক্তব্য আপডেট করতে পারেন — কোনো টেকনিক্যাল জ্ঞান ছাড়াই।",
  },
  {
    question: "ওয়েবসাইট বানাতে কত সময় লাগে?",
    answer:
      "সাধারণত ৫ থেকে ৭ কার্যদিবসের মধ্যে ওয়েবসাইট সম্পন্ন করা যায়। তবে যদি কাস্টম ডিজাইন বা অতিরিক্ত ফিচার চান, সময় কিছুটা বাড়তে পারে।",
  },
  {
    question: "ওয়েবসাইট তৈরির পর কি রক্ষণাবেক্ষণ (Maintenance) করবেন?",
    answer:
      "হ্যাঁ, আমরা মাসিক ও বাৎসরিক মেইনটেন্যান্স সাপোর্ট দিয়ে থাকি — যাতে আপনার ওয়েবসাইট সবসময় আপডেটেড ও নিরাপদ থাকে।",
  },
  {
    question: "আমি কি মোবাইল থেকে ওয়েবসাইট দেখতে পারবো?",
    answer:
      "হ্যাঁ, আমাদের তৈরি প্রতিটি ওয়েবসাইট পুরোপুরি রেসপন্সিভ, অর্থাৎ মোবাইল, ট্যাব, ল্যাপটপ — সব ডিভাইসেই সুন্দরভাবে দেখা যাবে।",
  },
  {
    question: "ওয়েবসাইটে কি আমার সোশ্যাল মিডিয়া লিংক যুক্ত করা যাবে?",
    answer:
      "অবশ্যই! আমরা ফেসবুক, ইউটিউব, এক্স (Twitter), ইনস্টাগ্রাম ইত্যাদি সব প্ল্যাটফর্ম লিংক করে দেই যাতে আপনি সব জায়গায় সংযুক্ত থাকেন।",
  },
  {
    question: "ওয়েবসাইটে কি জনগণ মতামত দিতে পারবে?",
    answer:
      "হ্যাঁ, আমরা চাইলে ওয়েবসাইটে “Feedback Form” বা “Contact Form” যোগ করতে পারি — যাতে জনগণ সহজে তাদের মতামত বা প্রশ্ন জানাতে পারে।",
  },
  {
    question: "ওয়েবসাইটের দাম কত হবে?",
    answer:
      "আমাদের দাম নির্ভর করে আপনি কোন ধরণের সাইট চান তার উপর। আমাদের Basic, Standard, ও Premium তিনটি প্যাকেজ রয়েছে — আপনি আপনার প্রয়োজন অনুযায়ী বেছে নিতে পারেন।",
  },
];

export default function Faq() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 text-primary">
          সাধারণ প্রশ্ন
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="border-2 border-border rounded-lg p-4 sm:p-6 hover:border-primary transition-all duration-300"
            >
              <summary className="cursor-pointer font-semibold sm:font-bold text-base sm:text-lg text-primary">
                {faq.question}
              </summary>
              <p className="text-foreground/80 mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
