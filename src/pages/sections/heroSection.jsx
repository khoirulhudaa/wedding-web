import { motion } from "framer-motion";
import { Agreement02Icon, AiMagicIcon, CommandIcon } from "hugeicons-react";
import React, { useEffect, useState } from "react";
import { Gradient1, Gradient2, Gradient4 } from "../../assets";

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const setFromEvent = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    const size = isHovered ? "180" : "30";

    return (
        <React.Fragment>
            {/* Hero Component */}
            <section className="relative w-full h-max lg:h-full overflow-hidden border-b border-[#d1d1d1] flex justify-center">
                <div className="absolute w-full h-full overflow-hidden">
                    {/* Square Line's */}
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[8%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[20%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[30%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[40%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[50%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[60%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[70%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[80%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[90%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-screen h-[0.5px] absolute left-0 top-[100%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[10%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[20%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[30%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[40%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[50%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[60%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[70%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[80%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[90%] bg-[#d1d1d1]"></div>
                    <div className="lg:inline hidden w-[0.5px] h-screen absolute top-0 left-[100%] bg-[#d1d1d1]"></div>
                </div>

                {/* Gradient Effects - Background */}
                <img
                    loading="lazy"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    src={Gradient1}
                    alt="gradient"
                    className="gr3"
                />
                <img
                    loading="lazy"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    src={Gradient4}
                    alt="gradient1"
                    className="gr1"
                />
                <img
                    loading="lazy"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    src={Gradient2}
                    alt="gradient2"
                    className="gr2"
                />

                {/* Main Content - Hero */}
                <div className="relative w-full mt-0 h-max lg:h-[80vh] mb-4 lg:text-center z-[98888] mx-auto flex flex-col justify-center lg:items-center">
                    <div className="absolute top-0 lg bg-white flex border-b border-b-black lg:text-[16px] text-[15px] text-black h-max w-full lg:w-screen lg:px-3 px-5 py-3 mb-6 lg:mb-2 items-center lg:justify-center">
                        <AiMagicIcon className="mr-1" />
                        Version 1.0.0 - new released
                        <AiMagicIcon className="ml-1" />
                    </div>
                    <div className="container-mask">
                        <motion.div
                            className={isHovered ? "mask" : "mask2"}
                            animate={{
                                WebkitMaskPosition: `${
                                    mousePosition.x - size / 2
                                }px ${mousePosition.y - size / 3}px`,
                                WebkitMaskSize: `${size}px`,
                            }}
                            transition={{
                                ease: "backOut",
                                duration: 0.6,
                            }}
                        >
                            <h1
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="select-none text-transparent hidden text-[2.8rem] lg:ml-0 ml-5 lg:text-[4.38rem] font-bold w-[90vw] mt-10 lg:w-[80vw] lg:text-center"
                            >
                            </h1>
                        </motion.div>
                        <h1
                            data-aos="fade-zoom-in"
                            className=" text-[2.2rem] lg:ml-0 ml-4 lg:text-[4.38rem] font-bold w-[90vw] mt-16 lg:mt-14 lg:w-[80vw] lg:text-center"
                        >
                            From Planning to Celebration, <br /> We've Crafted Luxury
                        </h1>
                    </div>
                    <p className="select-none text-black mb-3 relative mt-3 lg:mt-0 lg:top-[-18px] lg:ml-0 ml-4 lg:text-[16px] text-[16px] w-[90vw] lg:w-[50%]">
                        Bringing your special day to life with love and ease.
                        LuvlyWed, the place for elegant wedding planning and
                        unforgettable moments
                    </p>
                    <a href="#start">
                        <div className="relative active:scale-[0.97] hover:bg-glow hover:animate-glow hover:brightness-[94%] lg:mt-0 mt-3 text-center lg:w-max w-[90vw] mx-auto lg:mx-0 flex no-underline lg:ml-0 mb-[45px] px-4 lg:px-6 py-3.5 font-medium text-[16px] lg:text-[15px] z-[99] border border-black text-black lg cursor-pointer">
                            Start Planning Now
                            <Agreement02Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                        </div>
                    </a>
                    <div className="select-none text-[16px] mt-3 px-5 lg:px-0 w-max lg:w-max hidden lg:flex items-center mx-auto">
                        <div className="w-full lg:w-[30%] lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg text-red-500 bg-red-100">
                            <CommandIcon className="w-4 h-4 relative mr-2" />
                            Fotografi
                        </div>
                        <div className="select-none w-full lg:w-max lg:justify-center lg:mx-4 flex items-center px-3 py-3 lg:py-1.5 lg text-green-500 bg-green-100">
                            <CommandIcon className="w-4 h-4 relative mr-2" />
                            <p className="select-none flex w-max">
                                Venue wedding
                            </p>
                        </div>
                        <div className="select-none w-full lg:w-max lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg text-purple-500 bg-purple-100">
                            <CommandIcon className="w-4 h-4 relative mr-2" />
                            <p className="select-none flex w-max">Make-up</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default HeroSection;
