import {
  Agreement02Icon,
  AiMagicIcon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Blockchain04Icon,
  CheckmarkCircle02Icon,
  CheckmarkSquare01Icon,
  CommandIcon,
  DollarSquareIcon,
  EthereumRectangleIcon,
  EyeIcon,
  LinkSquare02Icon,
  SparklesIcon,
  Time01Icon,
} from "hugeicons-react";
import { useRef, useState } from "react";
import {
  Ballroom,
  Ballroom2,
  Ballroom3,
  Gal1,
  Gal2,
  Gradient1,
  Gradient2,
  Gradient4,
  HP,
  Lines,
  Petik,
  Spon1,
  Spon2,
  Spon3,
  User1,
  User2,
  User3
} from "./assets";
import Footer from "./components/footer.jsx";
import ModalBuild from "./components/modalBuild.jsx";
import ThreeDModel from "./components/model.jsx";
import Navbar from "./components/navbar.jsx";
import "./index.css";

const App = () => {
    const [showModalBuild, setShowModalBuild] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
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

    return (
        <main className="relative mt-16">
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
                <img src={Gradient1} alt="gradient" className="gr3" />
                <img src={Gradient4} alt="gradient1" className="gr1" />
                <img src={Gradient2} alt="gradient2" className="gr2" />

                {/* Main Content - Hero */}
                <div className="relative w-full mt-0 h-max lg:h-[80vh] mb-4 lg:text-center mx-auto flex flex-col justify-center lg:items-center">
                    <div className="absolute top-0 lg bg-white flex border-b border-b-black lg:text-[16px] text-[13px] text-black h-max w-full lg:w-screen lg:px-3 px-5 py-3 lg:py-2 mb-6 lg:mb-2 items-center lg:justify-center">
                        <AiMagicIcon className="mr-1" />
                        Version 1.0.0 - new released
                        <AiMagicIcon className="ml-1" />
                    </div>
                    <h1 className="text-[2.6rem] lg:ml-0 ml-5 lg:text-[3.7rem] font-bold w-[90vw] mt-10 lg:w-[80vw] lg:text-center">
                        From Planning to Celebration, <br /> We’ve Got You
                        Covered
                    </h1>
                    <p className="text-slate-500 my-3 lg:ml-0 ml-5 lg:text-[16px] text-[14px] w-[90%] lg:w-[50%]">
                        Bringing your special day to life with love and ease.
                        LuvlyWed, the place for elegant wedding planning and
                        unforgettable moments
                    </p>
                    <div
                        onClick={() => playAUdio()}
                        className="relative active:scale-[0.98] hover:brightness-[94%] text-center lg:w-max w-max flex no-underline lg:ml-0 ml-5 mt-4 px-4 lg:px-6 py-3 lg:py-2.5 font-medium text-[14px] lg:text-[15px] z-[9999] border border-black text-black lg cursor-pointer"
                    >
                        Start Planning Now
                        <Agreement02Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                    </div>

                    <div className="text-[14px] mt-6 px-5 lg:px-0 w-max lg:w-max flex items-center mx-auto">
                        <div className="w-full lg:w-[30%] lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg text-red-500 bg-red-100">
                            <EthereumRectangleIcon className="w-4 h-4 relative mr-2" />
                            Fotografi
                        </div>
                        <div className="w-full lg:w-max lg:justify-center lg:mx-4 flex items-center px-3 py-3 lg:py-1.5 lg text-green-500 bg-green-100">
                            <CommandIcon className="w-4 h-4 relative mr-2" />
                            <p className="flex w-max">Venue wedding</p>
                        </div>
                        <div className="w-full lg:w-max lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg text-purple-500 bg-purple-100">
                            <Blockchain04Icon className="w-4 h-4 relative mr-2" />
                            <p className="flex w-max">Make-up</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative flex items-center overflow-x-hidden px-16 w-full mb-[70px] h-max">
                <div className="sponsor-container">
                    <div className="sponsor-items">
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="sponsor-items">
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-[50px] border-[1px] flex pb-2 items-end justify-center border-black bg-slate-200 h-[40px] mx-4">
                    <div className="relative w-[6px] h-[14px] rounded-full bg-red-800"></div>
                </div>

                <div className="sponsor-container">
                    <div className="sponsor-items">
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon3}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="sponsor-items">
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon1}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
                                src={Spon2}
                                alt="sponsor"
                                className="grayscale-[100%] object-contain w-full h-full"
                            />
                        </div>
                        <div className="w-[150px] h-[50px] border border-black relative mx-4">
                            <img
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
                    src={Lines}
                    alt="lines-descoration"
                    className="w-[100%] scale-[2] opacity-[0.3]"
                />
            </div>

            {/* Dress wedding */}
            <section className="relative flex items-center overflow-x-auto px-16 w-full border-t border-t-slate-500 h-max pb-14">
                <div className="relative w-1/3 h-[90vh] pt-20 border-x border-x-slate-500">
                    <div className="absolute top-4 left-4 w-[30px] h-[30px] bg-[#FFD476] text-white font-bold flex items-center justify-center">
                        <p>3D</p>
                    </div>
                    <ThreeDModel
                        url={"../public/dress3.glb"}
                        intensity={30}
                        speed={1}
                        scaleCustom={[2, 2, 2]}
                    />
                    <div className="relative top-[-100px] w-screen h-[1px] bg-slate-500"></div>
                </div>
                <div className="w-1/2 px-8 h-max">
                    <div className="w-max h-max border border-black p-3 flex items-center justify-center text-[14px] mb-3 text-black">
                        <p>Make-up Artist - Best of 2025</p>
                    </div>
                    <h2 className="font-normal text-[40px] w-full">
                        Flawless Make-Up and Dresses for Your{" "}
                        <span className="text-orange-500">Special Day</span>
                    </h2>
                    <p className="text-[13px] my-6 leading-loose text-slate-500 w-[92%]">
                        Create unforgettable memories with our exquisite
                        collection of professional make-up and stunning wedding
                        dresses, tailored to make your special day even more
                        magical
                    </p>

                    <div className="absolute top-6 right-14 text-[14px] px-4 py-2 border border-black flex items-center justify-center hover:bg-glow hover:animate-glow">
                        <p>
                            100 Outfits, Shirts, Accessories & Professional
                            Make-Up
                        </p>
                        <SparklesIcon className="w-5 h-5 ml-3" />
                    </div>

                    <div className="absolute bottom-[32%] right-14 border border-black flex items-center justify-center w-[60px] h-[60px] cursor-pointer active:scale-[0.98] rounded-full">
                        <LinkSquare02Icon className="" />
                    </div>
                </div>
            </section>

            <section className="relative w-screen h-[100vh] mt-[0px]">
                <div className="w-[70%]">
                    <h2 className="text-[50px] font-normal w-[80%] ml-16">
                        The Modern Way to Share Wedding Day.
                    </h2>
                    <div>
                        <div className="w-max h-[160px] ml-16 flex items-center my-4 border-l border-l-black">
                            <div className="relative w-max h-max ml-8 border border-black p-3 flex items-center justify-center text-[14px] mb-5   text-black">
                                <p>Free domain</p>
                            </div>
                            <div className="relative w-max h-max ml-4 border border-black p-3 flex items-center justify-center text-[14px] mb-5   text-black">
                                <p>Free domain</p>
                            </div>
                            <div className="relative w-max h-max ml-4 border border-black p-3 flex items-center justify-center text-[14px] mb-5   text-black">
                                <p>Free domain</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[70%] ml-auto h-[200px] px-14 pt-10 bg-[#FFD476] border border-black text-[#030605]">
                    <div className="w-[80%]">
                        <p className="text-[14px] leading-loose w-[70%] ml-12 mb-4">
                            Spread your wedding invitations quickly and
                            digitally, invite them and share this happy news now
                        </p>
                    </div>
                    <div className="relative text-center lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3 lg:py-2.5 font-medium text-[14px] lg:text-[15px] bg-[#28887A] text-white cursor-pointer">
                        Order now{" "}
                        <ArrowRight01Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                    </div>
                    <img
                        src={HP}
                        alt="handphone"
                        className="absolute top-[-177%] right-16 w-[32%] h-auto"
                    />
                </div>
            </section>

            {/* Section 1 */}
            <section className="relative flex items-center overflow-x-auto px-16 w-full mt-[0px] h-max py-14">
                <div className="relative w-1/2 h-[380px] pt-12 border border-black">
                    <div className="absolute top-4 left-4 w-[30px] h-[30px] bg-[#FFD476] text-white font-bold flex items-center justify-center">
                        <p>3D</p>
                    </div>
                    <ThreeDModel
                        url={"../public/camera.glb"}
                        intensity={30}
                        speed={1}
                        scaleCustom={[0.58, 0.58, 0.58]}
                    />
                </div>
                <div className="w-1/2 px-8 h-max">
                    <div className="w-max h-max border border-black p-3 flex items-center justify-center text-[14px] mb-3 text-black">
                        <p>Photo & Videography</p>
                    </div>
                    <h2 className="font-normal text-[40px]">
                        Photography Services for Your{" "}
                        <span className="text-orange-500">Event Needs</span>
                    </h2>
                    <p className="text-[13px] my-6 leading-loose text-slate-500 w-[70%]">
                        Bringing Your Vision to Life with Exceptional
                        Photography and Videography Services for Every Event
                    </p>
                </div>
            </section>

            <section className="relative w-screen h-[100vh] mt-[40px]">
                <h2 className="text-[50px] font-normal w-[65%] ml-16">
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
                                    src={Gal1}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                            <div className="w-full h-1/2 p-3 flex items-center justify-center overflow-hidden">
                                <img
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
                                    src={Gal1}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                            <div className="w-full h-1/2 p-3 flex items-center justify-center overflow-hidden">
                                <img
                                    src={Gal2}
                                    alt="gallery"
                                    className="w-full h-full object-cover cursor-pointer duration-300 hover:grayscale-[100%]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] pr-2 ml-auto flex items-center">
                        <div className="w-[75%]">
                            <h2 className="text-[40px] w-max mb-4">
                                Servive Quality
                            </h2>
                            <p className="text-[13.2px] leading-loose w-[80%]">
                                We take pride in offering exceptional service
                                for every couple, capturing every special moment
                                of your wedding day with care and high quality
                            </p>
                        </div>
                        <div className="relative text-center active:scale-[0.98] hover:brightness-[90%] lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3 lg:py-2.5 font-medium text-[14px] lg:text-[15px] bg-[#28887A] text-white cursor-pointer">
                            Explore images
                            <ArrowRight01Icon className="ml-2 w-4 h-4 relative top-[4px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-screen px-16 h-[40vh] mt-[20px] flex items-center">
                <div className="relative w-[55%]">
                    <div className="relative mb-3 w-max flex items-center">
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User3}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="relative w-max flex items-center">
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User2}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User3}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User1}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User2}
                                alt="customer-photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-[70px] h-[70px] p-1.5 border border-black ml-4 overflow-hidden">
                            <img
                                src={User3}
                                alt="customer-photo"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center ml-auto w-max">
                    <div className="w-max h-max">
                        <h2 className="font-bold text-[46px] mb-3">1.304</h2>
                        <p>
                            satisfied male <br /> customer
                        </p>
                    </div>
                    <div className="w-[1px] h-[100px] bg-slate-400 mx-20"></div>
                    <div className="w-max h-max">
                        <h2 className="font-bold text-[46px] mb-3">1.304</h2>
                        <p>
                            satisfied female <br /> customer
                        </p>
                    </div>
                </div>
            </section>

            {/* <div className="mt-16 w-screen h-[1px] bg-slate-300"></div> */}

            <section className="relative my-[100px] px-16 overflow-hidden flex items-center justify-center h-[80vh] border-y border-y-black">
             <div className='w-[70%] py-16 h-full'>
              <h2 className="text-[40px]">Why are we recommended?</h2>

              <div className="mt-10 w-full flex items-center justify-between pr-16">
                <div className='w-[28%] h-[200px] p-4 border border-black'>
                  <DollarSquareIcon />
                  <p className="text-[16px] mt-2">
                    Affordable prices
                  </p>
                  <div className="w-full h-[1px] bg-black my-2"></div>
                  <p className="text-[13px] mt-10">
                    No need for printing costs, just create once and share
                  </p>
                </div>
                <div className='w-[28%] h-[200px] p-4 border border-black'>
                  <Time01Icon />
                  <p className="text-[16px] mt-2">
                    Fast process
                  </p>
                  <div className="w-full h-[1px] bg-black my-2"></div>
                  <p className="text-[13px] mt-10">
                    Friendly service with a quick response to customer
                  </p>
                </div>
                <div className='w-[28%] h-[200px] p-4 border border-black'>
                  <CheckmarkSquare01Icon />
                  <p className="text-[16px] mt-2">
                    Many templates
                  </p>
                  <div className="w-full h-[1px] bg-black my-2"></div>
                  <p className="text-[13px] mt-10">
                    We offer a variety of modern themes that are perfect        
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
            <section className="relative px-16 w-screen min-h-[100vh] mt-[70px]">
                <div className="relative text-center w-ful h-max">
                    <div className="w-full relative z-[99]">
                        <h2 className="font-normal text-[40px]">
                            - The Ideal Place to Celebrate - <br /> Your True{" "}
                            <span className="text-orange-500">Love</span>
                        </h2>
                        <p className="text-[13px] text-slate-500 mx-auto my-6 leading-loose w-[70%]">
                            Make your dream wedding come true at our elegant
                            venue, with complete facilities.
                        </p>
                    </div>
                </div>

                <div className="relative w-full h-[500px] border border-black overflow-hidden">
                    {/* Images */}
                    <div className="absolute top-6 left-6 z-[9999] h-full w-max">
                        <div className="bg-white cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-6 w-[50px] h-[50px] p-1 border border-black">
                          <img src={Ballroom} alt="ballroom-image" className='w-full h-full object-cover' />
                        </div>
                        <div className="bg-white cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-6 w-[50px] h-[50px] p-1 border border-black">
                          <img src={Ballroom2} alt="ballroom-image" className='w-full h-full object-cover' />
                        </div>
                        <div className="bg-white cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-6 w-[50px] h-[50px] p-1 border border-black">
                          <img src={Ballroom3} alt="ballroom-image" className='w-full h-full object-cover' />
                        </div>
                    </div>

                    <div className="w-max flex items-center absolute right-6 top-3">
                        <div
                            onClick={() => setShowModalBuild(true)}
                            className="mr-5 z-[9999] text-center active:scale-[0.98] hover:brightness-90 lg:w-max w-max flex no-underline lg:ml-0 ml-5 mt-4 p-3 font-medium text-[14px] lg:text-[15px] bg-white text-black lg cursor-pointer"
                        >
                            <EyeIcon className="w-4 h-4 relative" />
                        </div>

                        <a
                            className="z-[9999] text-center lg:w-max w-max flex active:scale-[0.98] hover:brightness-90 no-underline lg:ml-0 ml-5 mt-4 px-4 lg:px-6 py-3 lg:py-2 font-medium text-[14px] lg:text-[15px] bg-white text-black lg cursor-pointer"
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
                    <div className="absolute bottom-3 right-6 w-max text-[12.5px] border border-black z-[999999] bg-white py-2 mb-4 px-4 shadow-md flex items-start mt-3">
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
                        src={Ballroom2}
                        alt="ballroom background"
                        className="absolute top-0 left-0 hover:scale-[1.1] brightness-[40%] duration-300 object-cover w-full h-full"
                    />
                </div>
            </section>

            <div className="relative ml-16 w-[1px] h-[100px] bg-slate-500"></div>

            {/* Section 2 */}
            <section className="relative my-10 px-16 min-h-[70vh] pb-10 overflow-hidden">
                <h1 className="text-[50px] w-[72%] text-black">
                    Serving Delicious Meals, Making Every Moment.
                </h1>
                <div className="relative overflow-hidden px-16 mt-12 ml-auto w-full flex items-center justify-between border-y border-black h-[70%]">
                    <div className="flex items-center w-max h-full cursor-pointer active:scale-[0.98]">
                        <p className="flex w-max">Junk Food</p>
                        <div className="border ml-4 border-black p-1 w-[50px] h-[50px] flex items-center justify-center">
                            <LinkSquare02Icon className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="relative h-[200px] top-[30px]">
                        <ThreeDModel
                            url={"../public/eat.glb"}
                            intensity={3}
                            speed={1}
                            scaleCustom={[2.4, 2.4, 2.4]}
                        />
                    </div>
                    <div className="flex items-center w-max h-full cursor-pointer active:scale-[0.98]">
                        <p className="flex w-max">Health Food</p>
                        <div className="border ml-4 border-black p-1 w-[50px] h-[50px] flex items-center justify-center">
                            <LinkSquare02Icon className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="ml-auto h-full w-1/2 border-b border-b-slate-500"></div>
            </section>

            <section className="relative w-screen h-[80vh] flex items-center justify-between overflow-hidden px-16 my-[40px]">
                <div className="w-full bg-[#FFD476] h-full flex justify-center border border-black">
                    <div className="w-1/2 h-full flex pl-16">
                        <div className="w-[30%] border-l-[10px] border-y-[10px] mt-auto border-b-0 border-white bg-[#FFD476] h-[80%] rounded-tl-full"></div>
                        <div className="w-[10px] h-full bg-white"></div>
                        <div className="w-[30%] border-r-[10px] border-y-[10px] border-t-0 border-white bg-[#FFD476] h-[80%] rounded-br-full"></div>
                    </div>
                    <div className="relative w-1/2 flex flex-col justify-between">
                        <h2 className="text-[30px] relative mt-16 w-[80%]">
                            Providing Luxury Souvenirs and the Best Gifts
                        </h2>
                        <div className="absolute top-[26%] right-16 border border-black flex items-center justify-center w-[50px] h-[50px] cursor-pointer active:scale-[0.98] rounded-full">
                            <LinkSquare02Icon className="" />
                        </div>
                        <div className="relative bg-white h-1/2 mt-auto">
                            <ThreeDModel
                                url={"../public/ring.glb"}
                                intensity={30}
                                speed={1}
                                scaleCustom={[6, 6, 6]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative border-r border-r-slate-500 w-screen overflow-hidden px-16 mt-[100px] min-h-[70vh]">
                <img
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
                                src={User2}
                                alt="photo-picture"
                                className="opacity-60 hover:scale-[1.4] duration-300 object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="w-[70%] h-max pt-10 overflow-hidden">
                      <div className="w-full h-max px-16 border-y border-y-slate-500 ml-10 py-6">
                          <div className="w-full flex items-baseline justify-between">
                              <p className="w-max flex font-semibold text-[24px] mb-4 text-black">
                                  Customer LuvlyWed
                              </p>
                              <p className="w-max fle text-[18px] text-slate-500">
                                  Jardyn Danwart
                              </p>
                          </div>
                          <p className="w-full text-[20px] text-black ml-1 mt-10">
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

            <div className="relative ml-16 w-[1px] h-[100px] bg-slate-500"></div>

            <section className="relative w-screen overflow-hidden min-h-[70vh] px-16 mt-[40px] flex flex-col z-[99999]">
              <h3 className="text-[50px]">All Your Questions Answered</h3>
              <p className="text-lg text-gray-500">Pertanyaan yang paling sering ditanyakan oleh customer kami</p>
              <br />
              
              {/* First FAQ */}
              <div>
                <div
                  className="text-[14px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  onClick={() => toggleCollapse(1)}
                >
                  Berapa lama proses pengerjaannya?
                </div>
                <div className={`${activeIndex === 1 ? 'flex' : 'hidden'} mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}>
                  <div className="text-[14px] text-black leading-loose">
                    <p>
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
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
                  Apakah desain bisa custom?
                </div>
                <div className={`${activeIndex === 2 ? 'flex' : 'hidden'} mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}>
                  <div className="text-[14px] text-black leading-loose">
                    <p>
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
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
                  Apakah bisa revisi jika ada kesalahan?
                </div>
                <div className={`${activeIndex === 3 ? 'flex' : 'hidden'} mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}>
                  <div className="text-[14px] text-black leading-loose">
                    <p>
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
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
                  Apakah ada garansi?
                </div>
                <div className={`${activeIndex === 4 ? 'flex' : 'hidden'} mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}>
                  <div className="text-[14px] text-black leading-loose">
                    <p>
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
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
                  Pernikahan saya masih lama, bisa daftar sekarang?
                </div>
                <div className={`${activeIndex === 5 ? 'block' : 'hidden'} mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}>
                  <div className="text-[14px] text-black leading-loose">
                    <p>
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Modal */}
            {showModalBuild ? (
                <ModalBuild handleClose={() => setShowModalBuild(false)} />
            ) : (
                <></>
            )}

            {/* Footer Component */}
            <Footer />
        </main>
    );
};

export default App;
