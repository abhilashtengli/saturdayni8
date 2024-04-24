import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
const ImageSlider = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full md:h-screen lg:h-screen h-96 overflow-hidden">
      {images.map((image, index) => (
        <Transition
          as="div"
          key={index}
          show={index === currentIndex}
          enter="transition ease-out duration-500 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-500 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="w-screen h-full object-fill"
          />
        </Transition>
      ))}
    </div>
  );
};

export default ImageSlider;
