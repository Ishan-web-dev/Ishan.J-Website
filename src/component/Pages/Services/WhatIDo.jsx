import React from 'react';
import { motion } from 'framer-motion';
import {
    FaCode,
    FaPaintBrush,
    FaTools,
} from 'react-icons/fa';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const features = [
    {
        icon: <FaCode className="text-[#b728ff] text-3xl" />,
        title: 'Web Development',
        description: 'App directory, routing, layouts, and API routes.',
    },
    {
        icon: <FaPaintBrush className="text-[#b728ff] text-3xl" />,
        title: 'UI Development',
        description: 'Concurrent features and server/client components.',
    },
    {
        icon: <FaTools className="text-[#b728ff] text-3xl" />,
        title: 'Canva & Figma Designing',
        description: 'Creative UI design with modern toolkits and precision.',
    },
];
const WhatIDo = () => {
    return (
        <section id="features" className="bg-black py-16 px-4 text-white ">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center text-center space-y-6 ">
                <motion.h2
                    className="font-bold text-4xl sm:text-5xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    Features
                </motion.h2>
                <motion.p
                    className="max-w-[85%] text-gray-300 text-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={1}
                >
                    The product personalizes user experiences by understanding individual preferences and tailoring
                    content based on behavior and data.
                </motion.p>
            </div>

            <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl cursor-pointer">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="rounded-2xl bg-[#121212] p-6 border border-[#1f1f1f] shadow hover:shadow-[#b728ff]/30 transition-shadow"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={index + 2}
                    >
                        <div className="text-[#b728ff] text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};



export default WhatIDo;
