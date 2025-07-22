import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  Decal, // Used to apply a texture or decal to a 3D object
  Float, // Provides a floating animation effect to a 3D object
  OrbitControls, // Allows the camera to orbit around a target
  Preload, // Preloads assets before rendering
  useTexture, // Hook to load and use textures in 3D objects
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float rotation={[5, 0.7, 1.2]}>
      {" "}
      {/* Adjust rotation to face the front */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 1]} />
      <mesh castShadow receiveShadow scale={6.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]} // Ensure the decal is on the surface
          scale={[1, 1, 1]} // Adjust scale if necessary
          rotation={[0, 0, 0]} // Adjust rotation if necessary
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas
      frameloop="demand" // Optimize performance by only rendering when needed
      camera={{ position: [30, 40, 5], fov: 20 }} // Set the camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Ensures screenshots can be taken
    >
      {/* Suspense ensures the loader is displayed while the model loads */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Controls for rotating the model with the mouse */}
        <OrbitControls
          enableZoom={false} // Disable zooming
        />
        {/* Render the 3D model */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload assets for better performance */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
