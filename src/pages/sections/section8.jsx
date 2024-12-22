import React from "react";
import { User1, User2, User3 } from "../../assets";

const Section8 = () => {
    return (
        <React.Fragment>
            <section className="select-none relative w-screen px-6 lg:px-16 lg:h-[40vh] mt-20 lg:flex items-center">
                <div className="relative w-[55%]">
                    <div className="relative mb-3 w-max flex items-center">
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-3 lg:ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User1}
                                alt="customer-photo"
                                className="object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User1}
                                alt="customer-photo"
                                className="object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User3}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User1}
                                alt="customer-photo"
                                className="object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="relative w-max flex items-center">
                        <div className="w-[70px] h-[70px] p-1.5 border border-black -ml-8 lg:ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User3}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User1}
                                alt="customer-photo"
                                className="object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={User3}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:items-center lg:mt-0 mt-12 lg:ml-auto w-full lg:w-max">
                    <div className="w-[1px] lg:flex hidden h-[50px] lg:h-[140px] bg-black mx-20"></div>
                    <div 
                        className="w-full lg:pb-0 pb-6 lg:pt-0 pt-4 border-t lg:border-t-0 lg:mt-0 lg:border-b-0 border-b border-black lg:w-max h-max">
                        <h2 className="select-none font-bold text-[54px] mb-3">
                            1.304
                        </h2>
                        <p>
                            satisfied male <br /> customer
                        </p>
                    </div>
                    <div className="w-[1px] lg:flex hidden h-[50px] lg:h-[160px] bg-black mx-20"></div>
                    <div
                        data-aos-delay="200"
                        className="w-full lg:pt-0 pt-4 lg:w-max h-max"
                    >
                        <h2 className="select-none font-bold text-[54px] mb-3">
                            1.304
                        </h2>
                        <p>
                            satisfied female <br /> customer
                        </p>
                    </div>
                    <div className="w-[1px] lg:flex hidden h-[50px] lg:h-[140px] bg-black ml-20"></div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section8;
