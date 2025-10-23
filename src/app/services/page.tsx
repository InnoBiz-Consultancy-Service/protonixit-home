import Link from "next/link";
import { ArrowRight, Palette, Code, Smartphone, Film, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProtonixIt | Services",
  description:
    "Professional digital services including web development, app development, digital marketing, Video editing and UI/UX design in Bangladesh. best software company in bangladesh.",
};

const services = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Powerful, scalable web solutions",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    description:
      "We create responsive, high-performance websites that engage users and drive conversions. From custom builds to e-commerce platforms, we deliver web solutions that scale with your business.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
      "Security Implementation",
      "CMS Integration",
      "API Development",
    ],
    pricing: [
      {
        tier: "Starter",
        price: "$2,999",
        description: "Perfect for small projects",
      },
      {
        tier: "Professional",
        price: "$7,999",
        description: "For growing businesses",
      },
      {
        tier: "Enterprise",
        price: "Custom",
        description: "Large-scale solutions",
      },
    ],
    deliverables: [
      "Fully responsive website",
      "Mobile-first design",
      "Performance optimization",
      "SEO-friendly structure",
      "3 months support",
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    shortDescription: "Mobile apps that engage users",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    description:
      "Build native and cross-platform mobile applications that users love. We specialize in iOS and Android development with intuitive interfaces and seamless performance.",
    features: [
      "Native Development",
      "Cross-Platform Apps",
      "UI/UX Design",
      "API Integration",
      "Push Notifications",
      "App Store Optimization",
    ],
    pricing: [
      { tier: "MVP", price: "$5,999", description: "Minimum viable product" },
      { tier: "Standard", price: "$12,999", description: "Full-featured app" },
      { tier: "Premium", price: "Custom", description: "Advanced features" },
    ],
    deliverables: [
      "Fully functional app",
      "iOS & Android versions",
      "User authentication",
      "Backend integration",
      "6 months support",
    ],
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    shortDescription: "Stunning visuals that captivate",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    description:
      "Create compelling visual identities and marketing materials that stand out. From logos to complete brand systems, we design graphics that tell your story.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Marketing Materials",
      "Social Media Graphics",
      "Packaging Design",
      "Illustration",
    ],
    pricing: [
      { tier: "Basic", price: "$999", description: "Single design project" },
      { tier: "Standard", price: "$2,499", description: "Multiple designs" },
      {
        tier: "Premium",
        price: "$5,999",
        description: "Complete brand package",
      },
    ],
    deliverables: [
      "High-resolution files",
      "Multiple formats",
      "Unlimited revisions",
      "Source files included",
      "Brand guidelines",
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    shortDescription: "Cinematic storytelling",
    icon: Film,
    color: "from-green-500 to-emerald-500",
    description:
      "Transform raw footage into compelling video content. Professional editing, color grading, and effects that bring your vision to life.",
    features: [
      "Professional Editing",
      "Color Grading",
      "Motion Graphics",
      "Sound Design",
      "VFX Integration",
      "Multi-format Export",
    ],
    pricing: [
      { tier: "Short Form", price: "$499", description: "Up to 5 minutes" },
      { tier: "Medium Form", price: "$1,499", description: "5-20 minutes" },
      { tier: "Long Form", price: "$3,999", description: "20+ minutes" },
    ],
    deliverables: [
      "Edited video file",
      "Multiple formats",
      "Color grading",
      "Sound design",
      "2 revision rounds",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "User experiences that delight",
    icon: Zap,
    color: "from-indigo-500 to-purple-500",
    description:
      "Design intuitive interfaces that users love. We combine research, strategy, and creativity to create experiences that convert.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Systems",
      "Accessibility",
    ],
    pricing: [
      { tier: "Starter", price: "$1,999", description: "Basic UI design" },
      {
        tier: "Professional",
        price: "$4,999",
        description: "Full UX/UI design",
      },
      { tier: "Enterprise", price: "Custom", description: "Design system" },
    ],
    deliverables: [
      "User research report",
      "Wireframes & prototypes",
      "High-fidelity designs",
      "Design system",
      "Handoff documentation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                Our Services
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Comprehensive Creative{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance font-light">
              From web development to video editing, we provide end-to-end
              creative services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative p-6 lg:p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="space-y-2 mt-3">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 py-2 transition-colors"
                        >
                          <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent text-lg">
                            ✔
                          </span>
                          <p className="text-foreground text-sm font-medium">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link className="mt-4" href={`/services/${service.id}`}>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn transition-all duration-300 cursor-pointer"
                        size="lg"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to bring your vision to life?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and find the perfect solution for
            your needs.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
