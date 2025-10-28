"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="my-8 text-center fair space-y-5 px-6">
      <motion.h1
        className="font-bold text-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="max-w-4xl mx-auto leading-8 md:leading-9 text-charcoal"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Established in 2000, we are a premier manufacturer and wholesaler of
        premium Nehru jackets, dedicated to blending timeless craftsmanship with
        contemporary style. Over the years, we have earned the trust of clients
        across India for our commitment to quality, elegant designs, and precise
        tailoring. Whether it’s individual orders or bulk requests for weddings,
        corporate events, or cultural gatherings, we deliver jackets that
        reflect sophistication, comfort, and style. Every piece is crafted with
        meticulous attention to detail and the finest fabrics, ensuring a
        perfect fit and enduring quality.
      </motion.p>
    </section>
  );
};

export default About;
