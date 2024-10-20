import { useEffect, useState } from "react";
import logo from "../../assets/images/Navbar/logo.svg";
import Styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const [isScrolled, setIsScrolled] = useState(false);
  let navigate = useNavigate() 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrollPosition > viewportHeight * 0.8) {
        setIsScrolled(true); // More than 80% of the viewport height
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <nav className={`fixed w-full mt-5`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 xl:w-[75%]">
          <div className="flex md:justify-between items-center gap-8">
            <a
              href=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Flowbite Logo" />
            </a>

            <div className="hidden w-full xl:block md:w-auto">
              <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <a
                    href="#"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
                  >
                    Become a renter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
                  >
                    Rental deals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
                  >
                    How it work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
                  >
                    Why choose us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:flex gap-5 items-center hidden">
            <button className={`${Styles.mainstyle}`}>Sign in</button>
            <button
              className={`${Styles.mainstyle} bg-[--main-color] px-5 p-2 rounded-[8px] text-white`}
              style={{ color: "white !important" }}
            >
              Sign up
            </button>
          </div>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-[95%] mx-auto bg-blue-300 z-40 rounded-lg lg:hidden text-white`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4  rounded-lg">
            <li>
              <a
                href="#"
                className={`block my-5 text-white lg:text-[--text-color] py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
              >
                Become a renter
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block my-5 text-white lg:text-[--text-color] py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
              >
                Rental deals
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block my-5 text-white lg:text-[--text-color] py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
              >
                How it work
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block my-5 text-white lg:text-[--text-color] py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
              >
                Why choose us
              </a>
            </li>
            <li>
              <div className="flex gap-5 items-center ">
                <button
                  className={`${Styles.mainstyle} bg-[--main-color] px-5 p-2 rounded-[8px] text-white`}
                >
                  Sign in
                </button>
                <button
                  className={`${Styles.mainstyle} bg-[--main-color] px-5 p-2 rounded-[8px] text-white`}
                  style={{ color: "white !important" }}
                >
                  Sign up
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav> */}

<nav
      className={`fixed w-full mt-5 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 xl:w-[75%]">
        <div className="flex md:justify-between items-center gap-8">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </a>

          <div className="hidden w-full xl:block md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
                >
                  Become a renter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
                >
                  Rental deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
                >
                  Why choose us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="xl:flex gap-5 justify-start items-center hidden  w-[200px]">
          {/* <button onClick={()=>{navigate("/")}} className={`${Styles.mainstyle}`}>Sign Out</button> */}
         
          
          <button
          onClick={()=>{navigate("/")}}
            className={`${Styles.mainstyle} bg-[--main-color] px-5 p-2 rounded-[8px] text-white`}
          >
            Sign Out
          </button>
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} w-[95%] mx-auto bg-blue-300 z-40 rounded-lg lg:hidden text-white`}>
        <ul className="flex flex-col p-4 rounded-lg">
          <li>
            <a
              href="#"
              className={`block my-5 text-white lg:text-[--text-color] py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
            >
              Become a renter
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`block my-5 text-white lg:text-[--text-color] py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
            >
              Rental deals
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`block my-5 text-white lg:text-[--text-color] py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`block my-5 text-white lg:text-[--text-color] py-2 px-3 rounded md:bg-transparent md:p-0 ${Styles.mainstyle}`}
            >
              Why choose us
            </a>
          </li>
          <li>
            <div className="flex gap-5 items-center">
             
              <button onClick={()=>{navigate("/")}} className={`${Styles.mainstyle} bg-[--main-color] px-5 p-2 rounded-[8px] text-white`}>
                Sign Out
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}
