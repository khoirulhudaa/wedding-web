import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";
import React from "react";

const RotatingModel = React.memo(({ url, scale, speed }) => {
    const { scene } = useGLTF(url);

    useFrame((_, delta) => {
        scene.rotation.y += speed * delta;
    });

    return <primitive object={scene} scale={scale} />;
});

RotatingModel.displayName = "RotatingModel";

RotatingModel.propTypes = {
    url: PropTypes.any.isRequired,
    scale: PropTypes.any.isRequired,
    speed: PropTypes.any.isRequired,
};

const ThreeDModel = ({ url, scaleCustom, speed, intensity }) => {
    return (
        <Canvas className="absolute z-[77]">
            <ambientLight intensity={intensity} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <perspectiveCamera
                position={[0, 10, 15]}
                near={0.1}
                far={100}
                fov={50}
            />

            <OrbitControls enableZoom={false} />

            <RotatingModel url={url} scale={scaleCustom} speed={speed} />
        </Canvas>
    );
};

ThreeDModel.propTypes = {
    url: PropTypes.any.isRequired,
    scaleCustom: PropTypes.any.isRequired,
    speed: PropTypes.any.isRequired,
    intensity: PropTypes.any.isRequired,
};

export default ThreeDModel;
