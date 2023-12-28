import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const HeaderIcon = ({ icon }) => {
  const [scope, animate] = useAnimate();
  const [inView, setInView] = useState(false);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      } else {
        const yPosition =
          scope.current.getBoundingClientRect().top + window.scrollY;
        if (yPosition > window.scrollY) {
          setInView(false);
        }
      }
    });
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0;
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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(scope.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={scope}>
      <FontAwesomeIcon
        className={` ${
          inView ? "opacity-100" : "opacity-0"
        } z-40 absolute transition duration-1000 delay-500 -left-14 top-0 text-neutral-950 bg-emerald-500 p-2 rounded-md w-5 h-5`}
        icon={icon}
      />
      <div
        className={`${
          inView ? "opacity-100" : "opacity-0"
        } transition duration-1000 delay-500 z-0 absolute -left-14 top-0 blur-lg text-neutral-950 bg-emerald-500 p-2 rounded-md w-[36px] h-[36px]`}
      ></div>
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="absolute -left-14 top-0 z-40 fill-transparent rounded-md"
      >
        <motion.rect
          width="36"
          height="36"
          strokeWidth={5}
          strokeLinecap={"round"}
          x="0"
          y="0"
          rx="5"
          stroke="#10b981"
          variants={draw}
          custom={3}
          className="absolute -left-14 top-0 runded-lg z-50"
        />
      </motion.svg>
    </div>
  );
};

export default HeaderIcon;
