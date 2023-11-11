import Project from "./Project";
import { useAnimate, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = ({ maxHeight }) => {
  const [bluThumbScope] = useAnimate();
  const [propertleScope] = useAnimate();
  const [allocatorScope] = useAnimate();
  const [inventoryScope] = useAnimate();
  const [flipperScope] = useAnimate();

  const [bluThumbInView, setBluThumbInView] = useState(false);
  const [propertleInView, setPropertleInView] = useState(false);
  const [allocatorInView, setAllocatorInView] = useState(false);
  const [inventoryInView, setInventoryInView] = useState(false);
  const [flipperInView, setFlipperInView] = useState(false);

  // Function to handle intersection changes
  const handleBluThumbIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The div is in view
        setBluThumbInView(true);
      } else {
        const yPosition =
          bluThumbScope.current.getBoundingClientRect().top + window.scrollY;
        // The div is out of view
        if (yPosition > window.scrollY) {
          setBluThumbInView(false);
        }
      }
    });
  };

  // Function to handle intersection changes
  const handlePropertleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The div is in view
        setPropertleInView(true);
      } else {
        const yPosition =
          propertleScope.current.getBoundingClientRect().top + window.scrollY;
        // The div is out of view
        if (yPosition > window.scrollY) {
          setPropertleInView(false);
        }
      }
    });
  };

  // Function to handle intersection changes
  const handleAllocatorIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The div is in view
        setAllocatorInView(true);
      } else {
        const yPosition =
          allocatorScope.current.getBoundingClientRect().top + window.scrollY;
        // The div is out of view
        if (yPosition > window.scrollY) {
          setAllocatorInView(false);
        }
      }
    });
  };

  // Function to handle intersection changes
  const handleInventoryIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The div is in view
        setInventoryInView(true);
      } else {
        const yPosition =
          inventoryScope.current.getBoundingClientRect().top + window.scrollY;
        // The div is out of view
        if (yPosition > window.scrollY) {
          setInventoryInView(false);
        }
      }
    });
  };

  // Function to handle intersection changes
  const handleFlipperIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The div is in view
        setFlipperInView(true);
      } else {
        const yPosition =
          flipperScope.current.getBoundingClientRect().top + window.scrollY;
        // The div is out of view
        if (yPosition > window.scrollY) {
          setFlipperInView(false);
        }
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const bluThumbObserver = new IntersectionObserver(
      handleBluThumbIntersection,
      options
    );
    bluThumbObserver.observe(bluThumbScope.current);

    const propertleObserver = new IntersectionObserver(
      handlePropertleIntersection,
      options
    );
    propertleObserver.observe(propertleScope.current);

    const allocatorObserver = new IntersectionObserver(
      handleAllocatorIntersection,
      options
    );
    allocatorObserver.observe(allocatorScope.current);

    const inventoryObserver = new IntersectionObserver(
      handleInventoryIntersection,
      options
    );
    inventoryObserver.observe(inventoryScope.current);

    const flipperObserver = new IntersectionObserver(
      handleFlipperIntersection,
      options
    );
    flipperObserver.observe(flipperScope.current);

    return () => {
      bluThumbObserver.disconnect();
      propertleObserver.disconnect();
      allocatorObserver.disconnect();
      inventoryObserver.disconnect();
      flipperObserver.disconnect();
    };
  }, []);

  return (
    <div className="mb-4 mt-2">
      {/* bluthumb.io */}
      <motion.div
        animate={
          bluThumbInView
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: 10, opacity: 0, scale: 0.95 }
        }
        className="text-emerald-500"
        ref={bluThumbScope}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Project
          projectTitle={"BluThumb.io"}
          technologies={["JavaScript", "React", "Tailwind", "Firebase"]}
          projectDescription={
            "A web application that focuses on providing unique tools to software engineers who are preparing for their technical interviews so they can land their dream job sooner."
          }
          imagePath={"img/bluthumb-thumb.png"}
          website={"https://bluthumb.io"}
          github={null}
        />
      </motion.div>

      {/* propertle.com */}
      <motion.div
        animate={
          propertleInView
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: 10, opacity: 0, scale: 0.95 }
        }
        className="text-emerald-500"
        ref={propertleScope}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Project
          projectTitle={"Propertle.com"}
          technologies={["TypeScript", "React", "Tailwind", "Firebase"]}
          projectDescription={
            "A web application that tests your intuition of property prices. Players are given the location and 5 pictures of a property listing and have 5 attempts to guess the price of the property."
          }
          imagePath={"img/propertle-thumb.png"}
          website={"https://propertle.com"}
          github={null}
        />
      </motion.div>

      {/* heap allocator */}
      <motion.div
        animate={
          allocatorInView
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: 10, opacity: 0, scale: 0.95 }
        }
        className="text-emerald-500"
        ref={allocatorScope}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Project
          projectTitle={"Heap Allocator"}
          technologies={["Java", "JavaFX", "Scene Builder"]}
          projectDescription={
            "A desktop application that visualizes dynamic memory allocation in C using the first-fit placement policy and immediate coalescing."
          }
          imagePath={"img/allocator-thumb.png"}
          website={null}
          github={"https://github.com/BrandonKenter/Heap-Allocator"}
        />
      </motion.div>

      {/* paint inventory */}
      <motion.div
        animate={
          inventoryInView
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: 10, opacity: 0, scale: 0.95 }
        }
        className="text-emerald-500"
        ref={inventoryScope}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Project
          projectTitle={"Paint Inventory"}
          technologies={["Python", "PyQt5", "Qt Designer", "SQLite"]}
          projectDescription={
            "A desktop application that helps businesses manage their inventory of paint products by leveraging useful features such as searching and summarized data"
          }
          imagePath={"img/paint-thumb.png"}
          website={null}
          github={"https://github.com/BrandonKenter/Paint-Inventory"}
        />
      </motion.div>

      {/* house flipper */}
      <motion.div
        animate={
          flipperInView
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: 10, opacity: 0, scale: 0.95 }
        }
        className="text-emerald-500"
        ref={flipperScope}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Project
          projectTitle={"House Flipper"}
          technologies={["Java", "JavaFX", "Scene Builder"]}
          projectDescription={
            "A desktop application that simulates the process of assessing a property's current and potential future value base on various improvements."
          }
          imagePath={"img/flipper-thumb.png"}
          website={null}
          github={"https://github.com/BrandonKenter/House-Flipper"}
        />
      </motion.div>
    </div>
  );
};

export default Projects;
