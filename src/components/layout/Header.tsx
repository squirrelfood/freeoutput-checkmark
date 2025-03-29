
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center">
          <span className="text-success">Free</span>
          <span>Output</span>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-primary">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
