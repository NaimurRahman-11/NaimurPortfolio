import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = ({contactRef}) => {
    return (
        <div ref={contactRef} className="container mx-auto px-4 min-h-screen py-20 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="max-w-md mx-auto rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Enter your message"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="max-w-md mx-auto rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
                    <p>Email: nirzon.naim@gmail.com</p>
                    <p>Phone: +8801724-595168</p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Social Links:</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-blue-500 hover:text-blue-600"><FaFacebook className="text-2xl mr-3" /></a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-500 hover:text-blue-600"><FaTwitter className="text-2xl mr-3" /></a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-500 hover:text-blue-600"><FaInstagram className="text-2xl mr-3" /></a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-500 hover:text-blue-600"><FaGithub className="text-2xl mr-3" /></a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-500 hover:text-blue-600"><FaLinkedin className="text-2xl mr-3" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;