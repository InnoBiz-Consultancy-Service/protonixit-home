import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Code,
  Smartphone,
  TrendingUp,
  Palette,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
      image: "https://miro.medium.com/v2/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
      benefits: [
        "Responsive and mobile-friendly designs",
        "Fast loading speeds and SEO optimization",
        "E-commerce solutions with secure payment integration",
        "Content management systems (CMS)",
        "Custom web applications tailored to your needs",
      ],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      image:
        "https://www.addevice.io/storage/ckeditor/uploads/images/65f840d316353_mobile.app.development.1920.1080.png",
      benefits: [
        "Native iOS and Android app development",
        "Cross-platform solutions using React Native",
        "User-friendly interfaces and smooth performance",
        "App store optimization and deployment",
        "Ongoing maintenance and updates",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence",
      image:
        "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/02/digital-marketing-2.jpg.optimal.jpg",
      benefits: [
        "Search Engine Optimization (SEO)",
        "Social media marketing and management",
        "Pay-per-click (PPC) advertising campaigns",
        "Content marketing and email campaigns",
        "Analytics and performance tracking",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience",
      image:
        "https://admin.wac.co/uploads/Blog%20Media/ux_ui-01-3_5915c7e99f7fc2e0.jpg",
      benefits: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing and optimization",
        "Design systems and style guides",
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Comprehensive digital solutions designed to help your business
              thrive in the modern world
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 lg:px-8 bg-secondary">
        <div className="container mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-3xl">{service.title}</CardTitle>
                    <CardDescription className="text-base pt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-4">What You Get:</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle
                            className="text-primary flex-shrink-0 mt-0.5"
                            size={20}
                          />
                          <span className="text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6" asChild>
                      <Link href="/contact">
                        Request a Quote{" "}
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div
                className={`relative h-[400px] rounded-lg overflow-hidden bg-muted ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  width={500}
                  height={500}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your business, goals, and requirements",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We create a detailed strategy and project roadmap",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our team brings your vision to life with expertise",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "We deploy your solution and provide ongoing support",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="text-5xl font-bold text-primary/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and how we can help you achieve your
            goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
