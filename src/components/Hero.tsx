import heroImg from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury gold jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            width: `${6 + i * 4}px`,
            height: `${6 + i * 4}px`,
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left max-w-3xl ml-auto mr-auto md:ml-[8%]">
        <p className="animate-fade-up text-sm tracking-[0.3em] uppercase text-accent mb-6 font-medium">
          Feminista Accessories
        </p>
        <h1 className="animate-fade-up animate-fade-up-delay-1 luxury-heading text-5xl md:text-6xl lg:text-7xl font-bold text-dark-brown leading-[1.1] mb-6">
          Timeless Elegance
          <br />
          <span className="gold-gradient-text">for Every Woman</span>
        </h1>
        <p className="animate-fade-up animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
          Premium stainless steel accessories that look like luxury gold.
          Crafted for the modern woman who deserves brilliance.
        </p>
        <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
          <a
            href="#collection"
            className="gold-gradient-bg hover:gold-gradient-bg-hover text-accent-foreground px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 text-center"
            style={{ boxShadow: "var(--shadow-luxury)" }}
          >
            Shop Collection
          </a>
          <a
            href="#best-sellers"
            className="border-2 border-gold text-dark-brown px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-semibold hover:bg-gold hover:text-accent-foreground transition-all duration-300 text-center"
          >
            View New Arrivals
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
