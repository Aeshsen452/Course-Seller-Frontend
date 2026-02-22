import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex justify-center py-4">
        <img
          src={logo} 
          alt="KiteHawk Logo"
          className="h-12"
        />
      </div>

      <nav className="border-t border-b border-black">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-6 py-4 textColor text-sm">
          <li>
            <Link to="/" className="transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="transition">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/about" className="transition">
              About Us
            </Link>
          </li>
        </ul>
      </nav>


      <div className="text-center textColor text-sm py-4">
        © {new Date().getFullYear()} KiteHawk. All Rights Reserved
      </div>
    </footer>
  );
}
