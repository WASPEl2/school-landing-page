import React from "react";

const TeachingMethodsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Teaching Methods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/images/method1.jpg"
              alt="Method 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Interactive Learning</h3>
            <p className="mt-2 text-gray-600">
              We focus on interactive methods that engage students in the
              learning process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/images/method2.jpg"
              alt="Method 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Cultural Immersion</h3>
            <p className="mt-2 text-gray-600">
              Our programs include cultural activities to enhance language
              learning.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/images/method3.jpg"
              alt="Method 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">
              Personalized Approach
            </h3>
            <p className="mt-2 text-gray-600">
              We tailor our teaching methods to meet the individual needs of
              each student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodsSection;
