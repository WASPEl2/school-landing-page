import React from "react";

const holidayImagesRow1 = [
  "/images/H10.jpg",
  "/images/H11.jpg",
  "/images/H12.jpg",
  "/images/H13.jpg",
];

const holidayImagesRow2 = [
  "/images/H1.jpg",
  "/images/H2.jpg",
  "/images/H3.jpg",
];

const holidayImagesRow3 = [
  "/images/H4.jpg",
  "/images/H5.jpg",
  "/images/H6.jpg",
];

const holidayImagesRow4 = [
  "/images/H7.jpg",
  "/images/H8.jpg",
  "/images/H9.jpg",
];

const HolidayImageGrid = ({ images, startIndex = 0 }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
    {images.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Holiday ${startIndex + idx}`}
        className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
      />
    ))}
  </div>
);

const HolidayProgramSection = () => {
  return (
    <section
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100"
      id="holiday"
    >
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">
          Holiday Programs
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          While Thai schools close for term breaks, Speak EZ teachers stay busy!
          We provide exciting term break activities that blend learning with
          fun.
        </p>

        <HolidayImageGrid images={holidayImagesRow1} startIndex={10} />

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          These holiday programs are similar to camps with lessons based around
          exciting topics. Each session includes worksheets and hands-on
          activities. Holiday sessions are usually longer, giving kids more time
          to learn and enjoy.
        </p>

        <HolidayImageGrid images={holidayImagesRow2} startIndex={1} />
        <HolidayImageGrid images={holidayImagesRow3} startIndex={4} />
        <HolidayImageGrid images={holidayImagesRow4} startIndex={7} />
      </div>
    </section>
  );
};

export default HolidayProgramSection;
