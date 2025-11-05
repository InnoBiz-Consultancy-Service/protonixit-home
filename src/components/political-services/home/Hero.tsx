export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/95 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="bg-accent/20 text-accent px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                আপনার ডিজিটাল শক্তি আবিষ্কার করুন
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold leading-snug sm:leading-tight lg:leading-tight text-balance">
              নেতৃত্বের নতুন যুগ শুরু করুন
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed sm:leading-relaxed max-w-md sm:max-w-lg">
              আমরা আপনার রাজনৈতিক ব্র্যান্ডকে শক্তিশালী ডিজিটাল উপস্থিতিতে
              রূপান্তরিত করি যা মানুষকে অনুপ্রাণিত এবং সংযুক্ত করে।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-accent">
                  ১০০%
                </div>
                <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">
                  সন্তুষ্ট ক্লায়েন্ট
                </p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-accent">
                  ২৪/৭
                </div>
                <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">
                  সহায়তা
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative w-full lg:w-auto mt-10 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-br from-accent to-accent/60 rounded-2xl h-40 sm:h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                  <div className="relative z-10 text-center px-2">
                    <p className="text-white/90 font-bold text-sm sm:text-lg">
                      আপনার সাফল্যের গল্প এখানে শুরু হয়
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4">
                  {[
                    { label: "দ্রুত", icon: "⚡" },
                    { label: "নিরাপদ", icon: "🔒" },
                    { label: "স্মার্ট", icon: "🧠" },
                    { label: "পেশাদার", icon: "⭐" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-xl p-2 sm:p-4 border border-white/10 hover:border-accent/50 transition flex flex-col items-center justify-center"
                    >
                      <p className="text-xl sm:text-2xl mb-1 sm:mb-2">
                        {item.icon}
                      </p>
                      <p className="text-xs sm:text-sm text-white/80 font-semibold text-center">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
