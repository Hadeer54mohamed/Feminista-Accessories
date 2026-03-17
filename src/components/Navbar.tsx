import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);
  const links = ["Collection", "Categories", "Best Sellers", "About"];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <nav
        className={`w-[95%] md:w-[90%] max-w-7xl mt-4 pointer-events-auto transition-all duration-700 rounded-2xl ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl shadow-2xl py-3 border border-white/10" 
            : "bg-black/0 backdrop-blur-sm py-5 border border-white/0"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <a href="#" className="flex items-center transition-transform hover:scale-105">
            <img
              src={logo}
              alt="Feminista Accessories"
              className={`w-auto transition-all duration-500 ${scrolled ? "h-12" : "h-16"}`}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative text-[11px] tracking-[0.25em] uppercase text-white hover:text-accent transition-colors duration-300 font-medium group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button
              aria-label="Open shopping cart"
              onClick={() => setIsOpen(true)}
              className="relative text-white hover:text-accent transition-all hover:scale-110"
            >
              <ShoppingBag className="h-6 w-6 stroke-[1.5]" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-burgundy text-[10px] text-white font-bold border-2 border-black/20">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              aria-label="Toggle mobile menu"
              className="md:hidden text-white transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden px-6 transition-all duration-500 overflow-hidden ${
            mobileOpen ? "max-h-[400px] opacity-100 mt-4 pb-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-5 items-center pt-4 border-t border-white/10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs tracking-[0.2em] uppercase text-white/90 hover:text-accent"
                onClick={handleLinkClick}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;