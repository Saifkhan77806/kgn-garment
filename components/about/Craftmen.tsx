"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Craftmen = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-4 space-y-20 font-fair">
      {/* Heading */}
      <motion.h1
        className="text-4xl text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Our Craftmenship
      </motion.h1>

      {/* Images */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto w-fit"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          "/assets/about/craft2.jpg",
          "/assets/about/craft1.png",
          "/assets/about/craft3.jpg",
        ].map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative w-80 h-80 sm:w-[350px] sm:h-[350px] overflow-hidden rounded-lg shadow-lg bg-gray-100"
          >
            <Image
              src={src}
              alt={`craftsmanship image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Craftmen;
