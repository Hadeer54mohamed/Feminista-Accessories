import { useCallback, useEffect, useState } from "react";
import { X, Instagram, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

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

function getEmbedUrl(link: string) {
  const match = link.match(/\/reel\/([^/]+)/);
  return match
    ? `https://www.instagram.com/reel/${match[1]}/embed/`
    : link;
}

const InstagramGallery = () => {
  const [selectedReel, setSelectedReel] = useState<string | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [loadedFrames, setLoadedFrames] = useState<Set<number>>(new Set());

  const closeModal = useCallback(() => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedReel(null);
      setIsModalClosing(false);
    }, 250);
  }, []);

  useEffect(() => {
    if (!selectedReel) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedReel, closeModal]);

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

        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            loop
            slidesPerView={1.4}
            spaceBetween={12}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 20,
                coverflowEffect: { depth: 120, modifier: 1.5 },
              },
            }}
            navigation={{
              prevEl: ".ig-prev",
              nextEl: ".ig-next",
            }}
            className="!overflow-visible !pb-2"
          >
            {reels.map((reel, i) => (
              <SwiperSlide key={i} className="!h-auto py-2">
                {({ isActive }) => (
                  <div
                    className={`rounded-[2rem] overflow-hidden relative transition-all duration-500 border border-white/10 ${isActive
                        ? "scale-100 opacity-100 ring-1 ring-accent/40"
                        : "scale-95 opacity-50"
                      }`}
                  >
                    <div className="aspect-[9/16] ig-reel-card bg-black">
                      {!loadedFrames.has(i) && (
                        <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/80 backdrop-blur-sm">
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 animate-pulse">
  <Play className="w-6 h-6 text-white ml-0.5" />
</div>
                        </div>
                      )}

                      <iframe
                        src={getEmbedUrl(reel.link)}
                        title={`Reel ${i + 1}`}
                        loading="lazy"
                        scrolling="no"
                        onLoad={() =>
                          setLoadedFrames((prev) => new Set(prev).add(i))
                        }
                      />
                    </div>

                    <div
                      onClick={() => setSelectedReel(reel.link)}
                      className="absolute inset-0 z-[3] cursor-pointer group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem]" />
                      <div className="absolute bottom-4 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                          <Instagram className="w-4 h-4 text-white" />
                          <span className="text-white text-xs font-medium">
                            مشاهدة
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="ig-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-black/60  backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 hidden md:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="ig-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-black/60  backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 hidden md:flex">
            <ChevronRight className="w-5 h-5" />
          </button>
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
          className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/90 backdrop-blur-md sm:p-4 transition-opacity duration-250 ${isModalClosing ? "opacity-0" : "animate-fade-in"
            }`}
          onClick={closeModal}
        >
          <div
            className={`relative w-full sm:max-w-sm rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden bg-black shadow-2xl transition-all duration-250 max-h-[90vh] sm:max-h-none ${isModalClosing ? "opacity-0 scale-95" : "animate-fade-in"
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

            <div className="aspect-[9/16] ig-reel-modal max-h-[85vh] sm:max-h-none">
              <iframe
                src={getEmbedUrl(selectedReel)}
                title="Instagram Reel"
                allow="autoplay; encrypted-media"
                allowFullScreen
                scrolling="no"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramGallery;
