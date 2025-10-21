import HeroBanner from "@/components/Home/Banner/Banner";
import Newsletter from "@/components/Home/NewsLetter/NewsLetter";
import Process from "@/components/Home/Process/Process";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-screen">
      <HeroBanner />
      <WhyChoose />
      <Process />
      <div className="text-center">
        <div className="bg-gradient-to-b from-background via-background to-primary/5 py-16 ">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Vision?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let&apos;s collaborate and create something extraordinary together. Your
            success is our mission.
          </p>
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
      </div>
      <Newsletter />
    </section>
  );
}
