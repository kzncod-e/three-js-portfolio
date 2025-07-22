import React from "react";
import { Html, useProgress } from "@react-three/drei";

// Loader component to display loading progress
const Loader = () => {
  // useProgress hook to get the current loading progress
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      {/* Display the loading progress as a percentage with two decimal places */}
      <p className="text-sm text-[#f1f1f1] font-extrabold">
        {progress.toFixed(2)}
      </p>
    </Html>
  );
};

export default Loader;
