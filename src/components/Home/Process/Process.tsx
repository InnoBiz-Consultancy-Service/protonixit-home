import {
  CheckCircle2,
  Lightbulb,
  Palette,
  Zap,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your vision, goals, and requirements. Through in-depth consultations, we analyze your needs across graphics design, web development, app development, video editing, or UI/UX design to create a comprehensive project strategy.",
    benefits: ["Requirements Analysis", "Goal Alignment", "Strategic Planning"],
  },
  {
    number: "02",
    icon: <Palette className="w-10 h-10" />,
    title: "Concept & Design",
    description:
      "Our creative team develops compelling concepts and designs tailored to your project. Whether it's visual graphics, UI mockups, video storyboards, or web layouts, we create stunning designs that capture your brand essence and user vision.",
    benefits: ["Creative Concepts", "Visual Design", "Iterative Feedback"],
  },
  {
    number: "03",
    icon: <Zap className="w-10 h-10" />,
    title: "Development & Production",
    description:
      "We bring your designs to life with expert execution. From coding responsive websites and apps, to producing high-quality videos and graphics, our skilled team uses industry-leading tools and best practices to deliver exceptional results.",
    benefits: ["Expert Execution", "Quality Assurance", "Best Practices"],
  },
  {
    number: "04",
    icon: <CheckCircle2 className="w-10 h-10" />,
    title: "Testing & Refinement",
    description:
      "Rigorous testing and quality checks ensure perfection across all deliverables. We optimize performance, fix any issues, and refine every detail until your project meets our high standards and exceeds your expectations.",
    benefits: [
      "Quality Testing",
      "Performance Optimization",
      "Polish & Refinement",
    ],
  },
  {
    number: "05",
    icon: <Rocket className="w-10 h-10" />,
    title: "Launch & Support",
    description:
      "We manage a seamless deployment and provide comprehensive post-launch support. Our team remains committed to your success with ongoing maintenance, updates, analytics, and strategic guidance for continued growth.",
    benefits: ["Deployment", "Ongoing Support", "Performance Monitoring"],
  },
];

export default function Process() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-primary/3 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -right-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/6 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20 lg:mb-28 space-y-6 md:space-y-8">
          <div className="inline-block">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/12 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors duration-300">
              Our Proven Process
            </span>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              From Vision to{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance font-light">
              Whether you need graphics design, web development, app
              development, video editing, or UI/UX design, we follow a
              meticulous, collaborative process that ensures exceptional
              results. Our proven methodology transforms your vision into a
              powerful solution.
            </p>
          </div>
        </div>

        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {index < steps.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-24 sm:top-28 w-0.5 h-20 sm:h-24 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
              )}

              <div className="flex gap-4 sm:gap-6 lg:gap-12">
                <div className="flex flex-col items-center gap-4 sm:gap-6 flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 bg-gradient-to-br from-primary/25 to-primary/8 rounded-xl sm:rounded-2xl flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/25 group-hover:scale-110">
                      <div className="text-primary/80 group-hover:text-primary transition-colors duration-300 w-8 h-8 sm:w-10 sm:h-10">
                        {step.icon}
                      </div>
                    </div>
                    <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-br from-primary to-primary/80 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shadow-lg shadow-primary/30">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="flex-1 pt-1 sm:pt-2 pb-8 sm:pb-12 md:pb-16">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 group/card overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />

                    <div className="relative z-10 space-y-4 sm:space-y-5">
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover/card:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <div className="h-1 sm:h-1.5 w-10 sm:w-12 bg-gradient-to-r from-primary to-primary/40 group-hover/card:w-16 sm:group-hover/card:w-20 transition-all duration-500 rounded-full" />
                      </div>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4">
                        {step.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-semibold text-primary/80 bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 group-hover/card:border-primary/40 group-hover/card:bg-primary/15 transition-all duration-300 whitespace-nowrap"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
