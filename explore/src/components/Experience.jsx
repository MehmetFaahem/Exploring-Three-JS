import React from "react";
import { OrbitControls } from "@react-three/drei";

function Experience() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <mesh>
        <boxGeometry />
      </mesh>
    </>
  );
}

export default Experience;
