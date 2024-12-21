import React from "react";
import ThreeDModel from "../../components/model";
import { SparklesIcon } from "hugeicons-react";

const Section6 = () => {
    return (
        <React.Fragment>
            <section
                id="photography"
                className="select-none relative border-y border-black lg:mt-[140px] mb-8 lg:mb-20 lg:flex items-center overflow-x-auto px-4 lg:px-16 w-full h-max py-12 lg:py-20"
            >
                <div
                    // data-aos-easing="ease-in-back"
                    className="relative bg-white w-full lg:w-1/2 h-[380px] lg:pt-12 border border-black"
                >
                    <div className="absolute z-[99] top-4 left-4 w-[30px] h-[30px] bg-[#FFD476] text-white font-bold flex items-center justify-center">
                        <p>3D</p>
                    </div>
                    <ThreeDModel
                        url={"/camera.glb"}
                        intensity={30}
                        speed={1}
                        scaleCustom={[0.58, 0.58, 0.58]}
                    />

                    <div className="w-full h-[1px] absolute left-0 top-[10%] bg-[#cccccc]"></div>
                    <div className="w-full h-[1px] absolute left-0 top-[30%] bg-[#cccccc]"></div>
                    <div className="w-full h-[1px] absolute left-0 top-[50%] bg-[#cccccc]"></div>
                    <div className="w-full h-[1px] absolute left-0 top-[70%] bg-[#cccccc]"></div>
                    <div className="w-full h-[1px] absolute left-0 top-[90%] bg-[#cccccc]"></div>
                    <div className="w-[1px] h-full absolute top-0 left-[15%] bg-[#cccccc]"></div>
                    <div className="w-[1px] h-full absolute top-0 left-[30%] bg-[#cccccc]"></div>
                    <div className="w-[1px] h-full absolute top-0 left-[50%] bg-[#cccccc]"></div>
                    <div className="w-[1px] h-full absolute top-0 left-[70%] bg-[#cccccc]"></div>
                    <div className="w-[1px] h-full absolute top-0 left-[85%] bg-[#cccccc]"></div>
                </div>
                <div className="w-[94%] lg:w-1/2 lg:px-8 h-max">
                    <div
                        className="w-max h-max border bg-white border-black p-3 flex items-center justify-center text-[16px] lg:mt-0 mt-8 mb-3 text-black"
                    >
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        <p>Photo & Videography</p>
                    </div>
                    <h2
                        className="select-none font-normal text-[32px] lg:text-[44px]"
                    >
                        Photography Services for Your
                        <span className="text-orange-500 ml-3">
                            Event Needs
                        </span>
                    </h2>
                    <p
                        data-aos-delay="100"
                        className="select-none text-[15px] w-full pb-6 border-b border-b-black mt-6 leading-loose text-black"
                    >
                        Bringing your vision to life with exceptional
                        photography and <br /> videography services for every
                        event
                    </p>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section6;
