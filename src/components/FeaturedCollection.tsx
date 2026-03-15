import { useState } from "react";
import { ShoppingBag } from "lucide-react";

import productButterfly from "@/assets/product-butterfly-necklace.jpg";
import productRings from "@/assets/product-stackable-rings.jpg";
import productBracelet from "@/assets/product-chain-bracelet.jpg";
import productEarrings from "@/assets/product-hoop-earrings.jpg";
import productGemstone from "@/assets/product-gemstone-pendant.jpg";
import productLayered from "@/assets/product-layered-necklace.jpg";
import productCuff from "@/assets/product-cuff-bracelet.jpg";

const products = [
  { name: "Gold Butterfly Necklace", price: 250, image: productButterfly, tag: "New" },
  { name: "Stackable Gold Rings", price: 180, image: productRings, tag: "Best Seller" },
  { name: "Classic Chain Bracelet", price: 220, image: productBracelet },
  { name: "Elegant Hoop Earrings", price: 150, image: productEarrings },
  { name: "Gemstone Pendant", price: 320, image: productGemstone, tag: "Premium" },
  { name: "Layered Chain Necklace", price: 280, image: productLayered },
  { name: "Minimalist Cuff", price: 190, image: productCuff },
  { name: "Crystal Drop Earrings", price: 200, image: productEarrings },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="luxury-card gold-glow-border group cursor-pointer bg-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
        {product.tag && (
          <span className="absolute top-4 left-4 gold-gradient-bg text-accent-foreground text-xs tracking-[0.1em] uppercase px-3 py-1 rounded-full font-semibold">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-dark-brown mb-1">
          {product.name}
        </h3>
        <p className="text-accent font-semibold text-lg mb-4">{product.price} EGP</p>
        <button className="w-full burgundy-gradient-bg hover:burgundy-gradient-bg-hover text-cream py-3 rounded-full text-sm tracking-[0.1em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          style={{ boxShadow: "var(--shadow-luxury)" }}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const FeaturedCollection = () => {
  return (
    <section id="collection" className="luxury-section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">Curated for You</p>
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle">
            Each piece is crafted with precision, designed to make you shine.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.slice(0, 8).map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
