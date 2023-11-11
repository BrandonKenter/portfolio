import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({
  projectTitle,
  technologies,
  projectDescription,
  imagePath,
  website,
  github,
}) => {
  return (
    <div className="flex items-center mb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        <div>
          {/* header */}
          <div className="flex items-center">
            <div className="mr-3 text-emerald-500 text-lg sm:text-2xl font-extrabold">
              {projectTitle}
            </div>
            {github ? (
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href={github} target="_blank">
                  <FontAwesomeIcon
                    className="cursor-pointer mr-2 hover:text-emerald-200 text-emerald-300 text-sm sm:text-lg"
                    icon={faGithub}
                  />
                </a>
              </motion.div>
            ) : null}
            {website ? (
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href={website} target="_blank">
                  <FontAwesomeIcon
                    className="cursor-pointer hover:text-emerald-200 text-emerald-300 text-sm sm:text-lg"
                    icon={faLink}
                  />
                </a>
              </motion.div>
            ) : null}
          </div>
          <div className="flex flex-wrap text-xs sm:text-sm">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-emerald-400 mr-1.5 mb-1.5 flex items-center justify-center bg-emerald-500 bg-opacity-50 px-2 py-1 rounded-xl font-semibold"
              >
                {tech}
              </div>
            ))}
          </div>
          {/* description */}
          <div className="text-slate-400 text-start text-sm sm:text-base">
            {projectDescription}
          </div>
        </div>
        <a
          href={website ? website : github}
          target="_blank"
          className="border-2 rounded-xl border-emerald-300 border-opacity-30 hover:border-opacity-100 hover:border-emerald-500 transition duration-200 relative h-28 w-44 min-w-[176px] mt-2 sm:mt-0 sm:ml-10 group cursor-pointer overflow-hidden shadow-black shadow-xl"
        >
          <div className="w-full h-full min-w-[176px] absolute z-50 opacity-10 bg-emerald-500 rounded-lg"></div>
          <img
            className=" grayscale rounded-lg h-28 w-44 min-w-[176px] object-cover transform scale-100 group-hover:scale-105 transition-transform duration-200"
            src={imagePath}
          />
          <div className="absolute top-0 w-44 min-w-[176px] h-28 bg-emerald-500 rounded-lg opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
          <FontAwesomeIcon
            className="w-5 h-5 bg-neutral-900 p-3 rounded-lg text-emerald-500 absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto group-hover:opacity-100 opacity-0 duration-300"
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
