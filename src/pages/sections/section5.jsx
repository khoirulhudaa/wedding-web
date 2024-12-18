import { ArrowRight01Icon } from "hugeicons-react";
import React from "react";
import { HP } from "../../assets";

const Section5 = () => {
    return (
        <React.Fragment>
            <section className="select-none relative w-screen h-max mt-[120px]">
                <div className="w-[70%]">
                    <h2
                        data-aos="fade-left"
                        className="select-none text-[54px] font-normal w-[80%] ml-16"
                    >
                        The Modern Way to Share Wedding Day.
                    </h2>
                    <div className="relative top-5">
                        <div className="w-max h-[140px] ml-16 flex my-4 border-l border-l-black">
                            <div className="h-[200px] flex flex-col justify-between">
                                <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] text-black">
                                    <p>Free domain</p>
                                </div>
                                <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] text-black">
                                    <p>Free domain</p>
                                </div>
                                <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] text-black">
                                    <p>Free domain</p>
                                </div>
                            </div>
                            <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] mb-5 text-black">
                                <p>Free domain</p>
                            </div>
                            <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] mb-5 text-black">
                                <p>Free domain</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[80%] ml-auto mt-[-30px] h-[200px] px-14 pt-8 bg-[#FFD476] border border-black text-[#030605]">
                    <div className="w-[80%]">
                        <p className="select-none text-[16px] leading-loose w-[70%] mb-4">
                            Spread your wedding invitations quickly and
                            digitally, invite them and share this happy news now
                        </p>
                    </div>
                    <div className="relative text-center lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3.5 font-medium text-[16px] lg:text-[15px] bg-[#28887A] text-white cursor-pointer">
                        Order now{" "}
                        <ArrowRight01Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                    </div>
                    <img
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                        src={HP}
                        alt="handphone"
                        className="select-none absolute top-[-177%] right-16 w-[32%] h-auto"
                    />
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section5;
