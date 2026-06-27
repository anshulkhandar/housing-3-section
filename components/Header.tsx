"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const scrollContainer = document.getElementById('home-scroll-container') || window;

    const handleScroll = () => {
      const scrollY = scrollContainer === window 
        ? window.scrollY 
        : (scrollContainer as HTMLElement).scrollTop;
        
      // If we scroll past 50vh, let's trigger the transition
      if (scrollY > window.innerHeight * 0.5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrolled = !isHomePage || isScrolled;

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center">
      <div className="w-full max-w-[1600px] py-6 px-6 lg:px-12 xl:px-16 flex justify-between items-start relative">
        {/* Logo */}
        <Link href="/" className="pointer-events-auto flex items-center gap-2 text-2xl font-semibold tracking-tight text-dark">
          <Home className="w-8 h-8 text-brand" />
          <span>LOGO</span>
        </Link>

      {/* Navbar Wrapper */}
      <div className="absolute top-6 left-0 w-full flex pointer-events-none px-6 lg:px-12 xl:px-16">
        <div 
          className="w-full max-w-[1600px] mx-auto flex"
          style={{ justifyContent: scrolled ? 'center' : 'flex-end' }}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="pointer-events-auto flex bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] rounded-full px-6 py-3 items-center gap-8 text-sm font-medium border border-black/[0.04]"
          >
            <Link 
              href="/" 
              className={`transition-colors ${pathname === "/" ? "text-brand font-bold" : "text-dark/70 hover:text-brand"}`}
            >
              Home
            </Link>
            <Link 
              href="/properties" 
              className={`transition-colors ${(pathname === "/properties" || pathname.startsWith("/property/")) ? "text-brand font-bold" : "text-dark/70 hover:text-brand"}`}
            >
              Properties
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${pathname === "/contact" ? "text-brand font-bold" : "text-dark/70 hover:text-brand"}`}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
      </div>
    </header>
  );
}
