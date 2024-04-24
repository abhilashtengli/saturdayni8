import React, { useState, useEffect, useRef } from "react";

const DelayedComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 200); // Delayed display after 1 second
          observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Adjust this threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-left-to-right" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default DelayedComponent;
