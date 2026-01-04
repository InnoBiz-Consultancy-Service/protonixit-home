"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Palette,
  Film,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform with Smart Inventory Management",
    category: "Web Development",
    description:
      "An E-Commerce Platform with inventory and employee management for efficient business operations and smooth online & offline sales.",
    image: "https://i.ibb.co.com/0jDYkS2K/image.png",
    tags: ["Node.js", "Next.js", "Tailwind CSS", "MERN Stack"],
    link: "https://www.onemartt.com",
  },
  {
    id: "2",
    title: "NikahLife – A Modern Islamic Matrimony Platform We Built",
    category: "Web Development",
    description:
      "NikahLife is a trusted Islamic matrimony platform that helps Muslims find their ideal life partner in a halal, secure, and faith-based way.",
    image: "https://i.ibb.co.com/YBCLFxgB/image.png",
    tags: ["Node.js", "Next.js", "Tailwind CSS", "MERN Stack"],
    link: "https://www.nikahlife.com",
  },
  {
    id: "3",
    title: "Brand Identity Design",
    category: "Graphics Design",
    description:
      "Complete brand identity system including logo, colors, and typography",
    image:
      "https://i.ibb.co.com/Z6Jg52qt/571126751-122102432577079696-4724050867222812627-n.jpg",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    link: "https://www.facebook.com/profile.php?id=61582390889742",
  },
  {
    id: "4",
    title: "Data Science Educational Video Editing – Professional & Engaging",
    category: "Video Editing",
    description:
      "Professional educational video editing focused on data science, delivering clear, engaging, and visually appealing learning content.",
    image: "https://i.ibb.co.com/9HtHGK8g/protonix-it-video-editing.png",
    tags: ["Educational", "Reels", "Highlights"],
    link: "https://www.youtube.com/@ProtonixIT",
  },
];

const categories = [
  { name: "All", icon: null },
  { name: "Web Development", icon: Code },
  { name: "Graphics Design", icon: Palette },
  { name: "Video Editing", icon: Film },
];

// ... (আপনার imports এবং interface একই থাকবে)

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  // Responsive Items logic
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);      // Mobile
      else if (window.innerWidth < 1024) setItemsPerView(2); // Tablet
      else setItemsPerView(3);                               // Desktop
    };
    
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredItems.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Category change হলে index reset করা
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  return (
    <section className="w-full py-12 md:py-24 bg-slate-50 overflow-hidden"> {/* overflow-hidden added to section */}
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header - Mobile friendly spacing */}
        <div className="mb-10 text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Explore our latest projects showcasing our expertise across web development and design.
          </p>
        </div>

        {/* Category Filter - Scrollable on mobile if items are many */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.name
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Navigation - Hidden on very small screens or smaller size */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="p-2 rounded-full border bg-white disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-2 rounded-full border bg-white disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-2 w-full" 
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <Card className="h-full flex flex-col border-0 shadow-sm hover:shadow-md transition-shadow">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <Badge variant="secondary" className="w-fit mb-2">{item.category}</Badge>
                    <h3 className="text-lg font-bold mb-2 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="mt-auto">
                        <Link
                            target="_blank"
                            href={item.link || "#"}
                            className="text-primary text-sm font-semibold flex items-center gap-1"
                        >
                            View Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No projects found.</p>
        )}
      </div>
    </section>
  );
}