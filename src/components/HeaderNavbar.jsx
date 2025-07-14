"use client";
import React, { useEffect, useState, useRef } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "holiday", label: "Holiday Program" },
  { id: "camp", label: "Camp" },
  { id: "gallery", label: "Gallery" },
  { id: "about-us", label: "About Us" },
];

const HeaderNavbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const drawerRef = useRef(null);

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

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 relative">
        <div className="text-xl font-bold">SpeakEZ</div>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
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

        {/* Mobile drawer menu */}
        <ul
          ref={drawerRef}
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-500 ease-in-out
            ${mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"}
          `}
          style={{ zIndex: 40 }}
        >
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={handleLinkClick}
                className={`
                  block
                  px-6
                  py-3
                  text-gray-700
                  hover:text-blue-500
                  transition-colors duration-300
                  relative
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
