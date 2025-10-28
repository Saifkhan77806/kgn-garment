"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

interface LinksType {
  name: string;
  href: string;
}

const links: LinksType[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact-us" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showNavLinks, setShowNavLinks] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavLinks(false);
      } else {
        setShowNavLinks(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-ivory font-fair">
      {/* Logo and Mobile Menu */}
      <div className="flex items-center justify-between px-5 md:px-10 h-20">
        <div
          className="relative h-24 w-[180px] md:w-[275px] ml-5 md:mx-auto"
          onClick={() => router.push("/")}
        >
          <Image
            src="/assets/logo.png"
            alt="KGN Garment"
            fill
            priority
            sizes="(max-width: 768px) 180px, 250px"
            className="object-contain"
          />
        </div>

        {/* Mobile Menu Icon (hidden on lg) */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="h-7 w-7 text-gray-700" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="bg-ivory p-6">
              <SheetHeader>
                <SheetTitle className="text-xl font-fair font-bold mb-6">
                  KGN Garment
                </SheetTitle>
              </SheetHeader>

              <ul className="space-y-5 mt-4 font-fair">
                {links.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={`block text-lg transition-all ${
                            isActive
                              ? "font-extrabold text-copper"
                              : "font-medium text-gray-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ORIGINAL DESKTOP NAVBAR (unchanged) */}
      <motion.div
        className="max-w-6xl mx-auto hidden md:flex items-center justify-between gap-x-72 z-[1] bg-100"
        initial={{ height: "auto", opacity: 1 }}
        animate={{
          height: showNavLinks ? "auto" : 0,
          opacity: showNavLinks ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <ul className="flex-1/2 flex -ml-10 justify-evenly">
          {links.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`block py-2 transition-all hover:font-bold  ${
                    isActive
                      ? "font-bold text-primary"
                      : "font-medium text-gray-500"
                  }`}
                >
                  {item.name}
                </Link>

                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-400"
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      duration: 0.5,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
