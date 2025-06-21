import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const AbCards = () => {
    return (
        <section id="about" className="py-10 px-4 md:px-20 bg-[#ffffff] text-white">
            <motion.div
                className="container mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
            >
                {/* Stats Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { value: '10+', label: 'Years Experience' },
                        { value: '500+', label: 'Projects Completed' },
                        { value: '50+', label: 'Awards Won' },
                        { value: '100%', label: 'Client Satisfaction' },
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
            </motion.div>
        </section>
    );
};

export default AbCards;
