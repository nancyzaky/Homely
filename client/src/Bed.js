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
  //   const group = useRef();
  //   const { nodes, materials } = useGLTF("/bed.glb");
  //   return (
  //     <group ref={group} {...props} dispose={null} scale={[0.028, 0.027, 0.02]}>
  //       <group rotation={[-Math.PI / 2, 0, 0]}>
  //         <mesh
  //           geometry={nodes.Mesh_0001.geometry}
  //           material={materials["mt_base_cama.001"]}
  //         />
  //         <mesh
  //           geometry={nodes.Mesh_1001.geometry}
  //           material={materials["mt_colchon_almuada.001"]}
  //         />
  //         <mesh
  //           geometry={nodes.Mesh_2001.geometry}
  //           material={materials["mt_edredon.001"]}
  //         />
  //       </group>
  //     </group>
  //   );
  // };

  // useGLTF.preload("/bed.glb");
  const group = useRef();
  const { nodes, materials } = useGLTF("/greenChair.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.18, 44.37, 0.85]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Moby_Accent_Chair_Pine_Green_BRASS_0.geometry}
              material={materials.BRASS}
            />
            <mesh
              geometry={
                nodes.Moby_Accent_Chair_Pine_Green_FABRIC_BLACK_0.geometry
              }
              material={materials.FABRIC_BLACK}
            />
            <mesh
              geometry={
                nodes.Moby_Accent_Chair_Pine_Green_VELVET_GREEN_0.geometry
              }
              material={materials.VELVET_GREEN}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Plane001_FLOOR_0.geometry}
              material={materials.FLOOR}
              scale={[0.77, 0.69, 0.99]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/greenChair.glb");

// const Beds = ({ ...props }) => {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/pink.glb");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]} scale={-14}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group position={[-0.5, -0.5, -0.5]}>
//             <group scale={[1, 1, 0.93]}>
//               <group scale={-1}>
//                 <mesh
//                   geometry={nodes.Mesh_1.geometry}
//                   material={nodes.Mesh_1.material}
//                   scale={[0.98, 1, 1]}
//                 />
//               </group>
//             </group>
//             <group scale={[-1.03, -1, -0.93]}>
//               <mesh
//                 geometry={nodes.Mesh_0.geometry}
//                 material={nodes.Mesh_0.material}
//                 scale={[0.89, 1, 1]}
//               />
//             </group>
//             <mesh
//               geometry={nodes.Mesh_2.geometry}
//               material={materials.chaji}
//               scale={[0.9, 1, 0.89]}
//             />
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// };

// useGLTF.preload("/pink.glb");

// const Beds = ({ ...props }) => {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/flower.glb");
//   return (
//     <group ref={group} {...props} dispose={null} scale={[0.018, 0.017, 0.02]}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group position={[7.4, 56.55, 63]} rotation={[0.58, 1.56, -2.16]}>
//           <group rotation={[-Math.PI, 0, 0]}>
//             <mesh
//               geometry={nodes.Stereo_textured_mesh_Material0_0.geometry}
//               material={nodes.Stereo_textured_mesh_Material0_0.material}
//             />
//             <mesh
//               geometry={nodes.Stereo_textured_mesh_Material0_0001.geometry}
//               material={nodes.Stereo_textured_mesh_Material0_0001.material}
//             />
//             <mesh
//               geometry={nodes.Stereo_textured_mesh_Material0_0002.geometry}
//               material={nodes.Stereo_textured_mesh_Material0_0002.material}
//             />
//             <mesh
//               geometry={nodes.Stereo_textured_mesh_Material0_0003.geometry}
//               material={nodes.Stereo_textured_mesh_Material0_0003.material}
//             />
//             <mesh
//               geometry={nodes.Stereo_textured_mesh_Material0_0004.geometry}
//               material={nodes.Stereo_textured_mesh_Material0_0004.material}
//             />
//             <mesh
//               geometry={nodes.Stereo_textured_mesh_Material0_0005.geometry}
//               material={nodes.Stereo_textured_mesh_Material0_0005.material}
//             />
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// };

// useGLTF.preload("/flower.glb");
