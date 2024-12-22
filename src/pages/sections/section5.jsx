import { ArrowRight01Icon } from "hugeicons-react";
import React from "react";
import { HP } from "../../assets";
import { Link } from "react-router-dom";

const Section5 = () => {
    return (
        <React.Fragment>
            <section className="select-none relative w-screen h-max lg:mt-[120px]">
                <div className="relative w-full h-max lg:pb-0 pb-4 lg:w-[70%]">
                    <h2
                        data-aos="fade-left"
                        className="select-none text-[32px] lg:text-[54px] font-normal w-[94%] lg:w-[80%] ml-4 lg:ml-16"
                    >
                        The Modern Way to Share Wedding Day
                    </h2>
                    <div className="relative top-5 h-max">
                        <div className="w-max h-max lg:h-[140px] ml-4 lg:ml-16 flex my-4 border-l border-l-black">
                            <div className="h-max lg:h-[200px] flex flex-col justify-between">
                                <div className="relative lg:mb-0 mb-5 w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] text-black">
                                    <p>Free hosting</p>
                                </div>
                                <div className="relative lg:mb-0 mb-5 w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] text-black">
                                    <p>Free domain</p>
                                </div>
                                <div className="relative lg:mb-0 mb-5 w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] text-black">
                                    <p>Free consult</p>
                                </div>
                            </div>
                            <div className="w-1/2 h-max lg:flex items-baseline">
                                <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] mb-5 text-black">
                                    <p>Free templates</p>
                                </div>
                                <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[16px] mb-5 text-black">
                                    <p>Free revision</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full lg:w-[80%] ml-auto lg:mt-[-30px] h-max lg:h-[200px] px-6 lg:px-14 lg:pb-0 pb-8 pt-8 bg-[#FFD476] border-x-0 lg:border-x lg:border border-black text-[#030605]">
                    <div className="w-full lg:w-[80%] lg:pb-0">
                        <p className="select-none text-[16px] leading-loose w-[94%] lg:w-[70%] mb-4">
                            Spread your wedding invitations quickly and
                            digitally, invite them and share this happy news now
                        </p>
                    </div>
                    <Link to={"/invitation"}>
                        <div className="relative hover:bg-glow hover:text-black hover:animate-glow active:scale-[0.97] hover:brightness-[90%] text-center lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3.5 font-medium text-[16px] lg:text-[15px] bg-[#28887A] text-white cursor-pointer">
                            Order now{" "}
                            <ArrowRight01Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                        </div>
                    </Link>
                    <img
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                        src={HP}
                        alt="handphone"
                        className="select-none lg:flex hidden absolute top-[-177%] right-16 w-[32%] h-auto"
                    />
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section5;
