import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
const logo = "/images/protonixit.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-800 border-t border-border/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Company Info Section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-4">
              <Image
                src={logo || "/placeholder.svg"}
                width={200}
                height={200}
                alt="Protonix It"
                className="h-auto w-auto max-w-[180px]"
              />
              <p className="text-sm leading-relaxed text-gray-200">
                We transform your ideas into elegant, effective digital
                solutions. From concept to execution, we deliver excellence.
              </p>
            </div>

           <div className="flex gap-3 pt-2">
  {[
    { 
      Icon: Facebook, 
      label: "Facebook", 
      href: "https://www.facebook.com/profile.php?id=61582390889742" 
    },
    { 
      Icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/company/109589980/" 
    },
  ].map(({ Icon, label, href }) => (
    <Link
      key={label}
      href={href}
      target="_blank" // Notun tab-e open hobar jonno
      rel="noopener noreferrer" // Security-r jonno
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
      aria-label={label}
    >
      <Icon size={18} />
    </Link>
  ))}
</div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-200 mb-4 text-base flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Contact", href: "/contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-200 hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={14} />
                      </span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-200 mb-4 text-base flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full" />
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Web Development", href: "/web-development" },
                  { label: "App Development", href: "/app-development" },
                  { label: "Graphics Design", href: "/graphics-design" },
                  { label: "UI/UX Design", href: "/ui-ux-design" },
                  { label: "Video Editing", href: "/video-editing" },
                ].map((service, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/services${service.href}`}
                      className="text-sm text-gray-200 hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={14} />
                      </span>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-200 mb-4 text-base flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full" />
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <MapPin
                    size={18}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-200">
                    Nobopuspo 124, Jotorpur
                    <br />
                    Sylhet, Bangladesh
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:service@protonixit.com"
                    className="flex gap-3 text-sm text-gray-200 hover:text-primary transition-colors duration-300 group"
                  >
                    <Mail
                      size={18}
                      className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span>protonixit@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8801581891023"
                    className="flex gap-3 text-sm text-gray-200 hover:text-primary transition-colors duration-300 group"
                  >
                    <Phone
                      size={18}
                      className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span>+880 1581-891023</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm text-gray-200">
              &copy; {currentYear}{" "}
              <span className="font-semibold text-primary">ProtonixIt</span>.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-200 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-primary transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
