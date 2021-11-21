// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export default function OfficeModel({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/leather.glb");
//   return (
//     <group ref={group} {...props} dispose={null} position={[0, 0, 0]}>
//       <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.04, 0.04, 0.04]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group
//             position={[-42.87, -0.51, 43.05]}
//             rotation={[-Math.PI / 2, 0, -1.92]}
//             scale={0.9}
//           >
//             <group position={[-11.54, -11.26, -21.91]}>
//               <group
//                 position={[6.17, 11.07, 22.98]}
//                 rotation={[-Math.PI / 2, 0, Math.PI]}
//               >
//                 <mesh
//                   geometry={nodes.leatherChair001_leather_dark_0.geometry}
// //                   material={materials.leather_dark}
// //                 />
// //               </group>
// //             </group>
// //             <group position={[-8.19, -11.26, -5.5]}>
// //               <group
// //                 position={[2.83, 11.07, 6.58]}
// //                 rotation={[-Math.PI / 2, 0, Math.PI]}
// //               >
// //                 <mesh
// //                   geometry={nodes.legs001_metal_Leg_0.geometry}
// //                   material={nodes.legs001_metal_Leg_0.material}
// //                 />
// //               </group>
// //             </group>
// //           </group>
// //           <group
// //             position={[53.23, -0.51, -32.39]}
// //             rotation={[-Math.PI / 2, 0, 0]}
// //             scale={0.9}
// //           >
// //             <group position={[-11.54, -11.26, -21.91]}>
// //               <group
// //                 position={[6.17, 11.07, 22.98]}
// //                 rotation={[-Math.PI / 2, 0, Math.PI]}
// //               >
// //                 <mesh
// //                   geometry={nodes.leatherChair_leather_white_0.geometry}
// //                   material={materials.leather_white}
// //                 />
// //               </group>
// //             </group>
// //             <group position={[-8.19, -11.26, -5.5]}>
// //               <group
// //                 position={[2.83, 11.07, 6.58]}
// //                 rotation={[-Math.PI / 2, 0, Math.PI]}
// //               >
// //                 <mesh
// //                   geometry={nodes.legs_metal_Leg_0.geometry}
// //                   material={nodes.legs_metal_Leg_0.material}
// //                 />
// //               </group>
// //             </group>
// //           </group>
// //         </group>
// //       </group>
// //     </group>
// //   );
// // }

// // useGLTF.preload("/leather.glb");

// // import React, { useRef } from "react";
// // import { useGLTF } from "@react-three/drei";

// export default function OfficeModel({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/leather.glb");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group
//         position={[-0.5, -2, 2]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={[-0.05, 0.05, 0.05]}
//       >
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group
//             position={[-42.87, -0.51, 43.05]}
//             rotation={[-Math.PI / 2, 0, -1.92]}
//             scale={1.54}
//           >
//             <group position={[-11.54, -11.26, -21.91]}>
//               <group
//                 position={[6.17, 11.07, 22.98]}
//                 rotation={[-Math.PI / 2, 0, Math.PI]}
//               >
//                 <mesh
//                   geometry={nodes.leatherChair001_leather_dark_0.geometry}
//                   material={materials.leather_dark}
//                 />
//               </group>
//             </group>
//             <group position={[-8.19, -11.26, -5.5]}>
//               <group
//                 position={[2.83, 11.07, 6.58]}
//                 rotation={[-Math.PI / 2, 0, Math.PI]}
//               >
//                 <mesh
//                   geometry={nodes.legs001_metal_Leg_0.geometry}
//                   material={nodes.legs001_metal_Leg_0.material}
//                 />
//               </group>
//             </group>
//           </group>
//           <group
//             position={[53.23, -0.51, -32.39]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={1.54}
//           >
//             <group position={[-11.54, -11.26, -21.91]}>
//               <group
//                 position={[6.17, 11.07, 22.98]}
//                 rotation={[-Math.PI / 2, 0, Math.PI]}
//               >
//                 <mesh
//                   geometry={nodes.leatherChair_leather_white_0.geometry}
//                   material={materials.leather_white}
//                 />
//               </group>
//             </group>
//             <group position={[-8.19, -11.26, -5.5]}>
//               <group
//                 position={[2.83, 11.07, 6.58]}
//                 rotation={[-Math.PI / 2, 0, Math.PI]}
//               >
//                 <mesh
//                   geometry={nodes.legs_metal_Leg_0.geometry}
//                   material={nodes.legs_metal_Leg_0.material}
//                 />
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/leather.glb");
