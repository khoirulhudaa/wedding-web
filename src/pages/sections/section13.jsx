import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";
import React from "react";
import { Petik, User2 } from "../../assets";

const Section13 = () => {
    return (
        <React.Fragment>
            <section className="select-none relative border-r border-r-black w-screen overflow-hidden px-6 lg:px-16 lg:mt-[100px] min-h-[70vh]">
                <img
                    loading="lazy"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    src={Petik}
                    alt="petik"
                    className="absolute w-[70px] lg:w-[120px] top-0 right-[10%]"
                />

                <h1
                    className="text-[32px] lg:text-[54px] w-[72%] text-black"
                >
                    Our Customers Feedback
                </h1>
                <div className="w-full lg:flex lg:items-center">
                    <div className="w-full lg:w-[30%]">
                        <div className="relative w-full bg-white mt-8 p-10 h-[400px] border border-black overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User2}
                                alt="photo-picture"
                                className="hover:scale-[1.4] duration-300 object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-[70%] h-max pt-10 overflow-hidden">
                        <div className="w-full h-max px-0 lg:px-16 border-y border-y-black lg:ml-10 py-6">
                            <div className="w-full lg:flex items-baseline lg:justify-between">
                                <p
                                    className="select-none w-max flex font-semibold text-[24px] mb-4 text-black"
                                >
                                    Customer LuvlyWed
                                </p>
                                <p
                                    className="select-none w-max fle text-[18px] text-black"
                                >
                                    Jardyn Danwart
                                </p>
                            </div>
                            <p
                                className="select-none w-full text-[16px] lg:text-[20px] text-black lg:ml-1 mt-7 lg:mt-10"
                            >
                                Amaizing fast and reliable customer support! The
                                team of willing to go mile for customer service.
                            </p>
                        </div>
                        <div className="relative w-full lg:pl-10 mt-10 flex items-center justify-between">
                            <div className="bg-white flex items-center text-[16px] w-max px-5 h-[54px] border border-black">
                                <p>1 of 40</p>
                            </div>
                            <div className="flex items-center w-max">
                                <div className="bg-white w-[54px] h-[54px] border border-black cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow flex items-center justify-center">
                                    <ArrowLeft01Icon />
                                </div>
                                <div className="bg-white w-[54px] h-[54px] ml-8 border border-black cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow flex items-center justify-center">
                                    <ArrowRight01Icon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section13;
