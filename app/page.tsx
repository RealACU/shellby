"use client";

import Shellby from "@/components/custom/Shellby";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const page = () => {
  return (
    <main className="h-full">
      <div className="flex pt-16 items-center justify-center">
        <h1>This is Shellby.</h1>
      </div>
      <Canvas>
        <Shellby />
      </Canvas>
    </main>
  );
};

export default page;
