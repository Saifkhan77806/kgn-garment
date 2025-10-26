'use client'

import React, { useState } from "react";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";

const productsData = [
  {
    id: 1,
    category: "Nehru Jacket",
    description:
      "Elegant traditional Nehru jackets with intricate embroidery and premium fabric. Perfect for weddings and formal occasions.",
    products: [
      {
        id: 101,
        name: "Royal Embroidered Nehru Jacket",
        image:
          "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=600&h=800&fit=crop",
        price: "₹4,999",
      },
      {
        id: 102,
        name: "Classic Gold Thread Nehru Jacket",
        image:
          "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop",
        price: "₹5,499",
      },
      {
        id: 103,
        name: "Premium Silk Nehru Jacket",
        image:
          "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
        price: "₹6,999",
      },
      {
        id: 104,
        name: "Designer Wedding Nehru Jacket",
        image:
          "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=600&h=800&fit=crop",
        price: "₹7,499",
      },
    ],
  },
  {
    id: 2,
    category: "Plain Nehru Jacket",
    description:
      "Minimalist and versatile plain Nehru jackets. Ideal for casual events, corporate gatherings, and everyday elegance.",
    products: [
      {
        id: 201,
        name: "Classic Black Plain Nehru",
        image:
          "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop",
        price: "₹2,999",
      },
      {
        id: 202,
        name: "Navy Blue Plain Nehru",
        image:
          "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
        price: "₹2,799",
      },
      {
        id: 203,
        name: "Cream Cotton Plain Nehru",
        image:
          "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=600&h=800&fit=crop",
        price: "₹2,499",
      },
      {
        id: 204,
        name: "Grey Linen Plain Nehru",
        image:
          "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop",
        price: "₹3,299",
      },
    ],
  },
  {
    id: 3,
    category: "Modi Jacket",
    description:
      "Signature Modi-style jackets combining tradition with contemporary fashion. A symbol of modern Indian elegance.",
    products: [
      {
        id: 301,
        name: "Classic Modi Jacket - Beige",
        image:
          "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
        price: "₹3,999",
      },
      {
        id: 302,
        name: "Premium Modi Jacket - Black",
        image:
          "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=600&h=800&fit=crop",
        price: "₹4,499",
      },
      {
        id: 303,
        name: "Designer Modi Jacket - Navy",
        image:
          "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop",
        price: "₹4,799",
      },
      {
        id: 304,
        name: "Luxury Modi Jacket - Maroon",
        image:
          "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
        price: "₹5,299",
      },
    ],
  },
];

export default function ProductsSection() {
  const [scrollPositions, setScrollPositions] = useState({});

  const scroll = (categoryId, direction) => {
    const container = document.getElementById(`products-${categoryId}`);
    if (container) {
      const cardWidth = 288; // w-72 = 18rem = 288px
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f5f1ed] to-white py-20 px-4 font-fair">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm tracking-widest text-gray-600 uppercase">
            Our Collection
          </p>
          <h2 className="text-5xl md:text-6xl text-gray-900">
            Discover Our <span className="text-[#B87333]">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handcrafted excellence in every stitch. Explore our premium
            collection of Nehru and Modi jackets.
          </p>
        </div>

        {/* Categories with Horizontal Scroll */}
        <div className="space-y-16">
          {productsData.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-serif text-gray-900">
                    {category.category}
                  </h3>
                  <p className="text-gray-600 max-w-2xl">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Products Carousel */}
              <div className="relative group/carousel">
                {/* Scroll Buttons */}
                <button
                  onClick={() => scroll(category.id, "left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-gray-50 -ml-4"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <button
                  onClick={() => scroll(category.id, "right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-gray-50 -mr-4"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>

                {/* Products Container */}
                <div
                  id={`products-${category.id}`}
                  className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {category.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 w-72 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                      {/* Product Image */}
                      <div className="relative h-80 overflow-hidden bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                      </div>

                      {/* Product Info */}
                      <div className="p-5 space-y-3">
                        <h4 className="text-lg font-medium text-gray-900 line-clamp-2">
                          {product.name}
                        </h4>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                            <span className="text-sm text-gray-600">4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#B87333] rounded-2xl p-8 md:p-12 text-center text-white mt-20">
          <h3 className="text-3xl md:text-4xl font-serif mb-4">
            Bulk Orders & Custom Designs Available
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Looking for wholesale or custom tailoring? We specialize in bulk
            orders for events, weddings, and corporate gatherings with
            guaranteed quality and timely delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#B87333] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#B87333] transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#B87333] mb-2">2000</div>
            <div className="text-gray-600">Established</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#B87333] mb-2">
              10,000+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#B87333] mb-2">500+</div>
            <div className="text-gray-600">Bulk Orders</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#B87333] mb-2">4.8/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
