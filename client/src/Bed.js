import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Box, Text, Stats } from "@react-three/drei";

export default function BedModel() {
  return (
    <div
      style={{
        height: "70%",
        width: "100%",
        cursor: "pointer",
      }}
      onClick={() => {
        console.log("hi");
      }}
    >
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [1, 2, 5], fov: 90 }}
      >
        <directionalLight intensity={1} castShadow />
        <ambientLight intensity={1} />
        <pointLight position={[10, 0, 10]} />

        <Suspense fallback={null}>
          <Beds receiveShadow />
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
  );
}
const Beds = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/bed.glb");
  return (
    <group ref={group} {...props} dispose={null} scale={[0.028, 0.027, 0.02]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Mesh_0001.geometry}
          material={materials["mt_base_cama.001"]}
        />
        <mesh
          geometry={nodes.Mesh_1001.geometry}
          material={materials["mt_colchon_almuada.001"]}
        />
        <mesh
          geometry={nodes.Mesh_2001.geometry}
          material={materials["mt_edredon.001"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/bed.glb");
