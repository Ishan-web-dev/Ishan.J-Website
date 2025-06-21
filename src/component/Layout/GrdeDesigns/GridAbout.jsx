import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/Img/img1.jpg";
import img2 from "../../../assets/Img/img2.jpg";
import img3 from "../../../assets/Img/img3.jpg";
import img4 from "../../../assets/Img/img6.jpeg";
import img5 from "../../../assets/Img/img5.jpeg"; // temporary fix

const GridAbout = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div
            className="bg-black"
            style={{
                backgroundImage:
                    "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzMwMCcgdmlld0JveD0nMCAwIDIwMCAzMDAnPgoJPGZpbHRlciBpZD0nZnV6eicgeD0nMCcgeT0nMCc+CgkJPGZlVHVyYnVsZW5jZSB0eXBlPSd0dXJidWxlbmNlJyBiYXNlRnJlcXVlbmN5PScwLjMnIG51bU9jdGF2ZXM9JzEwJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+Cgk8L2ZpbHRlcj4KCTxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbHRlcj0ndXJsKCNmdXp6KScgb3BhY2l0eT0nMC4xNScvPgo8L3N2Zz4=)",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-24">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    {/* Text Content */}
                    <div
                        className="w-full lg:w-1/3 p-4 sm:p-6 md:p-10 prose"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#b728ff] leading-tight">
                            Bears eat Beets
                        </h1>
                        <h1 className="text-2xl sm:text-3xl text-[#b728ff]">BEARS</h1>
                        <h1 className="text-2xl sm:text-3xl text-[#b728ff]">BEATS</h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#b728ff]">
                            Battlestar Gallactica
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light mt-4 sm:mt-6 md:mt-8 leading-relaxed">
                            Nullam tincidunt felis eget blandit aliquam. Nunc vel mollis lorem.
                            Phasellus pharetra commodo ultricies. Mauris scelerisque elit sed arcu
                            consectetur hendrerit et sit amet ligula.
                        </p>
                        <div className="mt-4 sm:mt-6 md:mt-8 inline-flex gap-x-4 sm:gap-x-6 pt-2">
                            {["instagram", "twitter", "facebook"].map((icon, index) => (
                                <a href="#" key={index} className="hover:opacity-80 transition-opacity">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-[#b728ff]"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                icon === "instagram"
                                                    ? `<path d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,..."/>`
                                                    : icon === "twitter"
                                                        ? `<path d="M333328 63295c-12254 5480-25456 9122-39241..."/>`
                                                        : `<path d="M380.001 120.001h99.993V0h-99.993c-77.186..."/>`,
                                        }}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div
                        className="w-full lg:w-2/3 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 grid grid-cols-4 gap-3 sm:gap-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        {[
                            {
                                span: "col-span-4 sm:col-span-4",
                                img: img1,
                            },
                            {
                                span: "col-span-4 sm:col-span-2",
                                img: img2,
                            },
                            {
                                span: "col-span-4 sm:col-span-2",
                                img: img3,
                            },
                            {
                                span: "col-span-4 sm:col-span-3",
                                img: img4,
                            },
                            {
                                span: "col-span-4 sm:col-span-1",
                                img: img5,
                            },
                        ].map((item, idx) => (
                            <div key={idx} className={`h-48 sm:h-56 md:h-64 relative ${item.span}`}>
                                <img
                                    className="absolute inset-0 h-full w-full object-cover rounded-md border border-[#b728ff]/30 hover:border-[#b728ff]/60 transition-colors"
                                    src={item.img}
                                    alt=""
                                    loading={idx > 1 ? "lazy" : "eager"}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridAbout;