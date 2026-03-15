import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Collection", "Categories", "Best Sellers", "About"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Feminista Accessories" className="h-12 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm tracking-[0.15em] uppercase text-dark-brown/80 hover:text-accent transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-dark-brown hover:text-accent transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full gold-gradient-bg text-[10px] flex items-center justify-center text-accent-foreground font-semibold">
              0
            </span>
          </button>
          <button
            className="md:hidden text-dark-brown"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border px-4 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="block text-sm tracking-[0.15em] uppercase text-dark-brown/80 hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
