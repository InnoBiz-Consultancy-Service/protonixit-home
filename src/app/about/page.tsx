import type React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProtonixIt | About",
  description:
    "Professional digital services including web development, app development, digital marketing, Video editing and UI/UX design in Bangladesh. best software company in bangladesh.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20 pb-20 px-4 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="space-y-6 text-center">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                About ProtonixIt
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Crafting Digital Excellence{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Since Day One
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance font-light">
              We&apos;re a passionate team of creative professionals dedicated
              to transforming ideas into stunning digital experiences across
              graphics, web, apps, video, and UI/UX design.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                  Our Story
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  ProtonixIt was founded with a simple mission: to deliver
                  exceptional digital solutions that help businesses thrive in
                  the modern world. What started as a small team of passionate
                  designers and developers has grown into a full-service
                  creative agency.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  We believe that great design isn&apos;t just about
                  aesthetics—it&apos;s about solving problems, creating
                  meaningful connections, and driving real business results.
                  Every project we undertake is an opportunity to push
                  boundaries and exceed expectations.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Today, we&apos;re proud to work with businesses of all sizes,
                  from ambitious startups to established enterprises, helping
                  them achieve their digital goals through innovative and
                  strategic solutions.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="50+" label="Projects Delivered" />
              <StatCard number="100%" label="Client Satisfaction" />
              <StatCard number="5+" label="Service Areas" />
              <StatCard number="24/7" label="Support Available" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-balance">
            Our Mission & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <MissionCard
              icon={<Target className="w-8 h-8" />}
              title="Our Mission"
              description="To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in their industries."
            />
            <MissionCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Our Vision"
              description="To be the most trusted creative partner for businesses seeking excellence in digital design and development, known for innovation, quality, and client success."
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-balance">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ValueCard
              title="Excellence"
              description="We pursue excellence in every project, ensuring the highest quality standards in design and development."
            />
            <ValueCard
              title="Innovation"
              description="We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions for our clients."
            />
            <ValueCard
              title="Integrity"
              description="We build trust through transparency, honesty, and accountability in all our client relationships."
            />
            <ValueCard
              title="Collaboration"
              description="We believe in the power of teamwork and close partnership with our clients to achieve shared goals."
            />
            <ValueCard
              title="Creativity"
              description="We think outside the box and challenge conventions to create unique and memorable digital experiences."
            />
            <ValueCard
              title="Client Focus"
              description="Your success is our success. We're committed to understanding and exceeding your expectations."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-balance">
            Why Choose ProtonixIt?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <WhyChooseCard
              icon={<Users className="w-6 h-6" />}
              title="Expert Team"
              description="Our talented team brings years of experience across all creative disciplines."
            />
            <WhyChooseCard
              icon={<Award className="w-6 h-6" />}
              title="Quality Assured"
              description="We maintain rigorous quality standards to ensure exceptional results on every project."
            />
            <WhyChooseCard
              icon={<Target className="w-6 h-6" />}
              title="Results Driven"
              description="We focus on delivering measurable results that impact your business growth."
            />
            <WhyChooseCard
              icon={<Lightbulb className="w-6 h-6" />}
              title="Innovative Solutions"
              description="We leverage the latest technologies and creative approaches for unique solutions."
            />
            <WhyChooseCard
              icon={<CheckCircle2 className="w-6 h-6" />}
              title="Transparent Process"
              description="We keep you informed every step of the way with clear communication and updates."
            />
            <WhyChooseCard
              icon={<ArrowRight className="w-6 h-6" />}
              title="Long-term Partnership"
              description="We're committed to supporting your success beyond project completion."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Work Together?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 text-balance">
            Let&apos;s discuss how ProtonixIt can help bring your vision to life
            with innovative digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                Get In Touch <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hover:bg-primary/5 transition-colors duration-300 border-primary/30 hover:border-primary/60 bg-transparent"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
        {number}
      </p>
      <p className="text-sm md:text-base text-muted-foreground">{label}</p>
    </div>
  );
}

function MissionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function WhyChooseCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
