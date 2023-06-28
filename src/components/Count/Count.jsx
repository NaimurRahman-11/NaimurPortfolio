import CountUp from 'react-countup';
import { FaCheckCircle, FaSmile, FaUser } from 'react-icons/fa';

const Count = () => {
  return (
    <div className="">
      <section className="py-2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-5xl text-green-500 mb-7" />
              <div className="flex items-center">
                <CountUp end={15} duration={2} className="text-5xl" />
                <span className="text-3xl ml-1">+</span>
              </div>
              <p className="text-lg font-semibold mt-2">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <FaSmile className="text-5xl text-yellow-500 mb-7" />
              <div className="flex items-center">
                <CountUp end={25} duration={2} className="text-5xl" />
                <span className="text-3xl ml-1">+</span>
              </div>
              <p className="text-lg font-semibold mt-2">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUser className="text-5xl text-blue-500 mb-7" />
              <div className="flex items-center">
                <CountUp end={150} duration={2} className="text-5xl" />
                <span className="text-3xl ml-1">+</span>
              </div>
              <p className="text-lg font-semibold mt-2">Satisfied Users</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Count;
