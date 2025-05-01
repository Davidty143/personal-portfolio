"use client";

import { useState, useEffect } from "react";

export default function EducationSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="education"
      className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-4 sm:px-12 py-16"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Column for Left (Images) and Right (Text) */}
        <div className="w-full flex flex-col lg:flex-row gap-16">
          {/* Left Column (On Desktop: Images) */}
          <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
            {/* Title and Description (Top on mobile only) */}
            <div className="block lg:hidden text-center mb-8">
              <h2 className="text-3xl font-bold">My Education Journey</h2>
              <p className="text-base text-gray-300 mt-6">
                A snapshot of the key milestones shaping my expertise in
                Software and Web Development.
              </p>
            </div>

            {/* Mobile Images (Vertical) */}
            <div className="flex flex-col lg:hidden gap-8">
              <div className="w-full h-60 rounded-md bg-white/5 ring-4 ring-gray-700 shadow-lg overflow-hidden">
                {isClient && (
                  <img
                    src="/vsu_gate.jpg"
                    alt="Education Top"
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="w-full h-60 rounded-md bg-white/5 ring-4 ring-gray-700 shadow-lg overflow-hidden">
                {isClient && (
                  <img
                    src="/dcst_cover.jpg"
                    alt="Education Bottom"
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>

            {/* Desktop Images */}
            <div className="hidden lg:block relative h-[32rem]">
              <div className="absolute top-0 left-0 w-96 h-64 rounded-md bg-white/5 ring-4 ring-gray-700 ring-offset-2 ring-offset-gray-800 shadow-xl overflow-hidden">
                {isClient && (
                  <img
                    src="/vsu_gate.jpg"
                    alt="Education Top"
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="absolute bottom-0 right-0 w-96 h-64 rounded-md bg-white/5 ring-4 ring-gray-700 ring-offset-2 ring-offset-gray-800 shadow-xl overflow-hidden">
                {isClient && (
                  <img
                    src="/dcst_cover.jpg"
                    alt="Education Bottom"
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Column (Text) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start gap-8 order-3 lg:order-2">
            {/* Title and Description (Desktop only) */}
            <div className="hidden lg:block space-y-4 text-left relative">
              <h2 className="text-5xl font-bold">My Education Journey</h2>
              <p className="text-lg text-gray-300 mt-10">
                A snapshot of the key milestones shaping my expertise in
                Software and Web Development.
              </p>
              <div className="absolute -top-3 -left-40 hidden lg:block">
                <svg
                  width="80"
                  height="80"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform rotate-180"
                >
                  <path d="M14 7l5 5-5 5M19 12H3" />
                </svg>
              </div>
            </div>

            {/* Education Info */}
            <div className="bg-gray-800/50 rounded-md p-6 shadow-inner border border-gray-700 text-gray-200 text-sm sm:text-base md:text-lg leading-7">
              <p className="text-xl font-semibold text-white">
                Visayas State University
              </p>
              <p className="text-md italic text-gray-300">Baybay City, Leyte</p>
              <p className="mt-2 text-md text-gray-300">
                <strong>
                  Third-Year Bachelor of Science in Computer Science Student
                </strong>
              </p>
            </div>

            {/* Course List */}
            <div className="bg-gray-800/50 rounded-md p-5 shadow-inner border border-gray-700 text-gray-200 text-sm sm:text-base md:text-lg leading-7">
              Object-Oriented Programming · Intermediate Programming ·
              Fundamentals of Database Systems · Data Structures and Algorithms
              · Applications Development · Event Driven Programming · Operating
              Systems · Software Engineering · Web Systems and Technologies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
