"use client";

import type React from "react";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setEmail("");
    setIsLoading(false);

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="bg-gradient-to-b from-background via-background to-primary/5">
      <div className="container mx-auto relative z-10">
        <div className="px-4 py-16">
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
              <Mail className="w-7 h-7 text-primary" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                ProtonixIt
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance font-light">
              Get the latest insights on design trends, development tips, and
              exclusive updates about our services delivered straight to your
              inbox.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading || isSubmitted}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Subscribed!
                  </>
                ) : isLoading ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Unsubscribe at any time. No spam, just
              valuable content.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
