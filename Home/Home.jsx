import Navbar from "../Navbar/Navbar";
import Line from "./Line";
import Header from "./Header";
import AboutText from "./AboutText";
import Projects from "./Projects";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faFile,
  faEnvelope,
  faInfo,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import HeaderIcon from "./HeaderIcon";

const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const copyrightRef = useRef(null);

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

  return (
    <div>
      <Navbar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        resumeRef={resumeRef}
      />
      <div className="w-full  flex flex-col justify-center mx-auto max-w-3xl lg:max-w-5xl px-16 overflow-none pb-20">
        <div className="flex flex-col items-center -mt-10 h-screen justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="text-emerald-500 text-center text-4xl sm:text-7xl font-bold font-montserrat">
              BRANDON KENTER
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="flex items-center mt-3">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  className="mx-3 text-xl sm:text-2xl cursor-pointer text-emerald-300 transition ease-in-out duration-200 hover:text-emerald-100"
                  href="https://github.com/BrandonKenter"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  className="mx-3 text-xl sm:text-2xl cursor-pointer text-emerald-300 transition ease-in-out duration-200 hover:text-emerald-100"
                  href="https://twitter.com/brakenter"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  className="mx-3 text-xl sm:text-2xl cursor-pointer text-emerald-300 transition ease-in-out duration-200 hover:text-emerald-100"
                  href="https://www.linkedin.com/in/brandonkenter/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* about me */}
        <div ref={aboutRef} className="scroll-m-36 pb-56 h-full relative">
          <Line currentScope={aboutRef} nextScope={projectsRef} />
          <HeaderIcon icon={faInfo} />

          {/* header */}
          <div>
            <div className="flex items-end">
              <Header headerText={"about"} />
            </div>
          </div>
          <AboutText />
        </div>

        {/* projects */}
        <div
          ref={projectsRef}
          className="pb-56 h-full relative font-montserrat scroll-m-36 "
        >
          <Line currentScope={projectsRef} nextScope={contactRef} />

          <HeaderIcon icon={faHammer} />

          {/* header */}
          <div>
            <div className="flex items-end">
              <Header headerText={"projects"} />
            </div>
          </div>
          <Projects />
        </div>

        {/* contact */}
        <div
          ref={contactRef}
          className="pb-56 h-full relative font-montserrat scroll-m-36 "
        >
          <Line currentScope={contactRef} nextScope={resumeRef} />
          <HeaderIcon icon={faEnvelope} />

          {/* header */}
          <div>
            <div className="flex items-end">
              <Header headerText={"contact"} />
            </div>
          </div>

          <div className="w-full flex flex-col items-start justify-start text-start">
            <div className="text-2xl sm:text-4xl text-emerald-500 font-bold max-w-xl mb-4 mt-2">
              Reach out to me
            </div>
            <div className="flex flex-col items-start sm:items-center mb-6 text-sm sm:flex-row sm:text-base">
              <div className="w-full sm:mr-20 text-slate-400 text-start text-sm sm:text-base">
                I am open to new opportunities, so if you think I might be a
                good fit and would like to get in touch with me, send me an
                email!
              </div>
              <a
                href="mailto:brandonkenter@outlook.com"
                className="whitespace-nowrap text-neutral-950 flex items-center justify-center font-bold hover:bg-emerald-400 transition duration-200 bg-emerald-500 px-2 py-1 rounded-md"
              >
                Send Email
              </a>
            </div>

            <div className="flex flex-col items-start sm:items-center mb-6 text-sm sm:flex-row sm:text-base">
              <div className="w-full text-slate-400 sm:mr-20 text-start text-sm sm:text-base">
                Alternatively, if you're not feeling email, feel free to reach
                out to me on any of the following social media platforms:
              </div>
              <div className="flex w-40 items-center sm:justify-end">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    className="mr-3 text-sm sm:text-lg cursor-pointer text-emerald-300 transition ease-in-out duration-200 hover:text-emerald-100"
                    href="https://twitter.com/brakenter"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    className="ml-3 text-sm sm:text-lg cursor-pointer text-emerald-300 transition ease-in-out duration-200 hover:text-emerald-100"
                    href="https://www.linkedin.com/in/brandonkenter/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* resume */}
        <div
          ref={resumeRef}
          className="pb-56 h-full relative font-montserrat scroll-m-36 "
        >
          <Line currentScope={resumeRef} nextScope={copyrightRef} />
          <HeaderIcon icon={faFile} />

          {/* header */}
          <div>
            <div className="flex items-end">
              <Header headerText={"resume"} />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start text-start">
            <div className="text-2xl sm:text-4xl text-emerald-500 font-bold max-w-xl mb-4 mt-2">
              Download my resume
            </div>
            <div className="flex flex-col items-start sm:items-center mb-6 text-sm sm:flex-row sm:text-base">
              <div className="w-full text-slate-400 sm:mr-20 text-start text-sm sm:text-base">
                To see a further breakdown of the projects I have worked on, my
                technical skills and other information about me, download my
                resume.
              </div>
              <a
                href="https://docs.google.com/document/d/1523QEvLVhLoSIRVMQPBWJjlGzrIcFleZtb0FYyp2SEA/export?format=pdf"
                className="whitespace-nowrap text-neutral-950 flex items-center justify-center font-bold hover:bg-emerald-400 transition duration-200 bg-emerald-500 px-2 py-1 rounded-md"
              >
                Download
              </a>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div
          ref={copyrightRef}
          className="pb-56 h-full relative font-montserrat scroll-m-36 "
        >
          <div>
            <HeaderIcon icon={faCopyright} />
            <div className="text-emerald-500 font-semibold h-[36px] flex items-center">
              Designed & built by Brandon Kenter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
