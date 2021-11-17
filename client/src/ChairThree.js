import React, { Suspense, useRef, useFrame, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  useGLTF,
  OrbitControls,
  Box,
  Text,
  Stats,
  Plane,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Model from "./Model";
import OfficeModel from "./OfficeModel";
import { motion, AnimatePresence } from "framer-motion";
import SmallModal from "./SmallModal";
const Texts = ({ word }) => {
  return (
    <mesh position={[0, 0.7, 0]}>
      <Text
        scale={[3, 3, 3]}
        color="pink"
        // default
        castShadow
        anchorX="center" // default
        anchorY="middle" // default
      >
        {word}
      </Text>
    </mesh>
  );
};
const ChairThree = () => {
  const [spin, setSpin] = useState(true);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <motion.div
          // drag
          style={{
            height: "100%",
            width: "55%",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("hi");
          }}
        >
          <button
            onClick={() => {
              setSpin(!spin);
            }}
          >
            Spin
          </button>
          <Canvas
            colorManagement
            shadowMap
            camera={{ position: [1, 2, 5], fov: 30 }}
          >
            <directionalLight
              intensity={0.5}
              castShadow
              shadow-mapSize-height={512}
              shadow-mapSize-width={512}
            />
            <ambientLight intensity={0.6} />
            <pointLight position={[20, 10, 10]} />
            <spotLight
              distance={1}
              decay={0.2}
              penumbera={0.5}
              angel={Math.PI / 4.0}
              position={[0, 10, 10]}
              castShadow
            />

            <Suspense fallback={null}>
              <Model castShadow />
              <Texts word={"Furniture"} />
              <meshStandardMaterial attach="material" color="0x808080" />

              {spin && (
                <OrbitControls
                  enableRotate={true}
                  enableZoom={true}
                  rotateSpeed={0.5}
                  enablePan={true}
                  panSpeed={0.4}
                  // autoRotate={true}
                  zoomSpeed={0.4}
                  position={[1, 0, 0]}
                />
              )}
            </Suspense>
            {/* <Plane
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0, 0]}
              args={[5, 5, 5, 5]}
            >
              <meshPhongMaterial attach="material" color="grey" />
            </Plane> */}
          </Canvas>
        </motion.div>
        <motion.div
          // drag
          style={{
            height: "100%",
            width: "45%",
            cursor: "pointer",
          }}
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
        </motion.div>
      </div>
    </>
  );
};

export default ChairThree;