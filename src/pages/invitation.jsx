import { ArrowRight01Icon } from "hugeicons-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Gradient1, Gradient2, Gradient4, Prod } from "../assets";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Invitation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Navbar />

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

            <section className="relative flex select-none w-screen border-b border-black pb-6 overflow-hidden min-h-screen pt-16 px-16 mt-16">
                <div className="w-[40%] h-[180vh] border-r border-black">
                    <div className="flex border-b border-black pb-4 items-baseline w-[90%]">
                        <Link to={"/"}>
                            <p className="text-blue-500 cursor-pointer hover:brightness-75">
                                Homepage
                            </p>
                        </Link>
                        <p className="mx-2">/</p>
                        <p>Invitation Digital</p>
                    </div>
                    <h2 className="select-none pt-6 pb-7 w-[90%] mb-5 text-[48px] border-b border-black font-normal">
                        Custom and Unique Digital Invitation
                    </h2>
                    <p className="w-[84%] text-[16px] mt-2 text-black leading-loose">
                        Create unforgettable moments with our custom digital
                        invitations, designed to perfectly match
                    </p>
                </div>

                <div className="relative border-t border-black pt-10 w-[60%] h-full flex pl-10 justify-between flex-wrap">
                    <div className="relative w-[48%] h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
                        <img
                            src={Prod}
                            alt="dress-image"
                            className="w-full h-full object-cover hover:scale-[1.1] duration-300"
                        />
                        <a
                            href={
                                "https://wa.me/+6289513093406?text=Hai, Aku pesan undangan ini"
                            }
                            target="__blank"
                        >
                            <div className="absolute bottom-4 z-[9] active:scale-[0.97] duration-200 cursor-pointer text-[16px] px-4 mt-7 py-2 border w-max bg-white right-5     border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                <p>Booking</p>
                                <ArrowRight01Icon className="w-5 h-5 ml-3" />
                            </div>
                        </a>
                    </div>
                    <div className="relative w-[48%] h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
                        <img
                            src={Prod}
                            alt="dress-image"
                            className="w-full h-full object-cover hover:scale-[1.1] duration-300"
                        />
                        <a
                            href={
                                "https://wa.me/+6289513093406?text=Hai, Aku pesan dress ini"
                            }
                            target="__blank"
                        >
                            <div className="absolute bottom-4 z-[9] active:scale-[0.97] duration-200 cursor-pointer text-[16px] px-4 mt-7 py-2 border w-max bg-white right-5     border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                <p>Booking</p>
                                <ArrowRight01Icon className="w-5 h-5 ml-3" />
                            </div>
                        </a>
                    </div>
                    <div className="relative w-[48%] h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
                        <img
                            src={Prod}
                            alt="dress-image"
                            className="w-full h-full object-cover hover:scale-[1.1] duration-300"
                        />
                        <a
                            href={
                                "https://wa.me/+6289513093406?text=Hai, Aku pesan dress ini"
                            }
                            target="__blank"
                        >
                            <div className="absolute bottom-4 z-[9] active:scale-[0.97] duration-200 cursor-pointer text-[16px] px-4 mt-7 py-2 border w-max bg-white right-5     border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                <p>Booking</p>
                                <ArrowRight01Icon className="w-5 h-5 ml-3" />
                            </div>
                        </a>
                    </div>
                    <div className="relative w-[48%] h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
                        <img
                            src={Prod}
                            alt="dress-image"
                            className="w-full h-full object-cover hover:scale-[1.1] duration-300"
                        />
                        <a
                            href={
                                "https://wa.me/+6289513093406?text=Hai, Aku pesan dress ini"
                            }
                            target="__blank"
                        >
                            <div className="absolute bottom-4 z-[9] active:scale-[0.97] duration-200 cursor-pointer text-[16px] px-4 mt-7 py-2 border w-max bg-white right-5     border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                <p>Booking</p>
                                <ArrowRight01Icon className="w-5 h-5 ml-3" />
                            </div>
                        </a>
                    </div>
                    <div className="relative w-[48%] h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
                        <img
                            src={Prod}
                            alt="dress-image"
                            className="w-full h-full object-cover hover:scale-[1.1] duration-300"
                        />
                        <a
                            href={
                                "https://wa.me/+6289513093406?text=Hai, Aku pesan dress ini"
                            }
                            target="__blank"
                        >
                            <div className="absolute bottom-4 z-[9] active:scale-[0.97] duration-200 cursor-pointer text-[16px] px-4 mt-7 py-2 border w-max bg-white right-5     border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                <p>Booking</p>
                                <ArrowRight01Icon className="w-5 h-5 ml-3" />
                            </div>
                        </a>
                    </div>
                    <div className="relative w-[48%] h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
                        <img
                            src={Prod}
                            alt="dress-image"
                            className="w-full h-full object-cover hover:scale-[1.1] duration-300"
                        />
                        <a
                            href={
                                "https://wa.me/+6289513093406?text=Hai, Aku pesan dress ini"
                            }
                            target="__blank"
                        >
                            <div className="absolute bottom-4 z-[9] active:scale-[0.97] duration-200 cursor-pointer text-[16px] px-4 mt-7 py-2 border w-max bg-white right-5     border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                                <p>Booking</p>
                                <ArrowRight01Icon className="w-5 h-5 ml-3" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </React.Fragment>
    );
};

export default Invitation;
