import { ArrowRight01Icon, SparklesIcon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";
import ThreeDModel from "../../components/model";

const Section3 = () => {
    return (
        <React.Fragment>
            {/* Dress wedding */}
            <section
                id="start"
                className="select-none relative lg:flex px-4 lg:px-16 w-full border-t border-black h-max lg:h-[84vh]"
            >
                <div
                    className="relative w-full lg:w-[40%] h-1/2 lg:h-full pt-14 lg:pt-32 lg:border-x border-x-black"
                >
                    <div className="absolute z-[99] top-4 left-4 w-[30px] h-[30px] bg-[#FFD476] text-white font-bold flex items-center justify-center">
                        <p>3D</p>
                    </div>
                    <ThreeDModel
                        url={"/dress3.glb"}
                        intensity={30}
                        speed={1}
                        scaleCustom={[2.1, 2.1, 2.1]}
                    />
                </div>

                <div className="select-none pt-8 lg:pt-6 border-t border-t-black lg:border-t-0 overflow-hidden relative w-full lg:w-[60%] lg:border-r border-black lg:pb-0 pb-8 lg:pl-8 h-1/2 overflow-hiden lg:h-full flex flex-col lg:justify-center">
                    <div
                        className="w-max h-max border border-black p-3 flex items-center justify-center text-[16px] lg:bg-transparent bg-[#FFD476] mb-3 text-black"
                    >
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        <p>Make-up Artist - Best of 2025</p>
                    </div>
                    <h2
                        className="select-none font-normal text-[24px] lg:text-[44px] w-[94%] lg:w-full"
                    >
                        Flawless Make-Up and Dresses <br className="lg:flex hidden" /> for Your
                        <span className="text-orange-500 ml-2">
                            Special Day
                        </span>
                    </h2>
                    <p
                        className="select-non lg:flex hidden e text-[15px] w-[90%] lg:w-[70%] lg:my-6 leading-loose text-black"
                    >
                        Create unforgettable memories with our exquisite
                        collection of professional make-up and stunning wedding
                        dresses, tailored to make your special day even more
                        magical
                    </p>

                    {/* <div
                        className="absolute top-6 right-6 text-[16px] px-4 py-2 border border-black flex items-center justify-center hover:bg-glow hover:animate-glow"
                    >
                        <p>
                            100 Outfits, Shirts, Accessories
                        </p>
                        <SparklesIcon className="w-5 h-5 ml-3" />
                    </div> */}

                    <Link to={"/dress"}>
                        <div className="relative border lg:mt-0 mt-4 border-black hover:bg-glow hover:text-black hover:animate-glow active:scale-[0.97] hover:brightness-[90%] text-center lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3.5 font-medium text-[16px] lg:text-[15px] text-black cursor-pointer">
                            Order now{" "}
                            <ArrowRight01Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                        </div>
                    </Link>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section3;
