import React, { Suspense, useRef, useFrame } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  useGLTF,
  OrbitControls,
  Box,
  Text,
  Stats,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Model from "./Model";
import OfficeModel from "./OfficeModel";
import { motion, AnimatePresence } from "framer-motion";
const Texts = ({ word }) => {
  return (
    <mesh position={[0, 0.7, 0]}>
      <Text
        scale={[3, 3, 3]}
        color="pink"
        // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        {word}
      </Text>
    </mesh>
  );
};
const ChairThree = () => {
  return (
    <>
      <div style={{ width: "100%", height: "90%", display: "flex" }}>
        <motion.div
          // drag
          style={{ height: "100%", width: "45%", cursor: "pointer" }}
          onClick={() => {
            console.log("hi");
          }}
        >
          <Canvas
            colorManagement
            shadowMap
            camera={{ position: [1, 2, 5], fov: 30 }}
          >
            <directionalLight intensity={1} castShadow />
            <ambientLight intensity={1} />
            <pointLight position={[10, 0, 10]} />

            <Suspense fallback={null}>
              <Model receiveShadow />
              <Texts word={"LIVING ROOMS"} />
              <OrbitControls
                enableRotate={true}
                enableZoom={true}
                rotateSpeed={0.5}
                enablePan={true}
                panSpeed={0.4}
                autoRotate={true}
                zoomSpeed={0.4}
                position={[1, 0, 0]}
              />
            </Suspense>
          </Canvas>
        </motion.div>
        <div
          style={{ height: "100%", width: "55%", cursor: "pointer" }}
          onClick={() => {
            console.log("hi");
          }}
        >
          <Canvas
            colorManagement
            shadowMap
            camera={{ position: [1, 2, 5], fov: 50 }}
          >
            <directionalLight intensity={0.7} castShadow />
            <ambientLight intensity={1} />
            <pointLight position={[10, 0, 10]} />

            <Suspense fallback={null}>
              <OfficeModel receiveShadow />
              <Texts word={"OFFICES"} />
              <OrbitControls
                enableRotate={true}
                enableZoom={true}
                rotateSpeed={0.5}
                enablePan={true}
                panSpeed={0.4}
                autoRotate={true}
                zoomSpeed={0.4}
                position={[1, 0, 0]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default ChairThree;
