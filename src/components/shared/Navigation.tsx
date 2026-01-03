"use client";
import { useState } from "react";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/images/protonixit.png";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import shortLogo from "../../../public/images/protonix_it.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    // { href: "/political-services", label: "Political Services" },
  ];
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
  
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-2 group cursor-pointer">
              <Image src={logo} width={250} height={250} alt="Protonix It" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <button
                    className={`px-6 py-2 text-base font-medium transition-all duration-300 relative group rounded-lg cursor-pointer
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={`absolute inset-0 rounded-lg bg-primary/30 transition-all duration-300
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                    )}
                  </button>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative group px-6 py-2.5 font-medium overflow-hidden rounded-lg transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Link href={"/contact"}>
                <div className="relative text-white group-hover:brightness-110 transition-all duration-300 flex items-center gap-2 font-semibold">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-primary hover:bg-slate-800/50 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="right"
            className="w-[80%] sm:w-80 bg-gradient-to-b from-slate-900 to-slate-950 border-r border-border/40 p-0 h-full"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/40">
                <Link
                  href="/"
                  className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src={shortLogo}
                    alt="Protonix It"
                    width={50}
                    height={50}
                  />
                </Link>
                <span className="text-white">
                  <X />
                </span>
              </div>

              {/* Links Area */}
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-1 p-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link key={link.href} href={link.href}>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                          }}
                          className={`px-4 py-3 text-left rounded-lg font-medium transition-all duration-300 w-full
                  ${
                    isActive
                      ? "text-primary bg-slate-800/50 border-l-2 border-primary"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                  }`}
                        >
                          <span className="flex justify-between items-center">
                            {link.label} <ChevronRight className="w-4 h-4" />{" "}
                          </span>
                        </button>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-border/40 p-6">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium gap-2 group"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
