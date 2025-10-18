import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Target, Eye, Users, Award } from "lucide-react";
import office from "../../../public/images/office.jpg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              About <span className="text-primary">ProtonixIt</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              We are a team of passionate professionals dedicated to empowering
              businesses with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
              <Image
                src={office}
                alt="Protonix It office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                Protonix It is a leading digital agency based in Sylhet,
                Bangladesh. We specialize in providing cutting-edge technology
                solutions that help businesses grow and succeed in the digital
                age.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team brings together skilled developers, designers, and
                marketers who are passionate about creating exceptional digital
                experiences. We believe in building long-term partnerships with
                our clients, understanding their unique needs, and delivering
                solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses in Bangladesh and beyond with innovative
                  technology solutions that drive growth, efficiency, and
                  success. We strive to be the trusted partner for organizations
                  seeking to transform their digital presence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading technology partner in Bangladesh,
                  recognized for our excellence, innovation, and commitment to
                  client success. We envision a future where every business has
                  access to world-class digital solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets us apart and makes us the right choice for your digital
              needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold">Skilled Team</h3>
              <p className="text-muted-foreground">
                Our team consists of experienced professionals with expertise in
                the latest technologies and industry best practices.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold">Reliable Service</h3>
              <p className="text-muted-foreground">
                We pride ourselves on delivering projects on time and providing
                ongoing support to ensure your continued success.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold">Client-Focused</h3>
              <p className="text-muted-foreground">
                Your success is our success. We take the time to understand your
                goals and deliver solutions that drive real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch with us
            today.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
