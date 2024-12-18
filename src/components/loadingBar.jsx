import React from "react";
import { Gradient1, Gradient2, Gradient4, Logo } from "../assets";

const LoadingBar = ({ progress }) => {
    console.log(progress);
    return (
        <div className="relative w-screen h-screen flex flex-col justify-end items-center">
            {/* Gradient Effects - Background */}
            <img
                loading="lazy"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                src={Gradient1}
                alt="gradient"
                className="gr3"
            />
            <img
                loading="lazy"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                src={Gradient4}
                alt="gradient1"
                className="gr1"
            />
            <img
                loading="lazy"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                src={Gradient2}
                alt="gradient2"
                className="gr2"
            />

            <div className="w-screen h-[1px] absolute left-0 top-[8%] bg-[#cccccc]"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[20%] bg-[#cccccc]"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[30%] bg-[#cccccc]"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[40%] bg-[#cccccc]"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[50%] bg-[#cccccc]"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[60%] bg-[#cccccc]"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[70%] bg-[#cccccc]"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[80%] bg-[#cccccc]"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[90%] bg-[#cccccc]"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[100%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[10%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[20%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[30%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[40%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[50%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[60%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[70%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[80%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[90%] bg-[#cccccc]"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[100%] bg-[#cccccc]"></div>

            {/* Loading Bar Container */}
            <div className="relative w-[40vw] h-max flex flex-col justify-end z-50">
                <div className="relative py-6 border-x border-t border-black">
                    <img
                        src={Logo}
                        alt="logo"
                        className="mx-auto"
                        data-aos="fade-left"
                        data-aos-delay="100"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                    />
                </div>
                <div className="relative bg-white shadow-md z-[999] w-full h-[44px] flex items-center justify-center border border-black">
                    <div
                        className="absolute left-0 top-0 h-full bg-[#FFD476] transition-all duration-200 ease-in-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                    <p
                        className={`relative z-[999] text-center mx-auto text-black`}
                    >
                        {progress ?? 0} %
                    </p>
                </div>
                <div className="mx-auto h-[30vh] bg-black w-[2px]"></div>
            </div>
        </div>
    );
};

export default LoadingBar;
