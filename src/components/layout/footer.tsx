import Link from "next/link";
import { Compass, Globe, Send, Share2 } from "lucide-react";

const quickLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Accommodations", href: "/accommodations" },
  { label: "Explore Map", href: "/explore" },
  { label: "Trip Planner", href: "/trip-planner" },
];

const destinationLinks = [
  { label: "Bali", href: "/destinations/bali" },
  { label: "Santorini", href: "/destinations/santorini" },
  { label: "Kyoto", href: "/destinations/kyoto" },
  { label: "Patagonia", href: "/destinations/patagonia" },
];

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact Us", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <Compass className="h-5 w-5 text-accent" />
              TerraVoyage
            </Link>
            <p className="text-sm text-foreground/60 mb-4 max-w-xs">
              Discover the world&apos;s most extraordinary destinations. Plan your next adventure with confidence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg hover:bg-foreground/5 transition-colors" aria-label="Website">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-foreground/5 transition-colors" aria-label="Newsletter">
                <Send className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-foreground/5 transition-colors" aria-label="Share">
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Popular Destinations</h3>
            <ul className="space-y-2">
              {destinationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm text-foreground/40">
          &copy; {new Date().getFullYear()} TerraVoyage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
