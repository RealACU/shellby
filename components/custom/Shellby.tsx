"use client";

import { Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

const Shellby = () => {
  const ref = useRef<Group | null>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;

    const time = 2.5*clock.getElapsedTime();

    // Move left/right
    ref.current.position.x = 0.5*Math.cos(time);
    // Move up/down
    ref.current.position.y = 0.5*Math.abs(Math.sin(time));
    // Spin
    ref.current.rotation.y = 0.1*Math.tan(time);
    // Tilt left/right
    ref.current.rotation.z = -0.2*Math.cos(time);
  });

  return (
    <group ref={ref}>
      <Image scale={5} zoom={0.9} transparent url="/shellby_front.webp" />
      <Image scale={5} zoom={0.9} transparent url="/shellby_back.webp" rotation={[0, Math.PI, 0]} />
    </group>
  );
};

export default Shellby;
