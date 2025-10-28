'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Testimonails = () => {
  const Testimonails = [
    {
      image: "/assets/testimonials/customer1.jpg",
      alt: "Customer 1",
      name: "Rakesh Sharma",
      text: "I ordered a custom Nehru jacket for a wedding, and I couldn’t be happier! The quality of the fabric and the perfect fit exceeded my expectations. The team at KGn Garment was professional and delivered right on time. Highly recommended!",
    },
    {
      image: "/assets/testimonials/customer2.jpg",
      alt: "Customer 2",
      name: "Usman Ali",
      text: "We placed a bulk order of jackets for a corporate event, and KGn Garment handled everything flawlessly. The jackets were stylish, comfortable, and exactly what we envisioned. Their attention to detail is outstanding!",
    },
    {
      image: "/assets/testimonials/customer3.jpg",
      alt: "Customer 3",
      name: "Saif Khan",
      text: "I’ve been buying from KGn Garment for years. Their Nehru jackets are always top-notch, combining elegance with modern style. Friendly service and high-quality craftsmanship make them my go-to choice.",
    },
  ];

  return (
    <section className="font-fair py-8 px-5">
      <h1 className="text-4xl pb-10 text-center font-bold">Customer Feedback</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Testimonails.map((item, index) => (
          <motion.div
            key={index}
            className="relative p-11 bg-white/70 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <div className="size-24 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full absolute overflow-hidden shadow-md">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mt-10">
              <h1 className="text-xl py-3 font-semibold">{item.name}</h1>
              <p className="italic leading-7">
                <span className="mr-1 font-bold">“</span>
                {item.text}
                <span className="ml-1 font-bold">”</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonails;
