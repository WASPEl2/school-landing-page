import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left side: Contact info */}
        <div className="text-left md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:aekapab10@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              aekapab10@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-gray-400 hover:text-white"
            >
              +66 (0) 61-6953710
            </a>
          </p>
        </div>

        {/* Right side: Links and copyright */}
        <div className="text-end md:text-right md:w-1/2">
          <div>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2 inline-block"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2 inline-block"
            >
              Terms of Service
            </a>
          </div>
          <div className="mt-6 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Language School. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
