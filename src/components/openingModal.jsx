import { motion } from "framer-motion";
import { SparklesIcon } from "hugeicons-react";
import React, { useState } from "react";
import { Gradient1, Gradient2, Gradient4 } from "../assets";
import Video from "../assets/video/video.mp4";

const OpeningModal = ({ handleClose }) => {
    const [step, setStep] = useState(0);

    return (
        <React.Fragment>
            <section className="select-none fixed top-0 left-0 z-[999999999] w-screen h-[100vh] lg:h-screen overflow-hidden bg-black bg-opacity-70 flex lg:items-center lg:justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-[100vw] lg:w-[46vw] h-full lg:h-max bg-white p-4 lg:p-6"
                >
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
                    {step === 0 ? (
                        <div className="relative w-full flex flex-col justify-between h-[84%] lg:h-full">
                            <div className="relative w-full h-max px-6 py-6 border border-black">
                                <h2 className="select-none text-[26px] lg:text-[32px] mb-2">
                                    Your Perfect Wedding Starts Here{" "}
                                </h2>
                                <p className="select-none text-[14px] lg:text-[16px] w-[90%] lg:w-[80%] leading-loose text-black">
                                    Begin Your Love Journey With Us. Every great
                                    love story deserves a beautiful beginning.
                                </p>
                                <div className="w-full h-[0.8px] bg-black my-5"></div>
                                <ul className="ml-5">
                                    <li className="list-disc mb-4">
                                        Make-up Artist
                                    </li>
                                    <li className="list-disc mb-4">Catering</li>
                                    <li className="list-disc mb-4">
                                        Souvernirs
                                    </li>
                                    <li className="list-disc mb-4">Building</li>
                                </ul>
                                <SparklesIcon className="absolute bottom-7 right-8 w-8 h-8" />
                            </div>
                            <div className="relative w-full flex flex-col justify-end h-[20%] mt-10">
                                <div className="w-full mb-3 flex justify-center items-baseline">
                                    <div className="w-4 h-4 bg-slate-500 border border-black"></div>
                                    <div className="mx-2"></div>
                                    <div className="w-4 h-4 border border-black"></div>
                                </div>
                                <div
                                    onClick={() => setStep(1)}
                                    className="border h-max border-black w-full py-3 flex items-center justify-center cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow"
                                >
                                    <p>Get Started</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-full h-[84%] lg:h-full">
                            <div className="w-full overflow-hidden h-1/2 lg:h-[45vh] lg:border border-black">
                                <video
                                    src={Video} // Ganti dengan path atau URL video MP4 Anda
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="h-1/2 lg:h-[40vh] flex flex-col justify-between pt-4">
                                <div className="w-full">
                                    <h2 className="select-none text-[26px] lg:text-[32px] mb-2">
                                        The uniqueness of the website with
                                        interactive 3D{" "}
                                    </h2>
                                    <SparklesIcon className="absolute top-5 right-8 w-8 h-8" />
                                    <p className="select-none text-[14px] w-[80%] leading-loose text-black">
                                        Double-clicking and holding while
                                        dragging the cursor.
                                    </p>
                                </div>
                                <div className="flex items-baseline justify-between w-full h-max py-3">
                                    <div
                                        onClick={() => setStep(0)}
                                        className="border h-full border-black w-[48%] py-3 flex items-center justify-center cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow"
                                    >
                                        <p>Back</p>
                                    </div>
                                    <div
                                        onClick={() => handleClose()}
                                        className="border h-full border-black w-[48%] py-3 flex items-center justify-center cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow"
                                    >
                                        <p>Explore Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </section>
        </React.Fragment>
    );
};

export default OpeningModal;
