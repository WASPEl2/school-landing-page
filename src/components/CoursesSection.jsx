import React from "react";

const teachingTeamImages = [
  "/images/I22.jpg",
  "/images/I24.jpg",
  "/images/I26.jpg",
  "/images/I1.jpg",
  "/images/I2.jpg",
  "/images/I3.jpg",
  "/images/I4.jpg",
  "/images/I7.jpg",
  "/images/I10.jpg",
  "/images/I17.jpg",
  "/images/I11.jpg",
];

const teachingMethodImages = [
  "/images/I6.jpg",
  "/images/I8.jpg",
  "/images/I5.jpg",
  "/images/I9.jpg",
  "/images/I14.jpg",
  "/images/I15.jpg",
  "/images/I5.jpg",
  "/images/I20.jpg",
];

const earlyAgeImages = [
  "/images/I6.jpg",
  "/images/I13.jpg",
  "/images/I18.jpg",
  "/images/I19.jpg",
];

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">{title}</h2>
);

const SectionParagraph = ({ children }) => (
  <p className="text-gray-700 leading-relaxed mb-4 text-lg">{children}</p>
);

const ImageGrid = ({ images }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
    {images.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Image ${idx + 1}`}
        className="w-full h-32 sm:h-36 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
      />
    ))}
  </div>
);

const CoursesSection = () => {
  return (
    <section
      id="courses"
      className="py-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto max-w-6xl px-6 md:px-8 space-y-24">
        {/* COURSE FOCUS */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <SectionTitle title="COURSE FOCUS" />
            <SectionParagraph>
              SpeakEZ offers a wide variety of courses to schools in and around
              Bangkok. Our courses have been developed specifically for Thai
              students. Each school we work with receives a custom package of
              SpeakEZ-developed courses tailored to their needs and budget.
            </SectionParagraph>
            <SectionParagraph>
              SpeakEZ courses cover all aspects of the English language. From
              speaking and listening to pronunciation and grammar, we ensure
              students receive the best possible education to improve their
              English skills quickly.
            </SectionParagraph>
            <SectionParagraph>
              We've developed a unique teaching method. Our intensive teacher
              training ensures classes are taught in a fun and exciting way.
              Each class is led by a native English speaker and supported by a
              Thai assistant, enabling students to participate more actively
              than in traditional textbook-based learning.
            </SectionParagraph>
          </div>
          <div className="md:w-1/2">
            <ImageGrid images={teachingMethodImages.slice(0, 4)} />
          </div>
        </div>

        {/* OUR TEACHING TEAMS */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <ImageGrid images={teachingTeamImages.slice(0, 4)} />
          </div>
          <div className="md:w-1/2">
            <SectionTitle title="OUR TEACHING TEAMS" />
            <SectionParagraph>
              Our teaching teams consist of a native English speaker and a Thai
              team teacher. We carefully select each teacher to ensure a high
              standard of education.
            </SectionParagraph>
            <SectionParagraph>
              We believe that SpeakEZ’s success is rooted in the quality of our
              educators. All teachers hold at least a bachelor's degree and have
              a minimum of one year of teaching experience. Ongoing training
              helps them stay inspired and equipped with fresh, fun ideas.
            </SectionParagraph>
          </div>
        </div>

        {/* Speak EZ Teaching Methods */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <SectionTitle title="Speak EZ Teaching Methods" />
            <SectionParagraph>
              Speak EZ uses songs and games to make English learning enjoyable.
              Native speakers work alongside Thai teachers to manage the
              classroom and assist with translations and activities. This dual
              approach allows students to participate more freely than in
              traditional settings.
            </SectionParagraph>
            <SectionParagraph>
              Students in a fun, engaging environment become naturally motivated
              to participate and learn from one another, enhancing the learning
              experience.
            </SectionParagraph>
          </div>
          <div className="md:w-1/2">
            <ImageGrid images={teachingMethodImages.slice(4)} />
          </div>
        </div>

        {/* Importance Of Learning At An Early Age */}
        <div className="text-center">
          <SectionTitle title="The Importance Of Learning At An Early Age" />
          <SectionParagraph>
            Young learners absorb information more effectively than older
            students. Early exposure to English sets the foundation for future
            success and removes the self-conscious barriers that hinder active
            participation.
          </SectionParagraph>
          <ImageGrid images={earlyAgeImages} />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
