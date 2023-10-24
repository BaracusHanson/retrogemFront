import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="max-w-full mx-auto bg-indigo-100/50">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div className="mr-4">
              <Link
                to="/"
                className="flex items-center py-3 px-2 text-gray-700"
              >
                <img src={logo} alt="brand" className="w-36 h-20 mr-2" />
                {/* <span>retrogem</span> */}
              </Link>
            </div>
            {/* primary nav */}
            <div className="hidden  md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-5 px-3 hover:text-indigo-400 font-semibold transition duration-300"
              >
                a propos
              </Link>
              <Link
                to="/"
                className="py-5 px-3 hover:text-indigo-400 font-semibold transition duration-300"
              >
                marketplace
              </Link>
              <Link
                to="/"
                className="py-5 px-3 hover:text-indigo-400 font-semibold transition duration-300"
              >
                actualités
              </Link>
              <Link
                to="/"
                className="py-5 px-3 hover:text-indigo-400 font-semibold transition duration-300"
              >
                grading
              </Link>
            </div>
          </div>

          {/* secondary nav */}
          <div className=" hidden  md:flex items-center space-x-1 mr-2">
            <Link to="/" className="py-5 px-3 font-semibold">
              Login
            </Link>
            <Link
              to="/"
              className="py-2 px-3 bg-purple-500 hover:bg-purple-600 text-slate-100 rounded font-semibold  hover:text-slate-50 transition duration-300"
            >
              Sign-up
            </Link>
          </div>
          {/*  mobile button*/}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* menu mobile */}

        <div className={open ? "block w-full h-screen" : "hidden"}>
          <Link
            onClick={() => setOpen(!open)}
            to="/"
            className=" block py-2 px-4 hover:text-white text-sm hover:bg-indigo-300 "
          >
            a propos
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            to="/"
            className=" block py-2 px-4 hover:text-white text-sm hover:bg-indigo-300 "
          >
            marketplace
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            to="/"
            className=" block py-2 px-4 hover:text-white text-sm hover:bg-indigo-300 "
          >
            actualités
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            to="/"
            className=" block py-2 px-4 hover:text-white text-sm hover:bg-indigo-300 transition duration-300"
          >
            grading
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
