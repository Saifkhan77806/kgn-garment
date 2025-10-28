"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BulkOrderSection() {

  const router = useRouter()

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-primary via-[#1a2532] to-primary fair">
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FDE8D0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-ivory/10 backdrop-blur-sm border border-gold/30 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <svg
              className="w-4 h-4 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-ivory">
              Premium Bulk Services
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            We Supply For
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-beige max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Elevate your event with our exclusive bulk ordering service. Premium
            quality, competitive pricing, and dedicated support for your special
            occasion.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <button onClick={()=> router.push("/contact-us")} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-i from-copper to-gold text-ivory font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-copper/50 hover:scale-105 bg-gold">
              <span className="relative z-10">Request Bulk Quote</span>
              <svg
                className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient
                    id="arrowGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#FFF9F4", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#F5EBDC", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="url(#arrowGrad)"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="pt-8 flex flex-wrap justify-center items-center gap-8 text-beige text-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[
              "Minimum Order: 50 Pieces",
              "Custom Tailoring Available",
              "Fast Turnaround Time",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <defs>
                    <linearGradient
                      id={`checkGrad${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#D4A373", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#B87333", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill={`url(#checkGrad${index})`}
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
