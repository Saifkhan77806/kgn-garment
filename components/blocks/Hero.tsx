"use client";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {

  const router = useRouter()

  return (
    <section className="min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 font-fair"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="py-1 px-3 rounded-full border border-gray-600 w-fit font-sans text-sm tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              ABOUT KGN GARMENT
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl leading-tight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              viewport={{ once: true }}
            >
              Redefine Your
              <span className="text-copper"> Style </span>
              in Every Stitch — Since 2000
            </motion.h1>

            <motion.h2
              className="text-lg md:text-xl font-medium text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Premium Nehru Jackets for Every Occasion — Manufacturer &
              Wholesaler You Can Trust
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
            >
              <p>
                For over two decades, KGN Garment has been delivering unmatched
                craftsmanship in Nehru jackets — combining traditional tailoring
                with modern elegance. From fine fabrics to precision detailing,
                every piece we create is a symbol of class and confidence.
              </p>
              <p>
                We also cater to bulk orders for events, weddings, and corporate
                gatherings, ensuring timely delivery and consistent quality
                trusted by fashion retailers across India.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={()=> router.push("/products")}
                className="py-3 px-6 bg-copper text-white font-sans flex justify-center items-center gap-x-2 cursor-pointer group hover:bg-opacity-90 transition-all"
              >
                Explore Our Collection{" "}
                <ArrowRight className="size-5 group-hover:translate-x-0.5 transition-all stroke-1" />
              </motion.button>

              <motion.div
                className="flex items-center gap-2 text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Star className="size-5 fill-yellow-500 stroke-yellow-500" />
                <span className="font-medium">4.8/5 Customer Satisfaction</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-[500px] -translate-y-10 sm:translate-y-0 md:h-[600px] lg:h-[700px] w-full"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/assets/about/hero.png"}
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

export default Hero;
