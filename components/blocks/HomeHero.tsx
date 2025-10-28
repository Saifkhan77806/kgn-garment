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
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="h-[calc(100vh-153px)] relative overflow-hidden">
      {/* images container with slide animation */}
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
            className="h-full w-full max-md:object-cover object-top-right"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/30 md:bg-transparent z-10" />

      {/* Fixed Instagram Icon with bounce animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-30 flex gap-x-2"
      >
        <Link
          href="https://www.instagram.com/nehru_jacket/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 md:p-3 rounded-full transition-colors duration-300 flex items-center justify-center group"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Text Content - Animated with stagger effect */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start z-20 px-4 md:px-0">
        <div className="text-white text-center md:text-left md:ml-16 space-y-2 md:space-y-3 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fair font-bold leading-tight"
            >
              {images[currentIndex].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h2
              key={`subtitle-${currentIndex}`}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="text-sm sm:text-base md:text-lg lg:text-xl fair font-thin px-4 md:px-0"
            >
              {images[currentIndex].subtitle}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots indicator with animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20"
      >
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-charcoal w-8"
                : "bg-primary hover:bg-400/75 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                layoutId="activeSlide"
                className="h-full w-full bg-charcoal rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
};

export default HomeHero;
