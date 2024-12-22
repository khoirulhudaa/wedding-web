import { ArrowRight01Icon } from "hugeicons-react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Gradient1, Gradient2, Gradient4, Prod } from "../assets";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Invitation = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.75; // Set volume ke 75%
            if (audioRef.current.muted) {
                audioRef.current.muted = false; // Nonaktifkan mute jika diaktifkan
            }
        }
        const audio = audioRef.current;
        audio.play(); // Play audio jika belum diputar

        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            {/* BackSound */}
            <audio
                ref={audioRef}
                className="absolute z-[-2] opacity-0"
                src="/audio/packet.mp3"
            />
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

            <section className="relative lg:flex select-none w-screen border-b border-black pb-6 overflow-hidden min-h-screen pt-10 lg:pt-16 px-6 lg:px-16 mt-16">
                <div className="w-full lg:w-[40%] lg:h-[180vh] lg:border-r border-black">
                    <div className="flex border-b border-black pb-4 items-baseline w-[90%]">
                        <Link to={"/"}>
                            <p className="text-blue-500 cursor-pointer hover:brightness-75">
                                Homepage
                            </p>
                        </Link>
                        <p className="mx-2">/</p>
                        <p>Invitation Digital</p>
                    </div>
                    <h2 className="select-none pt-6 pb-7 w-[90%] mb-5 text-[32px] lg:text-[48px] border-b border-black font-normal">
                        Custom and Unique Digital Invitation
                    </h2>
                    <p className="w-[84%] text-[16px] lg:pb-0 pb-5 mt-2 text-black leading-loose">
                        Create unforgettable moments with our custom digital
                        invitations, designed to perfectly match
                    </p>
                </div>

                <div className="relative border-t border-black pt-10 w-full lg:w-[60%] h-full lg:flex lg:pl-10 justify-between flex-wrap">
                    <div className="relative lg:w-[48%] lg:h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
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
                    <div className="relative lg:w-[48%] lg:h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
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
                    <div className="relative lg:w-[48%] lg:h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
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
                    <div className="relative lg:w-[48%] lg:h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
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
                    <div className="relative lg:w-[48%] lg:h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
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
                    <div className="relative lg:w-[48%] lg:h-[400px] mb-6 border border-black cursor-pointer overflow-hidden active:scale-[0.97] hover:brightness-[90%]">
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
