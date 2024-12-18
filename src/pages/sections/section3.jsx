import React from "react";
import ThreeDModel from "../../components/model";
import { LinkSquare02Icon, SparklesIcon } from "hugeicons-react";

const Section3 = () => {
    return (
        <React.Fragment>
            {/* Dress wedding */}
            <section
                id="start"
                className="select-none relative flex px-16 w-full border-t border-t-black h-[84vh]"
            >
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    className="relative w-[30%] h-full pt-32 border-x border-x-black"
                >
                    <div className="absolute z-[99] top-4 left-4 w-[30px] h-[30px] bg-[#FFD476] text-white font-bold flex items-center justify-center">
                        <p>3D</p>
                    </div>
                    <ThreeDModel
                        url={"/dress3.glb"}
                        intensity={30}
                        speed={1}
                        scaleCustom={[2.1, 2.1, 2.1]}
                    />
                </div>

                <div className="select-none relative w-[70%] pl-8 h-full flex flex-col justify-center">
                    <div
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        className="w-max h-max border border-black p-3 flex items-center justify-center text-[16px] mb-3 text-black"
                    >
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        <p>Make-up Artist - Best of 2025</p>
                    </div>
                    <h2
                        data-aos="fade-up"
                        className="select-none font-normal text-[44px] w-full"
                    >
                        Flawless Make-Up and Dresses <br /> for Your
                        <span className="text-orange-500 ml-2">
                            Special Day
                        </span>
                    </h2>
                    <p
                        data-aos="fade-zoom-in"
                        dat-aos-delay="300"
                        className="select-none text-[15px] w-[70%] my-6 leading-loose text-black"
                    >
                        Create unforgettable memories with our exquisite
                        collection of professional make-up and stunning wedding
                        dresses, tailored to make your special day even more
                        magical
                    </p>

                    <div
                        data-aos="fade-zoom-in"
                        className="absolute top-6 right-0 text-[16px] px-4 py-2 border border-black flex items-center justify-center hover:bg-glow hover:animate-glow"
                    >
                        <p>
                            100 Outfits, Shirts, Accessories & Professional
                            Make-Up
                        </p>
                        <SparklesIcon className="w-5 h-5 ml-3" />
                    </div>

                    <div className="absolute bottom-[32%] right-0 border border-black flex items-center justify-center w-[60px] h-[60px] cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow rounded-full">
                        <LinkSquare02Icon className="" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section3;
