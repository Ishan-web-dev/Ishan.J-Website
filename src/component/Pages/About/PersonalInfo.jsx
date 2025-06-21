import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
};

const PersonalInfo = () => {
    const infoListLeft = [
        { label: 'Birthday', value: '29 Aug 2003' },
        { label: 'Website', value: 'https://ishan-web-dev.github.io/Ishan-Resume/' },
        { label: 'Degree', value: 'Bachlor of Computer Science(Rajasthan University)' },
        { label: 'Location', value: 'Jaipur, Rajasthan' },
    ];

    const infoListRight = [
        { label: 'Email', value: 'Workishan24@gmail.com' },
        { label: 'Phone No', value: '+91 7207881725' },
        { label: 'Employment', value: 'In Pvt. Ltd, Company' },
        { label: 'Freelance', value: 'Available' },
    ];

    const skills = [
        { name: 'HTML/CSS/JavaScript', percent: 90 },
        { name: 'React/Vite', percent: 80 },
        { name: 'Tailwind CSS', percent: 85 },
        { name: 'NextJS', percent: 40 },
        { name: 'Figma', percent: 50 },
    ];

    const buttons = [
        { label: 'Download CV', onClick: () => alert("Not Available") },
        { label: 'Hire Me', onClick: () => { }, link: '/Contact' },
    ];

    return (
        <div className="w-full min-h-screen flex items-center bg-black text-white">
            <motion.div
                className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-10 pb-20 mt-13"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                {/* Title */}
                <motion.div className="flex flex-col gap-2 mb-2 md:mb-4" variants={fadeInUp}>
                    <h2 className="text-4xl font-serif font-semibold">About Me</h2>
                    <span className="w-16 h-[4px] bg-[#b728ff] rounded"></span>
                    <span className="w-8 h-[4px] bg-[#b728ff] rounded"></span>
                </motion.div>

                <motion.h4
                    className="capitalize text-xl font-semibold"
                    variants={fadeInUp}
                >
                    I'm Samuel Abera and I'm{' '}
                    <span className="text-[#b728ff]">Front-End Developer/ UI Developer</span>
                </motion.h4>

                <motion.p variants={fadeInUp}>
                    I am a dedicated and innovative FullStack Developer passionate about creating impactful digital
                    experiences. With a keen eye for detail and a commitment to excellence, I specialize in designing and developing
                    solutions that combine creativity with functionality.
                </motion.p>

                <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between">
                    {/* Personal Info Section */}
                    <motion.div className="w-full flex flex-col items-stretch gap-4" variants={fadeInUp}>
                        <div className="flex flex-col sm:flex-row gap-2 md:gap-6 items-center justify-between font-serif">
                            {[infoListLeft, infoListRight].map((list, idx) => (
                                <ul key={idx} className="w-full text-white">
                                    {list.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="py-2 border-b border-gray-600"
                                            variants={fadeInUp}
                                        >
                                            <span className="font-bold text-[#b728ff]">{item.label} :</span> {item.value}
                                        </motion.li>
                                    ))}
                                </ul>
                            ))}
                        </div>

                        {/* Buttons */}
                        <motion.div className="flex gap-4 justify-center sm:justify-start" variants={fadeInUp}>
                            {buttons.map((btn, i) => (
                                <a
                                    key={i}
                                    href={btn.link}
                                    onClick={btn.onClick}
                                    className="px-4 sm:px-6 py-2 bg-[#b728ff] hover:bg-[#a020e0] rounded-full text-white font-bold transition-all duration-200"
                                >
                                    {btn.label}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div className="w-full flex flex-col gap-4" variants={staggerContainer}>
                        {skills.map((skill, i) => (
                            <motion.div key={i} className="flex flex-col gap-2" variants={fadeInUp}>
                                <div className="w-full flex justify-between font-semibold">
                                    <span>{skill.name}</span>
                                    <span>{skill.percent} %</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full">
                                    <motion.div
                                        className="h-2 bg-[#b728ff] rounded-full transition-all duration-500"
                                        style={{ width: `${skill.percent}%` }}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percent}%` }}
                                        transition={{ duration: 1, ease: 'easeOut' }}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default PersonalInfo;
