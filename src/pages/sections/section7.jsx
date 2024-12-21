import { ArrowRight01Icon, Cancel01Icon } from "hugeicons-react";
import React, { useState } from "react";
import { Gal1, Gal2, Gl1 } from "../../assets";

const Section7 = () => {
    const [showGallery, setShowGallery] = useState(false);

    const images = [
        Gl1,
        Gal2,
        Gal2,
        Gl1,
        Gl1,
        Gal2,
    ]

    return (
        <React.Fragment>
            <section className="select-none relative w-screen h-max lg:mt-[44px]">
                <h2
                    className="select-none text-[32px] lg:text-[54px] font-normal w-[65%] ml-4 lg:ml-16"
                >
                    Timeless In The Sophistication <br /> of Our Equipment.
                </h2>
                <div>
                    <div className="w-[1px] h-[120px] ml-20 my-4 bg-black"></div>
                </div>
                <div className="relative w-full h-[200px] flex justify-between items-center px-14 pb-14 pt-10 bg-[#FFD476] border border-black text-[#030605]">
                    <div className="absolute right-16 top-[-101%] w-max h-[200px] border-x border-t border-black flex items-center justify-center">
                        <div className="w-[120px] h-full">
                            <div className="w-full h-1/2 p-3 flex items-center justify-center overflow-hidden">
                                <img
                                    loading="lazy"
                                    draggable="false"
                                    onContextMenu={(e) => e.preventDefault()}
                                    src={Gal1}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                            <div className="w-full h-1/2 p-3 flex items-center justify-center overflow-hidden">
                                <img
                                    loading="lazy"
                                    draggable="false"
                                    onContextMenu={(e) => e.preventDefault()}
                                    src={Gal2}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                        </div>
                        <div className="w-[1px] h-full bg-black"></div>
                        <div className="w-[120px] h-full">
                            <div className="w-full h-1/2 p-3 flex items-center justify-center overflow-hidden">
                                <img
                                    loading="lazy"
                                    draggable="false"
                                    onContextMenu={(e) => e.preventDefault()}
                                    src={Gal1}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                            <div className="w-full h-1/2 p-3 flex items-center justify-center overflow-hidden">
                                <img
                                    loading="lazy"
                                    draggable="false"
                                    onContextMenu={(e) => e.preventDefault()}
                                    src={Gal2}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] pr-2 ml-auto flex items-center">
                        <div className="w-[75%]">
                            <h2
                                className="select-none text-[44px] w-max mb-4"
                            >
                                Servive Quality
                            </h2>
                            <p
                                className="select-none text-[13.2px] leading-loose w-[80%]"
                            >
                                We take pride in offering exceptional service
                                for every couple, capturing every special moment
                                of your wedding day with care and high quality
                            </p>
                        </div>
                        <div
                            onClick={() => setShowGallery(true)}
                            className="relative text-center active:scale-[0.97] hover:bg-glow hover:animate-glow hover:brightness-[90%] lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3.5 font-medium text-[16px] lg:text-[15px] bg-[#28887A] text-white cursor-pointer"
                        >
                            Explore images
                            <ArrowRight01Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                        </div>
                    </div>
                </div>
            </section>

            {showGallery ? (
                <div className="fixed top-0 left-0 z-[999999] w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="bg-white w-[70vw] h-[85vh] overflow-hidden p-6">
                        <div className="w-full flex items-baseline pr-1 justify-between">
                            <h2 className="border-b border-black pb-3 text-[32px] mb-6 ml-3">
                                Gallery LuvlyWed
                            </h2>
                            <div
                                onClick={() => setShowGallery(false)}
                                className="cursor-pointer active:scale-[0.96] hover:brightness-[90%] duration-100 text-black border border-black w-[44px] h-[44px] flex items-center justify-center"
                            >
                                <Cancel01Icon className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="w-full h-[80%] flex flex-wrap justify-between overflow-auto">
                            {images.map((src, index) => (
                                <div className="w-1/2 border border-white h-1/2 overflow-hidden">
                                    <img
                                        loading="lazy"
                                        key={index}
                                        src={src}
                                        alt={`Image ${index}`}
                                        className="w-full h-full hover:scale-[1.1] duration-300 hover:grayscale-[60%] object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </React.Fragment>
    );
};

export default Section7;
