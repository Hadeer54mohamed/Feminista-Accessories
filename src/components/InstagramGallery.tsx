import { useCallback, useEffect, useRef, useState } from "react";
import { X, Instagram, Play } from "lucide-react";

const reels = [
  { link: "https://www.instagram.com/reel/DS2iNvoCO20/" },
  { link: "https://www.instagram.com/reel/DOrTaX-AsjR/" },
  { link: "https://www.instagram.com/reel/DOeyi42gtNp/" },
  { link: "https://www.instagram.com/reel/DIo_6_BInbk/" },
  { link: "https://www.instagram.com/reel/DIcl85mC8Iu/" },
  { link: "https://www.instagram.com/reel/DL4jHqwC4yw/" },
  { link: "https://www.instagram.com/reel/DKHcnH_Cscq/" },
  { link: "https://www.instagram.com/reel/DE5ozvBibxi/" },
  
];

const InstagramGallery = () => {
  const [selectedReel, setSelectedReel] = useState<string | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const closeModal = useCallback(() => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedReel(null);
      setIsModalClosing(false);
    }, 250);
  }, []);

  useEffect(() => {
    const processEmbeds = () => {
      if (window["instgrm"]) {
        window["instgrm"].Embeds.process();
      }
    };

    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = processEmbeds;
    } else {
      processEmbeds();
    }
  }, [selectedReel]);

  useEffect(() => {
    if (!selectedReel) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedReel, closeModal]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="luxury-section bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-accent/50" />
            <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium">
              @feministastore22
            </p>
            <span className="h-px w-8 bg-accent/50" />
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-serif">
            Follow Our Style
          </h2>
         
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {reels.map((reel, i) => (
            <div
              key={i}
              data-index={i}
              onClick={() => setSelectedReel(reel.link)}
              className={`cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] bg-white relative group gold-glow-border ${
                visibleCards.has(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visibleCards.has(i) ? `${i * 80}ms` : "0ms" }}
            >
              <div className="aspect-[9/16] flex items-center justify-center bg-gradient-to-b from-beige/20 to-beige/40">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={reel.link}
                  data-instgrm-version="14"
                  data-instgrm-captioned="true"
                  style={{
                    width: "100%",
                    margin: 0,
                    padding: 0,
                    border: "none",
                    minWidth: 0,
                    maxWidth: "100%",
                  }}
                >
                  <a href={reel.link} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col items-center justify-center gap-3 aspect-[9/16] bg-gradient-to-b from-beige/20 to-beige/40">
                      <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                        <Play className="w-5 h-5 text-dark-brown/40 ml-0.5" />
                      </div>
                      <span className="text-xs text-dark-brown/30 font-medium">Loading...</span>
                    </div>
                  </a>
                </blockquote>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 via-dark-brown/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center rounded-xl">
                <div className="flex flex-col items-center gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Instagram className="w-5 h-5 text-white drop-shadow-md" />
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/feministastore22/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-300 text-sm font-medium group"
          >
            <Instagram className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          Follow Us on Instagram
          </a>
        </div>
      </div>

      {selectedReel && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-opacity duration-250 ${
            isModalClosing ? "opacity-0" : "animate-fade-in"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-[420px] rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-250 ${
              isModalClosing
                ? "opacity-0 scale-95"
                : "animate-fade-in"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-[110] bg-black/50 hover:bg-black/80 p-2 rounded-full text-white transition-all duration-200 hover:rotate-90"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="ig-modal-wrapper">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={selectedReel}
                data-instgrm-version="14"
                data-instgrm-captioned="false"
                style={{
                  width: "100%",
                  margin: 0,
                  padding: 0,
                  border: "none",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramGallery;
