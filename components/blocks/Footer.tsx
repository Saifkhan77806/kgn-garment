"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige text-black">
      {/* Top Divider */}
      <div className="h-px bg-accent"></div>

      {/* Main Footer Content */}
      <div className="px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <Image
                  src="/assets/logo.png"
                  alt="K.G.N.GARMENTS Logo"
                  width={200}
                  height={80}
                  className="w-full max-w-xs h-auto object-cover"
                />
              </div>
              <p className="text-sm leading-relaxed text-black/80">
                Premium manufacturer & wholesaler of finest quality Nehru
                jackets since 2000.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-black">
              <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-black/80 hover:text-gray-700 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-black/80 hover:text-gray-700 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-sm text-black/80 hover:text-gray-700 transition-colors duration-300"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact-us"
                    className="text-sm text-black/80 hover:text-gray-700 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={18} className=" flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-black/80">+91 9324624604</p>
                    <p className="text-sm text-black/80">+91 73033 53566</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className=" flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-black/80">
                    mykgngarments@gmail.com
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className=" flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-black/80">
                    R GNM/95/435/MLC/A, Dabbawala Compound, Mahim Level
                    Crossing, Dharavi Main Road, Mumbai 400017
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-accent/30 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-black/80">
              © {currentYear} K.G.N.GARMENTS. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {/* <a
                href="#"
                className="text-black/80 hover:text-gray-700 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a> */}
              <Link
                href="https://www.instagram.com/nehru_jacket/"
                className="text-black/80 hover:text-gray-700 transition-colors duration-300"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram size={20} />
              </Link>
              {/* <a
                href="#"
                className="text-black/80 hover:text-gray-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a> */}
              {/* <a
                href="#"
                className="text-black/80 hover:text-gray-700 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a> */}
            </div>

            {/* Legal Links */}
            {/* <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-black/80 hover:text-gray-700 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-black/80 hover:text-gray-700 transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
