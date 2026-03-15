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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <Categories />
      <BestSellers />
      <About />
      <InstagramGallery />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
