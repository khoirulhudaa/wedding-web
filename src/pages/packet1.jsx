import {
    Chatting01Icon,
    CheckmarkSquare02Icon,
    GridIcon,
} from "hugeicons-react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Gradient1, Gradient2, Gradient4 } from "../assets";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Packet2 = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.play().catch((error) => {
                console.error("Error playing audio:", error);
            });

            // Mengatur volume dan nonaktifkan mute
            audio.volume = 0.75;
            if (audio.muted) {
                audio.muted = false;
            }
        }

        window.scrollTo(0, 0);
    }, [audioRef?.current]);

    return (
        <React.Fragment>
            {/* BackSound */}
            <audio
                ref={audioRef}
                className="absolute z-[-2] opacity-0"
                src="/audio/packet.mp3"
                autoPlay
                loop
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

            <section className="relative select-none w-screen min-h-screen pt-14 lg:pt-16 px-6 lg:px-16 mt-8">
                <h2 className="select-none pb-3 w-[94%] lg:w-[60%] text-[32px] lg:text-[54px] border-b border-black font-normal">
                    Create Wedding with the Classical Package
                </h2>
                <p className="w-[94%] lg:w-[70%] text-[16px] mt-2 text-black leading-loose">
                    500 wedding invitations + 500 souvenirs + Reception MC,
                    cucumber lempah/lengser/music cassette dance
                </p>

                <div className="w-full mt-4 mb-6 lg:flex items-baseline justify-between">
                    <div className="flex items-baseline w-full lg:w-[70%]">
                        <Link to={"/"}>
                            <p className="text-blue-500 cursor-pointer hover:brightness-75">
                                Homepage
                            </p>
                        </Link>
                        <p className="mx-2">/</p>
                        <p>Packet-Classical</p>
                    </div>
                    <div className="flex items-center lg:mt-0 mt-6">
                        <div className="active:scale-[0.97] cursor-pointer relative z-[3] text-[16px] py-1 w-max lg:ml-auto px-3 bg-[#FFD476] text-black flex items-center border-r-0 border border-black justify-center">
                            <Chatting01Icon className="w-4 h-4" />
                            <p className="ml-3">Booking Now</p>
                        </div>
                        <div className="relative z-[3] text-[16px] py-1 w-max lg:ml-auto px-3 bg-transparent text-black flex items-center border border-black justify-center">
                            <GridIcon className="w-4 h-4" />
                            <p className="ml-3">Classical</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-max bg-white border border-black">
                    <div className="w-full lg:flex h-max">
                        <div className="w-full lg:w-1/3 h-max px-8 py-3 lg:p-8">
                            <h3 className="lg:mt-0 mt-3 text-[20px] mb-4 border-b border-black pb-2 w-[90%]">
                                Bridal and Groom
                            </h3>

                            <ul>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Bridal and groom attire for the akad and
                                    reception
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Attire for 2 parents of the bride and groom
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Attire for 6 pairs of guests
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Attire for 4 bridesmaids
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Make-up artist for the bride and groom
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Hairstyling for the bride and groom
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Bridal accessories (veil, jewelry, etc.)
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Traditional wedding attire for both bride
                                    and groom
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3 h-max px-8 py-3 lg:border-x border-black p-8">
                            <h3 className="lg:mt-0 mt-3 text-[20px] mb-4 border-b border-black pb-2 w-[90%]">
                                Decorations
                            </h3>

                            <ul>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Branch pergola + string lights and maple
                                    leaf
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Buffet table decorations for guests and VIPs
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Wedding stage spotlight lights
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Fresh (real) wedding flowers
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Mini garden + Fresh flowers
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    1 set wedding throne chairs + Carpet
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    4 Standing flowers on the wedding stage
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    6 Standing flowers on the red carpet
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Entertainment backdrop
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    3x3 Fabric Gazebo / Dome Gazebo
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Name initials in flowers/Ice carving
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Guest reception table backdrop
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Red carpet walkway
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    1 pair of flags + name sign
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Dessert table decorations
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3 h-max px-8 py-3 lg:p-8">
                            <h3 className="lg:mt-0 mt-3 text-[20px] mb-4 border-b border-black pb-2 w-[90%]">
                                Documentations
                            </h3>

                            <ul>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    1 exclusive scratch-resistant photo album
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Photo master transfer DVD
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Video shooting master transfer DVD
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Mini studio
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Digital photo album with high-quality prints
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Drone photography/videography services
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Wedding highlights video edit
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Photo booth for guests with instant prints
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </React.Fragment>
    );
};

export default Packet2;
