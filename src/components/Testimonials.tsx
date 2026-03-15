import { Star } from "lucide-react";

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
];

const Testimonials = () => {
  return (
    <section className="luxury-section bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">Love Letters</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
