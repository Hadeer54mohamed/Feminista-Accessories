import logo from "@/assets/logo.png";

const About = () => {
  return (
    <section id="about" className="luxury-section bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <img src={logo} alt="Feminista Accessories" className="h-24 w-auto mx-auto mb-8 opacity-80" />
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">Our Story</p>
          <h2 className="section-title">About Feminista</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            At Feminista Accessories, we believe every woman deserves to feel extraordinary.
            Our premium stainless steel pieces are meticulously crafted to mirror the brilliance
            of luxury gold jewelry — at a fraction of the cost.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Empowering women with timeless accessories that combine durability with beauty.
            Because elegance should be accessible, and confidence should be worn daily.
          </p>
          <div className="flex justify-center gap-12 text-center">
            <div>
              <p className="font-display text-3xl font-bold text-accent">5K+</p>
              <p className="text-sm text-muted-foreground tracking-wide uppercase mt-1">Happy Clients</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-accent">200+</p>
              <p className="text-sm text-muted-foreground tracking-wide uppercase mt-1">Unique Designs</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground tracking-wide uppercase mt-1">Stainless Steel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
