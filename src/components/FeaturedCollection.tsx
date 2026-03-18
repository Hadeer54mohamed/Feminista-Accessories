import React, { useState, useEffect, useRef } from "react";
import { ShoppingBag, Eye, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { QuickViewModal, type Product } from "@/components/quick-view-modal";
import { sanityClient, urlFor } from "@/lib/sanity";

interface ProductItem {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
  category: string;
  sku?: string;
}

const PRODUCTS_QUERY = `*[_type == "featuredProduct"] | order(order asc) {
  _id, name, slug, price, oldPrice, image, tag, "category": category->name, sku, order
}`;

const ProductCard = React.memo(({ product }: { product: ProductItem }) => {
  const { addItem } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, sku: product.sku });
    toast({ title: "Item added to your cart ✨", description: product.name });
  };

  const productForModal: Product = {
    id: product.id,
    name: product.name,
    price: product.price,
    originalPrice: product.oldPrice ?? null,
    image: product.image,
    category: product.category,
    sku: product.sku,
  };

  return (
    <>
      <div
        className="luxury-card gold-glow-border group cursor-pointer bg-card relative"
        onClick={() => setQuickViewProduct(productForModal)}
      >
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 p-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Eye className="h-5 w-5 text-dark-brown" />
            </div>
          </div>
          {product.tag && (
            <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-burgundy text-cream text-[9px] sm:text-xs tracking-[0.1em] uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold z-10">
              {product.tag}
            </span>
          )}
          {product.oldPrice && (
            <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-burgundy text-cream text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold uppercase z-10">
              Save {Math.round((1 - product.price / product.oldPrice) * 100)}%
            </span>
          )}
        </div>

        <div className="p-3 sm:p-5 text-center">
          <h3 className="font-display text-xs sm:text-sm md:text-base tracking-wide font-medium text-dark-brown mb-1.5 sm:mb-2 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <p className="text-accent font-serif italic text-sm sm:text-lg">{product.price} EGP</p>
            {product.oldPrice && (
              <p className="text-gray-400 line-through text-xs sm:text-sm">{product.oldPrice} EGP</p>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="w-full burgundy-gradient-bg hover:burgundy-gradient-bg-hover text-cream py-2.5 sm:py-3 rounded-full text-[10px] sm:text-sm tracking-[0.1em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2"
            style={{ boxShadow: "var(--shadow-luxury)" }}
          >
            <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
});

const FeaturedCollection = ({ selectedCategory }: { selectedCategory: string }) => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sanityClient
      .fetch(PRODUCTS_QUERY)
      .then((data: any[]) => {
        if (data.length > 0) {
          setProducts(
            data
              .filter((p) => p.image)
              .map((p) => ({
                id: p._id,
                name: p.name,
                price: p.price,
                oldPrice: p.oldPrice,
                image: urlFor(p.image).width(600).height(600).url(),
                tag: p.tag,
                category: p.category,
                sku: p.sku,
              }))
          );
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    const updateCount = () => {
      setProductsPerPage(window.innerWidth < 768 ? 4 : 8);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    if (currentPage > 1 && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section ref={sectionRef} id="collection" className="luxury-section bg-background pt-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">Curated for You</p>
          <h2 className="section-title font-bold">Featured Collection</h2>
          <p className="section-subtitle mt-3 sm:mt-4 max-w-2xl mx-auto opacity-80 text-sm sm:text-base md:text-lg">
            Each piece is crafted with precision, designed to make you shine.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
        ) : currentProducts.length === 0 ? (
          <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
            <p className="text-gray-400 text-lg">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 min-h-[300px] sm:min-h-[400px]">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6 mt-16">
            <div className="flex items-center gap-6">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="w-12 h-12 flex items-center justify-center bg-burgundy text-cream rounded-full disabled:opacity-20 disabled:cursor-not-allowed transition hover:scale-110 shadow-xl"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <span className="text-dark-brown font-display tracking-widest text-sm uppercase">
                Page {currentPage} <span className="mx-2 opacity-30">/</span> {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="w-12 h-12 flex items-center justify-center bg-burgundy text-cream rounded-full disabled:opacity-20 disabled:cursor-not-allowed transition hover:scale-110 shadow-xl"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`h-1 rounded-full transition-all duration-500 ${currentPage === i + 1 ? "w-8 bg-accent" : "w-2 bg-gray-200 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCollection;
