import Image from "next/image";
import React from "react";

const Craftmen = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 space-y-20 font-fair">
      <h1 className="text-4xl text-center">Our Craftmenship</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto w-fit">
        <div className="relative w-80 h-80 sm:w-[350px] sm:h-[350px]  overflow-hidden rounded-lg shadow-lg bg-gray-100">
          <Image
            src={"/assets/about/craft2.jpg"}
            alt={`image`}
            fill
            className="object-cover hover:scale-105 transition"
          />
        </div>
        <div className="relative w-80 h-80 sm:w-[350px] sm:h-[350px]  overflow-hidden rounded-lg shadow-lg bg-gray-100">
          <Image
            src={"/assets/about/craft1.png"}
            alt={`image`}
            fill
            className="object-cover hover:scale-105 transition"
          />
        </div>
        <div className="relative w-80 h-80 sm:w-[350px] sm:h-[350px]  overflow-hidden rounded-lg shadow-lg bg-gray-100">
          <Image
            src={"/assets/about/craft3.jpg"}
            alt={`image`}
            fill
            className="object-cover hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default Craftmen;
