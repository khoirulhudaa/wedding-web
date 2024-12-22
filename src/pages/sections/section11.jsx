import { FavouriteIcon, LinkSquare02Icon } from "hugeicons-react";
import React, { useState } from "react";
import { Jk1, Jk2, Jk3 } from "../../assets";
import ThreeDModel from "../../components/model";

const Section11 = () => {
    const [showJunkFood, setShowJunkFood] = useState(false);
    const [showHealthFood, setShowHealthFood] = useState(false);

    return (
        <React.Fragment>
            <div className="relative lg:flex hidden ml-6 lg:ml-16 w-[1px] h-[60px] lg:h-[100px] bg-black"></div>

            <section
                id="catering"
                className="select-none relative lg:mb-10 mt-7 lg:mt-6 px-6 lg:px-16 min-h-[70vh] py-2 pb-10 overflow-hidden"
            >
                <div className="absolute lg:flex hidden right-16 top-[-100px] w-[1px] h-[200px] bg-black"></div>

                {/* Junk Food */}
                {showJunkFood ? (
                    <div
                        className={`duration-300 w-full z-[99] flex h-[90vh] fixed ${
                            showJunkFood ? "left-0" : "left-[-100%]"
                        } bottom-0 bg-white  border-t border-r border-black shadow-lg`}
                    >
                        <div className="w-[65%] flex justify-between items-center overflow-hidden">
                            <div className="flex w-full h-full relative -left-10">
                                <div className="relative w-[40%] skew-x-6 h-full border-r border-white mb-4 overflow-hidden">
                                    <div className="absolute z-[99] top-6 right-6 text-white">
                                        <h3 className="text-[20px] mb-3 border-b border-white pt-4 pb-3.5">
                                            Truffle Fries
                                        </h3>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={Jk1}
                                        alt="image-food"
                                        className="w-full brightness-50 h-full object-cover duration-300"
                                    />
                                </div>
                                <div className="relative w-1/3 skew-x-6 border-x border-black h-full mb-4 overflow-hidden">
                                    <div className="absolute z-[99] top-6 right-6 text-white">
                                        <h3 className="text-[20px] mb-3 border-b border-white pt-4 pb-3.5">
                                            Truffle Fries
                                        </h3>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={Jk3}
                                        alt="image-food"
                                        className="w-full brightness-50 h-full object-cover duration-300"
                                    />
                                </div>
                                <div className="relative w-1/3 skew-x-6 border-r border-black h-full mb-4 overflow-hidden">
                                    <div className="absolute z-[99] top-6 right-6 text-white">
                                        <h3 className="text-[20px] mb-3 border-b border-white pt-4 pb-3.5">
                                            Truffle Fries
                                        </h3>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={Jk2}
                                        alt="image-food"
                                        className="w-full brightness-50 h-full object-cover duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[35%] h-full text-end flex flex-col justify-between py-6 pr-8 mr-16 border-r border-r-black">
                            <div className="w-full">
                                <h2 className="border-b border-black pb-3 text-[32px] mb-6 ml-3">
                                    Junk Food Menus
                                </h2>
                                <ul className="w-max ml-auto">
                                    <li className="mb-8 text-end list-none">
                                        Truffle Fries
                                    </li>
                                    <li className="mb-8 text-end list-none">
                                        Burger King
                                    </li>
                                    <li className="mb-8 text-end list-none">
                                        Lobster Red
                                    </li>
                                </ul>
                            </div>
                            <div
                                onClick={() => setShowJunkFood(false)}
                                className="flex justify-end items-center"
                            >
                                <p className="mr-4 text-[16px]">Close</p>
                                <div className="relative border border-black p-1 w-[54px] h-[54px] flex items-center justify-center">
                                    <LinkSquare02Icon className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {showHealthFood ? (
                    <div
                        className={`duration-300 w-full z-[99] flex h-[90vh] fixed ${
                            showHealthFood
                                ? "left-[0%] duration-300"
                                : "left-[-100%]"
                        } bottom-0 bg-white border-t border-r border-black shadow-lg`}
                    >
                        <div className="w-[35%] h-full pl-8 ml-16 border-l border-l-black flex flex-col justify-between p-6">
                            <div className="w-full">
                                <h2 className="border-b border-black pb-3 text-[32px] mb-6 ml-3">
                                    Health Food Menus
                                </h2>
                                <ul>
                                    <li className="mb-8 list-none">
                                        Truffle Fries
                                    </li>
                                    <li className="mb-8 list-none">
                                        Burger King
                                    </li>
                                    <li className="mb-8 list-none">
                                        Lobster Red
                                    </li>
                                </ul>
                            </div>
                            <div
                                onClick={() => setShowHealthFood(false)}
                                className="flex items-center"
                            >
                                <div className="relative border border-black p-1 w-[54px] h-[54px] flex items-center justify-center">
                                    <LinkSquare02Icon className="w-6 h-6" />
                                </div>
                                <p className="ml-4 text-[16px]">Close</p>
                            </div>
                        </div>
                        <div className="w-[65%] flex justify-between items-center overflow-hidden">
                            <div className="flex w-full h-full relative left-10">
                                <div className="relative w-1/3 -skew-x-6 h-full border-l border-black mb-4 overflow-hidden">
                                    <div className="absolute z-[99] top-6 left-6 text-white">
                                        <h3 className="text-[20px] mb-3 border-b border-white pt-4 pb-3.5">
                                            Truffle Fries
                                        </h3>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={Jk1}
                                        alt="image-food"
                                        className="w-full brightness-50 h-full object-cover duration-300"
                                    />
                                </div>
                                <div className="relative w-1/3 -skew-x-6 h-full border-x border-black mb-4 overflow-hidden">
                                    <div className="absolute z-[99] top-6 left-6 text-white">
                                        <h3 className="text-[20px] mb-3 border-b border-white pt-4 pb-3.5">
                                            Truffle Fries
                                        </h3>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={Jk3}
                                        alt="image-food"
                                        className="w-full brightness-50 h-full object-cover duration-300"
                                    />
                                </div>
                                <div className="relative w-[40%] -skew-x-6 h-full mb-4 overflow-hidden">
                                    <div className="absolute z-[99] top-6 left-6 text-white">
                                        <h3 className="text-[20px] mb-3 border-b border-white pt-4 pb-3.5">
                                            Truffle Fries
                                        </h3>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={Jk2}
                                        alt="image-food"
                                        className="w-full brightness-50 h-full object-cover duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                <h1
                    className="text-[32px] lg:text-[54px] w-[94%] lg:w-[72%] text-black"
                >
                    Serving Delicious Meals, Making Every Moment.
                </h1>
                <div className="relative overflow-hidden lg:px-16 mt-12 ml-auto w-full flex items-center justify-between lg:border-y border-black h-[70%]">
                    <div
                        onClick={() => {
                            setShowJunkFood(true);
                            setShowHealthFood(false);
                        }}
                        className="flex items-center border pr-3 border-black w-max h-full cursor-pointer active:scale-[0.97]"
                    >
                        <div className="border mr-4 border-r border-r-black hover:bg-glow hover:animate-glow bg-[#FFD476] p-1 w-[54px] h-[54px] flex items-center justify-center">
                            <LinkSquare02Icon className="w-6 h-6 text-orange-700" />
                        </div>
                        <p className="select-none flex w-max">Junk Food</p>
                    </div>
                    <div className="relative lg:flex hidden h-[200px] top-[30px]">
                        <ThreeDModel
                            url={"/eat.glb"}
                            intensity={3}
                            speed={1}
                            scaleCustom={[2.4, 2.4, 2.4]}
                        />
                    </div>
                    <div
                       lgy="200"
                        onClick={() => {
                            setShowJunkFood(false);
                            setShowHealthFood(true);
                        }}
                        className="flex items-center border pr-3 border-black w-max h-full cursor-pointer active:scale-[0.97]"
                    >
                        <div className="border mr-4 border-r border-r-black hover:bg-glow hover:animate-glow bg-[#FFD476] p-1 w-[54px] h-[54px] flex items-center justify-center">
                            <LinkSquare02Icon className="w-6 h-6 text-orange-700" />
                        </div>
                        <p className="select-none flex w-max">Health Food</p>
                    </div>
                </div>
                <div className="w-full lg:flex items-center justify-between mt-[44px]">
                    <div
                       lgy="100"
                        className="bg-whit w-full lg:mb-0 mb-6 lg:w-[30%] h-max border border-black p-4 cursor-pointer hover:brightness-[97%]"
                    >
                        <h2 className="select-none text-[20px] mb-1">
                            The Elegance
                        </h2>
                        <p>300 Guests</p>
                        <div className="w-full h-[1px] bg-black my-6"></div>

                        <ul className="list-style-desc">
                            <li className="mb-4">
                                Simple and delicious menu options
                            </li>
                            <li className="mb-4">
                                Buffet-style menu - local dishes
                            </li>
                            <li className="mb-4">Simple table decoration</li>
                            <li className="mb-4">Service by trained staff</li>
                            <li className="mb-4">
                                Buffet-style food presentation
                            </li>
                            <li className="mb-4">Standart drinks </li>
                            <li className="mb-4">
                                Cold and hot beverages available
                            </li>
                        </ul>
                        <div className="border border-black w-full py-3 flex items-center justify-center cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow mt-8">
                            <p>Detail</p>
                        </div>
                    </div>
                    <div
                       lgy="200"
                        className="relative bg-white w-full lg:mb-0 mb-6 lg:w-[30%] h-max border border-black p-4 cursor-pointer hover:brightness-[97%]"
                    >
                        <div className="absolute flex items-center justify-center top-0 right-0 border-l border-b border-black w-[54px] h-[54px]">
                            <FavouriteIcon />
                        </div>
                        <h2 className="select-none text-[20px] mb-1">
                            Royal Prestige
                        </h2>
                        <p>600 Guests</p>
                        <div className="w-full h-[1px] bg-black my-6"></div>

                        <ul className="list-style-desc">
                            <li className="mb-4">
                                Premium menu with more variety
                            </li>
                            <li className="mb-4">
                                Buffet menu and international{" "}
                            </li>
                            <li className="mb-4">
                                Elegant and beautiful table decorations
                            </li>
                            <li className="mb-4">
                                Professional and friendly staff
                            </li>
                            <li className="mb-4">
                                Buffet and à la carte food service
                            </li>
                            <li className="mb-4">Specialty drinks </li>
                            <li className="mb-4">
                                wardrobeFood service for VIP guests
                            </li>
                        </ul>
                        <div className="border border-black w-full py-3 flex items-center justify-center cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow mt-8">
                            <p>Detail</p>
                        </div>
                    </div>
                    <div
                       lgy="300"
                        className="bg-white w-full lg:mb-0 mb-3 lg:w-[30%] h-max border border-black p-4 cursor-pointer hover:brightness-[97%]"
                    >
                        <h2 className="select-none text-[20px] mb-1">
                            Opulent Bliss
                        </h2>
                        <p>900 Guests</p>
                        <div className="w-full h-[1px] bg-black my-6"></div>

                        <ul className="list-style-desc">
                            <li className="mb-4">
                                Exclusive and luxurious menu
                            </li>
                            <li className="mb-4">
                                Direct table service with personal chefs
                            </li>
                            <li className="mb-4">
                                Luxurious and detailed table decorations
                            </li>
                            <li className="mb-4">
                                Highly trained staff attending throughout
                            </li>
                            <li className="mb-4">
                                Buffet, à la carte, premium dishes
                            </li>
                            <li className="mb-4">Gourmet dessert options</li>
                            <li className="mb-4">
                                Special food delivery for VIP guests
                            </li>
                        </ul>
                        <div className="border border-black w-full py-3 flex items-center justify-center cursor-pointer active:scale-[0.97] hover:bg-glow hover:animate-glow mt-8">
                            <p>Detail</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section11;
