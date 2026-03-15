import { useCart } from "@/contexts/CartContext";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useEffect } from "react";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, subtotal, clearCart } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-dark-brown/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-burgundy" />
            <h2 className="font-display text-xl font-semibold text-dark-brown">
              Your Cart ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5 text-dark-brown" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="font-display text-lg text-dark-brown mb-1">Your cart is empty</p>
              <p className="text-muted-foreground text-sm">Add some beautiful pieces to get started.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 rounded-xl bg-card border border-border animate-fade-in"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-semibold text-dark-brown truncate">
                      {item.name}
                    </h3>
                    <p className="text-burgundy font-semibold text-sm mt-0.5">
                      {item.price} EGP
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-semibold text-dark-brown w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-burgundy transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <p className="text-sm font-semibold text-dark-brown">
                      {item.price * item.quantity} EGP
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Subtotal</span>
              <span className="font-display text-xl font-semibold text-dark-brown">
                {subtotal} EGP
              </span>
            </div>
            <button className="w-full burgundy-gradient-bg hover:burgundy-gradient-bg-hover text-cream py-4 rounded-full text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300"
              style={{ boxShadow: "var(--shadow-luxury)" }}
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full text-muted-foreground text-xs tracking-[0.1em] uppercase hover:text-burgundy transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
