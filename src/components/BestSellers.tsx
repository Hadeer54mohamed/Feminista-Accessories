import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { QuickViewModal, type Product } from "@/components/quick-view-modal";
import necklace2 from "@/assets/necklace-2.jpg";
import ring2 from "@/assets/ring-2.jpg";
import ring1 from "@/assets/ring-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";
import earring1 from "@/assets/earring-1.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import earrings1 from "@/assets/earring-1.jpg";
import productButterfly from "@/assets/product-butterfly-necklace.jpg";


const bestSellers = [
  {
    id: "bs-1",
    name: "Pearl Pendant Necklace",
    price: 149,
    originalPrice: 189,
    image: necklace2,
    rating: 4.9,
    reviews: 128,
    sku: "EN-001"
  },
  {
    id: "bs-2",
    name: "Stackable Gold Rings",
    price: 119,
    originalPrice: null,
    image: ring2,
    rating: 4.8,
    reviews: 95,
    sku: "ER-002"
  },
  {
    id: "bs-3",
    name: "Butterfly Dreams Ring",
    price: 89,
    originalPrice: null,
    image: ring1,
    rating: 4.7,
    reviews: 82,
    sku: "ER-003"
  },
  {
    id: "bs-4",
    name: "Heart Charm Bracelet",
    price: 99,
    originalPrice: 129,
    image: bracelet1,
    rating: 4.9,
    reviews: 156,
    sku: "EB-001"
  },
  {
    id: "bs-5",
    name: "Crystal Hoop Earrings",
    price: 79,
    originalPrice: null,
    image: earring1,
    rating: 4.6,
    reviews: 73,
    sku: "EE-001"
  },
  {
    id: "pearl-pendant-necklace",
    name: "Pearl Pendant Necklace",
    price: 149,
    originalPrice: 189,
    image: necklace2,
    rating: 4.6,
    reviews: 73,
    sku: "EN-002"
  },
  {
    id: "stackable-gold-rings",
    name: "Stackable Gold Rings",
    price: 119,
    image: ring2,
    rating: 4.6,
    reviews: 73,
    sku: "ER-004"
  },
  {
    id: "butterfly-dreams-ring",
    name: "Butterfly Dreams Ring",
    price: 89,
    image: ring1,
    rating: 4.6,
    reviews: 73,
    sku: "EB-002"
  },
  {
    id: "heart-charm-bracelet",
    name: "Heart Charm Bracelet",
    price: 99,
    originalPrice: 129,
    image: bracelet1,
    rating: 4.6,
    reviews: 73,
  },
  {
    id: "crystal-hoop-earrings",
    name: "Crystal Hoop Earrings",
    price: 79,
    image: earrings1,
    rating: 4.6,
    reviews: 73,
    sku: "EN-003"
  },
  {
    id: "golden-chain-necklace",
    name: "Golden Chain Necklace",
    price: 129,
    image: necklace1,
    rating: 4.6,
    reviews: 73,
    sku: "EE-002"
  },
  {
    id: "butterfly-necklace",
    name: "Gold Butterfly Necklace",
    price: 250,
    originalPrice: 350,
    image: productButterfly,
    rating: 4.6,
    reviews: 73,
    sku: "EN-004"
  },
];

const BestSellers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: (typeof bestSellers)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      sku: product.sku,
    });
    toast.success("Added to cart");
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="best-sellers" className="py-8 md:py-12 bg-[#F3EADE]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="text-gold tracking-[0.3em] text-xs sm:text-sm font-medium mb-2 sm:mb-4 block uppercase">
              Most Loved
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-dark-brown">
              Best Sellers
            </h2>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full border-2 border-dark-brown text-dark-brown hover:bg-dark-brown hover:text-cream h-10 w-10 sm:h-12 sm:w-12"
              aria-label="Scroll left"
            >
              <ChevronLeft className="size-4 sm:size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full border-2 border-dark-brown text-dark-brown hover:bg-dark-brown hover:text-cream h-10 w-10 sm:h-12 sm:w-12"
              aria-label="Scroll right"
            >
              <ChevronRight className="size-4 sm:size-5" />
            </Button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex-shrink-0 w-[180px] sm:w-[240px] md:w-[260px] lg:w-[280px] snap-start group"
            >
              <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-beige/30 mb-3 sm:mb-4 border border-transparent group-hover:border-gold transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.originalPrice && (
                  <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-burgundy text-white text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                    Sale
                  </span>
                )}
                <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/20 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 flex gap-1.5 sm:gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Button
                    size="icon"
                    onClick={() => handleAddToCart(product)}
                    className="bg-cream hover:bg-gold text-dark-brown rounded-full flex-1 h-9 sm:h-11 shadow-md"
                    aria-label="Add to bag"
                  >
                    <ShoppingBag className="size-3.5 sm:size-4" />
                  </Button>
                  <Button
                    size="icon"
                    onClick={() => setQuickViewProduct({ ...product, rating: product.rating, reviews: product.reviews })}
                    className="bg-cream hover:bg-dark-brown hover:text-cream text-dark-brown rounded-full h-9 w-9 sm:h-11 sm:w-11 shadow-md"
                    aria-label="Quick view"
                  >
                    <Eye className="size-3.5 sm:size-4" />
                  </Button>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
                  <Star className="size-3 sm:size-4 fill-gold text-gold" />
                  <span className="text-dark-brown font-medium text-xs sm:text-sm">
                    {product.rating}
                  </span>
                  <span className="text-dark-brown/50 text-xs sm:text-sm">
                    ({product.reviews})
                  </span>
                </div>
                <h3 className="font-serif text-sm sm:text-lg text-dark-brown mb-1.5 sm:mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-dark-brown font-semibold text-sm sm:text-base">
                    {product.price} EGP
                  </span>
                  {product.originalPrice && (
                    <span className="text-dark-brown/50 line-through text-xs sm:text-sm">
                      {product.originalPrice} EGP
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};

export default BestSellers;
