import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import G1 from "../../../assets/Img/G1.jpg"

const AboutMe = () => {
    return (
        <section className="min-h-screen bg-[#000000]  text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left Side: Image */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-5/12 flex justify-center md:justify-end"
            >
                <img
                    src={G1}
                    alt="About Me"
                    className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
                />
            </motion.div>

            {/* Right Side: Text Content */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-7/12 text-center md:text-left relative"
            >
                {/* Vertical Label */}
                <div className="absolute left-[40%] -top-6 md:-left-16 lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest opacity-70">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-16 h-[2px] bg-white"></div>
                        <p className='md:text-lg text-[#04ecf8]'>ABOUT Me</p>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-0 md:pl-10">
                    <span className='text-[#b728ff]'> A Passionate</span> <br /> Front-End And UI Developer
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                    I'm a passionate Front-End and UI Developer dedicated to building visually appealing, user-centric web experiences. With a strong eye for design and a love for clean, efficient code, I blend creativity with functionality to deliver responsive, modern interfaces. Whether it's crafting smooth animations, ensuring pixel-perfect layouts, or optimizing performance, I aim to create digital experiences that truly engage users.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    {/* Primary Button */}
                    <Link
                        to="/Projects"
                        className="bg-gradient-to-r from-black to-[#b728ff] text-white font-semibold py-2.5 px-6 rounded-xl shadow-md hover:from-[#b728ff] hover:to-black transition-all duration-300 ease-in-out"
                    >
                        See Projects
                    </Link>


                    {/* Secondary Button */}
                    <a
                        href="https://ishan-web-dev.github.io/Ishan-Resume/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black border border-[#b728ff] text-[#b728ff] font-semibold py-2.5 px-6 rounded-xl hover:bg-[#b728ff] hover:text-white transition-all duration-300 ease-in-out"
                    >
                        My Resume Site
                    </a>

                </div>

            </motion.div>
        </section>
    );
};

export default AboutMe;
