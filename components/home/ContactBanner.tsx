import React from "react";
import CustomBtn from "../blocks/CustomBtn";

const ContactBanner = () => {
  return (
    <section className="max-w-5xl mx-auto font-fair my-8 bg-beige px-12 py-8 rounded-lg">
      <div className="text-center">
        <h1 className="text-4xl mb-8">Let’s Connect</h1>
        <p className="font-semibold">
          Have a question, a custom order, or a bulk request? Our team at KGn
          Garment is ready to assist you with timely and professional support.
          Reach out and we’ll make your order experience seamless and
          hassle-free.
        </p>
        <p className="text-sm my-4 text-charcoal">
          We craft premium Nehru jackets with precision and care — every order
          matters.
        </p>
        <CustomBtn text="Request a Quote" />
      </div>
    </section>
  );
};

export default ContactBanner;
