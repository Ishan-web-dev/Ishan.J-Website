import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiNextdotjs,
    SiTailwindcss, SiGit, SiFigma, SiCanva, SiReact, SiNodedotjs, SiMongodb
} from 'react-icons/si';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const skills = [
        { name: 'HTML5', icon: <SiHtml5 size={40} color="#E14E1D" />, color: '#E14E1D' },
        { name: 'CSS3', icon: <SiCss3 size={40} color="#0277BD" />, color: '#0277BD' },
        { name: 'JavaScript', icon: <SiJavascript size={40} color="#F0DB4F" />, color: '#F0DB4F' },
        { name: 'Bootstrap', icon: <SiBootstrap size={40} color="#7952B3" />, color: '#7952B3' },
        { name: 'Next.js', icon: <SiNextdotjs size={40} color="white" />, color: 'white' },
        { name: 'TailwindCSS', icon: <SiTailwindcss size={40} color="#06B6D4" />, color: '#06B6D4' },
        { name: 'Git', icon: <SiGit size={40} color="#F03C2E" />, color: '#F03C2E' },
        { name: 'Figma', icon: <SiFigma size={40} color="#A259FF" />, color: '#A259FF' },
        { name: 'Canva', icon: <SiCanva size={40} color="#00C4CC" />, color: '#00C4CC' },
        { name: 'React', icon: <SiReact size={40} color="#61DAFB" />, color: '#61DAFB' },
        // { name: 'Node.js', icon: <SiNodedotjs size={40} color="#339933" />, color: '#339933' },
        // { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" />, color: '#47A248' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const hoverVariants = {
        hover: {
            y: -10,
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            ref={ref}
            className="min-h-screen w-full px-4 md:px-8 lg:px-16 py-16 text-white bg-black flex items-center justify-center"
        >
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Left Side */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        variants={itemVariants}
                    >
                        <div className="relative z-10 p-6 lg:p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-xl">
                            {/* Vertical Text */}
                            <motion.div
                                className="absolute -left-4 -top-4 lg:-left-8 lg:-top-8 rotate-[-90deg] origin-left text-sm tracking-widest flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="w-8 h-[2px] bg-[#b728ff]"></div>
                                <p className="text-[#b728ff] font-medium">TECHNICAL SKILLS</p>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                My <span className="text-[#b728ff]">Expertise</span> & Tech Stack
                            </motion.h2>

                            <motion.p
                                className="text-gray-300 text-lg leading-relaxed mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                These are the tools and technologies that I use daily to create amazing web applications.
                                With a strong foundation in both frontend, I focus on delivering clean,
                                maintainable code and intuitive user experiences.
                            </motion.p>

                            <motion.div
                                className="inline-flex space-x-2 rounded-lg bg-gray-700 p-1 shadow-inner"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-500">
                                    Skills
                                </button>
                                <button className="px-6 py-3 rounded-lg bg-transparent text-gray-300 font-medium transition-all duration-300 hover:text-white hover:bg-gray-600">
                                    Tools
                                </button>
                            </motion.div>

                            {/* Decorative elements */}
                            <div className="absolute -z-10 w-full h-full top-0 left-0 overflow-hidden rounded-2xl">
                                <div className="absolute top-1/4 -right-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                                <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Skills Grid */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={containerVariants}
                    >
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="text-center"
                                    variants={itemVariants}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="p-4 bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center border border-gray-700 hover:border-blue-400 transition-colors duration-300"
                                        variants={hoverVariants}
                                        style={{
                                            boxShadow: `0 4px 15px ${skill.color}20`,
                                            background: `linear-gradient(135deg, ${skill.color}10, ${skill.color}05)`
                                        }}
                                    >
                                        <div className="w-16 h-16 flex items-center justify-center mb-3">
                                            {skill.icon}
                                        </div>
                                        <p className="text-sm font-medium text-gray-200">{skill.name}</p>
                                        <div
                                            className="w-8 h-1 mt-2 rounded-full"
                                            style={{ backgroundColor: skill.color }}
                                        ></div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Floating background elements */}
                <div className="fixed -z-10 w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-float1"></div>
                    <div className="absolute top-3/4 left-3/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl animate-float2"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-float3"></div>
                </div>
            </div>

            <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -20px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
        </section>
    );
};

export default Skills;
