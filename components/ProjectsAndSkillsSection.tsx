"use client";

import { useEffect, useState, useRef, ReactNode, FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiNuxtdotjs,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiDotnet,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { BsWindows } from "react-icons/bs";

interface Skill {
  icon: ReactNode;
}

const ProjectsAndSkillsSection: FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<string>("Baybayani");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const baybayaniImages = [
    "/images/b1.png",
    "/images/b2.png",
    "/images/b3.png",
    "/images/b4.png",
    "/images/b5.png",
    "/images/b6.png",
    "/images/b7.png",
    "/images/b8.png",
    "/images/b9.png",
    "/images/b10.png",
    "/images/b11.png",
    "/images/b12.png",
    "/images/b13.png",
  ];
  const visconnImages = [
    "/images/v1.png",
    "/images/v2.png",
    "/images/v3.png",
    "/images/v4.png",
    "/images/v5.png",
    "/images/v6.png",
    "/images/v7.png",
    "/images/v8.png",
    "/images/v9.png",
    "/images/v10.png",
  ];
  const walletManagerImages = [
    "/images/w1.png",
    "/images/w2.png",
    "/images/w3.png",
    "/images/w4.png",
    "/images/w5.png",
    "/images/w6.png",
    "/images/w7.png",
    "/images/w8.png",
    "/images/w9.png",
    "/images/w10.png",
    "/images/w11.png",
  ];
  const flowerClassifierImages = [
    "/images/f1.png",
    "/images/f2.png",
    "/images/f3.png",
    "/images/f4.png",
    "/images/f5.png",
  ];

  const getSelectedProjectImages = () => {
    switch (selectedProject) {
      case "Baybayani":
        return baybayaniImages;
      case "Visconn":
        return visconnImages;
      case "Wallet Manager":
        return walletManagerImages;
      case "Flower Classifier":
        return flowerClassifierImages;
      default:
        return [];
    }
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    const images = getSelectedProjectImages();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [selectedProject]);

  const handleNextImage = () => {
    const images = getSelectedProjectImages();
    setCurrentSlide((prev) => (prev + 1) % images.length);
    startAutoSlide(); // reset timer
  };

  const handlePrevImage = () => {
    const images = getSelectedProjectImages();
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    startAutoSlide(); // reset timer
  };

  const skills: Skill[] = [
    { icon: <FaJs size={30} /> },
    { icon: <SiTypescript size={30} /> },
    { icon: <span className="text-xl">SQL</span> },
    { icon: <span className="text-xl">C</span> },
    { icon: <span className="text-xl">C++</span> },
    { icon: <FaPython size={30} /> },
    { icon: <FaHtml5 size={30} /> },
    { icon: <FaCss3Alt size={30} /> },
    { icon: <SiTailwindcss size={30} /> },
    { icon: <FaReact size={30} /> },
    { icon: <SiVuedotjs size={30} /> },
    { icon: <SiNuxtdotjs size={30} /> },
    { icon: <SiNextdotjs size={30} /> },
    { icon: <SiMysql size={30} /> },
    { icon: <SiPostgresql size={30} /> },
    { icon: <SiDotnet size={30} /> },
    { icon: <FaGitAlt size={30} /> },
    { icon: <FaGithub size={30} /> },
    { icon: <SiFigma size={30} /> },
    { icon: <SiCanva size={30} /> },
    { icon: <BsWindows size={30} /> },
    { icon: <span className="text-xl">C#</span> },
    { icon: <span className="text-xl">XAMPP</span> },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-4 sm:px-12 py-16 overflow-hidden"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Project & Development
        </h1>
        <p className="text-lg text-gray-300">
          Explore my core technical skills and the projects that demonstrate
          them.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 max-w-screen-xl mx-auto items-center">
        {/* Skills */}
        <div className="col-span-12 sm:col-span-2">
          <h2 className="text-3xl text-center font-semibold text-white mb-6">
            Tech Stack
          </h2>
          <div className="relative h-[350px] overflow-hidden">
            <div className="scroll-vertical">
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="py-2 flex justify-center">
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Projects
          </h2>
          <div className="relative bg-gray-800/50 rounded-md overflow-hidden shadow-lg">
            {/* Project Switch Buttons */}
            <div className="absolute top-0 left-0 w-full text-white px-4 py-3 flex justify-center space-x-8 backdrop-blur-sm z-10">
              {[
                "Baybayani",
                "Visconn",
                "Wallet Manager",
                "Flower Classifier",
              ].map((project) => (
                <button
                  key={project}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentSlide(0);
                  }}
                  className={`text-sm sm:text-base transition font-medium cursor-pointer ${
                    selectedProject === project
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {project}
                </button>
              ))}
            </div>

            {/* Project Image */}
            <div className="mt-16 sm:mt-20 relative">
              {isClient && (
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${selectedProject}-${currentSlide}`}
                      src={getSelectedProjectImages()[currentSlide]}
                      alt={`${selectedProject} Slide ${currentSlide + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="object-cover w-full h-[250px] sm:h-[400px] md:h-[480px] max-w-full max-h-full"
                    />
                  </AnimatePresence>

                  {/* Navigation Controls */}
                  <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 opacity-60">
                    <button
                      onClick={handlePrevImage}
                      className="text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity duration-300 opacity-50 hover:opacity-100"
                    >
                      &#8249;
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity duration-300 opacity-50 hover:opacity-100"
                    >
                      &#8250;
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndSkillsSection;
