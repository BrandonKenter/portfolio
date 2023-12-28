import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const Header = ({ headerText }) => {
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
    <div className="mb-6">
      <motion.div
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 35 }}
        className="font-extrabold text-emerald-500 text-lg font-roboto-condensed h-[36px] flex items-center"
        ref={scope}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {"/ " + String(headerText)}
      </motion.div>
    </div>
  );
};

export default Header;
