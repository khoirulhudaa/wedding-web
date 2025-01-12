import React, { useEffect, useRef, useState } from "react";
import LoadingModal from "./loadingModal";

const VideoComponent = ({ src, className }) => {
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const handleLoaded = () => setIsVideoLoaded(true);
        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.addEventListener("loadeddata", handleLoaded);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener("loadeddata", handleLoaded);
            }
        };
    }, []);

    return (
        <div className="w-full h-full">
            {!isVideoLoaded && <LoadingModal />}
            <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                className={`${className} ${isVideoLoaded ? "block" : "hidden"}`}
            />
        </div>
    );
};

export default VideoComponent;
