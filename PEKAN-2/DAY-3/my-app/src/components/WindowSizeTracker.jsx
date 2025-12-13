import React, { useState, useEffect } from "react";

function WindowSizeTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Cleanup resize listener");
    };
  }, []);

  return (
    <div>
      <h2>Window Size Tracker</h2>
      <p>Width: {size.width}</p>
      <p>Height: {size.height}</p>
    </div>
  );
}

export default WindowSizeTracker;
