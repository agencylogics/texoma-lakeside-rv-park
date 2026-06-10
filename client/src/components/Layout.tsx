/*
 * DESIGN: Rugged Americana
 * Layout wraps all pages with a sticky header nav and full footer.
 * Navy (#0F2B3C) header, warm amber CTAs, cream backgrounds.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/lease-and-park-rules", label: "Lease & Rules" },
  { href: "/lake-texoma-fishing-boating-guide", label: "Lake Guides" },
  { href: "/long-term-rv-living-lake-texoma", label: "RV Living" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-[var(--color-navy)] text-white/80 text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:9723221989" className="flex items-center gap-1.5 hover:text-[var(--color-amber)] transition-colors">
              <Phone size={14} />
              <span>(972) 322-1989</span>
            </a>
            <a href="mailto:TexomaLakesideRVPark@gmail.com" className="flex items-center gap-1.5 hover:text-[var(--color-amber)] transition-colors">
              <Mail size={14} />
              <span>TexomaLakesideRVPark@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} />
            <span>81 Willafa Woods Rd, Cartwright, OK 74731</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-navy)]/98 backdrop-blur-md shadow-lg"
            : "bg-[var(--color-navy)]"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/manus-storage/logo_badge_1a1ddefb.png"
              alt="Texoma Lakeside RV Park"
              className="h-10 md:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="font-[var(--font-display)] font-bold text-white text-lg leading-tight">
                Texoma Lakeside
              </div>
              <div className="font-[var(--font-display)] text-[var(--color-amber)] text-sm font-semibold tracking-wide">
                RV Park
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-[var(--color-amber)] bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#contact"
              className="ml-4 px-5 py-2.5 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-md text-sm hover:bg-[var(--color-amber-light)] transition-all active:scale-[0.97] shadow-lg shadow-[var(--color-amber)]/20"
            >
              Get A Spot Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-[var(--color-navy)] border-t border-white/10 pb-4">
            <nav className="container flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-[var(--color-amber)] bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/#contact"
                className="mt-2 mx-4 px-5 py-3 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-md text-sm text-center hover:bg-[var(--color-amber-light)] transition-all"
              >
                Get A Spot Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white/80 pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/manus-storage/logo_badge_1a1ddefb.png"
                  alt="Texoma Lakeside RV Park"
                  className="h-12 w-auto"
                />
                <div>
                  <div className="font-[var(--font-display)] font-bold text-white text-lg">
                    Texoma Lakeside
                  </div>
                  <div className="font-[var(--font-display)] text-[var(--color-amber)] text-sm font-semibold">
                    RV Park
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                Your peaceful lakeside retreat in Cartwright, Oklahoma. Affordable long-term RV living with easy access to Lake Texoma and Burns Run West boat ramps.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-[var(--font-display)] font-bold text-white text-base mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[var(--color-amber)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-[var(--font-display)] font-bold text-white text-base mb-4">
                Contact Us
              </h4>
              <div className="flex flex-col gap-3 text-sm">
                <a href="tel:9723221989" className="flex items-center gap-2 text-white/60 hover:text-[var(--color-amber)] transition-colors">
                  <Phone size={16} />
                  (972) 322-1989
                </a>
                <a href="mailto:TexomaLakesideRVPark@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-[var(--color-amber)] transition-colors">
                  <Mail size={16} />
                  TexomaLakesideRVPark@gmail.com
                </a>
                <div className="flex items-start gap-2 text-white/60">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>81 Willafa Woods Rd<br />Cartwright, OK 74731</span>
                </div>
              </div>
            </div>

            {/* Location Highlights */}
            <div>
              <h4 className="font-[var(--font-display)] font-bold text-white text-base mb-4">
                Nearby
              </h4>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <span>1 mile to Burns Run West Boat Ramps</span>
                <span>7 miles to Highway US-75</span>
                <span>15 miles to Choctaw Casino</span>
                <span>20 min to nearest shopping</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Texoma Lakeside RV Park. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Cartwright, Oklahoma &middot; Lake Texoma
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
