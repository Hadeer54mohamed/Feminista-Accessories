import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  category?: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  description?: string;
  sku?: string;
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        sku: product.sku,
      });
    }
    toast("Item added to your cart");
    setQuantity(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-brown/50 z-50 backdrop-blur-sm"
          />

          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full sm:max-w-3xl bg-cream rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-3 right-3 z-10 text-dark-brown hover:bg-beige/50 rounded-full bg-cream/80 backdrop-blur-sm"
                aria-label="Close quick view"
              >
                <X className="size-5" />
              </Button>

              <div className="grid sm:grid-cols-2">
                {/* Image */}
                <div className="relative bg-beige/30 h-[35vh] sm:h-auto sm:min-h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.isNew && !product.originalPrice && (
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-burgundy text-cream text-xs font-medium px-3 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-burgundy text-cream text-xs font-medium px-3 py-1 rounded-full">
                      Sale
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 sm:p-8 flex flex-col">
                  {product.category && (
                    <span className="text-gold tracking-[0.2em] text-sm font-medium uppercase">
                      {product.category}
                    </span>
                  )}
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-dark-brown mt-1 sm:mt-2 mb-2 sm:mb-3">
                    {product.name}
                  </h2>

                  {product.rating && (
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`size-3.5 sm:size-4 ${
                              i < Math.floor(product.rating!)
                                ? "fill-gold text-gold"
                                : "fill-beige text-beige"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-dark-brown font-medium text-sm">
                        {product.rating}
                      </span>
                      {product.reviews && (
                        <span className="text-dark-brown/50 text-sm">
                          ({product.reviews} reviews)
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <span className="font-serif text-xl sm:text-2xl text-dark-brown">
                      {product.price} EGP
                    </span>
                    {product.originalPrice && (
                      <span className="text-dark-brown/50 line-through text-base sm:text-lg">
                        {product.originalPrice} EGP
                      </span>
                    )}
                  </div>

                  <p className="text-dark-brown/70 mb-4 sm:mb-6 flex-1 text-sm sm:text-base leading-relaxed">
                    {product.description ||
                      "Crafted with premium stainless steel, this piece is designed to last. Hypoallergenic, water-resistant, and perfect for everyday elegance."}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <span className="text-dark-brown font-medium text-sm sm:text-base">Quantity:</span>
                    <div className="flex items-center gap-1 bg-beige/50 rounded-full">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:bg-beige text-dark-brown"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="size-4" />
                      </Button>
                      <span className="w-8 sm:w-10 text-center text-dark-brown font-medium">
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                        className="h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:bg-beige text-dark-brown"
                        aria-label="Increase quantity"
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Actions */}
                  <Button
                    onClick={handleAddToCart}
                    className="w-full bg-dark-brown hover:bg-dark-brown/90 text-cream py-5 sm:py-6 text-sm sm:text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="size-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
