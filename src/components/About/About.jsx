import ProfilePic from "../../assets/ProfilePic.jpg";
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={ProfilePic} className="w-64 h-auto rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-8" alt="Profile" />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center lg:text-left p-4 mt-5 mb-5">About Me</h1>
            <p className="py-6 px-4 lg:px-0">
              Hello there, I&apos;m Naimur Rahman, currently studying &apos;Software Engineering&apos; at Noakhali Science And Technology University. I am a passionate and skilled software engineer with expertise in a wide range of technologies. My primary focus lies in MERN stack web development, where I excel in creating highly interactive and user-friendly applications.
            </p>
            <p className="py-6 px-4 lg:px-0">
              Moreover, I possess expertise in Search Engine Optimization (SEO), allowing me to optimize web applications for increased visibility in search engine rankings. By employing best practices, such as keyword research, meta tag optimization, and content optimization, I can drive organic traffic to websites and improve their online presence.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start py-6 px-4 lg:px-0">
              <a href="" className="text-blue-500 hover:text-blue-600 mx-3 my-2"><FaTwitter className="text-2xl" /></a>
              <a href="" className="text-blue-500 hover:text-blue-600 mx-3 my-2"><FaLinkedin className="text-2xl" /></a>
              <a href="" className="text-blue-500 hover:text-blue-600 mx-3 my-2"><FaFacebook className="text-2xl" /></a>
              <a href="" className="text-blue-500 hover:text-blue-600 mx-3 my-2"> <FaGithub className="text-2xl" /></a>
              <a href="" className="text-blue-500 hover:text-blue-600 mx-3 my-2"><FaInstagram className="text-2xl" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
