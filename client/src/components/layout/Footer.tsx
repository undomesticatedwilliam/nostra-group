import { Link } from "wouter";
import logoImage from "@assets/Transparent_Logo_Blue_1768611362587.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Investment Criteria", href: "/investment-criteria" },
  { name: "Value Creation", href: "/value-creation" },
  { name: "Advisory", href: "/advisory" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-nostra-dark text-nostra-light" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <img 
              src={logoImage} 
              alt="Nostra Group" 
              className="h-20 w-auto brightness-0 invert"
              data-testid="img-footer-logo"
            />
            <p className="mt-4 text-sm text-nostra-light/70 leading-relaxed max-w-sm" data-testid="text-footer-description">
              Operational partnership for essential businesses. We partner with founders who've built something worth preserving.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-nostra-light/90 mb-4" data-testid="text-footer-links-title">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2" data-testid="nav-footer-links">
              {quickLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-nostra-light/70 transition-colors"
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-nostra-light/90 mb-4" data-testid="text-footer-contact-title">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-nostra-light/70">
              <p>
                <a
                  href="mailto:info@nostragroup.com"
                  className="transition-colors"
                  data-testid="link-footer-email"
                >
                  info@nostragroup.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.nostragroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  data-testid="link-footer-website"
                >
                  www.nostragroup.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-nostra-light/10">
          <p className="text-xs text-nostra-light/50 leading-relaxed max-w-3xl" data-testid="text-footer-disclaimer">
            This website is for informational purposes only and does not constitute an offer to sell or solicitation of an offer to buy any securities. All investments involve risk, including potential loss of principal.
          </p>
          <p className="mt-4 text-xs text-nostra-light/50" data-testid="text-footer-copyright">
            &copy;{new Date().getFullYear()} Nostra Group LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
