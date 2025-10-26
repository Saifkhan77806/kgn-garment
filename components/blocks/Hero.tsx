import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 font-fair">
            <p className="py-1 px-3 rounded-full border border-gray-600 w-fit font-sans text-sm tracking-wider">
              ABOUT KGN GARMENT
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Redefine Your
              <span className="text-copper"> Style </span>
              in Every Stitch — Since 2000
            </h1>
            
            <h2 className="text-lg md:text-xl font-medium text-gray-700">
              Premium Nehru Jackets for Every Occasion — Manufacturer & Wholesaler You Can Trust
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For over two decades, KGN Garment has been delivering unmatched
                craftsmanship in Nehru jackets — combining traditional tailoring
                with modern elegance. From fine fabrics to precision detailing,
                every piece we create is a symbol of class and confidence.
              </p>
              
              <p>
                We also cater to bulk orders for events, weddings, and corporate
                gatherings, ensuring timely delivery and consistent quality trusted
                by fashion retailers across India.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <button className="py-3 px-6 bg-copper text-white font-sans flex justify-center items-center gap-x-2 cursor-pointer group hover:bg-opacity-90 transition-all">
                Explore Our Collection{" "}
                <ArrowRight className="size-5 group-hover:translate-x-0.5 transition-all stroke-1" />
              </button>
              
              <div className="flex items-center gap-2 text-gray-700">
                <Star className="size-5 fill-yellow-500 stroke-yellow-500" />
                <span className="font-medium">4.8/5 Customer Satisfaction</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[500px] -translate-y-10 sm:translate-y-0 md:h-[600px] lg:h-[700px] w-full">
            <Image
              src={"/assets/about/hero.png"}
              alt="hero section image"
              fill
              className="object-contain object-center md:object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;