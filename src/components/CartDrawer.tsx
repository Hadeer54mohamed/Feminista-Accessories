import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export function CartPanel() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
  } = useCart();

  const closeCart = () => setIsOpen(false);
  
  const handleCheckout = () => {
    const phoneNumber = "201229856471";
    
    const itemsDetails = items
      .map(
        (item) => 
          `• ${item.name} \n  [Code: ${item.sku || 'N/A'}] \n  (Qty: ${item.quantity}) - ${item.price * item.quantity} EGP`
      )
      .join("\n\n");
  
    const message = `أهلاً فيمينيستا! حابة أعمل أوردر جديد:✨\n\n${itemsDetails}\n\n*إجمالي المبلغ:* ${subtotal.toFixed(2)} EGP\n\nهل المنتجات دي متاحة؟ ❤️`;
  
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-dark-brown/50 z-[110] backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-[100dvh] w-full sm:max-w-md bg-off-white z-[110] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-beige">
              <div className="flex items-center gap-3">
                <ShoppingBag className="size-5 text-dark-brown" />
                <h2 className="font-serif text-xl text-dark-brown">
                  Your Cart
                </h2>
                <span className="bg-burgundy text-off-white text-xs font-medium px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeCart}
                className="text-dark-brown hover:bg-beige/50 rounded-full"
                aria-label="Close cart"
              >
                <X className="size-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="bg-beige/50 rounded-full p-6 mb-4">
                    <ShoppingBag className="size-12 text-dark-brown/30" />
                  </div>
                  <h3 className="font-serif text-lg text-dark-brown mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-dark-brown/60 text-sm mb-6">
                    Add some beautiful pieces to get started
                  </p>
                  <Button
                    onClick={closeCart}
                    className="bg-dark-brown hover:bg-dark-brown/90 text-off-white rounded-full px-8"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex gap-4 bg-card rounded-xl p-4 shadow-sm"
                      >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-dark-brown truncate">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-dark-brown font-semibold">
                              {item.price} EGP
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-1 bg-beige/50 rounded-full">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="h-8 w-8 rounded-full hover:bg-beige text-dark-brown"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="size-3" />
                              </Button>
                              <span className="w-8 text-center text-dark-brown font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="h-8 w-8 rounded-full hover:bg-beige text-dark-brown"
                                aria-label="Increase quantity"
                              >
                                <Plus className="size-3" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="h-8 w-8 text-burgundy hover:bg-burgundy/10 rounded-full"
                              aria-label="Remove item"
                            >
                              <Trash2 className="size-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-beige p-4 sm:p-6 pb-6 sm:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-dark-brown/70">Subtotal</span>
                  <span className="font-serif text-xl text-dark-brown">
                    {subtotal.toFixed(2)} EGP
                  </span>
                </div>
                <p className="text-dark-brown/50 text-sm mb-4">
                  Free delivery for club members ✨
                </p>
                
                <Button onClick={handleCheckout} 
                className="w-full bg-burgundy hover:bg-burgundy/90 text-off-white py-6 text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg">
                  Order via WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  onClick={closeCart}
                  className="w-full mt-3 text-dark-brown hover:bg-beige/50 py-5 rounded-full"
                >
                  Continue Shopping
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}