import React from "react";
import ThreeDModel from "./model";
import { SparklesIcon } from "hugeicons-react";
import { motion } from "framer-motion";

const OpeningModal = ({ handleClose }) => {
    return (
        <React.Fragment>
            <section className="select-none fixed top-0 left-0 z-[999999999] w-screen h-screen overflow-hidden bg-black bg-opacity-70 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-[50vw] h-[85vh] bg-white p-6"
                >
                    <div className="relative w-full h-[90%]">
                        <div className="h-full">
                            <h2 className="select-none text-[44px] mb-2">
                                Your Perfect Wedding <br /> Starts Here{" "}
                            </h2>
                            <SparklesIcon className="absolute top-3 right-6 w-8 h-8" />
                            <p className="select-none text-[16px] w-[80%] leading-loose text-black">
                                Begin Your Love Journey With Us. Every great
                                love story deserves a beautiful beginning. Let
                                us help you plan a wedding that’s as special as
                                your relationship
                            </p>
                            <hr className="my-4" />
                            <ul className="ml-5">
                                <li className="list-disc mb-3">
                                    wedding organizer
                                </li>
                                <li className="list-disc mb-3">
                                    Make-up Artist
                                </li>
                                <li className="list-disc mb-3">Photography</li>
                                <li className="list-disc">Catering</li>
                            </ul>
                            <div className="absolute h-[154px] w-1/3 right-0 bottom-5">
                                <ThreeDModel
                                    url={"/crown.glb"}
                                    intensity={3}
                                    speed={1}
                                    scaleCustom={[16, 16, 16]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[10%]">
                        <div
                            onClick={() => handleClose()}
                            className="border h-full border-black w-full py-3 flex items-center justify-center cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow"
                        >
                            <p>Get Started</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </React.Fragment>
    );
};

export default OpeningModal;
