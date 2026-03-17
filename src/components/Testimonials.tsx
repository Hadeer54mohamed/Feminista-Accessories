"use client";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sara A.",
    text: "I couldn't believe these are stainless steel! They look exactly like real gold. Everyone asks me where I got my jewelry.",
    rating: 5,
  },
  {
    name: "Nour M.",
    text: "The quality is exceptional. I've been wearing my Feminista bracelet daily for months and it still looks brand new.",
    rating: 5,
  },
  {
    name: "Hana K.",
    text: "Finally, affordable luxury that doesn't compromise on elegance. Feminista changed my accessory game completely.",
    rating: 5,
  },
  {
    name: "Sara A.",
    text: "I couldn't believe these are stainless steel! They look exactly like real gold. Everyone asks me where I got my jewelry.",
    rating: 5,
  },
  {
    name: "Sara A.",
    text: "I couldn't believe these are stainless steel! They look exactly like real gold. Everyone asks me where I got my jewelry.",
    rating: 5,
  },
  {
    name: "Sara A.",
    text: "I couldn't believe these are stainless steel! They look exactly like real gold. Everyone asks me where I got my jewelry.",
    rating: 5,
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.children[0].clientWidth + 32; // كارت + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="luxury-section bg-card py-16 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Love Letters
          </p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-dark-brown" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 z-10"
        >
          <ChevronRight className="w-6 h-6 text-dark-brown" />
        </button>

        {/* Testimonials grid like original but scrollable */}
        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[calc((100%/4)-16px)] gap-8 overflow-x-auto pb-4 scrollbar-hide max-w-5xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 italic font-display text-lg">
                "{t.text}"
              </p>

              <p className="text-sm tracking-[0.15em] uppercase text-dark-brown font-semibold">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;