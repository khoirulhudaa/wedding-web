import React, { useState } from "react";
import { Ballroom, Ballroom2, Ballroom3 } from "../../assets";
import {
    ArrowRight01Icon,
    CheckmarkCircle02Icon,
    EyeIcon,
} from "hugeicons-react";
import ModalBuild from "../../components/modalBuild";

const Section10 = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <React.Fragment>
            <section
                id="building"
                className="relative px-6 lg:px-16 w-screen lg:min-h-[100vh] lg:mt-[70px]"
            >
                <div className="relative lg:text-center w-full h-max">
                    <div className="w-full relative z-[99]">
                        <h2
                            className="select-none font-normal text-[32px] lg:text-[44px]"
                        >
                            The Ideal Place to Celebrate <br className="lg:flex hidden" /> Your True{" "}
                            <span className="text-orange-500">Love</span>
                        </h2>
                        <p
                            className="select-none text-[15px] text-black mx-auto lg:mb-4 mb-6 my-4 lg:my-6 leading-loose w-full lg:w-[70%]"
                        >
                            Make your dream wedding come true at our elegant
                            venue with complete facilities.
                        </p>
                    </div>
                </div>

                <div
                    className="relative w-full h-[340px] lg:h-[500px] border border-black overflow-hidden"
                >
                    <div className="w-max z-[4] lg:flex flex-col hidden h-max absolute left-8 top-8">
                        <div className="z-[99] bg-white p-1.5 active:scale-[0.97] hover:brightness-75 cursor-pointer mb-5 h-[54px] w-[54px] overflow-hidden">
                            <img
                                src={Ballroom}
                                alt="Ballroom 1"
                                className="w-full h-full cursor-pointer border border-black bg-white"
                            />
                        </div>
                        <div className="z-[99] bg-white p-1.5 active:scale-[0.97] hover:brightness-75 cursor-pointer mb-5 h-[54px] w-[54px] overflow-hidden">
                            <img
                                src={Ballroom2}
                                alt="Ballroom 2"
                                className="w-full h-full cursor-pointer border border-black bg-white"
                            />
                        </div>
                        <div className=" z-[99] bg-white p-1.5 active:scale-[0.97] hover:brightness-75 cursor-pointer2 mb-5 h-[54px] w-[54px] overflow-hidden">
                            <img
                                src={Ballroom3}
                                alt="Ballroom 3"
                                className="w-full h-full cursor-pointer border border-black bg-white"
                            />
                        </div>
                    </div>

                    <div className="w-max z-[4] flex items-center h-max absolute right-8 top-8">
                        <div
                            onClick={() => setShowModal(true)}
                            className="z-[9] mr-5 active:scale-[0.97] duration-200 cursor-pointer text-[16px] h-[46px] px-4 border w-max bg-white right-5 border-black flex items-center justify-center hover:bg-glow hover:animate-glow"
                        >
                            <EyeIcon className="w-5 h-5" />
                        </div>
                        <a
                            href={
                                "https://wa.me/+6289513093406?text=Hai, Aku pesan gedung ini"
                            }
                            target="__blank"
                        >
                            <div className="z-[9] active:scale-[0.97] duration-200 cursor-pointer text-[16px] h-[46px] px-4 border w-max bg-white right-5 border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                <p>Booking</p>
                                <ArrowRight01Icon className="w-5 h-5 ml-3" />
                            </div>
                        </a>
                    </div>
                    <div className="absolute bottom-3 right-6 w-max text-[12.5px] border border-black z-[99] bg-white py-3 mb-4 px-4 shadow-md hidden lg:flex items-start mt-3">
                        <div className="flex items-center border-b border-white">
                            <div className="w-[24px] h-[24px] text-[16px] p-1 flex items-center justify-center bg-transparent">
                                <CheckmarkCircle02Icon className="text-blue-700 w-8 h-8" />
                            </div>
                            <p>Book A Hotel Service</p>
                        </div>
                        <div className="flex mx-3 border-x border-black items-center pl-3 pr-4">
                            <div className="w-[24px] h-[24px] text-[16px] p-1 flex items-center justify-center bg-transparent">
                                <CheckmarkCircle02Icon className="text-blue-700 w-8 h-8" />
                            </div>
                            <p>Book A Hotel Service</p>
                        </div>
                        <div className="flex items-center mr-1.5 border-b border-white">
                            <div className="w-[24px] h-[24px] text-[16px] p-1 flex items-center justify-center bg-transparent">
                                <CheckmarkCircle02Icon className="text-blue-700 w-8 h-8" />
                            </div>
                            <p>Book A Hotel Service</p>
                        </div>
                    </div>
                    <img
                        src={Ballroom3}
                        loading="lazy"
                        alt="ballroom background"
                        className="absolute top-0 left-0 brightness-75 lg:brightness-[40%] duration-300 object-cover w-full h-full"
                    />
                </div>
            </section>

            {showModal ? (
                <ModalBuild handleClose={() => setShowModal(false)} />
            ) : (
                <></>
            )}
        </React.Fragment>
    );
};

export default Section10;
