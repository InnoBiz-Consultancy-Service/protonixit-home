import CallToAction from "./call-to-actions";
import Consulting from "./consulting";
import Faq from "./faq";
import Features from "./features";
import Hero from "./Hero";
import Services from "./services";
import WhyWebsite from "./why-websites";

export default function ServicesHome() {
  return (
    <main className="flex flex-col w-full bg-background">
      <Hero />
      <WhyWebsite />
      <Services />
      <Consulting />
      <Features />
      <Faq />
      <CallToAction />
    </main>
  );
}
