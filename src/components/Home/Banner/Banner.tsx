import type React from "react";
import Link from "next/link";
import { ArrowRight, Palette, Code, Smartphone, Film, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <section className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20 px-4 ">
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
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                    Creative Excellence
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                    Vision
                  </span>{" "}
                  Into Reality
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
                  We craft stunning digital experiences through graphics design,
                  web development, app creation, video editing, and UI/UX
                  design. Your ideas deserve excellence.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2" size={20} />
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    50+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Projects Delivered
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    100%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    5+
                  </p>
                  <p className="text-sm text-muted-foreground">Service Areas</p>
                </div>
              </div>
            </div>

            {/* Right Services Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <ServiceCard
                icon={<Palette className="w-8 h-8" />}
                title="Graphics Design"
                description="Stunning visuals that captivate"
              />
              <ServiceCard
                icon={<Code className="w-8 h-8" />}
                title="Web Development"
                description="Powerful web solutions"
              />
              <ServiceCard
                icon={<Smartphone className="w-8 h-8" />}
                title="App Development"
                description="Mobile apps that engage"
              />
              <ServiceCard
                icon={<Film className="w-8 h-8" />}
                title="Video Editing"
                description="Cinematic storytelling"
              />
              <ServiceCard
                icon={<Zap className="w-8 h-8" />}
                title="UI/UX Design"
                description="User experiences that delight"
              />
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/20 flex flex-col justify-center items-center text-center hover:border-primary/40 transition-colors">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                  Ready to start?
                </p>
                <p className="text-foreground font-bold mt-2">
                  Let&apos;s create together
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
