import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <section className="bg-black min-h-screen py-10 h-full flex items-center text-white px-4 md:px-10 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Contact Details */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Have You Any Project? <br />
                            <span className="text-[#b728ff]">Please Drop a Message</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            Get in touch and let me know how I can help. Fill out the form and
                            I'll be in touch as soon as possible.
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-start space-x-4">
                                <span className="text-xl text-[#b728ff]">📍</span>
                                <div>
                                    <p className="font-semibold text-white">Address:</p>
                                    <p className="text-gray-400">Jaipur, Rajasthan, India </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <span className="text-xl text-[#b728ff]">📞</span>
                                <div>
                                    <p className="font-semibold text-white">Phone:</p>
                                    <p className="text-gray-400">+ 91 7297881725</p>
                                    {/* <p className="text-gray-400">+8801904015294</p> */}
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <span className="text-xl text-[#b728ff]">✉️</span>
                                <div>
                                    <p className="font-semibold text-white">Email:</p>
                                    <p className="text-gray-400">Workishan24@gmail.com</p>
                                    <p className="text-gray-400">Joshiishaan86@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-6 flex justify-center lg:justify-start gap-4">
                            <a href="#"
                                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#b728ff] text-white hover:w-32 transition-all overflow-hidden">
                                <span className="hidden group-hover:inline whitespace-nowrap mr-2">GitHub</span>🐙\
                            </a>
                            <a href="#"
                                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#b728ff] text-white hover:w-36 transition-all overflow-hidden">
                                <span className="hidden group-hover:inline whitespace-nowrap mr-2">LinkedIn</span>💼
                            </a>
                            <a href="#"
                                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#b728ff] text-white hover:w-36 transition-all overflow-hidden">
                                <span className="hidden group-hover:inline whitespace-nowrap mr-2">Facebook</span>📘
                            </a>
                            <a href="#"
                                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#b728ff] text-white hover:w-36 transition-all overflow-hidden">
                                <span className="hidden group-hover:inline whitespace-nowrap mr-2">YouTube</span>▶️
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-zinc-900 p-8 rounded-xl shadow-lg">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g John Doe"
                                    className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg border border-[#b728ff] outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 mb-2">
                                    Email <span className="text-xs">(Required)</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="e.g johndoe@mail.com"
                                    className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg border border-[#b728ff] outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg border border-[#b728ff] outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 mb-2">
                                    Message <span className="text-xs">(Required)</span>
                                </label>
                                <textarea
                                    placeholder="Write message..."
                                    className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg border border-[#b728ff] outline-none h-24"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#b728ff] text-white font-semibold py-3 rounded-lg hover:bg-[#a020e0] transition"
                            >
                                SEND
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactForm;
