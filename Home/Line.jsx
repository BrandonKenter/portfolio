import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Line = ({ currentScope, nextScope }) => {
  const [inView, setInView] = useState(false);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    setHeight(currentScope.current.clientHeight);
  };

  useEffect(() => {
    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
        setHeight(currentScope.current.clientHeight);
      } else {
        setInView(false);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(nextScope.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <motion.svg
        width="10"
        height={height + 0}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="absolute -left-10"
        ref={nextScope}
      >
        <motion.line
          x1="0"
          y1="35"
          x2="0"
          y2={height + 0}
          stroke="#10b981"
          strokeWidth="6px"
          variants={draw}
        />
      </motion.svg>
      <motion.svg
        width="10"
        height={height + 0}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="absolute -left-10 blur-sm"
        ref={nextScope}
      >
        <motion.line
          x1="0"
          y1="35"
          x2="0"
          y2={height + 0}
          stroke="#10b981"
          strokeWidth="6px"
          variants={draw}
        />
      </motion.svg>
    </div>
  );
};

export default Line;
