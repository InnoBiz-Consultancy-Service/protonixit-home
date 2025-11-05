"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData: Record<
  string,
  {
    title: string;
    description: string;
    features: string[];
    pricing: Array<{ tier: string; price: string; description: string }>;
    deliverables: string[];
    longDescription: string;
    benefits: string[];
    process: Array<{ step: number; title: string; description: string }>;
  }
> = {
  "web-development": {
    title: "Web Development",
    description: "Powerful, scalable web solutions",
    longDescription:
      "We create responsive, high-performance websites that engage users and drive conversions. From custom builds to e-commerce platforms, we deliver web solutions that scale with your business. Our team specializes in modern web technologies and best practices.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
      "Security Implementation",
      "CMS Integration",
      "API Development",
    ],
    benefits: [
      "Increased online visibility",
      "Better user engagement",
      "Higher conversion rates",
      "Mobile-friendly experience",
      "Scalable architecture",
      "Long-term support",
    ],
    pricing: [
      {
        tier: "Starter",
        price: "$2,999",
        description: "Perfect for small projects and startups",
      },
      {
        tier: "Professional",
        price: "$7,999",
        description: "For growing businesses with advanced features",
      },
      {
        tier: "Enterprise",
        price: "Custom",
        description: "Large-scale solutions with dedicated support",
      },
    ],
    deliverables: [
      "Fully responsive website",
      "Mobile-first design approach",
      "Performance optimization",
      "SEO-friendly structure",
      "3 months technical support",
      "Source code handover",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "We understand your business goals and requirements",
      },
      {
        step: 2,
        title: "Design",
        description: "Create wireframes and design mockups",
      },
      {
        step: 3,
        title: "Development",
        description: "Build your website with modern technologies",
      },
      {
        step: 4,
        title: "Testing",
        description: "Comprehensive testing and quality assurance",
      },
      {
        step: 5,
        title: "Launch",
        description: "Deploy and provide ongoing support",
      },
    ],
  },
  "app-development": {
    title: "App Development",
    description: "Mobile apps that engage users",
    longDescription:
      "Build native and cross-platform mobile applications that users love. We specialize in iOS and Android development with intuitive interfaces and seamless performance. Our apps are designed to solve real problems and deliver measurable results.",
    features: [
      "Native Development",
      "Cross-Platform Apps",
      "UI/UX Design",
      "API Integration",
      "Push Notifications",
      "App Store Optimization",
    ],
    benefits: [
      "Reach millions of users",
      "Offline functionality",
      "Native performance",
      "Secure data handling",
      "Regular updates",
      "Analytics integration",
    ],
    pricing: [
      {
        tier: "MVP",
        price: "$5,999",
        description: "Minimum viable product for market testing",
      },
      {
        tier: "Standard",
        price: "$12,999",
        description: "Full-featured app with all core features",
      },
      {
        tier: "Premium",
        price: "Custom",
        description: "Advanced features and custom integrations",
      },
    ],
    deliverables: [
      "Fully functional iOS & Android app",
      "User authentication system",
      "Backend API integration",
      "Push notification setup",
      "6 months technical support",
      "App store submission assistance",
    ],
    process: [
      {
        step: 1,
        title: "Planning",
        description: "Define app features and user flows",
      },
      {
        step: 2,
        title: "Design",
        description: "Create intuitive UI/UX designs",
      },
      {
        step: 3,
        title: "Development",
        description: "Build native iOS and Android apps",
      },
      {
        step: 4,
        title: "Testing",
        description: "Rigorous testing on real devices",
      },
      {
        step: 5,
        title: "Launch",
        description: "Submit to app stores and monitor performance",
      },
    ],
  },
  "graphics-design": {
    title: "Graphics Design",
    description: "Stunning visuals that captivate",
    longDescription:
      "Create compelling visual identities and marketing materials that stand out. From logos to complete brand systems, we design graphics that tell your story and resonate with your audience.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Marketing Materials",
      "Social Media Graphics",
      "Packaging Design",
      "Illustration",
    ],
    benefits: [
      "Strong brand recognition",
      "Professional appearance",
      "Consistent messaging",
      "Increased engagement",
      "Market differentiation",
      "Memorable visuals",
    ],
    pricing: [
      {
        tier: "Basic",
        price: "$999",
        description: "Single design project with revisions",
      },
      {
        tier: "Standard",
        price: "$2,499",
        description: "Multiple designs and brand elements",
      },
      {
        tier: "Premium",
        price: "$5,999",
        description: "Complete brand package and guidelines",
      },
    ],
    deliverables: [
      "High-resolution design files",
      "Multiple file formats (PNG, PDF, SVG)",
      "Unlimited revisions",
      "Source files included",
      "Brand guidelines document",
      "Color palette specifications",
    ],
    process: [
      {
        step: 1,
        title: "Briefing",
        description: "Understand your brand and vision",
      },
      {
        step: 2,
        title: "Concepts",
        description: "Create multiple design concepts",
      },
      {
        step: 3,
        title: "Refinement",
        description: "Refine based on your feedback",
      },
      {
        step: 4,
        title: "Finalization",
        description: "Prepare final files and formats",
      },
      {
        step: 5,
        title: "Delivery",
        description: "Deliver all assets and documentation",
      },
    ],
  },
  "video-editing": {
    title: "Video Editing",
    description: "Cinematic storytelling",
    longDescription:
      "Transform raw footage into compelling video content. Professional editing, color grading, and effects that bring your vision to life and engage your audience.",
    features: [
      "Professional Editing",
      "Color Grading",
      "Motion Graphics",
      "Sound Design",
      "VFX Integration",
      "Multi-format Export",
    ],
    benefits: [
      "Professional quality output",
      "Engaging storytelling",
      "Social media ready",
      "Brand consistency",
      "Increased viewer engagement",
      "Fast turnaround",
    ],
    pricing: [
      {
        tier: "Short Form",
        price: "$499",
        description: "Up to 5 minutes of video",
      },
      {
        tier: "Medium Form",
        price: "$1,499",
        description: "5-20 minutes of video",
      },
      {
        tier: "Long Form",
        price: "$3,999",
        description: "20+ minutes of video",
      },
    ],
    deliverables: [
      "Professionally edited video",
      "Multiple export formats",
      "Color grading and correction",
      "Sound design and mixing",
      "2 revision rounds",
      "Raw footage backup",
    ],
    process: [
      {
        step: 1,
        title: "Review",
        description: "Review raw footage and requirements",
      },
      {
        step: 2,
        title: "Editing",
        description: "Professional editing and sequencing",
      },
      {
        step: 3,
        title: "Enhancement",
        description: "Color grading and effects",
      },
      { step: 4, title: "Audio", description: "Sound design and mixing" },
      {
        step: 5,
        title: "Export",
        description: "Final export in required formats",
      },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "User experiences that delight",
    longDescription:
      "Design intuitive interfaces that users love. We combine research, strategy, and creativity to create experiences that convert and keep users engaged.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Systems",
      "Accessibility",
    ],
    benefits: [
      "Improved user satisfaction",
      "Higher conversion rates",
      "Reduced bounce rates",
      "Better accessibility",
      "Consistent experience",
      "Data-driven decisions",
    ],
    pricing: [
      {
        tier: "Starter",
        price: "$1,999",
        description: "Basic UI design for single screen",
      },
      {
        tier: "Professional",
        price: "$4,999",
        description: "Full UX/UI design for complete product",
      },
      {
        tier: "Enterprise",
        price: "Custom",
        description: "Design system and comprehensive UX",
      },
    ],
    deliverables: [
      "User research report",
      "Wireframes and user flows",
      "High-fidelity prototypes",
      "Design system documentation",
      "Handoff specifications",
      "Accessibility audit",
    ],
    process: [
      {
        step: 1,
        title: "Research",
        description: "Conduct user research and analysis",
      },
      {
        step: 2,
        title: "Strategy",
        description: "Define UX strategy and user flows",
      },
      {
        step: 3,
        title: "Design",
        description: "Create wireframes and high-fidelity designs",
      },
      { step: 4, title: "Testing", description: "Conduct usability testing" },
      {
        step: 5,
        title: "Handoff",
        description: "Prepare documentation for development",
      },
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-4">
          <Link
            href="/services"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 px-4 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Right - Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-colors">
                <p className="text-3xl font-bold text-primary mb-2">100+</p>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-colors">
                <p className="text-3xl font-bold text-primary mb-2">98%</p>
                <p className="text-sm text-muted-foreground">
                  Client Satisfaction
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-colors">
                <p className="text-3xl font-bold text-primary mb-2">5+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-colors">
                <p className="text-3xl font-bold text-primary mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
            Why Choose This Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium text-lg">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2">
            {service.process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors h-full flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include
              professional support and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden group ${
                  index === 1
                    ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg shadow-primary/20 md:scale-105"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${index === 1 ? "pt-16" : ""}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.tier}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground ml-2">
                        one-time
                      </span>
                    )}
                  </div>
                  <div className="space-y-4">
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-4">
                  <Button
                    asChild
                    className={`w-full mb-8 ${
                      index === 1
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-primary/10 hover:bg-primary/20 text-primary"
                    }`}
                    size="lg"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to get started with {service.title}?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and create something
            amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Other Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
