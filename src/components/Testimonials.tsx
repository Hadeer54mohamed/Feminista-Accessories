import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { sanityClient } from "@/lib/sanity";

interface TestimonialItem {
  id: string;
  name: string;
  text: string;
  rating: number;
}

const fallbackTestimonials: TestimonialItem[] = [
  { id: "t1", name: "Sara A.", text: "I couldn't believe these are stainless steel! They look exactly like real gold. Everyone asks me where I got my jewelry.", rating: 5 },
  { id: "t2", name: "Nour M.", text: "The quality is exceptional. I've been wearing my Feminista bracelet daily for months and it still looks brand new.", rating: 5 },
  { id: "t3", name: "Hana K.", text: "Finally, affordable luxury that doesn't compromise on elegance. Feminista changed my accessory game completely.", rating: 5 },
  { id: "t4", name: "Mariam R.", text: "الإكسسوارات فخمة جداً والخامة ممتازة. أول مرة ألاقي حاجة بالجودة دي بسعر معقول!", rating: 5 },
  { id: "t5", name: "Yasmin T.", text: "I ordered a necklace set for my sister's birthday and she absolutely loved it. The packaging was beautiful too!", rating: 5 },
  { id: "t6", name: "Dina S.", text: "بقالي شهور بلبس الغويشة وما اتغيرش لونها خالص. شغل ممتاز فعلاً!", rating: 5 },
  { id: "t7", name: "Layla H.", text: "The earrings are so lightweight and comfortable. I wear them all day and forget they're even there. Stunning pieces!", rating: 5 },
];

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id, name, text, rating
}`;

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(fallbackTestimonials);

  useEffect(() => {
    sanityClient
      .fetch(TESTIMONIALS_QUERY)
      .then((data: any[]) => {
        if (data.length > 0) {
          setTestimonials(data.map((t) => ({ id: t._id, name: t.name, text: t.text, rating: t.rating })));
        }
      })
      .catch(console.error);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0] as HTMLElement;
    const scrollAmount = card.clientWidth + 24;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="luxury-section bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-accent/50" />
            <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium">
              Love Letters
            </p>
            <span className="h-px w-8 bg-accent/50" />
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-serif">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg items-center justify-center text-dark-brown hover:bg-white hover:scale-110 transition-all duration-200 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg items-center justify-center text-dark-brown hover:bg-white hover:scale-110 transition-all duration-200 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-[250px] w-[72vw] sm:w-[75vw] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start bg-card rounded-2xl p-5 sm:p-7 flex flex-col text-center gold-glow-border transition-all duration-300 hover:scale-[1.02]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Quote className="w-8 h-8 text-accent/20 mx-auto mb-3 rotate-180" />

                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-3.5 w-3.5 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 italic font-display text-[13px] sm:text-[15px] flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-display text-sm font-semibold">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs tracking-[0.15em] uppercase text-dark-brown font-semibold">
                    {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
