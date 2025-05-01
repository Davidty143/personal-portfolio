"use client";

import { useState, useEffect } from "react";
import { User, Laptop, Book, Phone, EnvelopeSimple } from "phosphor-react";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="profile"
      className="h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-4 sm:px-12 flex items-center justify-center"
    >
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side: Text */}
        <div className="lg:w-1/2 px-4 flex justify-center order-2 lg:order-1">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              David Antonio Ty
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Junior UI/UX Designer & Full Stack Developer _{" "}
            </p>

            {/* Email with icon */}
            <div className="flex items-center gap-3 text-gray-400 text-lg sm:text-lg justify-center lg:justify-start">
              <EnvelopeSimple size={20} weight="bold" />
              <a
                href="mailto:davidantonio.ty6@gmail.com"
                className="hover:underline"
              >
                davidantonio.ty6@gmail.com
              </a>
            </div>

            {/* Mobile number with icon */}
            <div className="flex items-center gap-3 text-gray-400 text-lg sm:text-lg justify-center lg:justify-start">
              <Phone size={20} weight="bold" />
              <a href="tel:+639123456789" className="hover:underline">
                0931-729-1299
              </a>
            </div>

            {/* Navigation Icons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-12 gap-6">
              <div className="flex gap-6 items-center justify-center">
                {/* Profile Icon */}
                <a
                  href="#profile"
                  className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md transition-all hover:scale-105 flex items-center justify-center ring-4 ring-gray-600 ring-offset-2 ring-offset-gray-800 animate-wave-float-1"
                >
                  <User size={24} weight="bold" />
                </a>

                {/* Education Icon */}
                <a
                  href="#education"
                  className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md transition-all hover:scale-105 flex items-center justify-center ring-4 ring-gray-600 ring-offset-2 ring-offset-gray-800 animate-wave-float-2"
                >
                  <Book size={24} weight="bold" />
                </a>

                {/* Skills Icon */}
                <a
                  href="#skills"
                  className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md transition-all hover:scale-105 flex items-center justify-center ring-4 ring-gray-600 ring-offset-2 ring-offset-gray-800 animate-wave-float-3"
                >
                  <Laptop size={24} weight="bold" />
                </a>

                {/* Contact Icon */}
                <a
                  href="#contact"
                  className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md transition-all hover:scale-105 flex items-center justify-center ring-4 ring-gray-600 ring-offset-2 ring-offset-gray-800 animate-wave-float-4"
                >
                  <Phone size={24} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Profile Picture */}
        <div
          className="flex-shrink-0 w-full max-w-[28rem] h-full max-h-[28rem] sm:w-[22rem] sm:h-[22rem] md:w-[24rem] md:h-[24rem] lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem]
          rounded-full bg-white p-1 ring-4 ring-gray-600 ring-offset-4 ring-offset-gray-800
          shadow-[0_10px_40px_rgba(75,85,99,0.4)] transition-all duration-700 ease-in-out
          order-1 lg:order-2 hover:shadow-[0_0_70px_rgba(209,213,219,0.7)] overflow-hidden"
        >
          {isClient && (
            <img
              src="/pfp.png"
              alt="Profile Picture"
              className="object-cover w-full h-full rounded-full scale-110 translate-y-15 -translate-x-1"
            />
          )}
        </div>
      </div>
    </section>
  );
}
