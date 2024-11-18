'use client'
import { useEffect, useState } from "react";
import Ripple from "../ui/ripple";

export function RippleBackground() {
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
    // Function to update window height
    const handleResize = () => {
      setWindowHeight(window.innerHeight * 0.55);
    };

    // Set initial height
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center transform -translate-x-1/2">
      <Ripple mainCircleSize={windowHeight} numCircles={7}/>
    </div>
  );
}
