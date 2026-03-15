import { useState } from "react";
import { Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="luxury-section bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">Stay Connected</p>
          <h2 className="section-title">Join the Feminista Club</h2>
          <p className="section-subtitle mb-10">
            Be the first to know about new arrivals, exclusive offers, and styling tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-card border border-border rounded-full px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
            <button className="gold-gradient-bg hover:gold-gradient-bg-hover text-accent-foreground px-8 py-4 rounded-full text-sm tracking-[0.1em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              style={{ boxShadow: "var(--shadow-luxury)" }}
            >
              <Send className="h-4 w-4" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
