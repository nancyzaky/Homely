import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/new.glb");
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

useGLTF.preload("/new.glb");
