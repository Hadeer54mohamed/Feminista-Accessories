import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { sanityClient, urlFor } from "@/lib/sanity";

import catRings from "@/assets/categories/rings.jpg";
import catBracelets from "@/assets/categories/bracelets.jpg";
import catEarrings from "@/assets/categories/earrings.jpg";
import catNecklaces from "@/assets/categories/necklaces.jpg";

interface CategoryItem {
  id: string;
  name: string;
  image: string;
}

const fallbackCategories: CategoryItem[] = [
  { id: "rings", name: "Rings", image: catRings },
  { id: "necklaces", name: "Necklaces", image: catNecklaces },
  { id: "bracelets", name: "Bracelets", image: catBracelets },
  { id: "earrings", name: "Earrings", image: catEarrings },
];

const CATEGORIES_QUERY = `*[_type == "category"] | order(order asc) {
  _id, name, slug, image, order
}`;

const Categories = ({
  onCategorySelect,
  activeCategory,
}: {
  onCategorySelect: (name: string) => void;
  activeCategory: string;
}) => {
  const [categories, setCategories] = useState<CategoryItem[]>(fallbackCategories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(CATEGORIES_QUERY)
      .then((data: any[]) => {
        if (data.length > 0) {
          setCategories(
            data.map((cat) => ({
              id: cat._id,
              name: cat.name,
              image: urlFor(cat.image).width(600).height(800).url(),
            }))
          );
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="categories" className="luxury-section bg-[#F3EADE]">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">Browse</p>
          <h2 className="section-title font-bold">Shop by Category</h2>
        </div>

        {loading && categories.length === 0 ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  if (activeCategory === cat.name) {
                    onCategorySelect("All");
                  } else {
                    onCategorySelect(cat.name);
                    setTimeout(() => {
                      document.getElementById("collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }
                }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4] transition-all duration-500 ${
                  activeCategory === cat.name ? "ring-4 ring-accent ring-offset-4" : ""
                }`}
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/70 via-dark-brown/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                  <h3 className="font-display text-lg sm:text-2xl font-semibold text-cream tracking-wide">
                    {cat.name}
                  </h3>
                  <p className="text-gold-light text-sm tracking-[0.15em] uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore →
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
