import React from "react";

const camps = [
  {
    id: 1,
    title: "Summer Language Camp",
    image: "/images/summer-camp.jpg",
    description:
      "Join us for an immersive summer experience where you can learn a new language while enjoying fun activities!",
  },
  {
    id: 2,
    title: "Winter Language Camp",
    image: "/images/winter-camp.jpg",
    description:
      "Experience the joy of learning a language in a winter wonderland with engaging lessons and activities.",
  },
  {
    id: 3,
    title: "Adventure Language Camp",
    image: "/images/adventure-camp.jpg",
    description:
      "Explore the great outdoors while enhancing your language skills through interactive learning.",
  },
];

const CampsSection = () => {
  return (
    <section className="py-16 bg-gray-100" id="camp">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Our Camps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {camps.map((camp) => (
            <div
              key={camp.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={camp.image}
                alt={camp.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{camp.title}</h3>
                <p className="text-gray-600">{camp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampsSection;
