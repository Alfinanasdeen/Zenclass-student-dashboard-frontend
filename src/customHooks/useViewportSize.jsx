import { useEffect, useState } from "react";

const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    // Initial size setting
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportSize;
};

export default useViewportSize;
