import { LinkSquare02Icon } from "hugeicons-react";
import React from "react";
import ThreeDModel from "../../components/model";

const Section12 = () => {
    return (
        <React.Fragment>
            <section className="select-none relative w-screen min-h-[80vh] flex flex-col items-center justify-between overflow-hidden px-16 mt-[52px] mb-[44px]">
                <h1
                    data-aos="fade-right"
                    className="text-[54px] text-end mb-10 w-full text-black"
                >
                    Acrylic and luxurious decorations
                </h1>
                <div className="w-full bg-[#FFD476] h-[480px] flex justify-center border border-black">
                    <div className="w-1/2 h-full flex pl-16">
                        <div className="w-[30%] border-l-[2px] border-y-[2px] mt-auto border-b-0 border-white bg-[#FFD476] h-[80%] rounded-tl-full"></div>
                        <div className="w-[2px] h-full bg-white"></div>
                        <div className="w-[30%] border-r-[2px] border-y-[2px] border-t-0 border-white bg-[#FFD476] h-[80%] rounded-br-full"></div>
                    </div>
                    <div className="relative w-1/2 flex flex-col justify-between">
                        <h2
                            data-aos="fade-up"
                            className="select-none text-[30px] relative mt-16 w-[80%]"
                        >
                            Providing Luxury Souvenirs and the Best Gifts
                        </h2>
                        <div className="absolute top-[26%] right-16 border border-black flex items-center justify-center w-[54px] h-[54px] cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow rounded-full">
                            <LinkSquare02Icon className="" />
                        </div>
                        <div className="relative bg-white h-1/2 mt-auto">
                            <ThreeDModel
                                url={"/ring.glb"}
                                intensity={30}
                                speed={1}
                                scaleCustom={[6, 6, 6]}
                            />

                            <div className="w-full h-[1px] absolute left-0 top-[20%] bg-[#cccccc]"></div>
                            <div className="w-full h-[1px] absolute left-0 top-[40%] bg-[#cccccc]"></div>
                            <div className="w-full h-[1px] absolute left-0 top-[60%] bg-[#cccccc]"></div>
                            <div className="w-full h-[1px] absolute left-0 top-[80%] bg-[#cccccc]"></div>
                            <div className="w-[1px] h-full absolute top-0 left-[15%] bg-[#cccccc]"></div>
                            <div className="w-[1px] h-full absolute top-0 left-[30%] bg-[#cccccc]"></div>
                            <div className="w-[1px] h-full absolute top-0 left-[50%] bg-[#cccccc]"></div>
                            <div className="w-[1px] h-full absolute top-0 left-[70%] bg-[#cccccc]"></div>
                            <div className="w-[1px] h-full absolute top-0 left-[85%] bg-[#cccccc]"></div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section12;
