import React from "react";
import { Logo } from "../assets";
import { ArrowUp01Icon } from "hugeicons-react";

const Footer = ({ scrollToTop }) => {
    return (
        <React.Fragment>
            <footer className="w-full h-[320px] border-t border-t-black bg-white mt-28 flex items-center">
                {/* Back-to-top */}
                <div
                    onClick={() => scrollToTop()}
                    className="absolute w-[54px] h-[54px] active:scale-[0.97] cursor-pointer hover:brightness-[90%] bg-white border border-black flex items-center justify-center shadow-lg bottom-0 right-16 z-[9999999]"
                >
                    <ArrowUp01Icon />
                </div>

                {/* Content Footer */}
                <div className="w-[30%] h-full flex border-r border-r-black items-center justify-center">
                    <img src={Logo} alt="logo-luvlywed" />
                </div>
                <div className="w-[70%] h-full flex items-center justify-end pr-16">
                    <div className="w-1/3 h-full flex flex-col justify-center items-end text-left">
                        <p className="font-semibold border-b border-b-black pb-2 mb-4">
                            Wedding Organizer
                        </p>
                        <ul className="text-end">
                            <li className="mb-5">Event Planning</li>
                            <li className="mb-5">Venue Decoration</li>
                            <li>Coordination on the Day</li>
                        </ul>
                    </div>
                    <div className="w-1/3 h-full flex flex-col justify-center items-end text-left">
                        <p className="font-semibold border-b border-b-black pb-2 mb-4">
                            Make-up Artist
                        </p>
                        <ul className="text-end">
                            <li className="mb-5">Hair Styling</li>
                            <li className="mb-5">Bridal Makeup</li>
                            <li>Bridesmaids Makeup</li>
                        </ul>
                    </div>
                    <div className="w-1/3 h-full flex flex-col justify-center items-end text-left">
                        <p className="font-semibold border-b border-b-black pb-2 mb-4">
                            Catering
                        </p>
                        <ul className="text-end">
                            <li className="mb-5">Buffet Service</li>
                            <li className="mb-5">Wedding Cake</li>
                            <li>Drinks and Beverages</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="w-full overflow-x-hidden h-max py-8 border-t border-t-black text-black lg:text-[15px] text-[16px] flex items-center px-5 lg:justify-center">
                <small>#LuvlyWed - Olimpik - Muhammad Khoirulhuda</small>
            </div>
        </React.Fragment>
    );
};

export default Footer;
