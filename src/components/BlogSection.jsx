import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Exploring Language Camps",
      image: "/images/camp.jpg",
      excerpt:
        "Join us for an unforgettable experience at our language camps, where learning meets adventure!",
    },
    {
      title: "Holiday Programs for Everyone",
      image: "/images/holiday.jpg",
      excerpt:
        "Discover our exciting holiday programs designed to enhance language skills while having fun!",
    },
    {
      title: "Tips for Learning a New Language",
      image: "/images/tips.jpg",
      excerpt:
        "Check out our top tips for mastering a new language effectively and enjoyably.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
