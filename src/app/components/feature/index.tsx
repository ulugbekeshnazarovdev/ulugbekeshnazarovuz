import React from 'react';

const Feature = () => {
  return (
    <section className="container mx-auto px-5 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        What I Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Web Development', 'UI/UX Design', 'Mobile Apps'].map(
          (feature, index) => (
            <div
              key={index}
              className="bg-zinc-900/40 backdrop-brightness-100 backdrop-blur-lg hover:scale-105 transition-all duration-500 cursor-pointer p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{feature}</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Feature;
