import { FaMicrochip } from "react-icons/fa6";
import { Link } from "wouter";
import { useLocation } from "wouter";

const Navbar = () => {
  const [location] = useLocation();
  return (
    <nav className="navbar max-w-[1400px] bg-white text-dark flex p-4  flex-col items-center w-full justify-between border-b-2">
      <div className="h-[60px] flex items-center w-full justify-between">
        {/* logo, goes to far left */}
        <Link href="/" className="flex items-center">
          <div>
            <FaMicrochip className="text-primary text-4xl mr-2" />
          </div>
          <header className="text-base font-semibold lg:text-xl">
            Total Project Management, LLC.
          </header>
        </Link>
        <div className={`flex items-center text-xl`}>
          <Link
            href="/projects"
            className={`mr-4 ${
              location.includes("projects") ? "border-b-2 border-primary" : null
            }`}
          >
            Projects
          </Link>
          <Link
            href="/testimonials"
            className={`mr-4 ${
              location.includes("test") ? "border-b-2 border-primary" : null
            }`}
          >
            Testimonials
          </Link>
          <Link
            href="/certifications"
            className={`mr-4 ${
              location.includes("cert") ? "border-b-2 border-primary" : null
            }`}
          >
            Certifications
          </Link>
          <Link
            href="/contact"
            className={`mr-4 ${
              location.includes("contact") ? "border-b-2 border-primary" : null
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex text-lg items-center justify-center underline hover:text-red-500">
        <a href="https://tpmeic.com/about-us" target="_blank">
          Do you have excess inventory at your business? Click here!
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
