import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import image from '../assets/merch.png';

const MODEL_URL = "./tshirt2.glb";
const TShirtModel = () => {
  const { scene } = useGLTF(MODEL_URL);
  return <primitive object={scene} scale={9} />;
};

const TShirtAdvert = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width to determine if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if screen width is < 768px
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center border-2 border-blue-500 rounded-lg shadow-lg mx-auto mt-4 max-w-6xl">
      <div className="flex-1 flex justify-center items-center">
        {isMobile ? (
          <div className="text-center p-4">
            <img src={image} alt="tshirt" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="text-red-500 text-2xl font-bold mt-4">😔</div>
            <p className="text-gray-600 mt-2">Sorry, the 3D model is not available on mobile.</p>
          </div>
        ) : (
          <div
            className="w-full h-[18vh] sm:h-[18vh] md:h-[18vh] lg:h-[76vh]"
            style={{ minHeight: "200px" }} // Ensures visibility on very small screens
          >
            <Canvas
              camera={{
                fov: 75,
                position: [0, 1.5, 8], // Adjusted position for better view
              }}
              gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.2,
                outputEncoding: THREE.sRGBEncoding,
              }}
            >
              <ambientLight intensity={0.9} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls
                enableZoom={false}
                enableDamping
                dampingFactor={0.1}
                autoRotate
                autoRotateSpeed={1.5}
              />
              <TShirtModel />
            </Canvas>
          </div>
        )}
      </div>

      {/* Text and Button Section */}
      <div className="flex-1 p-4 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4 transform ">
          I WANT IT!
        </h2>
        <button
          className="gap-2 text-white font-bold py-3 px-6 rounded-lg transform hover:bg-blue-600 transition-all flex items-center"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdILChTCM5I0G5QbkwEM4iuEZUNohFfprpD-f8olae83sbjpw/viewform', '_blank')}
          style={{ backgroundColor: "var(--Udgam-Blue, #225088)", borderRadius: "12px", color: "var(--Udgam-White, #F4F5F6)", leadingTrim: "both", textEdge: "cap", fontFamily: "PP Mori", fontSize: "30px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal", textTransform: "capitalize" }}
        >
          BUY NOW
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="ml-2">
            <path d="M28 3.41559L24.5906 0L4.865 0.178914L0 5.05279L19.6351 4.96454L0.051017 24.5844L3.46039 28L23.1108 8.31372L23.0228 27.9846L27.8881 23.1105L28 3.41559Z" fill="white" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default TShirtAdvert;
