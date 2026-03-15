import catRings from "@/assets/category-rings.jpg";
import catNecklaces from "@/assets/category-necklaces.jpg";
import catBracelets from "@/assets/category-bracelets.jpg";
import catEarrings from "@/assets/category-earrings.jpg";

const categories = [
  { name: "Rings", image: catRings },
  { name: "Necklaces", image: catNecklaces },
  { name: "Bracelets", image: catBracelets },
  { name: "Earrings", image: catEarrings },
];

const Categories = () => {
  return (
    <section id="categories" className="luxury-section bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">Browse</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/70 via-dark-brown/20 to-transparent transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-semibold text-cream tracking-wide">
                  {cat.name}
                </h3>
                <p className="text-gold-light text-sm tracking-[0.15em] uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
