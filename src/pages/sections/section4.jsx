import { ArrowRight01Icon, CrownIcon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";

const Section4 = () => {
    return (
        <React.Fragment>
            <section className="select-none relative mb-10 lg:mb-[100px] px-4 lg:px-16 overflow-hidden flex items-center lg:justify-center h-max lg:h-[84vh] border-y border-y-black">
                <div className="w-[100%] lg:w-[70%] lg:py-16 h-full">
                    <h2
                        className="select-none mt-10 text-[24px] lg:text-[44px]"
                    >
                        Wedding Organizer Packages
                    </h2>

                    <div className="mt-8 lg:mt-10 w-full lg:flex items-center lg:justify-between pr-0 lg:pr-16">
                        <div
                            className="w-full lg:w-[29%] h-[260px] lg:mb-0 mb-6 p-4 border border-black"
                        >
                            <CrownIcon />
                            <p className="select-none text-[16px] mt-2">
                                Classical
                            </p>
                            <div className="w-full h-[1px] bg-black my-2"></div>
                            <p className="select-none text-[15px] mt-10">
                                No need for printing costs, just create once and
                                share
                            </p>
                            <Link to={"/packet-classical"}>
                                <div className="active:scale-[0.97] duration-200 cursor-pointer bg-[#FFD476] text-[16px] px-4 mt-7 py-2 border w-max border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                    <p>Check</p>
                                    <ArrowRight01Icon className="w-5 h-5 ml-3" />
                                </div>
                            </Link>
                        </div>
                        <div
                            className="w-full lg:w-[29%] h-[260px] lg:mb-0 mb-6 p-4 border border-black"
                        >
                            <CrownIcon />
                            <p className="select-none text-[16px] mt-2">
                                Exquisite
                            </p>
                            <div className="w-full h-[1px] bg-black my-2"></div>
                            <p className="select-none text-[15px] mt-10">
                                Friendly service with a quick response to cust
                            </p>
                            <Link to={"/packet-exquisite"}>
                                <div className="active:scale-[0.97] duration-200 cursor-pointer bg-[#FFD476] text-[16px] px-4 mt-7 py-2 border w-max border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                    <p>Check</p>
                                    <ArrowRight01Icon className="w-5 h-5 ml-3" />
                                </div>
                            </Link>
                        </div>
                        <div
                            className="w-full lg:w-[29%] h-[260px] lg:mb-0 mb-6 p-4 border border-black"
                        >
                            <CrownIcon />
                            <p className="select-none text-[16px] mt-2">
                                Opulence
                            </p>
                            <div className="w-full h-[1px] bg-black my-2"></div>
                            <p className="select-none text-[15px] mt-10">
                                We offer a variety of modern theme templates.
                            </p>
                            <Link to={"/packet-opulence"}>
                                <div className="active:scale-[0.97] duration-200 cursor-pointer bg-[#FFD476] text-[16px] px-4 mt-7 py-2 border w-max border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                    <p>Check</p>
                                    <ArrowRight01Icon className="w-5 h-5 ml-3" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden w-[30%] ml-auto justify-end h-full lg:flex">
                    <div className="w-[40%] border-l-[1px] border-y-[1px] mt-auto border-b-0 border-black h-[80%] rounded-tl-full"></div>
                    <div className="w-[0.7px] h-full bg-black"></div>
                    <div className="w-[40%] border-r-[1px] border-y-[1px] border-t-0 border-black h-[80%] rounded-br-full"></div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section4;
