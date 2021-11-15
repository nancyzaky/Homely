import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/main.glb");
  return (
    <mesh position={[0, 0, 0]}>
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Mesh_0.geometry}
              material={materials.COU0001_Couch}
            />
          </group>
        </group>
      </group>
    </mesh>
  );
}

useGLTF.preload("/main.glb");
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/group.glb");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//           <group
//             position={[192.9, 36.06, 402.71]}
//             rotation={[-Math.PI / 2, 0, -0.78]}
//             scale={24.9}
//           >
//             <mesh
//               geometry={nodes.chairlegs_low001_chair1_0.geometry}
//               material={materials.chair1}
//             />
//           </group>
//           <group
//             position={[100.14, 1.13, 379.49]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.endtable1_top__low_endtable1_0.geometry}
//               material={nodes.endtable1_top__low_endtable1_0.material}
//             />
//           </group>
//           <group
//             position={[-18.72, -1.46, 379.49]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={[85.33, 85.33, 95.77]}
//           >
//             <mesh
//               geometry={nodes.endtable1_top__low003_endtable1_0.geometry}
//               material={nodes.endtable1_top__low003_endtable1_0.material}
//             />
//           </group>
//           <group
//             position={[40.96, 0.33, 379.49]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={[84.16, 84.16, 100]}
//           >
//             <mesh
//               geometry={nodes.endtable1_top__low006_endtable1_0.geometry}
//               material={nodes.endtable1_top__low006_endtable1_0.material}
//             />
//           </group>
//           <group
//             position={[39.63, 158.43, 384]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.lampscrew_low001_lamp01_0.geometry}
//               material={materials.lamp01}
//             />
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/group.glb");
