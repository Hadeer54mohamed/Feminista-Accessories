import logo from "@/assets/logo.png";
import { Instagram, MessageCircle, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-cream py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Feminista Accessories" className="h-16 w-auto mb-4 brightness-150" />
            <p className="text-cream/60 text-sm leading-relaxed">
              Premium stainless steel accessories that radiate luxury and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold-light">Quick Links</h4>
            <ul className="space-y-2">
              {["Shop All", "New Arrivals", "Best Sellers", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/60 hover:text-gold text-sm transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold-light">Policies</h4>
            <ul className="space-y-2">
              {["Shipping Policy", "Return & Exchange", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/60 hover:text-gold text-sm transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold-light">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-3 text-cream/60 hover:text-gold text-sm transition-colors duration-300">
                  <Instagram className="h-4 w-4" /> @feminista.accessories
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-cream/60 hover:text-gold text-sm transition-colors duration-300">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-cream/60 hover:text-gold text-sm transition-colors duration-300">
                  <Mail className="h-4 w-4" /> info@feminista.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-cream/60 text-sm">
                  <MapPin className="h-4 w-4" /> Cairo, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center">
          <p className="text-cream/40 text-sm">
            © 2025 Feminista Accessories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
