import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-800 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex">
        <div className="w-1/2">
          <img src="/about.jpg" alt="The Farm House" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-bold text-green-950 mb-4">About Us</h1>
          <p className="text-lg text-black mb-4">
            The Farm House is a unique agricultural haven dedicated to sustainable farming practices and holistic animal care.
            Nestled in the heart of nature, our farm thrives on the principles of organic farming and ethical treatment of animals.
          </p>
          <ul className="list-disc list-inside mb-4">
        
            <li>
              <strong>Animal Husbandry:</strong> We care for a variety of farm animals, including cows, goats, chickens, and more. Our animals are raised in spacious, natural habitats with a focus on their health and well-being.
            </li>
            <li>
              <strong>Community Engagement:</strong>  We aim to spread knowledge about sustainable farming and inspire the next generation of farmers.
            </li>
            
          </ul>
          <p className="text-lg text-black">
            Join us on a journey to a sustainable future, where farming meets compassion and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
