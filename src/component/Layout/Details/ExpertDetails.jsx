import React from 'react';
import { motion } from 'framer-motion';
import G1 from "../../../assets/Img/G2.jpg";

// Data separated for mapping
const skills = ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Tailwind CSS'];
const socials = ['github', 'linkedin', 'twitter', 'dribbble'];
const experiences = [
    {
        position: "Front-End/ UI Developer",
        company: "Product Based Company",
        period: "2020 - Present",
        description: "Lead a team of developers to build scalable web applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 40%"
    },
    {
        position: "Web Developer",
        company: "Digital Solutions LLC",
        period: "2018 - 2020",
        description: "Developed and maintained client websites with a focus on responsive design and performance optimization. Increased client satisfaction scores by 35%."
    },
    {
        position: "Junior Developer",
        company: "StartUp Ventures",
        period: "2016 - 2018",
        description: "Assisted in building MVP products and participated in all phases of the development lifecycle. Learned agile methodologies and modern tech stacks."
    }
];

const ExpertDetails = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "backOut"
            }
        }
    };

    return (
        <motion.div
            className="bg-black min-h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto py-12 px-4 ">
                <motion.div
                    className="grid grid-cols-4 sm:grid-cols-12 gap-6 mt-10"
                    variants={containerVariants}
                >
                    {/* Left Column */}
                    <motion.div
                        className="col-span-4 sm:col-span-3"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="bg-gray-900 shadow-lg rounded-lg p-6 border border-purple-500/20"
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="flex flex-col items-center">
                                <motion.img
                                    src={G1}
                                    className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-purple-500"
                                    alt="John Doe"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                />
                                <h1 className="text-xl font-bold text-white">Ishan Joshi</h1>
                                <p className="text-purple-400">Front-End/ UI Developer</p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <motion.a
                                        href="#"
                                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Resume
                                    </motion.a>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-gray-700" />
                            <div className="flex flex-col">
                                <span className="text-purple-400 uppercase font-bold tracking-wider mb-2">Skills</span>
                                <ul className="space-y-2">
                                    {skills.map((skill, index) => (
                                        <motion.li
                                            key={index}
                                            className="text-gray-300 flex items-center"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                        >
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                            {skill}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="col-span-4 sm:col-span-9"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="bg-gray-900 shadow-lg rounded-lg p-6 border border-purple-500/20"
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <motion.h2
                                className="text-xl font-bold mb-4 text-white"
                                initial={{ x: -10 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                About Me
                            </motion.h2>
                            <motion.p
                                className="text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Passionate software developer with 5+ years of experience creating web applications.
                                Specialized in modern JavaScript frameworks with a focus on user experience
                                and clean, maintainable code.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <h3 className="font-semibold text-center mt-6 -mb-2 text-purple-400">Find me on</h3>
                                <div className="flex justify-center items-center gap-6 my-6">
                                    {socials.map((social, index) => (
                                        <motion.a
                                            key={social}
                                            href="#"
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                            whileHover={{ y: -3, scale: 1.1 }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                delay: 0.7 + index * 0.1,
                                                stiffness: 150,
                                                damping: 10
                                            }}
                                        >
                                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                                <span className="text-lg">{social[0].toUpperCase()}</span>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.h2
                                className="text-xl font-bold mt-6 mb-4 text-white"
                                initial={{ x: -10 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                Experience
                            </motion.h2>

                            {experiences.map((exp, i) => (
                                <motion.div
                                    className="mb-6 group"
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + i * 0.2 }}
                                >
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-purple-400 font-bold group-hover:text-purple-300 transition-colors">
                                            {exp.position}
                                        </span>
                                        <p>
                                            <span className="text-gray-400 mr-2">at {exp.company}</span>
                                            <span className="text-gray-500">{exp.period}</span>
                                        </p>
                                    </div>
                                    <p className="mt-2 text-gray-300">
                                        {exp.description}
                                    </p>
                                    <motion.div
                                        className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-4"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 1 + i * 0.2 }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ExpertDetails;
