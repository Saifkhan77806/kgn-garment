import Image from "next/image";
import React from "react";

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

const VMV = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 space-y-20 font-fair">
      {vmvData.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div className="flex-1 space-y-5">
            <h2 className="text-5xl md:text-6xl text-copper font-light">
              {item.title}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              {item.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <Image
                src={item.image}
                alt={`${item.title} image`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VMV;
