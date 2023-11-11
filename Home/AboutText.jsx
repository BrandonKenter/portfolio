import { useAnimate, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutText = () => {
  const [scope, animate] = useAnimate();
  const [inView, setInView] = useState(false);

  // Function to handle intersection changes
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
      threshold: 0, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(scope.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mb-4 overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center font-montserrat text-sm sm:text-base mt-2">
        <motion.div
          animate={
            inView
              ? { x: 0, opacity: 1, scale: 1 }
              : { x: 50, opacity: 0, scale: 0.95 }
          }
          className="text-emerald-500"
          ref={scope}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex flex-col">
            <span className="text-slate-400 mb-2">
              After graduating high school, I worked several general labor jobs.
              From 2015 to 2019, I worked as a paint tech at a building
              materials distributor. It took a few years, but I eventually
              realized I wanted to use my brain and challenge myself more. So,
              in 2017, I enrolled at Western Technical College, and in 2019, I
              transferred to the University of Wisconsin - Madison, where I
              graduated with a bachelor's degree in computer science in 2022.
            </span>
          </div>
        </motion.div>

        <motion.div
          animate={
            inView
              ? { x: 0, opacity: 1, scale: 1 }
              : { x: 100, opacity: 0, scale: 0.95 }
          }
          className="text-emerald-500"
          ref={scope}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex flex-col">
            <span className="text-slate-400 mt-2">
              During my preperation for technical interviews after graduation, I
              discovered the learning technique{" "}
              <a
                className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors duration-200"
                target="_blank"
                href="https://en.wikipedia.org/wiki/Spaced_repetition"
              >
                spaced repetition
              </a>
              —a review technique that leverages the idea of the{" "}
              <a
                className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors duration-200"
                target="_blank"
                href="https://en.wikipedia.org/wiki/Forgetting_curve"
              >
                forgetting curve
              </a>{" "}
              to create purposeful review intervals for learning and retaining
              new information in a more efficient manner. I quickly realized,
              however, that there were no tools available that help facilitate
              studying technical interview problems with spaced repetition. So,
              in the beginning of 2023, I started the development of{" "}
              <a
                className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors duration-200"
                target="_blank"
                href="https://bluthumb.io"
              >
                BluThumb.io
              </a>
              , an all-in-one platform with a multitude of unique features that
              facilitate spaced repetition, and in late 2023, it was launched!
            </span>
          </div>
        </motion.div>

        <motion.div
          animate={
            inView
              ? { x: 0, opacity: 1, scale: 1 }
              : { x: 100, opacity: 0, scale: 0.95 }
          }
          className="text-emerald-500"
          ref={scope}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex flex-col">
            <span className="text-slate-400 mt-2">
              Outside of software developement, my favorite thing to do is
              jogging. There's nothing quite like the serenity of a golden hour
              jog along the Lakeshore Path in the summer! Yet, in my many years
              of jogging recreationally, I've never done a marathon before. So,
              one of my main goals is to do one before the end of 2024!
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutText;
