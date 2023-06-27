import reactLogo from "../../assets/react.png"
import firebaseLogo from "../../assets/firebase.png"
import bootstrapLogo from "../../assets/bootstrap.png"
import gitLogo from "../../assets/git.png"
import javascriptLogo from "../../assets/javascript.png"
import JWTLogo from "../../assets/JWT.png"
import mongodbLogo from "../../assets/mongodb.png"
import netlifyLogo from "../../assets/netlify.png"
import nodeLogo from "../../assets/node.png"
import figmaLogo from "../../assets/figma.png"
import wordpressLogo from "../../assets/wordpress.png"
import seoLogo from "../../assets/seo.png"


const Skills = ({ skillsRef }) => {
    return (
        <div ref={skillsRef} className="min-h-screen py-20 mt-5">
            <h1 className="text-4xl font-bold text-center mb-10 mt-10">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={reactLogo} alt="React" />
                    <span className="text-center mt-2">React</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={firebaseLogo} alt="Firebase" />
                    <span className="text-center mt-2">Firebase</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={bootstrapLogo} alt="Bootstrap" />
                    <span className="text-center mt-2">Bootstrap</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={gitLogo} alt="Git" />
                    <span className="text-center mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={javascriptLogo} alt="JavaScript" />
                    <span className="text-center mt-2">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={JWTLogo} alt="JWT" />
                    <span className="text-center mt-2">JWT</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={mongodbLogo} alt="MongoDB" />
                    <span className="text-center mt-2">MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={netlifyLogo} alt="MongoDB" />
                    <span className="text-center mt-2">Netlify</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={nodeLogo} alt="MongoDB" />
                    <span className="text-center mt-2">Node JS</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={figmaLogo} alt="MongoDB" />
                    <span className="text-center mt-2">Figma</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={wordpressLogo} alt="MongoDB" />
                    <span className="text-center mt-2">WordPress</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={seoLogo} alt="MongoDB" />
                    <span className="text-center mt-2">SEO</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;