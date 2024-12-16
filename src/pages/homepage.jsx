import { motion } from "framer-motion";
import {
    Agreement02Icon,
    AiMagicIcon,
    ArrowLeft01Icon,
    ArrowRight01Icon,
    ArrowUp01Icon,
    Blockchain04Icon,
    Cancel01Icon,
    CheckmarkCircle02Icon,
    CheckmarkSquare01Icon,
    CommandIcon,
    DollarSquareIcon,
    EthereumRectangleIcon,
    EyeIcon,
    FavouriteIcon,
    LinkSquare02Icon,
    SparklesIcon,
    Time01Icon,
} from "hugeicons-react";
import { useEffect, useRef, useState } from "react";
import {
    Ballroom,
    Ballroom2,
    Ballroom3,
    Gal1,
    Gal2,
    Gl1,
    Gl3,
    Gl4,
    Gradient1,
    Gradient2,
    Gradient4,
    HP,
    Jk1,
    Jk2,
    Jk3,
    Lines,
    Petik,
    Spon1,
    Spon2,
    Spon3,
    User1,
    User2,
    User3
} from "../assets";
import Footer from "../components/footer.jsx";
import ModalBuild from "../components/modalBuild.jsx";
import ThreeDModel from "../components/model.jsx";
import Navbar from "../components/navbar.jsx";
import "../index.css";

const Homepage = () => {
    const [showModalBuild, setShowModalBuild] = useState(false);
    const [start, setStart] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showJunkFood, setShowJunkFood] = useState(false);
    const [showHealthFood, setShowHealthFood] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleCollapse = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle collapse
    };

    // Ref untuk mengakses elemen audio
    const audioRef = useRef(null);

    // Fungsi untuk mengontrol play/pause audio
    const playAUdio = () => {
        if (isPlaying) {
            // Jika audio sedang diputar, maka berhenti
            audioRef.current.pause();
        } else {
            // Jika audio tidak diputar, maka mulai memutar
            audioRef.current.play();
        }
        // Toggle state
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setStart(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleCloseStart = () => {
        setStart(false);
        playAUdio();
    };

    // Memantau posisi scroll
    const checkScrollPosition = () => {
        if (window.scrollY > 300) {
            // Menampilkan tombol jika scroll lebih dari 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Fungsi untuk scroll ke atas
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Memantau perubahan posisi scroll
    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);

        // Membersihkan event listener saat komponen dihapus
        return () => {
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    const images = [
        Gl1,
        Gl3,
        Gl4,
        Gl1,
        Gl1,
        Gl3,
        Gl4,
        Gl1,
       
    ];

    // define cursor coordinates
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // define if mouse is hovered on element
    const [isHovered, setIsHovered] = useState(false);

    // define location of mouse
    useEffect(() => {
        const setFromEvent = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    const size = isHovered ? "180" : "30";

    return (
        <main className="relative mt-16 overflow-x-hidden">
            {/* Backsound */}
            <audio
                ref={audioRef}
                className="absolute z-[-2] opacity-0"
                src="../audio/audio.mp3"
            />

            {/* Navbar Component */}
            <Navbar />

            {/* Hero Component */}
            <section className="relative w-full h-full overflow-hidden flex justify-center">
                <div className="absolute w-full h-full overflow-hidden">
                    {/* Square Line's */}
                    <div className="w-screen h-[1px] absolute left-0 top-[10%] bg-slate-100"></div>
                    <div className="w-screen h-[1px] absolute left-0 top-[20%] bg-slate-100"></div>
                    <div className="w-screen h-[1px] absolute left-0 top-[30%] bg-slate-100"></div>
                    <div className="w-screen h-[1px] absolute left-0 top-[40%] bg-slate-100"></div>
                    <div className="w-screen h-[1px] absolute left-0 top-[50%] bg-slate-100"></div>
                    <div className="w-screen h-[1px] absolute left-0 top-[60%] bg-slate-100"></div>
                    <div className="w-screen h-[1px] absolute left-0 top-[70%] bg-slate-100"></div>
                    <div className="w-screen h-[1px] absolute left-0 top-[80%] bg-slate-100"></div>
                    <div className="w-screen h-[1px] absolute left-0 top-[90%] bg-slate-100"></div>
                    <div className="w-screen h-[1px] absolute left-0 top-[100%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[10%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[20%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[30%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[40%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[50%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[60%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[70%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[80%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[90%] bg-slate-100"></div>
                    <div className="w-[1px] h-screen absolute top-0 left-[100%] bg-slate-100"></div>
                </div>

                {/* Gradient Effects - Background */}
                <img
                    loading="lazy"
                    draggable="false" // Mencegah gambar agar tidak bisa di-drag
                    onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                    src={Gradient1}
                    alt="gradient"
                    className="gr3"
                />
                <img
                    loading="lazy"
                    draggable="false" // Mencegah gambar agar tidak bisa di-drag
                    onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                    src={Gradient4}
                    alt="gradient1"
                    className="gr1"
                />
                <img
                    loading="lazy"
                    draggable="false" // Mencegah gambar agar tidak bisa di-drag
                    onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                    src={Gradient2}
                    alt="gradient2"
                    className="gr2"
                />

                {/* Main Content - Hero */}
                <div className="relative w-full mt-0 h-max lg:h-[80vh] mb-4 lg:text-center z-[98888] mx-auto flex flex-col justify-center lg:items-center">
                    <div className="absolute top-0 lg bg-white flex border-b border-b-black lg:text-[16px] text-[13px] text-black h-max w-full lg:w-screen lg:px-3 px-5 py-3 mb-6 lg:mb-2 items-center lg:justify-center">
                        <AiMagicIcon className="mr-1" />
                        Version 1.0.0 - new released
                        <AiMagicIcon className="ml-1" />
                    </div>
                    <div className="container-mask">
                        <motion.div
                            className={isHovered ? 'mask' : 'mask2'}
                            animate={{
                                WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
                                    mousePosition.y - size / 30
                                }px`,
                                WebkitMaskSize: `${size}px`,
                            }}
                            transition={{ ease: "backOut", duration: 0.6 }}
                        >
                        <h1
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="normal text-[2.6rem] lg:ml-0 ml-5 lg:text-[3.7rem] font-bold w-[90vw] mt-10 lg:w-[80vw] lg:text-center">
                            From{" "}
                            <span className="border-b border-b-black">
                                Planning
                            </span>{" "}
                            to Celebration, <br /> We’ve Got You
                            <span className="ml-4 border-b border-b-black">
                                Covered
                            </span>
                        </h1>
                        </motion.div>
                        <h1
                        className="normal text-[2.6rem] lg:ml-0 ml-5 lg:text-[3.7rem] font-bold w-[90vw] mt-10 lg:w-[80vw] lg:text-center">
                            From{" "}
                            <span className="border-b border-b-black">
                                Planning
                            </span>{" "}
                            to Celebration, <br /> We’ve Got You
                            <span className="ml-4 border-b border-b-black">
                                Covered
                            </span>
                        </h1>
                    </div>
                    <p className="select-none text-black my-3 lg:ml-0 ml-5 lg:text-[16px] text-[14px] w-[90%] lg:w-[50%]">
                        Bringing your special day to life with love and ease.
                        LuvlyWed, the place for elegant wedding planning and
                        unforgettable moments
                    </p>
                    <a href="#start">
                        <div className="relative active:scale-[0.98] hover:brightness-[94%] text-center lg:w-max w-max flex no-underline lg:ml-0 ml-5 mt-4 px-4 lg:px-6 py-3.5 font-medium text-[14px] lg:text-[15px] z-[99] border border-black text-black lg cursor-pointer">
                            Start Planning Now
                            <Agreement02Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                        </div>
                    </a>

                    <div className="text-[14px] mt-6 px-5 lg:px-0 w-max lg:w-max flex items-center mx-auto">
                        <div className="w-full lg:w-[30%] lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg text-red-500 bg-red-100">
                            <EthereumRectangleIcon className="w-4 h-4 relative mr-2" />
                            Fotografi
                        </div>
                        <div className="w-full lg:w-max lg:justify-center lg:mx-4 flex items-center px-3 py-3 lg:py-1.5 lg text-green-500 bg-green-100">
                            <CommandIcon className="w-4 h-4 relative mr-2" />
                            <p className="select-none flex w-max">
                                Venue wedding
                            </p>
                        </div>
                        <div className="w-full lg:w-max lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg text-purple-500 bg-purple-100">
                            <Blockchain04Icon className="w-4 h-4 relative mr-2" />
                            <p className="select-none flex w-max">Make-up</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="select-none relative flex items-center overflow-x-hidden px-16 w-full mb-[70px] h-max">
                <div className="sponsor-container">
                    <div className="sponsor-items">
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="sponsor-items">
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-[50px] border-[1px] flex pb-2 items-end justify-center border-black bg-slate-100 h-[40px] mx-4">
                    <div className="relative w-[6px] h-[14px] rounded-full bg-red-500"></div>
                </div>

                <div className="sponsor-container">
                    <div className="sponsor-items">
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="sponsor-items">
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="absolute h-[100vh] w-screen overflow-hidden top-[0%]">
                <img
                    loading="lazy"
                    draggable="false" // Mencegah gambar agar tidak bisa di-drag
                    onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                    src={Lines}
                    alt="lines-descoration"
                    className="w-[100%] scale-[2] opacity-[0.3]"
                />
            </div>

            {/* Dress wedding */}
            <section
                id="start"
                className="relative flex px-16 w-full border-t border-t-black h-[80vh]"
            >
                <div className="relative w-[30%] h-[90vh] pt-20 border-x border-x-black">
                    <div className="absolute top-4 left-4 w-[30px] h-[30px] bg-[#FFD476] text-white font-bold flex items-center justify-center">
                        <p>3D</p>
                    </div>
                    <ThreeDModel
                        url={"/dress3.glb"}
                        intensity={30}
                        speed={1}
                        scaleCustom={[2, 2, 2]}
                    />
                    <div className="relative top-[-100px] w-screen h-[1px] bg-black"></div>
                </div>

                <div className="relative w-[70%] pl-8 h-full flex flex-col justify-center">
                    <div className="w-max flex items-center absolute bottom-[-2%] right-0">
                        <div className="relative w-max h-max border-l border-b border-black p-3 flex items-center justify-center text-[14px] text-black">
                            <p>100 types of dresses</p>
                        </div>
                        <div className="relative w-max h-max border-b border-l border-black p-3 flex items-center justify-center text-[14px] text-black">
                            <p>100 types of traditional clothing</p>
                        </div>
                    </div>

                    <div className="w-max h-max border border-black p-3 flex items-center justify-center text-[14px] mb-3 text-black">
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        <p>Make-up Artist - Best of 2025</p>
                    </div>
                    <h2 className="select-none font-normal text-[40px] w-full">
                        Flawless Make-Up and Dresses <br /> for Your
                        <span className="text-orange-500 ml-2">
                            Special Day
                        </span>
                    </h2>
                    <p className="select-none text-[13px] w-[70%] my-6 leading-loose text-black">
                        Create unforgettable memories with our exquisite
                        collection of professional make-up and stunning wedding
                        dresses, tailored to make your special day even more
                        magical
                    </p>

                    <div className="absolute top-6 right-0 text-[14px] px-4 py-2 border border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                        <p>
                            100 Outfits, Shirts, Accessories & Professional
                            Make-Up
                        </p>
                        <SparklesIcon className="w-5 h-5 ml-3" />
                    </div>

                    <div className="absolute bottom-[32%] right-0 border border-black flex items-center justify-center w-[60px] h-[60px] cursor-pointer active:scale-[0.98] rounded-full">
                        <LinkSquare02Icon className="" />
                    </div>
                </div>
            </section>

            <section className="select-none relative w-screen h-max mt-[120px]">
                <div className="w-[70%]">
                    <h2 className="select-none text-[50px] font-normal w-[80%] ml-16">
                        The Modern Way to Share Wedding Day.
                    </h2>
                    <div className="relative top-5">
                        <div className="w-max h-[140px] ml-16 flex my-4 border-l border-l-black">
                            <div className="h-[200px] flex flex-col justify-between">
                                <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[14px] text-black">
                                    <p>Free domain</p>
                                </div>
                                <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[14px] text-black">
                                    <p>Free domain</p>
                                </div>
                                <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[14px] text-black">
                                    <p>Free domain</p>
                                </div>
                            </div>
                            <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[14px] mb-5 text-black">
                                <p>Free domain</p>
                            </div>
                            <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[14px] mb-5 text-black">
                                <p>Free domain</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[80%] ml-auto mt-[-30px] h-[200px] px-14 pt-8 bg-[#FFD476] border border-black text-[#030605]">
                    <div className="w-[80%]">
                        <p className="select-none text-[14px] leading-loose w-[70%] mb-4">
                            Spread your wedding invitations quickly and
                            digitally, invite them and share this happy news now
                        </p>
                    </div>
                    <div className="relative text-center lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3.5 font-medium text-[14px] lg:text-[15px] bg-[#28887A] text-white cursor-pointer">
                        Order now{" "}
                        <ArrowRight01Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                    </div>
                    <img
                        loading="lazy"
                        draggable="false" // Mencegah gambar agar tidak bisa di-drag
                        onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                        src={HP}
                        alt="handphone"
                        className="select-none absolute top-[-177%] right-16 w-[32%] h-auto"
                    />
                </div>
            </section>

            {/* Section 1 */}
            <section
                id="photography"
                className="relative flex items-center overflow-x-auto px-16 w-full h-max mt-16 py-14"
            >
                <div className="relative w-1/2 h-[380px] pt-12 border border-black">
                    <div className="absolute top-4 left-4 w-[30px] h-[30px] bg-[#FFD476] text-white font-bold flex items-center justify-center">
                        <p>3D</p>
                    </div>
                    <ThreeDModel
                        url={"/camera.glb"}
                        intensity={30}
                        speed={1}
                        scaleCustom={[0.58, 0.58, 0.58]}
                    />
                </div>
                <div className="w-1/2 px-8 h-max">
                    <div className="w-max h-max border border-black p-3 flex items-center justify-center text-[14px] mb-3 text-black">
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        <p>Photo & Videography</p>
                    </div>
                    <h2 className="select-none font-normal text-[40px]">
                        Photography Services for Your
                        <span className="text-orange-500 ml-3">
                            Event Needs
                        </span>
                    </h2>
                    <p className="select-none text-[13px] w-full pb-6 border-b border-b-black mt-6 leading-loose text-black">
                        Bringing Your Vision to Life with Exceptional
                        Photography and <br /> Videography Services for Every
                        Event
                    </p>
                </div>
            </section>

            <section className="select-none relative w-screen h-max mt-[40px]">
                <h2 className="select-none text-[50px] font-normal w-[65%] ml-16">
                    Timeless in the sophistication <br /> of our equipment.
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
                                    draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                    onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                    src={Gal1}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                            <div className="w-full h-1/2 p-3 flex items-center justify-center overflow-hidden">
                                <img
                                    loading="lazy"
                                    draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                    onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
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
                                    draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                    onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                    src={Gal1}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                            <div className="w-full h-1/2 p-3 flex items-center justify-center overflow-hidden">
                                <img
                                    loading="lazy"
                                    draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                    onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                    src={Gal2}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] pr-2 ml-auto flex items-center">
                        <div className="w-[75%]">
                            <h2 className="select-none text-[40px] w-max mb-4">
                                Servive Quality
                            </h2>
                            <p className="select-none text-[13.2px] leading-loose w-[80%]">
                                We take pride in offering exceptional service
                                for every couple, capturing every special moment
                                of your wedding day with care and high quality
                            </p>
                        </div>
                        <div
                            onClick={() => setShowGallery(true)}
                            className="relative text-center active:scale-[0.98] hover:brightness-[90%] lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3.5 font-medium text-[14px] lg:text-[15px] bg-[#28887A] text-white cursor-pointer"
                        >
                            Explore images
                            <ArrowRight01Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                        </div>
                    </div>
                </div>
            </section>

            {
                showGallery ? (
                    <div className="fixed top-0 left-0 z-[999999] w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center">
                        <div className="bg-white w-[70vw] h-[85vh] overflow-hidden p-6">
                        <div className='w-full flex items-baseline pr-1 justify-between'>
                            <h2 className="border-b border-black pb-3 text-[32px] mb-6 ml-3">
                                Gallery LuvlyWed
                            </h2>
                            <div
                                    onClick={() => setShowGallery(false)}
                                    className="cursor-pointer active:scale-[0.96] hover:brightness-[90%] duration-100 text-black border border-black w-[40px] h-[40px] flex items-center justify-center"
                                >
                                    <Cancel01Icon className="w-6 h-6" />
                                </div>
                        </div>

                            <div className="w-full h-[80%] flex flex-wrap justify-between overflow-auto">

                                {images.map((src, index) => (
                                    <div className='w-1/2 border border-white h-1/2 overflow-hidden'>
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
                ):
                    <></>
            }

            <section className="select-none relative w-screen px-16 h-[40vh] mt-20 flex items-center">
                <div className="relative w-[55%]">
                    <div className="relative mb-3 w-max flex items-center">
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User3}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="relative w-max flex items-center">
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User2}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User3}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User3}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center ml-auto w-max">
                    <div className="w-[1px] h-[140px] bg-black mx-20"></div>
                    <div className="w-max h-max">
                        <h2 className="select-none font-bold text-[50px] mb-3">
                            1.304
                        </h2>
                        <p>
                            satisfied male <br /> customer
                        </p>
                    </div>
                    <div className="w-[1px] h-[160px] bg-black mx-20"></div>
                    <div className="w-max h-max">
                        <h2 className="select-none font-bold text-[50px] mb-3">
                            1.304
                        </h2>
                        <p>
                            satisfied female <br /> customer
                        </p>
                    </div>
                    <div className="w-[1px] h-[140px] bg-black ml-20"></div>
                </div>
            </section>

            {/* <div className="mt-16 w-screen h-[1px] bg-slate-300"></div> */}

            <section className="select-none relative my-[100px] px-16 overflow-hidden flex items-center justify-center h-[80vh] border-y border-y-black">
                <div className="w-[70%] py-16 h-full">
                    <h2 className="select-none text-[40px]">
                        Why are we recommended?
                    </h2>

                    <div className="mt-10 w-full flex items-center justify-between pr-16">
                        <div className="w-[28%] h-[200px] p-4 border border-black">
                            <DollarSquareIcon />
                            <p className="select-none text-[16px] mt-2">
                                Affordable prices
                            </p>
                            <div className="w-full h-[1px] bg-black my-2"></div>
                            <p className="select-none text-[13px] mt-10">
                                No need for printing costs, just create once and
                                share
                            </p>
                        </div>
                        <div className="w-[28%] h-[200px] p-4 border border-black">
                            <Time01Icon />
                            <p className="select-none text-[16px] mt-2">
                                Fast process
                            </p>
                            <div className="w-full h-[1px] bg-black my-2"></div>
                            <p className="select-none text-[13px] mt-10">
                                Friendly service with a quick response to
                                customer
                            </p>
                        </div>
                        <div className="w-[28%] h-[200px] p-4 border border-black">
                            <CheckmarkSquare01Icon />
                            <p className="select-none text-[16px] mt-2">
                                Many templates
                            </p>
                            <div className="w-full h-[1px] bg-black my-2"></div>
                            <p className="select-none text-[13px] mt-10">
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

            {/* Section 2 */}
            <section
                id="building"
                className="relative px-16 w-screen min-h-[100vh] mt-[70px]"
            >
                <div className="relative text-center w-ful h-max">
                    <div className="w-full relative z-[99]">
                        <h2 className="select-none font-normal text-[40px]">
                            - The Ideal Place to Celebrate - <br /> Your True{" "}
                            <span className="text-orange-500">Love</span>
                        </h2>
                        <p className="select-none text-[13px] text-black mx-auto my-6 leading-loose w-[70%]">
                            Make your dream wedding come true at our elegant
                            venue, with complete facilities.
                        </p>
                    </div>
                </div>

                <div className="relative w-full h-[500px] border border-black overflow-hidden">
                    {/* Images */}
                    <div className="absolute top-6 left-6 z-[99] h-full w-max">
                        <div className="bg-white cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-6 w-[50px] h-[50px] p-1 border border-black">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Ballroom}
                                alt="ballroom-image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-white cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-6 w-[50px] h-[50px] p-1 border border-black">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Ballroom2}
                                alt="ballroom-image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-white cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-6 w-[50px] h-[50px] p-1 border border-black">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={Ballroom3}
                                alt="ballroom-image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-max flex items-center absolute right-6 top-3">
                        <div
                            onClick={() => setShowModalBuild(true)}
                            className="mr-5 z-[99] text-center active:scale-[0.98] hover:brightness-90 lg:w-max w-max flex no-underline lg:ml-0 ml-5 mt-4 p-4 font-medium text-[14px] lg:text-[15px] bg-white text-black lg cursor-pointer"
                        >
                            <EyeIcon className="w-4 h-4 relative" />
                        </div>

                        <a
                            className="z-[99] text-center lg:w-max w-max flex active:scale-[0.98] hover:brightness-90 no-underline lg:ml-0 ml-5 mt-4 px-6 py-3 font-medium text-[14px] lg:text-[15px] bg-white text-black lg cursor-pointer"
                            href="https://wa.me/6289513093406"
                            target="__blank"
                        >
                            <div className="w-max flex">
                                Booking{" "}
                                <Agreement02Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                            </div>
                        </a>
                    </div>

                    {/* Benefit Hotels */}
                    <div className="absolute bottom-3 right-6 w-max text-[12.5px] border border-black z-[99] bg-white py-3 mb-4 px-4 shadow-md flex items-start mt-3">
                        <div className="flex items-center border-b border-white">
                            <div className="w-[24px] h-[24px] text-[14px] p-1 flex items-center justify-center bg-transparent">
                                <CheckmarkCircle02Icon className="text-blue-700 w-8 h-8" />
                            </div>
                            <p>Book A Hotel Service</p>
                        </div>
                        <div className="flex items-center border-b border-white">
                            <div className="w-[24px] h-[24px] text-[14px] ml-4 p-1 flex items-center justify-center bg-transparent">
                                <CheckmarkCircle02Icon className="text-blue-700 w-8 h-8" />
                            </div>
                            <p>Book A Car Service</p>
                        </div>
                        <div className="flex items-center border-b border-white">
                            <div className="w-[24px] h-[24px] text-[14px] ml-4 p-1 flex items-center justify-center bg-transparent">
                                <CheckmarkCircle02Icon className="text-blue-700 w-8 h-8" />
                            </div>
                            <p>Book Spa Service</p>
                        </div>
                    </div>
                    {/* <div className="relative z-[33] w-full h-full bg-black bg-opacity-60"></div> */}
                    <img
                        loading="lazy"
                        draggable="false" // Mencegah gambar agar tidak bisa di-drag
                        onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                        src={Ballroom2}
                        alt="ballroom background"
                        className="absolute top-0 left-0 hover:scale-[1.1] brightness-[40%] duration-300 object-cover w-full h-full"
                    />
                </div>
            </section>

            <div className="relative ml-16 w-[1px] h-[100px] bg-black"></div>

            {/* Section 2 */}
            <section
                id="catering"
                className="relative my-10 px-16 min-h-[70vh] pb-10 overflow-hidden"
            >
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
                                <div className="relative w-1/3 skew-x-6 h-full mb-4 overflow-hidden">
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
                                <div className="relative w-1/3 skew-x-6 h-full mb-4 overflow-hidden">
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
                                <p className="mr-4 text-[14px]">Close</p>
                                <div className="relative border border-black p-1 w-[50px] h-[50px] flex items-center justify-center">
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
                                <div className="relative border border-black p-1 w-[50px] h-[50px] flex items-center justify-center">
                                    <LinkSquare02Icon className="w-6 h-6" />
                                </div>
                                <p className="ml-4 text-[14px]">Close</p>
                            </div>
                        </div>
                        <div className="w-[65%] flex justify-between items-center overflow-hidden">
                            <div className="flex w-full h-full relative left-10">
                                <div className="relative w-1/3 -skew-x-6 h-full border-r border-white mb-4 overflow-hidden">
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
                                <div className="relative w-1/3 -skew-x-6 h-full mb-4 overflow-hidden">
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

                <h1 className="text-[50px] w-[72%] text-black">
                    Serving Delicious Meals, Making Every Moment.
                </h1>
                <div className="relative overflow-hidden px-16 mt-12 ml-auto w-full flex items-center justify-between border-y border-black h-[70%]">
                    <div
                        onClick={() => {
                            setShowJunkFood(true);
                            setShowHealthFood(false);
                        }}
                        className="flex items-center w-max h-full cursor-pointer active:scale-[0.98]"
                    >
                        <div className="border mr-4 border-blue-700 p-1 w-[50px] h-[50px] flex items-center justify-center">
                            <LinkSquare02Icon className="w-6 h-6 text-blue-700" />
                        </div>
                        <p className="select-none flex w-max">Junk Food</p>
                    </div>
                    <div className="relative h-[200px] top-[30px]">
                        <ThreeDModel
                            url={"/eat.glb"}
                            intensity={3}
                            speed={1}
                            scaleCustom={[2.4, 2.4, 2.4]}
                        />
                    </div>
                    <div
                        onClick={() => {
                            setShowJunkFood(false);
                            setShowHealthFood(true);
                        }}
                        className="flex items-center w-max h-full cursor-pointer active:scale-[0.98]"
                    >
                        <p className="select-none flex w-max">Health Food</p>
                        <div className="border ml-4 border-blue-700 p-1 w-[50px] h-[50px] flex items-center justify-center">
                            <LinkSquare02Icon className="w-6 h-6 text-blue-700" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between mt-[40px]">
                    <div className="w-[30%] h-max border border-black p-4 cursor-pointer hover:brightness-[97%]">
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
                        <div className="border border-black w-full py-3 flex items-center justify-center cursor-pointer active:scale-[0.98] mt-8">
                            <p>Detail</p>
                        </div>
                    </div>
                    <div className="relative w-[30%] h-max border border-black p-4 cursor-pointer hover:brightness-[97%]">
                        <div className="absolute flex items-center justify-center top-0 right-0 border-l border-b border-black w-[50px] h-[50px]">
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
                        <div className="border border-black w-full py-3 flex items-center justify-center cursor-pointer active:scale-[0.98] mt-8">
                            <p>Detail</p>
                        </div>
                    </div>
                    <div className="w-[30%] h-max border border-black p-4 cursor-pointer hover:brightness-[97%]">
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
                        <div className="border border-black w-full py-3 flex items-center justify-center cursor-pointer active:scale-[0.98] mt-8">
                            <p>Detail</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="select-none relative w-screen min-h-[80vh] flex flex-col items-center justify-between overflow-hidden px-16 mt-[52px] mb-[40px]">
                <h1 className="text-[50px] text-end mb-10 w-full text-black">
                    Acrylic and luxurious decorations
                </h1>
                <div className="w-full bg-[#FFD476] h-[480px] flex justify-center border border-black">
                    <div className="w-1/2 h-full flex pl-16">
                        <div className="w-[30%] border-l-[2px] border-y-[2px] mt-auto border-b-0 border-white bg-[#FFD476] h-[80%] rounded-tl-full"></div>
                        <div className="w-[2px] h-full bg-white"></div>
                        <div className="w-[30%] border-r-[2px] border-y-[2px] border-t-0 border-white bg-[#FFD476] h-[80%] rounded-br-full"></div>
                    </div>
                    <div className="relative w-1/2 flex flex-col justify-between">
                        <h2 className="select-none text-[30px] relative mt-16 w-[80%]">
                            Providing Luxury Souvenirs and the Best Gifts
                        </h2>
                        <div className="absolute top-[26%] right-16 border border-black flex items-center justify-center w-[50px] h-[50px] cursor-pointer active:scale-[0.98] rounded-full">
                            <LinkSquare02Icon className="" />
                        </div>
                        <div className="relative bg-white h-1/2 mt-auto">
                            <ThreeDModel
                                url={"/ring.glb"}
                                intensity={30}
                                speed={1}
                                scaleCustom={[6, 6, 6]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="select-none relative border-r border-r-black w-screen overflow-hidden px-16 mt-[100px] min-h-[70vh]">
                <img
                    loading="lazy"
                    draggable="false" // Mencegah gambar agar tidak bisa di-drag
                    onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                    src={Petik}
                    alt="petik"
                    className="absolute w-[120px] top-0 right-[10%]"
                />

                <h1 className="text-[50px] w-[72%] text-black">
                    Our Customers Feedback.
                </h1>
                <div className="w-full flex items-center">
                    <div className="w-[30%]">
                        <div className="relative w-full mt-8 p-10 h-[400px] border border-black overflow-hidden">
                            <img
                                loading="lazy"
                                draggable="false" // Mencegah gambar agar tidak bisa di-drag
                                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan
                                src={User2}
                                alt="photo-picture"
                                className="hover:scale-[1.4] duration-300 object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="w-[70%] h-max pt-10 overflow-hidden">
                        <div className="w-full h-max px-16 border-y border-y-black ml-10 py-6">
                            <div className="w-full flex items-baseline justify-between">
                                <p className="select-none w-max flex font-semibold text-[24px] mb-4 text-black">
                                    Customer LuvlyWed
                                </p>
                                <p className="select-none w-max fle text-[18px] text-black">
                                    Jardyn Danwart
                                </p>
                            </div>
                            <p className="select-none w-full text-[20px] text-black ml-1 mt-10">
                                Amaizing fast and reliable customer support! The
                                team of willing to go mile for customer service.
                            </p>
                        </div>
                        <div className="relative w-full pl-10 mt-10 flex items-center justify-between">
                            <div className="flex items-center text-[16px] w-max px-5 h-[50px] border border-black">
                                <p>1 of 40</p>
                            </div>
                            <div className="flex items-center w-max">
                                <div className="w-[50px] h-[50px] border border-black cursor-pointer active:scale-[0.98] flex items-center justify-center">
                                    <ArrowLeft01Icon />
                                </div>
                                <div className="w-[50px] h-[50px] ml-8 border border-black cursor-pointer active:scale-[0.98] flex items-center justify-center">
                                    <ArrowRight01Icon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative ml-16 w-[1px] h-[100px] bg-black"></div>

            <section className="select-none relative w-screen overflow-hidden min-h-[70vh] px-16 mt-[40px] flex flex-col z-[99]">
                <h3 className="text-[50px]">All Your Questions Answered</h3>
                <p className="select-none text-lg text-gray-500">
                    Frequently Asked Questions by our customers
                </p>

                {/* First FAQ */}
                <div className="mt-12">
                    <div
                        className="text-[14px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(1)}
                    >
                        How long does the process take?
                    </div>
                    <div
                        className={`${
                            activeIndex === 1 ? "flex" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[14px] text-black leading-loose">
                            <p>
                                The process for wedding planning typically takes
                                a few months, depending on the complexity of
                                your wedding. The full coordination, from
                                planning to execution, can take 1 to 3 months.
                                For decorations and day-of coordination, our
                                team is available to help manage everything on
                                your big day, ensuring a smooth and memorable
                                event.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second FAQ */}
                <div>
                    <div
                        className="text-[14px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(2)}
                    >
                        Can the design be customized?{" "}
                    </div>
                    <div
                        className={`${
                            activeIndex === 2 ? "flex" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[14px] text-black leading-loose">
                            <p>
                                Yes, both our wedding organizing services and
                                digital invitations are fully customizable. We
                                work with you to tailor every detail to match
                                your vision, from the event design to the
                                invitations. Whether you have a specific theme
                                in mind or want something unique, we are here to
                                bring your ideas to life.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third FAQ */}
                <div>
                    <div
                        className="text-[14px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(3)}
                    >
                        Can revisions be made if there are any mistakes?
                    </div>
                    <div
                        className={`${
                            activeIndex === 3 ? "flex" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[14px] text-black leading-loose">
                            <p>
                                Absolutely! We understand that adjustments are
                                sometimes necessary. Whether it's a detail in
                                your wedding plans or a correction to the
                                digital invitation, we're happy to make
                                revisions until everything is exactly how you
                                envision it. We ensure your satisfaction with
                                our services.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fourth FAQ */}
                <div>
                    <div
                        className="text-[14px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(4)}
                    >
                        Is there a warranty{" "}
                    </div>
                    <div
                        className={`${
                            activeIndex === 4 ? "flex" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[14px] text-black leading-loose">
                            <p>
                                Yes, we offer guarantees for our services. If
                                there are any issues with our wedding organizing
                                services or digital invitations, we will address
                                them promptly. Our goal is to ensure your
                                complete satisfaction with the services we
                                provide, and we stand by the quality of our
                                work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fifth FAQ */}
                <div>
                    <div
                        className="text-[14px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(5)}
                    >
                        My wedding is still far away, can I register now?{" "}
                    </div>
                    <div
                        className={`${
                            activeIndex === 5 ? "block" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[14px] text-black leading-loose">
                            <p>
                                Yes, you can register for our wedding organizing
                                services and digital invitations now. We
                                recommend booking early to ensure availability
                                and to give you time to plan and make
                                adjustments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* {start ? (
                <section className="select-none select-none fixed top-0 left-0 z-[999999999] w-screen h-screen overflow-hidden bg-black bg-opacity-70 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-[50vw] h-[85vh] bg-white p-6"
                    >
                        <div className="relative w-full h-[90%]">
                            <div className="h-full">
                                <h2 className="select-none text-[40px] mb-2">
                                    Your Perfect Wedding <br /> Starts Here{" "}
                                </h2>
                                <SparklesIcon className="absolute top-3 right-6 w-8 h-8" />
                                <p className="select-none text-[14px] w-[80%] leading-loose text-black">
                                    Begin Your Love Journey With Us. Every great
                                    love story deserves a beautiful beginning.
                                    Let us help you plan a wedding that’s as
                                    special as your relationship
                                </p>
                                <hr className="my-4" />
                                <ul className="ml-5">
                                    <li className="list-disc mb-3">
                                        wedding organizer
                                    </li>
                                    <li className="list-disc mb-3">
                                        Make-up Artist
                                    </li>
                                    <li className="list-disc mb-3">
                                        Photography
                                    </li>
                                    <li className="list-disc">Catering</li>
                                </ul>
                                <div className="absolute h-[150px] w-1/3 right-0 bottom-5">
                                    <ThreeDModel
                                        url={"/crown.glb"}
                                        intensity={3}
                                        speed={1}
                                        scaleCustom={[16, 16, 16]}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[10%]">
                            <div
                                onClick={() => handleCloseStart()}
                                className="border h-full border-black w-full py-3 flex items-center justify-center cursor-pointer active:scale-[0.98]"
                            >
                                <p>Get Started</p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            ) : (
                <></>
            )} */}

            {/* Modal */}
            {showModalBuild ? (
                <ModalBuild handleClose={() => setShowModalBuild(false)} />
            ) : (
                <></>
            )}

            {/* Back-to-top */}
            <div
                onClick={() => scrollToTop()}
                className="absolute w-[50px] h-[50px] active:scale-[0.97] cursor-pointer hover:brightness-[90%] bg-white border border-black flex items-center justify-center shadow-lg bottom-0 right-16 z-[9999999]"
            >
                <ArrowUp01Icon />
            </div>

            {/* Footer Component */}
            <Footer />
        </main>
    );
};

export default Homepage;
