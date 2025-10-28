"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/app/actions/sendMail";
import { ContactFormData, contactSchema } from "@/app/lib/validations/contactSchema";

// 🧩 Contact info constants
const contactInfo = {
  address:
    "R GNM/95/435/MLC/A, Dabbawala Compound, Mahim Level Crossing, Dharavi Main Road, Mumbai 400017",
  phone: "+91 73033 53566",
  email: "mykgngarments@gmail.com",
  hours: "Mon - Sat: 10:00 AM - 10:00 PM",
};


export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await sendMail(data);
      if (res.success) {
        alert("✅ Message sent successfully! We’ll get back to you soon.");
        reset();
      } else {
        alert("❌ Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("there is a error");
      console.error(error);
    }

    reset();
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#f5f1ed] py-20 px-4 font-fair overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="py-1 px-3 mx-auto rounded-full border border-gray-600 w-fit font-sans text-sm tracking-wider">
            GET IN TOUCH
          </p>
          <h2 className="text-5xl md:text-6xl font-fair text-gray-900">
            Contact <span className="text-[#B87333]">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or bulk orders? We're here to
            help. Reach out to us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 h-fit"
          >
            <h3 className="text-3xl font-serif text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B87333] outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B87333] outline-none"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B87333] outline-none"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register("subject")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B87333] outline-none"
                    placeholder="Bulk Order Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B87333] outline-none resize-none"
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                className="w-full bg-[#B87333] text-white py-4 rounded-lg font-medium hover:bg-[#9d6329] transition-colors flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: MapPin, title: "Our Address", text: contactInfo.address },
              {
                icon: Phone,
                title: "Phone Number",
                text: contactInfo.phone,
                link: `tel:${contactInfo.phone}`,
              },
              {
                icon: Mail,
                title: "Email Address",
                text: contactInfo.email,
                link: `mailto:${contactInfo.email}`,
              },
              { icon: Clock, title: "Business Hours", text: contactInfo.hours },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#B87333] bg-opacity-10 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-[#B87333] transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.text}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white my-16 w-fit mx-auto rounded-2xl shadow-xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4365386534223!2d72.84910200000002!3d19.044535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96924c9bddd%3A0x5aec21a4d38ec767!2sK.G.N.Garments!5e0!3m2!1sen!2sin!4v1761505727440!5m2!1sen!2sin"
            className="w-[300px] sm:w-[460px] md:w-[700px] h-[300px] md:h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#B87333] rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl mb-3">
            Looking for Bulk Orders?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Contact us directly for special pricing and custom requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-[#B87333] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call Now
            </a>
            <Link
              href={`https://wa.me/7303353566`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#B87333] transition-colors"
            >
              Whatsapp me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
