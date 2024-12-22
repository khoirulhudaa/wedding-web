import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../assets";
import { useState } from "react";
import { Cancel01Icon, Home01Icon } from "hugeicons-react";

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    const navigate = useNavigate()

    const handleRoute = (route) => {
        window.location.href = '#'+route
        setShowSidebar(false)
    }

    return (
        <nav className="w-screen z-[99999] border-y border-y-black fixed left-0 h-max top-0 flex items-center justify-between py-4 px-4 lg:px-16 bg-white">
            {/* Left Content - (Logo) */}
            <Link to={"/"}>
                <img
                    src={Logo}
                    alt="Logo Luvlywed"
                    className="w-[7rem] cursor-pointer active:scale-[0.97] hover:brightness-75"
                />
            </Link>

            {/* Right Content - (List Menu) */}
            <div className="lg:flex hidden relative min-w-[30vw]">
                <ul className="w-full text-[15px] flex justify-between items-center">
                    <li className="active:scale-[0.97] hover:text-slate-500">
                        <a href="#start">Make-up Artist</a>
                    </li>
                    <li className="active:scale-[0.97] hover:text-slate-500">
                        <a href="#photography">Photography</a>
                    </li>
                    <li className="active:scale-[0.97] hover:text-slate-500">
                        <a href="#building">Building</a>
                    </li>
                    <li className="active:scale-[0.97] hover:text-slate-500">
                        <a href="#catering">Catering</a>
                    </li>
                </ul>
            </div>

            {
                window.location.pathname === '/' ? (
                    <>
                        {/* Humberger button */}
                        <div onClick={() => setShowSidebar(!showSidebar)} className="cursor-pointer active:scale-[0.97] w-[28px] h-[20px] lg:hidden flex flex-col items-center justify-between">
                            <div className="w-full h-[2px] bg-slate-700"></div>
                            <div className="w-full h-[2px] bg-slate-700"></div>
                            <div className="w-full h-[2px] bg-slate-700"></div>
                        </div>

                        <div className={`fixed top-0 ${showSidebar ? 'left-0' : 'left-[-100%]'} w-full text-left flex items-start justify-normal h-screen duration-300 ease-in bg-white z-[999] p-6`}>
                            <ul className="w-full text-[20px] text-left flex flex-col">
                                <div className="w-full flex justify-between items-center"> 
                                    <img
                                        src={Logo}
                                        alt="Logo Luvlywed"
                                        className="w-[7rem] cursor-pointer active:scale-[0.97] hover:brightness-75"
                                        />
                                    <div onClick={() => setShowSidebar(false)} className="relative ml-auto w-[44px] h-[44px] border border-black flex items-center justify-center cursor-pointer active:scale-[0.97]">
                                        <Cancel01Icon />
                                    </div>
                                </div>
                                <div className="mt-6 w-full h-[0.8px] bg-black">

                                </div>
                                <li onClick={() => handleRoute('start')} className="active:scale-[0.97] hover:text-slate-500 my-6">
                                    Make-up Artist
                                </li>
                                <li onClick={() => handleRoute('photography')} className="active:scale-[0.97] hover:text-slate-500 my-6">
                                    Photography
                                </li>
                                <li onClick={() => handleRoute('building')} className="active:scale-[0.97] hover:text-slate-500 my-6">
                                    Building
                                </li>
                                <li onClick={() => handleRoute('catering')} className="active:scale-[0.97] hover:text-slate-500 my-6">
                                    Catering
                                </li>
                            </ul>
                        </div>
                    </>
                ):
                    <div onClick={() => navigate('/')} className="cursor-pointer active:scale-[0.97] lg:hidden flex flex-col items-center justify-between">
                        <Home01Icon className="w-7 h-7" />
                    </div>
            }

        </nav>
    );
};

export default Navbar;
