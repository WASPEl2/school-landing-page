"use client";
import React, { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "holiday", label: "Holiday Program" },
  { id: "camp", label: "Camp" },
  { id: "gallery", label: "Gallery" },
  { id: "about", label: "About Us" },
];

const HeaderNavbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          el.offsetTop + el.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold">SpeakEZ</div>
        <ul className="flex space-x-6">
          {sections.map((section) => (
            <li key={section.id} className="relative">
              <a
                href={`#${section.id}`}
                className={`
                  relative
                  text-gray-700
                  hover:text-blue-500
                  transition-colors duration-300
                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-0.5
                  after:bg-blue-500
                  after:transition-all
                  after:duration-300
                  after:ease-in-out
                  ${activeSection === section.id ? "after:w-full" : "after:w-0"}
                `}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
