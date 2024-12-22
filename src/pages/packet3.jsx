import {
    Chatting01Icon,
    CheckmarkSquare02Icon,
    GridIcon,
} from "hugeicons-react";
import React, { useEffect, useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Gradient1, Gradient2, Gradient4 } from "../assets";
import { Link } from "react-router-dom";

const Packet3 = () => {
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

            <section className="relative select-none w-screen min-h-screen pt-12 lg:pt-16 px-6 lg:px-16 mt-8">
                <h2 className="select-none pb-3 w-[94%] lg:w-[60%] text-[32px] lg:text-[54px] border-b border-black font-normal">
                    Create Wedding with the Opulence Package
                </h2>
                <p className="w-[94%] lg:w-[70%] text-[16px] mt-2 text-black leading-loose">
                    1500 wedding invitations + 1500 souvenirs + Reception MC,
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
                        <p>Packet-Opulence</p>
                    </div>
                    <div className="flex items-center lg:mt-0 mt-6">
                        <div className="active:scale-[0.97] cursor-pointer relative z-[3] text-[16px] py-1 w-max lg:ml-auto px-3 bg-[#FFD476] border-r-0 text-black flex items-center border border-black justify-center">
                            <Chatting01Icon className="w-4 h-4" />
                            <p className="ml-3">Booking Now</p>
                        </div>
                        <div className="relative z-[3] text-[16px] py-1 w-max lg:ml-auto px-3 bg-transparent text-black flex items-center border border-black justify-center">
                            <GridIcon className="w-4 h-4" />
                            <p className="ml-3">Opulence</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-max border border-black">
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
                                    Attire for 10 pairs of guests
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Attire for 8 bridesmaids
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
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Groom’s accessories (watch, cufflinks, etc.)
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Bridal shoes & custom design options
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Personal stylist for bride, groom, and
                                    family
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3 h-max px-8 py-3 lg:p-8">
                            <h3 className="text-[20px] mb-4 border-b border-black pb-2 w-[90%]">
                                Decorations
                            </h3>

                            <ul>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Custom-designed flower arch with luxury
                                    blooms
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Buffet table decorations for guests and VIPs
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Wedding stage spotlight lights and
                                    projection
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Fresh (real) wedding flowers and
                                    arrangements
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Mini garden + Luxury fresh flowers
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    1 set luxury wedding throne chairs + premium
                                    carpet
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    10 Standing flowers on the wedding stage
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    15 Standing flowers on the red carpet
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Entertainment backdrop with personalized
                                    designs
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    5x5 Fabric Gazebo / Custom Dome Gazebo
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Name initials in flowers/Ice sculpture
                                    centerpiece
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Guest reception table backdrop with luxury
                                    fabric
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Extravagant red carpet walkway with velvet
                                    touch
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    2 pairs of custom-made flags + personalized
                                    name sign
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Dessert table decorations with premium
                                    sweets
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Customized luxury lighting effects and
                                    projections
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3 h-max px-8 py-3 lg:p-8">
                            <h3 className="text-[20px] mb-4 border-b border-black pb-2 w-[90%]">
                                Documentations
                            </h3>

                            <ul>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    2 exclusive luxury photo albums with premium
                                    finish
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    High-definition photo master transfer DVD
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Ultra-high-definition video shooting master
                                    transfer DVD
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Mini luxury photo studio with props and
                                    backdrops
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Digital photo album with high-quality prints
                                    + premium packaging
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Aerial drone photography and videography
                                    with custom editing
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Wedding highlights video edit with cinematic
                                    effects
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Interactive photo booth with instant
                                    high-quality prints
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Full-length wedding video with professional
                                    film editing
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Personalized photo album with premium finish
                                    + custom engraving
                                </li>
                                <li className="mb-6 text-[14px] flex items-center">
                                    <CheckmarkSquare02Icon className="mr-3 w-6 h-6" />
                                    Custom wedding website with gallery and
                                    online RSVP features
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

export default Packet3;
