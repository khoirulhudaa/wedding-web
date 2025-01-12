import React, { useRef, useEffect, useState } from "react";
import Loading from "./loading";

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
        <>
            {!isVideoLoaded && <Loading />}
            <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                className={`${className} ${isVideoLoaded ? "block" : "hidden"}`}
            />
        </>
    );
};

export default VideoComponent;
