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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-600 text-background">
      {/* Top Divider */}
      <div className="h-px bg-accent"></div>

      {/* Main Footer Content */}
      <div className="px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <Image
                  src="/assets/logo.png"
                  alt="K.G.N.GARMENTS Logo"
                  width={200}
                  height={80}
                  className="w-full max-w-xs h-auto"
                />
              </div>
              <p className="text-sm leading-relaxed text-background/80">
                Premium manufacturer & wholesaler of finest quality Nehru
                jackets since 2000.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    Bulk Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Products
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    Cotton Nehru Jackets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    Silk Nehru Jackets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    Wedding Collection
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    Corporate Wear
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    Custom Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm text-background/80">
                      +91 (123) 456-7890
                    </p>
                    <p className="text-sm text-background/80">
                      +91 (123) 456-7891
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-background/80">
                    info@kgngarments.com
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-background/80">
                    123 Fashion Street, New Delhi, India - 110001
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
            <p className="text-sm text-background/70">
              © {currentYear} K.G.N.GARMENTS. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-background/70 hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-accent transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-background/70 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-accent transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
