import { useEffect, useRef, useState } from "react";
import Footer from "../components/footer.jsx";
import LoadingBar from "../components/loadingBar.jsx";
import ModalBuild from "../components/modalBuild.jsx";
import Navbar from "../components/navbar.jsx";
import OpeningModal from "../components/openingModal.jsx";
import "../index.css";
import {
    HeroSection,
    Section10,
    Section12,
    Section13,
    Section14,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
} from "./sections";
import Section11 from "./sections/section11.jsx";

const Homepage = () => {
    const [showModalBuild, setShowModalBuild] = useState(false);
    const [start, setStart] = useState(null);
    const [progress, setProgress] = useState(0);
    const [showMain, setShowMain] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        const sessionOpen = localStorage.getItem("sessionOpen");
        if (!sessionOpen) {
            setStart(true);
        }

        const handleUnload = () => {
            localStorage.removeItem("sessionOpen");
        };

        window.addEventListener("unload", handleUnload);

        return () => {
            window.removeEventListener("unload", handleUnload);
        };
    }, []);

    const handleCloseModal = () => {
        localStorage.setItem("sessionOpen", "true");
        setStart(false);
        audioRef?.current?.play().catch((error) => {
            console.error("Error playing audio:", error);
        });

        audio.volume = 0.75;
        if (audio.muted) {
            audio.muted = false;
        }
    };

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.play().catch((error) => {
                console.error("Error playing audio:", error);
            });

            audio.volume = 0.75;
            if (audio.muted) {
                audio.muted = false;
            }
        }
    }, [audioRef?.current]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStart(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const monitorResources = () => {
            const resources = performance.getEntriesByType("resource");
            const loadedResources = resources.filter(
                (res) => res.responseEnd > 0
            );

            const totalResources = resources.length || 1;
            const currentProgress = Math.min(
                (loadedResources.length / totalResources) * 100,
                100
            );

            setProgress(Math.round(currentProgress));

            if (currentProgress === 100) {
                setTimeout(() => {
                    setShowMain(true);
                }, 1000);
            }
        };

        const interval = setInterval(monitorResources, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {progress === 100 && showMain ? (
                <main className="relative mt-16 overflow-x-hidden">
                    {/* BackSound */}
                    <audio
                        ref={audioRef}
                        className="absolute z-[-2] opacity-0"
                        src="/audio/audio.mp3"
                        autoPlay
                        loop
                    />

                    {/* Navbar Component */}
                    <Navbar />

                    {/* All Sections */}

                    <HeroSection />

                    <Section2 />

                    <Section3 />

                    <Section4 />

                    <Section5 />

                    <Section6 />

                    <Section7 />

                    <Section8 />

                    <Section9 />

                    <Section10 />

                    <Section11 />

                    <Section12 />

                    <Section13 />

                    <Section14 />

                    {/* Modal - Opening */}
                    {!localStorage.getItem("sessionOpen") && start ? (
                        <OpeningModal handleClose={() => handleCloseModal()} />
                    ) : (
                        <></>
                    )}

                    {showModalBuild ? (
                        <ModalBuild
                            handleClose={() => setShowModalBuild(false)}
                        />
                    ) : (
                        <></>
                    )}

                    {/* Footer */}
                    <Footer scrollToTop={() => scrollToTop()} />
                </main>
            ) : (
                <LoadingBar progress={progress} />
            )}
        </>
    );
};

export default Homepage;
