import Image from "next/image";
import React from "react";

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
      <h1 className="text-center text-4xl mb-9">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-10">
        {product.map((item, index) => {
          return (
            <div className="w-auto group overflow-x-hidden cursor-pointer" key={index}>
              <div className="w-full h-96 relative group-hover:scale-105 transition">
                <Image src={item.image} alt={item.alt} fill />
              </div>
              <p className="font-semibold my-3">{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;
