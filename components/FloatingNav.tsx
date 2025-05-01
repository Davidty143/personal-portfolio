"use client";

import { useEffect, useState } from "react";
import { User, Laptop, Book, Phone } from "phosphor-react";

export default function FloatingNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("profile");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0.6 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <div className="hidden lg:flex flex-col gap-6 fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <a
        href="#profile"
        className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md transition-all hover:scale-105 
          flex items-center justify-center ring-4 ring-gray-600 ring-offset-2 ring-offset-gray-800 animate-wave-float-1"
        aria-label="Profile"
      >
        <User size={24} weight="bold" />
      </a>

      <a
        href="#education"
        className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md transition-all hover:scale-105 
          flex items-center justify-center ring-4 ring-gray-600 ring-offset-2 ring-offset-gray-800 animate-wave-float-2"
        aria-label="Education"
      >
        <Book size={24} weight="bold" />
      </a>

      <a
        href="#skills"
        className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md transition-all hover:scale-105 
          flex items-center justify-center ring-4 ring-gray-600 ring-offset-2 ring-offset-gray-800 animate-wave-float-3"
        aria-label="Skills"
      >
        <Laptop size={24} weight="bold" />
      </a>

      <a
        href="#contact"
        className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md transition-all hover:scale-105 
          flex items-center justify-center ring-4 ring-gray-600 ring-offset-2 ring-offset-gray-800 animate-wave-float-4"
        aria-label="Contact"
      >
        <Phone size={24} weight="bold" />
      </a>
    </div>
  );
}
