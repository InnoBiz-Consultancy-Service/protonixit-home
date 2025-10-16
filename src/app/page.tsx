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
      title: "Digital Marketing",
      description:
        "SEO optimization, social media marketing, and paid advertising campaigns that drive results.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Modern, user-friendly, and responsive designs that engage and convert your audience.",
    },
  ];

  // const testimonials = [
  //   {
  //     name: "Ahmed Rahman",
  //     company: "StartupBD",
  //     text: "TechBangla transformed our online presence. Their web development team delivered beyond our expectations.",
  //   },
  //   {
  //     name: "Fatima Khan",
  //     company: "E-Commerce Plus",
  //     text: "The mobile app they built for us has increased our customer engagement by 300%. Highly recommended!",
  //   },
  //   {
  //     name: "Karim Hassan",
  //     company: "Digital Solutions Ltd",
  //     text: "Professional, reliable, and innovative. TechBangla is our go-to partner for all digital projects.",
  //   },
  // ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 lg:px-8 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative blurred shapes */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Empowering Your Business with{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We provide{" "}
              <span className="font-semibold text-primary">
                cutting-edge digital solutions
              </span>{" "}
              to help your business thrive in the modern world. From web
              development to digital marketing, we&apos;ve got you covered.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="shadow-lg hover:shadow-primary/40 transition-transform hover:scale-105"
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose TechBangla?
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine technical expertise with creative innovation to
                deliver solutions that drive real business results.
              </p>
              <ul className="space-y-4">
                {[
                  "Experienced team of skilled professionals",
                  "Client-focused and solution-driven approach",
                  "Modern technologies and best practices",
                  "Reliable support and maintenance",
                  "Competitive pricing and timely delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
              <Image
                src={team}
                alt="protonix It team working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto">
          <Card className="border border-border shadow-lg bg-card text-card-foreground rounded-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter for the latest tech insights,
                  industry trends, and exclusive offers.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-background text-foreground border"
                    required
                  />
                  <Button
                    type="submit"
                    className="whitespace-nowrap shadow-md hover:shadow-primary/40 transition"
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
      <section className="py-20 px-4 lg:px-8 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s build your future together. Contact us today for a free
            consultation.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Request a Free Consultation{" "}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
