"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 font-fair"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <p className="py-1 px-3 rounded-full border border-gray-600 w-fit font-sans text-sm tracking-wider">
              KGN GARMENT PRODUCTS
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Crafted with
              <span className="text-copper"> Care</span>, Worn with Pride
            </h1>

            <h2 className="text-lg md:text-xl font-medium text-gray-700">
              Experience the Perfect Blend of Comfort, Quality, and Timeless
              Elegance.
            </h2>

            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p>
                At KGN Garment, every piece we create tells a unique story of
                craftsmanship, tradition, and style. Our collection is a
                celebration of meticulous artistry, blending the timeless
                techniques of Indian garment-making with contemporary designs
                that fit perfectly into modern lifestyles. From everyday
                essentials to striking statement pieces, each garment is
                thoughtfully designed to reflect individuality, comfort, and
                elegance.
              </p>
            </div>

            {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <motion.button
                className="py-3 px-6 bg-copper text-white font-sans flex justify-center items-center gap-x-2 cursor-pointer group hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Explore Our Collection{" "}
                <ArrowRight className="size-5 group-hover:translate-x-0.5 transition-all stroke-1" />
              </motion.button>

              <div className="flex items-center gap-2 text-gray-700">
                <Star className="size-5 fill-yellow-500 stroke-yellow-500" />
                <span className="font-medium">4.8/5 Customer Satisfaction</span>
              </div>
            </div> */}
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-[500px] -translate-y-10 my-auto sm:translate-y-0 md:h-[600px] lg:h-[700px] w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              src={"/assets/products/products.jpg"}
              alt="hero section image"
              fill
              className="object-contain object-center md:object-right"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
