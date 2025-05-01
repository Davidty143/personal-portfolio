"use client";

import { useEffect, useState, ReactNode, FC } from "react";
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
  const [isClient, setIsClient] = useState<boolean>(false); // Client-side flag
  const [selectedProject, setSelectedProject] = useState<string>("Baybayani");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Set isClient to true once the component has mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  const baybayaniImages: string[] = [
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

  // Set up an interval for switching slides when the Baybayani project is selected
  useEffect(() => {
    if (selectedProject !== "Baybayani") return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % baybayaniImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedProject]);

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
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Project & Development
        </h1>
        <p className="text-lg text-gray-300">
          Explore my core technical skills and the projects that demonstrate
          them.
        </p>
      </div>

      {/* Grid */}
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
                  className={`text-sm sm:text-base transition font-medium ${
                    selectedProject === project
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {project}
                </button>
              ))}
            </div>

            {/* Add margin top to prevent image overlap */}
            <div className="mt-16 sm:mt-20">
              {/* Conditional rendering of images */}
              {isClient && selectedProject === "Baybayani" && (
                <div className="relative">
                  {/* Make the image horizontally rectangular */}
                  <img
                    src={baybayaniImages[currentSlide]}
                    alt={`Baybayani Slide ${currentSlide + 1}`}
                    className="object-cover w-full h-[250px] sm:h-[400px] md:h-[480px] max-w-full max-h-full transition-all duration-700 "
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes scrollVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .scroll-vertical {
          display: flex;
          flex-direction: column;
          animation: scrollVertical 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsAndSkillsSection;
