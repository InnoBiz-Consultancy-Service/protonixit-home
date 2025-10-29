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

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  // Calculate items to show based on screen size
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
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

  // Touch/Mouse drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    if (carouselRef.current) {
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const walk = (pageX - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Snap to nearest item
    if (carouselRef.current) {
      const scrolled = scrollLeft - carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.scrollWidth / filteredItems.length;
      const threshold = itemWidth * 0.3;

      if (Math.abs(scrolled) > threshold) {
        if (scrolled > 0 && currentIndex < maxIndex) {
          setCurrentIndex(currentIndex + 1);
        } else if (scrolled < 0 && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }
    }
  };

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-slate-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Explore our latest projects showcasing our expertise across web
            development, app development, graphics design, and video editing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 md:mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  selectedCategory === category.name
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-600 hover:bg-blue-50"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full border transition-all duration-300 ${
              currentIndex === 0
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`p-3 rounded-full border transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Card className="overflow-hidden h-full flex flex-col border-0 transition-all duration-300 group">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gray-100 h-48 md:h-56">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-primary/20 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex flex-col flex-grow">
                      <div className="mb-3">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-2">
                          {item.category}
                        </Badge>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow line-clamp-2">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Project Link */}
                      <Link
                        target="_blank"
                        href={item.link || "https://protonixit.com"}
                      >
                        <div className="flex items-center gap-2 text-primary font-medium text-sm md:text-base group/link">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </div>
                      </Link>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <Link href={"/portfolio"}>
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group cursor-pointer">
              View All Projects
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div> */}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No projects found in this category. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
