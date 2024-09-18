import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SearchComponent from "./searchcomponenet";

type HeaderProps = {
  showGetStarted?: boolean; // Optional prop to control button rendering
};

const Header: React.FC<HeaderProps> = ({ showGetStarted = true }) => {
  return (
    <header className="py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="h-12 w-auto" alt="Logo" />
            <span className="text-3xl text-gray-900 font-bold tracking-tight">
              KYR
            </span>
          </Link>
        </div>
        <SearchComponent />
        {showGetStarted && (
          <div className="flex items-center space-x-4">
            <Link
              to="/get-started"
              className="px-6 py-3 bg-[#d42755] text-xl text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
            >
              Get Started
            </Link>
          </div>
        )}
        {!showGetStarted && ( <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="px-6 py-3 bg-[#d42755] text-xl text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
        >
          Home
        </Link>
      </div>
        )}
      </div>
    </header>
  );
};

export default Header;
