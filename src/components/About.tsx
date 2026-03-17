"use client";
import logo from "@/assets/logo1.png";
import { motion } from "framer-motion";
import { Award, Gem, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Gem,
    title: "Premium Quality",
    description: "316L stainless steel that never tarnishes or fades",
  },
  {
    icon: Heart,
    title: "Hypoallergenic",
    description: "Safe for sensitive skin with nickel-free materials",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "We stand behind every piece we create",
  },
  {
    icon: Award,
    title: "Handcrafted",
    description: "Each piece made with attention to detail",
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-beige/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md flex items-center justify-center">
              <img
                src={logo}
                alt="Feminista Accessories"
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-burgundy/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gold tracking-[0.3em] text-sm font-medium mb-3 block uppercase">
              Our Story
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-dark-brown mb-4 sm:mb-5">
              Crafted for the Modern Woman
            </h2>

            <p className="text-dark-brown/70 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              At Feminista Accessories, we believe every woman deserves to feel
              extraordinary. Our premium stainless steel jewelry offers the
              luxurious look of gold without the hefty price tag or worry of
              tarnishing.
            </p>

            <p className="text-dark-brown/70 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
              Each piece is thoughtfully designed and expertly crafted to
              complement your unique style, from everyday elegance to special
              occasion glamour.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="size-5 text-gold" />
                  </div>

                  <div>
                    <h4 className="font-medium text-dark-brown mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-dark-brown/60 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
