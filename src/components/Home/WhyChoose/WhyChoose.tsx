import {
  CheckCircle2,
  Zap,
  Users,
  Sparkles,
  Lightbulb,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Passionate Creators",
    description:
      "A dedicated team of creative professionals who are passionate about bringing your vision to life with energy, innovation, and commitment.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning-Fast Delivery",
    description:
      "We understand your timeline. Efficient workflows ensure your projects launch on schedule without compromising quality.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Support",
    description:
      "Your success is our priority. We provide ongoing support and collaboration throughout every project phase.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Creative Innovation",
    description:
      "We don't just follow trends—we create them. Our team brings fresh, innovative ideas to every project.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Scalable Solutions",
    description:
      "From startups to enterprises, our solutions grow with your business and adapt to your evolving needs.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "100% Quality Assurance",
    description:
      "Rigorous testing and quality checks ensure every deliverable meets our high standards and your expectations.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-16 px-4 lg:px-8 bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
              Why Choose Protonix It
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
            Excellence in Every{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance font-light">
            We combine creativity, technical expertise, and dedication to
            deliver solutions that exceed expectations and drive real results
            for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                  {reason.icon}
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                <div className="h-1 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-12 transition-all duration-300 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
