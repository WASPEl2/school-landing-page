import React from "react";

const TeachingTeamsSection = () => {
  const teachingTeams = [
    {
      name: "John Doe",
      image: "/images/john_doe.jpg",
      description:
        "Expert in English language teaching with over 10 years of experience.",
    },
    {
      name: "Jane Smith",
      image: "/images/jane_smith.jpg",
      description: "Specializes in immersive language learning techniques.",
    },
    {
      name: "Emily Johnson",
      image: "/images/emily_johnson.jpg",
      description: "Passionate about teaching and cultural exchange.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Teaching Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachingTeams.map((team, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{team.name}</h3>
              <p className="text-gray-600 mt-2">{team.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingTeamsSection;
