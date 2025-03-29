
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold">
              <span className="text-success">Free</span>
              <span>Output</span>
            </Link>
            <p className="text-gray-600 mt-2">
              Know your AI copyright status
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} FreeOutput. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
