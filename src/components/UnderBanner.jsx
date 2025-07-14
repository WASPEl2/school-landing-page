import React from "react";

const items = [
  {
    id: 1,
    title: "Camps",
    ref: "#camp",
    image:
      "https://migrationpolicycentre.eu/wp-content/uploads/2020/06/classroom-2093744_1920.jpg",
    description:
      "Speak EZ provide English camps for a variety of schools, organizations and companies throughout the year.",
  },
  {
    id: 2,
    title: "Holiday Program",
    ref: "#holiday",
    image:
      "https://migrationpolicycentre.eu/wp-content/uploads/2020/06/classroom-2093744_1920.jpg",
    description:
      "for students who are interested in studying native speakers. We teach every Saturday.",
  },
  {
    id: 3,
    title: "In Schools",
    ref: "#courses",
    image:
      "https://migrationpolicycentre.eu/wp-content/uploads/2020/06/classroom-2093744_1920.jpg",
    description:
      "Speak EZ provide English courses to schools in and around Bangkok. Our lessons are tailored to meet each school’s needs.",
  },
];

const UnderBanner = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col justify-between flex-1 p-4 pt-0">
                <div>
                  <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
                <div className="flex justify-end mt-1">
                  <a href={item.ref} className="cursor-pointer hover:underline">
                    read more ...
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnderBanner;
