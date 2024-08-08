import India from '../assets/India.jpg';
import logo3 from '../assets/logo3.png';

const Hero = () => {
  return (
    <div className="relative shadow-md rounded-lg p-8 mb-12">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${India})` }}
      ></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center md:pl-20">
        <div className="flex items-center text-white">
          <h1 className="text-4xl font-bold mr-2">Welcome to</h1>
        </div>
        <div className="flex justify-center items-center mx-4">
          <img src={logo3} alt="Logo" className="w-auto h-24" />
        </div>
        <div className="flex items-center text-white">
          <h1 className="text-4xl font-bold ml-2">Know Your Rights</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
