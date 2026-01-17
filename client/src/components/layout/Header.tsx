import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Investment Criteria", href: "/investment-criteria" },
  { name: "Value Creation", href: "/value-creation" },
  { name: "Advisory", href: "/advisory" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      data-testid="header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-nostra-bone/95 backdrop-blur-md shadow-sm"
          : "bg-nostra-bone"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="link-logo">
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-nostra-navy-deep" data-testid="text-header-logo">
              NOSTRA GROUP
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    location === item.href
                      ? "text-nostra-navy-military bg-nostra-ivory"
                      : "text-nostra-slate"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-nostra-ivory" data-testid="nav-mobile">
            <div className="flex flex-col gap-1 pt-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`block px-4 py-3 text-sm font-medium transition-colors rounded-md ${
                      location === item.href
                        ? "text-nostra-navy-military bg-nostra-ivory"
                        : "text-nostra-slate"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
