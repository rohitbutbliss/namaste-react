import { useEffect, useState } from "react";

const useTextAnimation = (TEXTS) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let a = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === TEXTS.length - 1 ? 0 : currentIndex + 1
      );
      console.log("hey");
    }, 3000);
    return () => {
      clearInterval(a);
    };
  }, []);

  return currentIndex;
};

export default useTextAnimation;
