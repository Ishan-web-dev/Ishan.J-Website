import React from 'react';
import C1 from "../../../assets/C1.jpg";
import G1 from "../../../assets/Img/G1.jpg"

const ContactBanner = () => {
    return (
        <div>
            <div className="z-15 relative overflow-hidden group h-[500px] bg-primary card-hidden">
                <img
                    src={C1}
                    alt="Contact background"
                    className="h-full transition-all delay-300 duration-400 ease-in w-full absolute group-hover:scale-105 object-center"
                />

                <div className="absolute p-8 z-50 gap-4 flex flex-col justify-end bg-opacity-45 h-full w-full bottom-0">
                    <span className="text-[20px] sm:text-[24px] text-white md:text-[20px] font-canela">
                       Let's Connect :- I'm always open to discussing new projects, creative ideas, or collaboration opportunities.
                    </span>
                    <p className="group-hover:block text-white text-[14px] hidden">
                       Whether you have a question, want to work together, or just want to say hello — feel free to reach out! I’m always excited to connect with like-minded professionals, developers, designers, or businesses looking for a reliable partner.
                    </p>

                    <a href="contactus.html" className="flex items-center gap-2">
                        <div className="flex group-hover:bg-secondary justify-center items-center rounded-full bg-primary min-h-10 min-w-10 max-h-10 max-w-10">
                            <img
                                src={G1}
                                alt="Contact Icon"
                                className="w-[28px] h-8 rounded-full overflow-hidden"
                            />
                        </div>
                        <h2 className="font-bold text-[16px] text-white">Contact Us</h2>
                    </a>
                </div>

                <div className="absolute transition-all duration-400 ease-in bg-gradient-to-b from-transparent to-black min-h-[650px] text-white bottom-0 group-hover:bottom-0 group-hover:min-h-[900px] w-full z-30"></div>
            </div>
        </div>
    );
};

export default ContactBanner;
