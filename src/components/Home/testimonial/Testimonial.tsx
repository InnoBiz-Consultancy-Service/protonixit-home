import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc",
    role: "CEO",
    content:
      "The web development team transformed our vision into reality. Their attention to detail and innovative approach exceeded our expectations. Highly recommended!",
    rating: 5,
    image: "/professional-woman-avatar.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Digital Solutions",
    role: "Product Manager",
    content:
      "Outstanding app development services. The team delivered a seamless mobile experience that our users absolutely love. Great communication throughout!",
    rating: 5,
    image: "/professional-man-avatar.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "Creative Agency",
    role: "Creative Director",
    content:
      "Their graphics design work is phenomenal. They captured our brand identity perfectly and created stunning visuals that resonate with our audience.",
    rating: 5,
    image: "/professional-woman-avatar-2.jpg",
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Marketing Pro",
    role: "Marketing Lead",
    content:
      "The video editing team produced incredible content for our campaigns. Professional quality, fast turnaround, and excellent collaboration. Worth every penny!",
    rating: 5,
    image: "/professional-man-avatar-2.jpg",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    company: "E-Commerce Plus",
    role: "Founder",
    content:
      "From concept to launch, the entire team was professional and dedicated. Our new website has increased conversions by 40%. Fantastic work!",
    rating: 5,
    image: "/professional-woman-avatar-3.jpg",
  },
  {
    id: 6,
    name: "James Wilson",
    company: "Global Ventures",
    role: "CTO",
    content:
      "Exceptional quality across all services. The team's expertise in both design and development is rare. They're now our go-to partner for all projects.",
    rating: 5,
    image: "/professional-man-avatar-3.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
            What our{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Client say
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance font-light">
            Don&apos;t just take our word for it. Hear from the amazing clients we&apos;ve
            had the pleasure of working with.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Marquee
          speed={40}
          gradient={true}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mx-3 md:mx-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 w-[320px] sm:w-[380px] md:w-[420px] h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow text-sm md:text-base">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
