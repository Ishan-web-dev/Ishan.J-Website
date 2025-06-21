import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const AboutSec = () => {
    return (
        <section id="about" className="py-20 px-4 md:px-20 bg-[#121212] text-white">
            <motion.div
                className="container mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
            >
                {/* Heading */}
                <motion.h2 className="text-purple-400 text-lg mb-2" variants={cardVariants}>
                    About Us
                </motion.h2>
                <motion.h3 className="text-3xl font-bold mb-4" variants={cardVariants}>
                    Capturing Moments That Last Forever
                </motion.h3>
                <motion.p className="text-gray-400 mb-12 max-w-3xl" variants={cardVariants}>
                    Every moment holds a story — and I believe in preserving those stories in their purest form. With an eye for detail and a passion for timeless beauty, we capture not just images, but emotions that resonate long after the shutter clicks. Let us turn your fleeting moments into lasting memories you'll cherish forever.
                </motion.p>

                {/* Stats Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { value: '1+', label: 'Years of Experience' },
                        { value: '15+', label: 'Projects Delivered' },
                        { value: '5+', label: 'Live Web Applications' },
                        { value: '100%', label: 'Client Satisfaction' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 text-center shadow hover:shadow-purple-700 transition duration-300"
                        >
                            <h4 className="text-3xl font-bold text-purple-400 mb-2">{item.value}</h4>
                            <p className="text-gray-400">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4 mt-12"
                    variants={cardVariants}
                >
                    <Link to="/PersonalInfo"
                        href="#team"
                        className="rounded-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 transition duration-300"
                    >
                        Personal Info
                    </Link>
                    <Link to="/Contact"
                        className="rounded-full border-2 border-white text-white py-3 px-8 hover:bg-white hover:text-purple-900 transition duration-300"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSec;
