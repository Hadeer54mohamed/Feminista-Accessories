import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

import productButterfly from "@/assets/product-butterfly-necklace.jpg";
import productRings from "@/assets/product-stackable-rings.jpg";
import productBracelet from "@/assets/product-chain-bracelet.jpg";
import productGemstone from "@/assets/product-gemstone-pendant.jpg";
import productLayered from "@/assets/product-layered-necklace.jpg";
import productCuff from "@/assets/product-cuff-bracelet.jpg";

const bestSellers = [
  { name: "Gold Butterfly Necklace", price: 250, image: productButterfly },
  { name: "Stackable Gold Rings", price: 180, image: productRings },
  { name: "Gemstone Pendant", price: 320, image: productGemstone },
  { name: "Classic Chain Bracelet", price: 220, image: productBracelet },
  { name: "Layered Chain Necklace", price: 280, image: productLayered },
  { name: "Minimalist Cuff", price: 190, image: productCuff },
];

const BestSellers = () => {
  const [offset, setOffset] = useState(0);
  const visibleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxOffset = bestSellers.length - visibleCount;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <section id="best-sellers" className="luxury-section bg-background">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">Most Loved</p>
            <h2 className="section-title mb-0">Best Sellers</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={offset === 0}
              className="h-12 w-12 rounded-full border-2 border-burgundy flex items-center justify-center text-dark-brown hover:bg-burgundy hover:text-cream transition-all duration-300 disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={offset >= maxOffset}
              className="h-12 w-12 rounded-full border-2 border-burgundy flex items-center justify-center text-dark-brown hover:bg-burgundy hover:text-cream transition-all duration-300 disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${offset * (100 / visibleCount + 2)}%)` }}
          >
            {bestSellers.map((product, i) => (
              <div
                key={i}
                className="min-w-[calc(33.333%-16px)] max-md:min-w-full luxury-card gold-glow-border group cursor-pointer bg-card flex-shrink-0"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-dark-brown mb-1">{product.name}</h3>
                  <p className="text-accent font-semibold text-lg mb-4">{product.price} EGP</p>
                  <button className="w-full gold-gradient-bg hover:gold-gradient-bg-hover text-accent-foreground py-3 rounded-full text-sm tracking-[0.1em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
