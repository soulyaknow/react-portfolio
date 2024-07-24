import { Link } from "react-scroll";
function Navlinks() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 fixed top-0 left-0 w-full bg-black shadow-md z-50">
        <div className="flex-shrink-0">
          <Link
            to="section-1"
            aria-current="page"
            spy={true}
            smooth={true}
            offset={-100}
            duration={50}
          >
            <img
              src="/images/rlogo.png"
              alt="Logo"
              className="h-10 rounded bg-white cursor-pointer"
            />
          </Link>
        </div>
        <ul className="flex space-x-20">
          <li>
            <Link
              to="section-2"
              className="hover:text-gray-100 font-bold cursor-pointer"
              aria-current="page"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="section-3"
              className="hover:text-gray-100 font-bold cursor-pointer"
              aria-current="page"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="section-4"
              className="hover:text-gray-100 font-bold cursor-pointer"
              aria-current="page"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="section-5"
              className="hover:text-gray-100 font-bold cursor-pointer"
              aria-current="page"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              Contact
            </Link>
          </li>
        </ul>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </nav>
    </div>
  );
}

export default Navlinks;
