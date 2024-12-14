import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

// Komponen untuk model 3D yang berputar
const RotatingModel = ({ url, scale, speed }) => {
  const { scene } = useGLTF(url); // Memuat file GLB

  // Menggunakan useFrame untuk membuat animasi rotasi otomatis hanya pada sumbu Y
  useFrame((state, delta) => {
    console.log(state)
    // Menambahkan rotasi hanya pada sumbu Y untuk perputaran otomatis
    scene.rotation.y += speed * delta; // Kecepatan rotasi diatur dengan delta
  });

  return <primitive object={scene} scale={scale} />;
};

const ThreeDModel = ({ url, scaleCustom, speed, intensity }) => {

  return (
      <Canvas className="absolute">
        {/* Gunakan PascalCase untuk komponen Three.js */}
        <ambientLight intensity={intensity} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Menentukan posisi kamera di atas objek dan menghadap ke bawah */}
        <perspectiveCamera makeDefault position={[0, 10, 15]} near={0.1} far={100} fov={50} />

        <OrbitControls
          enableZoom={false}
        />

        {/* Menambahkan komponen RotatingModel di dalam Canvas */}
        <RotatingModel url={url} scale={scaleCustom} speed={speed} />
      </Canvas>
  );
};

export default ThreeDModel;
