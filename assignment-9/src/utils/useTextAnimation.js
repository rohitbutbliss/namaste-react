import { useEffect, useState } from "react";

const useTextAnimation = (TEXTS) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSetIntervalAdded, setIsSetIntervalAdded] = useState(false);
  useEffect(() => {
    if (!isSetIntervalAdded) {
      setIsSetIntervalAdded(true);
      setInterval(() => {
        setCurrentIndex((currentIndex) =>
          currentIndex === TEXTS.length - 1 ? 0 : currentIndex + 1
        );
        console.log("hey");
      }, 3000);
    }

    return () => {
      clearInterval();
    };
  }, [isSetIntervalAdded]);

  return currentIndex;
};

export default useTextAnimation;
