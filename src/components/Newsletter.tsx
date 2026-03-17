import { Facebook, MessageCircle, Instagram } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="luxury-section bg-background border-t border-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Stay Connected
          </p>
          <h2 className="section-title font-bold mb-4 sm:mb-6">Join the Feminista Club</h2>
          <p className="section-subtitle mb-8 sm:mb-12 max-w-xl mx-auto opacity-80 text-sm sm:text-base md:text-lg">
            Be the first to know about new arrivals, exclusive offers, and styling tips.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

            <a
              href="https://www.facebook.com/profile.php?id=61568473837266"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center transition-all duration-500 group-hover:bg-blue-500 group-hover:border-blue-500">
                <Facebook className="h-6 w-6 text-dark-brown group-hover:text-cream transition-colors" />
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-dark-brown">Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/feministastore22?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#833AB4] group-hover:via-[#FD1D1D] group-hover:to-[#F77737] group-hover:border-transparent">
                <Instagram className="h-6 w-6 text-dark-brown group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-dark-brown">Instagram</span>
            </a>

            <a
              href="https://wa.me/201229856471?text=أهلاً فيمينيستا، حابة أستفسر عن المنتجات المتاحة ❤️❤️"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
              onClick={(e) => {
                e.currentTarget.href = "https://wa.me/201229856471?text=" + encodeURIComponent("أهلاً فيمينيستا، حابة أستفسر عن المنتجات المتاحة ❤️❤️");
              }}
            >
              <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center transition-all duration-500 group-hover:bg-[#25D366] group-hover:border-[#25D366]">
                <MessageCircle className="h-6 w-6 text-dark-brown group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-dark-brown">WhatsApp</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;