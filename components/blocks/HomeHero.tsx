"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/assets/home/banner01.jpg",
      alt: "Hero image 1",
      title: "Timeless Elegance for Every Celebration",
      subtitle:
        "Discover handcrafted sherwanis and bandhgalas that blend heritage with modern sophistication",
    },
    {
      src: "/assets/home/banner02.jpg",
      alt: "Hero image 2",
      title: "Where Tradition Meets Distinction",
      subtitle:
        "Elevate your presence with exquisitely tailored ethnic menswear for weddings and special occasions",
    },
    {
      src: "/assets/home/banner04.png",
      alt: "Hero image 3",
      title: "Crafted for Moments That Matter",
      subtitle: "Premium ethnic wear designed for the contemporary gentleman",
    },
    {
      src: "/assets/home/banner05.png",
      alt: "Hero image 3",
      title: "Step Into Regal Sophistication",
      subtitle:
        "Luxurious sherwanis and Indo-Western ensembles that make every entrance unforgettable",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="h-[calc(100vh-153px)] relative overflow-hidden">
      {/* images container */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="w-full h-full absolute inset-0"
        >
          <Image
            width={1500}
            height={1000}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="h-full w-full"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Fixed Facebook Icon */}
      <div className="absolute top-8 right-8 z-30 flex gap-x-2">
        <Link
          href="https://www.facebook.com/share/1BiVQtFPHt/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-colors duration-300 flex items-center justify-center"
        >
          <Instagram className="w-6 h-6 text-white" />
        </Link>
      </div>

      <div className="absolute top-[45%] space-y-3 text-white bottom-1/2 -translate-y-1/2 left-16">
        <h1 className="text-5xl fair">{images[currentIndex].title}</h1>
        <h2 className="text-lg fair font-thin max-w-3xl">{images[currentIndex].subtitle}</h2>
      </div>

      {/* Optional: Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-charcoal w-8"
                : "bg-primary hover:bg-400/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
