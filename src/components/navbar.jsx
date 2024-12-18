import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Navbar = () => {
    return (
        <nav className="w-screen z-[99999] border-y border-y-black fixed left-0 h-max top-0 flex items-center justify-between py-4 px-16 bg-white">
            {/* Left Content - (Logo) */}
            <Link to={"/"}>
                <img
                    src={Logo}
                    alt="Logo Luvlywed"
                    className="w-[7rem] cursor-pointer active:scale-[0.97] hover:brightness-75"
                />
            </Link>

            {/* Right Content - (List Menu) */}
            <div className="relative min-w-[30vw]">
                <ul className="w-full text-[15px] flex justify-between items-center">
                    <li>
                        <a href="#start">Make-up Artist</a>
                    </li>
                    <li>
                        <a href="#photography">Photography</a>
                    </li>
                    <li>
                        <a href="#building">Building</a>
                    </li>
                    <li>
                        <a href="#catering">Catering</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
