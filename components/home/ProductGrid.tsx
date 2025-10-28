"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProductGrid = () => {
  const product = [
    {
      name: "Ivory Jodhpuri Suit",
      image: "/assets/products/formal.jpg",
      alt: "The Modern Royal",
    },
    {
      name: "Embroidered Nehru Jacket",
      image: "/assets/products/kurta.jpg",
      alt: "The Heritage Classic",
    },
    {
      name: "Midnight Black Sherwani",
      image: "/assets/products/sherwani.jpg",
      alt: "The Midnight Statement",
    },
  ];

  return (
    <section className="bg-ivory font-fair py-8 px-8">
      <motion.h1
        className="text-center font-bold text-4xl mb-9"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Products
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-10">
        {product.map((item, index) => (
          <motion.div
            key={index}
            className="w-auto group overflow-x-hidden cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 relative group-hover:scale-105 transition-transform duration-300 ease-out">
              <Image src={item.image} alt={item.alt} fill />
            </div>
            <p className="font-semibold my-3">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
