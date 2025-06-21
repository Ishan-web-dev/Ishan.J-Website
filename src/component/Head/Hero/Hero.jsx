import React from 'react';
import { motion } from 'framer-motion';
import C1 from '../../../assets/C1.jpg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${C1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-5 lg:px-12 py-24 md:py-32 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-5xl bg-gradient-to-r from-blue-600 via-[#01f8f8] to-indigo-500 text-transparent bg-clip-text md:text-5xl font-bold leading-tight mb-6">
            I'm Ishan, a <br />
            <TypeAnimation
              sequence={[
                'Front-End Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Creative Technologist',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block bg-gradient-to-r from-blue-600 via-[#b728ff] to-indigo-500 text-transparent bg-clip-text"
            />
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            "Hi, I'm Ishan — a passionate Front-End Developer crafting responsive, user-friendly websites with modern technologies. I specialize in turning ideas into interactive digital experiences, focusing on performance, accessibility, and clean code. Let's build something amazing together."
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white text-white font-medium py-3 px-6 rounded-lg backdrop-blur-md hover:bg-white hover:text-black transition-all"
            >
              Documentation
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-2/5 bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl"
        >
          <h2 className="text-2xl font-semibold mb-6">About Me</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center">
              <span className="w-3 h-3 mr-3 rounded-full bg-yellow-400"></span>
              UI & Frontend Developer with a passion for clean design and responsive experiences
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 mr-3 rounded-full bg-green-400"></span>
              Practical experience working with fintech companies and real-world UI projects
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 mr-3 rounded-full bg-purple-500"></span>
              Skilled in modern stacks like React, Tailwind CSS, Framer Motion & Next.js
            </li>
          </ul>

        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="black"
            d="M0,32 C480,80 960,0 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
