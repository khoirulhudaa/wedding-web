import React from "react";
import { Spon1, Spon2, Spon3 } from "../../assets";

const Section2 = () => {
    return (
        <React.Fragment>
            <section className="select-none relative hidden lg:flex items-center overflow-x-hidden lg:px-16 w-full lg:mt-7 mb-[70px] h-[50px] lg:h-max">
                <div className="sponsor-container">
                    <div className="sponsor-items">
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="sponsor-items">
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-[54px] border-[1px] flex pb-2 items-end justify-center border-black bg-slate-100 h-[44px] mx-4">
                    <div className="relative w-[10px] h-[14px] rounded-sm border border-black"></div>
                </div>

                <div className="sponsor-container">
                    <div className="sponsor-items">
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="sponsor-items">
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[154px] h-[54px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section2;
