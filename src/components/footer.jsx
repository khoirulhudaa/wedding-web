import React from "react";
import { Logo } from "../assets";
import { ArrowUp01Icon } from "hugeicons-react";

const Footer = ({ scrollToTop }) => {
    return (
        <React.Fragment>
            <footer className="relative w-full lg:h-[320px] border-t border-t-black bg-white mt-28 lg:flex items-center">
                {/* Content Footer */}
                <div className="relative w-full lg:w-[30%] lg:py-0 py-12 lg:px-0 px-6 h-full lg:flex border-r border-r-black items-center justify-center">
                    <img src={Logo} alt="logo-luvlywed" />
                </div>
                <div className="relative w-full lg:w-[70%] lg:px-0 px-6 h-full lg:flex lg:items-center lg:justify-end lg:pr-16">
                    <div className="lg:mb-0 mb-10 w-full lg:w-1/3 h-full flex flex-col justify-center lg:items-end text-left">
                        <p className="font-semibold border-b border-b-black pb-2 mb-4">
                            Wedding Organizer
                        </p>
                        <ul className="lg:text-end">
                            <li className="mb-5">Event Planning</li>
                            <li className="mb-5">Venue Decoration</li>
                            <li>Coordination on the Day</li>
                        </ul>
                    </div>
                    <div className="lg:mb-0 mb-10 w-full lg:w-1/3 h-full flex flex-col justify-center lg:items-end text-left">
                        <p className="font-semibold border-b border-b-black pb-2 mb-4">
                            Make-up Artist
                        </p>
                        <ul className="lg:text-end">
                            <li className="mb-5">Hair Styling</li>
                            <li className="mb-5">Bridal Makeup</li>
                            <li>Bridesmaids Makeup</li>
                        </ul>
                    </div>
                    <div className="lg:mb-0 mb-10 w-full lg:w-1/3 h-full flex flex-col justify-center lg:items-end text-left">
                        <p className="font-semibold border-b border-b-black pb-2 mb-4">
                            Catering
                        </p>
                        <ul className="lg:text-end">
                            <li className="mb-5">Buffet Service</li>
                            <li className="mb-5">Wedding Cake</li>
                            <li>Drinks and Beverages</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="relative w-full overflow-x-hidden h-max py-8 border-t border-t-black text-black lg:text-[15px] text-[16px] flex items-center px-5 lg:justify-center">
                <small>#LuvlyWed - Olimpik - Muhammad Khoirulhuda</small>

                {/* Back-to-top */}
                <div
                    onClick={() => scrollToTop()}
                    className="absolute w-[46px] lg:w-[54px] h-[46px] lg:h-[54px] active:scale-[0.97] cursor-pointer hover:brightness-[90%] bg-white border-x border-t border-black flex items-center justify-center shadow-lg bottom-0 right-6 lg:right-16 z-[9999999]"
                >
                    <ArrowUp01Icon />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
