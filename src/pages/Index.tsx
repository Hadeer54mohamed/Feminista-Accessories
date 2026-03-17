"use client";
import { useState } from "react";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import About from "@/components/About";
import InstagramGallery from "@/components/InstagramGallery";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { CartPanel } from "@/components/CartDrawer";

const Index = () => {
  // هي State واحدة بس اللي بنحتاجها عشان نربط السيكشنين ببعض
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        
        <Categories 
          onCategorySelect={setActiveCategory} 
          activeCategory={activeCategory} 
        />

        <FeaturedCollection 
          selectedCategory={activeCategory} 
        />

        <BestSellers />
        <About />
        <InstagramGallery />
        <Testimonials />
        <Newsletter />
        <Footer />
        <CartPanel />
      </div>
    </CartProvider>
  );
};

export default Index;