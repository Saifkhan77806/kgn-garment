"use client";

import React from "react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="max-w-6xl mx-auto text-center space-y-6 font-fair px-4 py-12 md:pb-24 overflow-hidden">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Journey of Crafting Timeless Elegance
      </motion.h1>

      <motion.p
        className="text-lg font-medium"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        From a small workshop to a trusted name in Nehru jackets — a legacy
        built on craftsmanship and commitment.
      </motion.p>

      <motion.div
        className="space-y-4 text-gray-800 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Founded in the year 2000, KGN Garment began with a simple vision — to
          bring the elegance of traditional Indian attire into the modern
          wardrobe. What started as a humble tailoring unit soon grew into a
          full-scale manufacturing and wholesale brand, recognized for its
          dedication to quality and detail.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Every Nehru jacket we produce reflects a perfect harmony between
          heritage craftsmanship and contemporary design. Our skilled artisans
          use fine fabrics, precision stitching, and careful finishing to ensure
          every jacket embodies sophistication and comfort.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Today, we proudly serve clients across India, fulfilling bulk and
          custom orders for weddings, events, and corporate gatherings. With
          over two decades of experience, our story is not just about garments —
          it’s about passion, precision, and pride in every stitch.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Story;
