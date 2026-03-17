import { useCallback, useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Instagram, MessageCircle, MapPin, Mail, X } from "lucide-react";

const policies: Record<string, { title: string; content: string[] }> = {
  "Shipping Policy": {
    title: "Shipping Policy",
    content: [
      "We provide shipping to all governorates in Egypt.",
      "Delivery takes 2 to 5 business days, depending on the governorate.",
      "Orders are confirmed within 24 hours of placement.",
      "Shipping fees are calculated at checkout based on the delivery address.",
      "A tracking number will be sent immediately once the order is processed.",
    ],
  },
  "Return & Exchange": {
    title: "Return & Exchange Policy",
    content: [
      "Exchanges are available within 7 days from the date of receipt.",
      "The product must be in its original condition and original packaging.",
      "Returns are not accepted for customized or engraved products.",
      "The customer is responsible for the exchange shipping costs.",
      "To request an exchange, please contact us via WhatsApp.",
    ],
  },
  "Privacy Policy": {
    title: "Privacy Policy",
    content: [
      "We respect your privacy and protect your personal data.",
      "Your data (name, address, phone number) is used solely for processing and delivering orders.",
      "We do not share your data with any third party.",
      "Payment data is fully protected and encrypted.",
      "You can request the deletion of your data at any time by contacting us.",
    ],
  },
  "Terms of Service": {
    title: "Terms of Service",
    content: [
      "By using our website, you agree to these terms and conditions.",
      "All products are made of high-quality, rust-resistant stainless steel.",
      "Images on the website are illustrative; there may be a slight variation in actual colors.",
      "Prices are subject to change without prior notice.",
      "We reserve the right to refuse any order for any reason.",
      "By ordering from our site, you confirm that the data entered is correct.",
    ],
  },
};

const Footer = () => {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setActivePolicy(null);
      setIsClosing(false);
    }, 250);
  }, []);

  useEffect(() => {
    if (!activePolicy) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activePolicy, closeModal]);

  const currentPolicy = activePolicy ? policies[activePolicy] : null;

  return (
    <footer className="bg-dark-brown text-cream pt-20 pb-10 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Feminista Accessories"
              className="h-24 w-auto mb-6 brightness-125 hover:scale-105 transition-transform duration-300" />
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Premium stainless steel accessories that radiate luxury and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:border-l md:border-cream/10 md:pl-6">
            <h4 className="font-display text-lg mb-5 text-gold-light tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {["Shop All", "New Arrivals", "Best Sellers", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/60 hover:text-gold relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 text-sm transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="md:border-l md:border-cream/10 md:pl-6">
            <h4 className="font-display text-lg mb-5 text-gold-light tracking-wide">Policies</h4>
            <ul className="space-y-2">
              {Object.keys(policies).map((name) => (
                <li key={name}>
                  <button
                    onClick={() => setActivePolicy(name)}
                    className="text-cream/60 hover:text-gold relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 text-sm transition-colors duration-300 text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:border-l md:border-cream/10 md:pl-6">
            <h4 className="font-display text-lg mb-5 text-gold-light tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/feministastore22" className="group flex items-center gap-3 text-cream/60 hover:text-gold relative after:absolute after:left-7 after:-bottom-1 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 text-sm transition-colors duration-300">
                  <Instagram className="h-4 w-4 opacity-70 group-hover:opacity-100 transition" /> @feministastore22
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=201229856471&text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B+%D9%81%D9%8A%D9%85%D9%8A%D9%86%D9%8A%D8%B3%D8%AA%D8%A7%D8%8C+%D8%AD%D8%A7%D8%A8%D8%A9+%D8%A3%D8%B3%D8%AA%D9%81%D8%B3%D8%B1+%D8%B9%D9%86+%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AD%D8%A9+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0"
                  className="group flex items-center gap-3 text-cream/60 hover:text-gold relative after:absolute after:left-7 after:-bottom-1 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 text-sm transition-colors duration-300">
                  <MessageCircle className="h-4 w-4 opacity-70 group-hover:opacity-100 transition" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:omniaosman444@gmail.com" className="group flex items-center gap-3 text-cream/60 hover:text-gold relative after:absolute after:left-7 after:-bottom-1 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 text-sm transition-colors duration-300">
                  <Mail className="h-4 w-4 opacity-70 group-hover:opacity-100 transition" /> omniaosman444@gmail.com
                </a>
              </li>
              <li>
                <span className="group flex items-center gap-3 text-cream/60 text-sm">
                  <MapPin className="h-4 w-4 opacity-70 group-hover:opacity-100 transition" /> Tanta, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-16 pt-6 text-center space-y-2">
          <p className="text-cream/40 text-sm">
            © 2026 Feminista Accessories. All rights reserved.
          </p>
          <p className="text-cream/40 text-sm">Designed & Developed by
            <a href="https://wa.me/201062801851" className="text-cream/60 hover:text-gold relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 text-sm transition-colors duration-300"> Hadeer ElBoghdady 🤎
            </a>
          </p>
        </div>
      </div>

      {activePolicy && currentPolicy && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-250 ${isClosing ? "opacity-0" : "opacity-100 scale-100 transition-all duration-300 ease-out"
            }`}
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-250 ${isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100 transition-all duration-300 ease-out"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[hsl(15,35%,20%)] to-[hsl(15,30%,28%)] px-6 py-5 flex items-center justify-between">
              <h3 className="font-display text-lg text-gold-light">
                {currentPolicy.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-cream/60 hover:text-white transition-colors duration-200 hover:rotate-90 transform"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-6 max-h-[60vh] overflow-y-auto" dir="rtl">
              <ul className="space-y-4">
                {currentPolicy.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={closeModal}
                className="px-5 py-2 rounded-full text-sm font-medium bg-dark-brown text-cream hover:bg-dark-brown/90 transition-colors duration-200"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-gold/10 blur-3xl opacity-20 pointer-events-none" />
    </footer>
  );
};

export default Footer;
