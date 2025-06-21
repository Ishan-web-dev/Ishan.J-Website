import React from 'react';
import { Link } from "react-router-dom";

const Banner = ({ heading, paragraph }) => {
    return (
        <div>
            <header className="relative">

                {/* BG Image */}
                <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg"
                    alt=""
                    className="absolute -z-10 inline-block h-full w-full object-cover"
                />
                {/* Container */}
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    {/* Heading Content */}
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
                            {heading}
                        </h1>
                        <p className="mx-auto mb-5 max-w-[728px] text-xl text-[#636262] lg:mb-8">
                            {paragraph}
                        </p>
                        <Link
                            to="/Contact"
                            className="inline-block rounded-full bg-[#b728ff] px-8 py-4 text-center font-bold text-white transition  hover:bg-white hover:text-[#b728ff] hover:border-[#b728ff]"
                        >
                            Contact Me
                        </Link>
                    </div>
                    {/* Logo Cloud */}
                    <div className="mx-auto mt-1 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-12 md:grid-cols-5">
                        <div className="mx-auto">
                            <img
                                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a267_Microsoft%20Logo.svg"
                                alt=""
                                className="inline-block"
                            />
                        </div>
                        <div className="mx-auto">
                            <img
                                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26a_PayPal%20Logo.svg"
                                alt=""
                                className="inline-block"
                            />
                        </div>
                        <div className="mx-auto">
                            <img
                                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a268_Google%20Logo.svg"
                                alt=""
                                className="inline-block"
                            />
                        </div>
                        <div className="mx-auto">
                            <img
                                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a269_Chase%20Logo.svg"
                                alt=""
                                className="inline-block"
                            />
                        </div>
                        <div className="mx-auto">
                            <img
                                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26b_Walmart%20Logo.svg"
                                alt=""
                                className="inline-block"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Banner;
