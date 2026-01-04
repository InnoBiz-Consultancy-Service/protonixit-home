"use client";

import { useState, useEffect } from "react";
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

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  // Screen resize logic to toggle between list and carousel
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px (md) এর নিচে হলে মোবাইল মোড
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerView = 3; 
  const maxIndex = Math.max(0, filteredItems.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  return (
    <section className="w-full py-12 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-10 text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects showcasing our expertise across web development and design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === category.name
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Navigation - Hidden on Mobile */}
        {!isMobile && filteredItems.length > itemsPerView && (
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border bg-white disabled:opacity-50 hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full border bg-white disabled:opacity-50 hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Portfolio Content */}
        <div className="relative">
          <div
            className={`flex ${
              isMobile ? "flex-col gap-8" : "transition-transform duration-500 ease-in-out"
            }`}
            style={
              !isMobile
                ? { transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }
                : {}
            }
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`flex-shrink-0 ${
                  isMobile ? "w-full" : "px-3"
                }`}
                style={!isMobile ? { width: `${100 / itemsPerView}%` } : {}}
              >
                <Card className="h-full flex flex-col border-0 shadow-sm hover:shadow-xl transition-all group overflow-hidden bg-white">
                  {/* Image Area */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Text Content Area */}
                  <div className="p-5 flex flex-col flex-grow">
                    <Badge className="w-fit mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                      {item.category}
                    </Badge>
                    
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Tags Area */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-600 rounded font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Link
                        target="_blank"
                        href={item.link || "#"}
                        className="text-primary text-sm font-bold flex items-center gap-1 group/link"
                      >
                        VIEW PROJECT 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}