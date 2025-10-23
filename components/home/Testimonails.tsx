import Image from "next/image";
import React from "react";

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
      alt: "Customer 1",
      name: "Usman ali",
      text: "We placed a bulk order of jackets for a corporate event, and KGn Garment handled everything flawlessly. The jackets were stylish, comfortable, and exactly what we envisioned. Their attention to detail is outstanding!",
    },
    {
      image: "/assets/testimonials/customer3.jpg",
      alt: "Customer 1",
      name: "Saif Khan",
      text: "I’ve been buying from KGn Garment for years. Their Nehru jackets are always top-notch, combining elegance with modern style. Friendly service and high-quality craftsmanship make them my go-to choice.",
    },
  ];

  return (
    <section className="font-fair py-8">
      <h1 className="text-4xl pb-10 text-center">Customer Feedback</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Testimonails.map((item, index) => {
          return (
            <div className="relative p-11" key={index}>
              <div className="size-24 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full absolute overflow-hidden">
                <Image src={item.image} alt={item.name} fill />
              </div>
              <div className="text-center mt-10">
                <h1 className="text-xl py-3 font-semibold">{item.name}</h1>
                <p className="italic leading-7"><span className="mr-1 font-bold">“</span>{item.text} <span className="ml-1 font-bold">”</span></p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonails;
