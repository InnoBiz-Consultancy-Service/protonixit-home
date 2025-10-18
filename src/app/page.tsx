import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Code,
  Smartphone,
  TrendingUp,
  Palette,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import team from "../../public/images/team.jpg";
import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites, e-commerce solutions, and business websites built with modern technologies.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native Android and iOS mobile applications designed for performance and user experience.",
    },
    {
      icon: TrendingUp,
      title: "Video Editing",
      description:
        "Professional video editing, motion graphics, and engaging visual storytelling tailored to your brand.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Modern, user-friendly, and responsive designs that engage and convert your audience.",
    },
  ];

  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-7xl font-bold leading-tight text-balance">
                Unlock your{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  Digital
                </span>{" "}
                potential
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                We transform{" "}
                <span className="font-semibold text-foreground">
                  your ideas into elegant code
                </span>
                , delivering sophisticated digital solutions from web
                development to app development
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                asChild
                className="shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-primary/5 transition-colors duration-300 bg-transparent"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Why Choose <span className="text-primary">ProtonixIt?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We combine technical expertise with creative innovation to
                  deliver solutions that drive real business results.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Experienced team of skilled professionals",
                  "Client-focused and solution-driven approach",
                  "Modern technologies and best practices",
                  "Reliable support and maintenance",
                  "Competitive pricing and timely delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 group">
                    <CheckCircle
                      className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[450px] rounded-2xl overflow-hidden bg-muted shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <Image
                src={team}
                alt="protonixit team working"
                className="w-full h-full object-cover"
                width={500}
                height={450}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="container mx-auto">
          <Card className="border border-border/50 shadow-xl bg-card rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <CardContent className="p-8 md:p-16 relative z-10">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Stay Updated
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Subscribe to our newsletter for the latest tech insights,
                    industry trends, and exclusive offers.
                  </p>
                </div>

                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-background/50 text-foreground border-border/50 focus:border-primary transition-colors"
                    required
                  />
                  <Button
                    type="submit"
                    className="whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 lg:px-8 bg-secondary/40">
        <div className="container mx-auto text-center space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s build your future together. Contact us today for a free
              consultation.
            </p>
          </div>

          <Button
            size="lg"
            asChild
            className="shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            <Link href="/contact">
              Request a Free Consultation{" "}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </section>
  );
}
