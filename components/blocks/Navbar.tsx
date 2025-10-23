'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface LinksType {
  name: string;
  href: string;
}

const links: LinksType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [showNavLinks, setShowNavLinks] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Show navlinks when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavLinks(false);
      } else {
        // Scrolling up
        setShowNavLinks(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className=" fixed top-0 w-full z-50 bg-ivory">
      <div className="relative h-24 w-[120px] md:w-[192px] lg:w-[450px] mx-auto">
        <Image
          src="/assets/logo.png"
          alt="KGN Garment"
          fill
          className="object-cover"
        />
      </div>
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
        <ul className="flex-1/2 flex -ml-10  justify-evenly">
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
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: 60,
                    }}
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
