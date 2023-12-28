import { motion } from "framer-motion";

const Navbar = ({ aboutRef, projectsRef, contactRef, resumeRef }) => {
  return (
    <nav className="pl-2 sm:pl-5 sticky top-0 items-center py-2 font-roboto-condensed z-50 flex w-full select-none justify-end whitespace-nowrap">
      <div className="absolute h-44 w-full top-0 bg-gradient-to-b from-neutral-950 to-transparent"></div>
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: 10,
          backgroundColor: "rgb(110 231 183)",
          duration: 0.6,
        }}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="bg-emerald-500 mr-auto z-50 rounded-md"
      >
        <a className="">
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="cursor-pointer font-montserrat w-full group-hover:rotate-45 text-slate-900 text-xl p-1 font-semibold"
          >
            BK
          </div>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <a
          onClick={() => {
            if (aboutRef) {
              aboutRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
          className="cursor-pointer px-2 py-1 mx-0.5 sm:px-5 sm:mx-2 sm:py-2.5 relative rounded group overflow-hidden font-medium text-emerald-500 inline-block"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-emerald-500 group-hover:h-full"></span>
          <span className="font-bold relative group-hover:text-gray-950">
            / about
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <a
          onClick={() => {
            if (projectsRef) {
              projectsRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
          className="cursor-pointer px-2 py-1 mx-0.5 sm:px-5 sm:mx-2 sm:py-2.5 relative rounded group overflow-hidden font-medium text-emerald-500 inline-block"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-emerald-500 group-hover:h-full"></span>
          <span className="font-bold relative group-hover:text-gray-950">
            / projects
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <a
          onClick={() => {
            if (contactRef) {
              contactRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
          className="cursor-pointer px-2 py-1 mx-0.5 sm:px-5 sm:mx-2 sm:py-2.5 relative rounded group overflow-hidden font-medium text-emerald-500 inline-block"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-emerald-500 group-hover:h-full"></span>
          <span className="font-bold relative group-hover:text-gray-950">
            / contact
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.9,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <a
          onClick={() => {
            if (resumeRef) {
              resumeRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
          className="cursor-pointer px-2 py-1 mx-0.5 sm:px-5 sm:mx-2 sm:py-2.5 relative rounded group overflow-hidden font-medium text-emerald-500 inline-block"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-emerald-500 group-hover:h-full"></span>
          <span className="font-bold relative group-hover:text-gray-950">
            / resume
          </span>
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
