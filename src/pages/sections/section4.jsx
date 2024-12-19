import { ArrowRight01Icon, CrownIcon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";

const Section4 = () => {
    return (
        <React.Fragment>
            <section className="select-none relative mb-[100px] px-16 overflow-hidden flex items-center justify-center h-[84vh] border-y border-y-black">
                <div className="w-[70%] py-16 h-full">
                    <h2
                        data-aos="fade-left"
                        className="select-none mt-10 text-[44px]"
                    >
                        Wedding Organizer Packages
                    </h2>

                    <div className="mt-10 w-full flex items-center justify-between pr-16">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="w-[29%] h-[260px] p-4 border border-black"
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
                                <div className="active:scale-[0.97] duration-200 cursor-pointer text-[16px] px-4 mt-7 py-2 border w-max border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                    <p>Check</p>
                                    <ArrowRight01Icon className="w-5 h-5 ml-3" />
                                </div>
                            </Link>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="w-[29%] h-[260px] p-4 border border-black"
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
                                <div className="active:scale-[0.97] duration-200 cursor-pointer text-[16px] px-4 mt-7 py-2 border w-max border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                    <p>Check</p>
                                    <ArrowRight01Icon className="w-5 h-5 ml-3" />
                                </div>
                            </Link>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="w-[29%] h-[260px] p-4 border border-black"
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
                                <div className="active:scale-[0.97] duration-200 cursor-pointer text-[16px] px-4 mt-7 py-2 border w-max border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                    <p>Check</p>
                                    <ArrowRight01Icon className="w-5 h-5 ml-3" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] ml-auto justify-end h-full flex">
                    <div className="w-[40%] border-l-[1px] border-y-[1px] mt-auto border-b-0 border-black h-[80%] rounded-tl-full"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[40%] border-r-[1px] border-y-[1px] border-t-0 border-black h-[80%] rounded-br-full"></div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section4;
