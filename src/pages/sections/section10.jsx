import React from "react";
import { Ballroom, Ballroom2, Ballroom3 } from "../../assets";
import { CheckmarkCircle02Icon } from "hugeicons-react";

const Section10 = () => {
    return (
        <React.Fragment>
            <section
                id="building"
                className="relative px-16 w-screen min-h-[100vh] mt-[70px]"
            >
                <div className="relative text-center w-full h-max">
                    <div className="w-full relative z-[99]">
                        <h2
                            data-aos="fade-left"
                            className="select-none font-normal text-[44px]"
                        >
                            - The Ideal Place to Celebrate - <br /> Your True{" "}
                            <span className="text-orange-500">Love</span>
                        </h2>
                        <p
                            data-aos="fade-right"
                            className="select-none text-[15px] text-black mx-auto my-6 leading-loose w-[70%]"
                        >
                            Make your dream wedding come true at our elegant
                            venue with complete facilities.
                        </p>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="relative w-full h-[500px] border border-black overflow-hidden"
                >
                    {/* Menggunakan ImageWithLoader untuk setiap gambar */}
                    <div className="absolute top-6 left-6 z-[99] h-full w-max">
                        <img
                            src={Ballroom}
                            alt="Ballroom 1"
                            className="w-[54px] h-[54px] cursor-pointer border border-black bg-white"
                        />
                    </div>
                    <div className="absolute top-6 left-[70px] z-[99] h-full w-max">
                        <img
                            src={Ballroom2}
                            alt="Ballroom 2"
                            className="w-[54px] h-[54px] cursor-pointer border border-black bg-white"
                        />
                    </div>
                    <div className="absolute top-6 left-[140px] z-[99] h-full w-max">
                        <img
                            src={Ballroom3}
                            alt="Ballroom 3"
                            className="w-[54px] h-[54px] cursor-pointer border border-black bg-white"
                        />
                    </div>
                    <div className="absolute bottom-3 right-6 w-max text-[12.5px] border border-black z-[99] bg-white py-3 mb-4 px-4 shadow-md flex items-start mt-3">
                        <div className="flex items-center border-b border-white">
                            <div className="w-[24px] h-[24px] text-[16px] p-1 flex items-center justify-center bg-transparent">
                                <CheckmarkCircle02Icon className="text-blue-700 w-8 h-8" />
                            </div>
                            <p>Book A Hotel Service</p>
                        </div>
                    </div>
                    <img
                        src={Ballroom2}
                        alt="ballroom background"
                        className="absolute top-0 left-0 brightness-[40%] duration-300 object-cover w-full h-full"
                    />
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section10;
