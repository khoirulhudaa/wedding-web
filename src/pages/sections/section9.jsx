import {
    CheckmarkSquare01Icon,
    DollarSquareIcon,
    Time01Icon,
} from "hugeicons-react";
import React from "react";

const Section9 = () => {
    return (
        <React.Fragment>
            <section className="select-none relative my-[100px] px-16 overflow-hidden flex items-center justify-center h-[80vh] border-y border-y-black">
                <div className="w-[70%] py-16 h-full">
                    <h2
                        className="select-none text-[44px]"
                    >
                        Why Are We Recommended?
                    </h2>

                    <div className="mt-10 w-full flex items-center justify-between pr-16">
                        <div
                            data-aos-delay="100"
                            className="bg-white w-[28%] h-[200px] p-4 border border-black"
                        >
                            <DollarSquareIcon />
                            <p className="select-none text-[16px] mt-2">
                                Affordable prices
                            </p>
                            <div className="w-full h-[1px] bg-black my-2"></div>
                            <p className="select-none text-[15px] mt-10">
                                No need for printing costs, just create once and
                                share
                            </p>
                        </div>
                        <div
                            data-aos-delay="200"
                            className="bg-white w-[28%] h-[200px] p-4 border border-black"
                        >
                            <Time01Icon />
                            <p className="select-none text-[16px] mt-2">
                                Fast process
                            </p>
                            <div className="w-full h-[1px] bg-black my-2"></div>
                            <p className="select-none text-[15px] mt-10">
                                Friendly service with a quick response to
                                customer
                            </p>
                        </div>
                        <div
                            data-aos-delay="300"
                            className="bg-white w-[28%] h-[200px] p-4 border border-black"
                        >
                            <CheckmarkSquare01Icon />
                            <p className="select-none text-[16px] mt-2">
                                Many templates
                            </p>
                            <div className="w-full h-[1px] bg-black my-2"></div>
                            <p className="select-none text-[15px] mt-10">
                                We offer a variety of modern themes that are
                                perfect
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] ml-auto justify-center h-full flex">
                    <div className="w-[40%] border-l-[1px] border-y-[1px] mt-auto border-b-0 border-black h-[80%] rounded-tl-full"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[40%] border-r-[1px] border-y-[1px] border-t-0 border-black h-[80%] rounded-br-full"></div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section9;
