import React from "react";

const LoadingBar = ({progress}) => {

    console.log(progress)
    return (
        <div className="relative w-screen h-screen flex justify-center items-center">
            
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
            <div className="relative w-[40vw] h-1 bg-gray-200 z-50">
                <div className="relative bg-white shadow-md z-[999] w-full h-[44px] flex items-center justify-center border border-black">
                    <div
                        className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-200 ease-in-out"
                        style={{ width: `${progress}%` }}
                    >
                    </div>
                    <p className={`relative z-[999] text-center mx-auto ${progress > 80 ? 'text-white' : ''}`}>
                        {progress ?? 0}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoadingBar;
