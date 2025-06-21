import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../../../assets/Img/img1.jpg";
import img2 from "../../../assets/Img/img2.jpg";
import img3 from "../../../assets/Img/img3.jpg";
import img4 from "../../../assets/Img/img4.jpg";
import img5 from "../../../assets/Img/img5.jpeg";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Gride = () => {
    return (
        <div>
            <section className="bg-black">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        {/* Left Big Card - Wines */}
                        <motion.div variants={fadeInUp} className="col-span-2 sm:col-span-1 md:col-span-2 bg-zinc-900 h-auto md:h-full flex flex-col">
                            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img
                                    src={img1}
                                    alt="Wines"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">UI Designs</h3>
                            </a>
                        </motion.div>

                        {/* Center Column  */}
                        <motion.div variants={fadeInUp} className="col-span-2 sm:col-span-1 md:col-span-2 bg-zinc-800">
                            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img
                                    src={img2}
                                    alt="Gin"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">Responsive Layouts</h3>
                            </a>

                            <div className="grid gap-4 grid-cols-2">
                                <motion.a variants={fadeInUp} href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img
                                        src={img4}
                                        alt="Whiskey"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">Bussinesses</h3>
                                </motion.a>
                                <motion.a variants={fadeInUp} href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img
                                        src={img3}
                                        alt="Vodka"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">themes</h3>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Right Card */}
                        <motion.div variants={fadeInUp} className="col-span-2 sm:col-span-1 md:col-span-1 bg-zinc-900 h-auto md:h-full flex flex-col">
                            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img
                                    src={img5}
                                    alt="Brandy"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">Profiles</h3>
                            </a>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Gride;
