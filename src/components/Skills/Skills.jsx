import reactLogo from "../../assets/react.png";
import firebaseLogo from "../../assets/firebase.png";
import bootstrapLogo from "../../assets/bootstrap.png";
import gitLogo from "../../assets/git.png";
import javascriptLogo from "../../assets/javascript.png";
import JWTLogo from "../../assets/JWT.png";
import mongodbLogo from "../../assets/mongodb.png";
import netlifyLogo from "../../assets/netlify.png";
import nodeLogo from "../../assets/node.png";
import figmaLogo from "../../assets/figma.png";
import wordpressLogo from "../../assets/wordpress.png";
import seoLogo from "../../assets/seo.png";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Skills = ({ skillsRef }) => {
  const logoVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
    },
  };

  return (
    <div ref={skillsRef} className="min-h-screen py-20 mt-5">
      <h1 className="text-3xl font-bold text-center mb-10 mt-10">Skills</h1>
      <Fade>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={reactLogo}
                alt="React"
              />
              <span className="text-center mt-2">React</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={firebaseLogo}
                alt="Firebase"
              />
              <span className="text-center mt-2">Firebase</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={bootstrapLogo}
                alt="Bootstrap"
              />
              <span className="text-center mt-2">Bootstrap</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={gitLogo}
                alt="Git"
              />
              <span className="text-center mt-2">Git</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={javascriptLogo}
                alt="JavaScript"
              />
              <span className="text-center mt-2">JavaScript</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={JWTLogo}
                alt="JWT"
              />
              <span className="text-center mt-2">JWT</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={mongodbLogo}
                alt="MongoDB"
              />
              <span className="text-center mt-2">MongoDB</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={netlifyLogo}
                alt="Netlify"
              />
              <span className="text-center mt-2">Netlify</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={nodeLogo}
                alt="Node.js"
              />
              <span className="text-center mt-2">Node.js</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={figmaLogo}
                alt="Figma"
              />
              <span className="text-center mt-2">Figma</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={wordpressLogo}
                alt="WordPress"
              />
              <span className="text-center mt-2">WordPress</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover="hover"
              variants={logoVariants}
            >
              <motion.img
                className="w-16 h-16 md:w-24 md:h-24"
                src={seoLogo}
                alt="SEO"
              />
              <span className="text-center mt-2">SEO</span>
            </motion.div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
