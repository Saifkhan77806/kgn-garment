'use client'
import { motion } from "framer-motion";
import CustomBtn from "../blocks/CustomBtn";

const ContactBanner = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto font-fair my-8 bg-beige px-12 py-12 rounded-2xl shadow-lg mx-5"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-4xl mb-8 font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Let’s Connect
        </motion.h1>

        <motion.p
          className="font-semibold leading-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Have a question, a custom order, or a bulk request? Our team at KGn
          Garment is ready to assist you with timely and professional support.
          Reach out and we’ll make your order experience seamless and
          hassle-free.
        </motion.p>

        <motion.p
          className="text-sm my-4 text-charcoal"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          We craft premium Nehru jackets with precision and care — every order
          matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <CustomBtn text="Request a Quote" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactBanner;
