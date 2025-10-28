"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const vmvData = [
  {
    id: 1,
    title: "Mission",
    text: [
      "At KGN Garment, our mission is to uphold the rich tradition of Indian craftsmanship while embracing modern innovation in garment manufacturing. Since our establishment in 2000, we have dedicated ourselves to producing premium-quality Nehru jackets that exemplify sophistication, comfort, and durability.",
      "We take pride in being a trusted partner for bulk orders, events, and gatherings across India. Our mission goes beyond just creating garments; it is about building long-term relationships with our clients through reliability, integrity, and unmatched service.",
    ],
    image: "/assets/about/mission.jpg",
  },
  {
    id: 2,
    title: "Vision",
    text: [
      "Our vision is to redefine Indian ethnic wear by creating timeless Nehru jackets that blend tradition with global style. We aim to become a recognized name in both domestic and international markets, representing the art of Indian tailoring with a modern twist.",
      "Through continuous innovation, sustainable practices, and a customer-first approach, we strive to inspire confidence and pride in every individual who wears KGN Garment.",
    ],
    image: "/assets/about/vision.jpg",
  },
  {
    id: 3,
    title: "Values",
    text: [
      "Every product we craft is guided by our core values — Quality, Integrity, and Excellence. We believe in ethical production, empowering skilled artisans, and maintaining transparency at every stage of our process.",
      "These principles define who we are and ensure that every KGN Garment reflects authenticity, comfort, and craftsmanship that lasts.",
    ],
    image: "/assets/about/values.jpg",
  },
];

// Animation variants
const fadeFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const VMV = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 space-y-20 font-fair">
      {vmvData.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              !isEven ? "md:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text */}
            <motion.div
              className="flex-1 space-y-5"
              variants={isEven ? fadeFromLeft : fadeFromRight}
            >
              <h2 className="text-5xl md:text-6xl text-copper font-light">
                {item.title}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                {item.text.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="flex-1 flex justify-center"
              variants={isEven ? fadeFromRight : fadeFromLeft}
            >
              <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] overflow-hidden rounded-lg shadow-lg bg-gray-100">
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default VMV;
