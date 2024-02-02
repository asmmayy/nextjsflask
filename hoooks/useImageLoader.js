// hooks/useImageLoader.js
import { useState, useEffect } from 'react';

const useImageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = document.images;
    const totalImages = images.length;
    let imagesLoaded = 0;

    const imageLoaded = () => {
      imagesLoaded += 1;
      if (imagesLoaded === totalImages) {
        setIsLoading(false);
      }
    };

    for (let i = 0; i < totalImages; i++) {
      if (images[i].complete) {
        imageLoaded();
      } else {
        images[i].onload = imageLoaded;
        images[i].onerror = imageLoaded; // handle broken images
      }
    }

    if (totalImages === 0) {
      setIsLoading(false);
    }
  }, []);

  return isLoading;
};

export default useImageLoader;
