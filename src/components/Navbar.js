import { Fragment, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaArrowRight, FaPhoneSquareAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import newsList from "../store/ARTICLES.json";
import careerListing from "../store/CAREER_LISTINGS.json";
import NavButton from "./NavButton";
import { pages, routes } from "./routes";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const size = useWindowSize();
  const location = useLocation();
  const pathname = location.pathname;

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Fragment>
      <nav
        className={classNames(
          pages.some(
            (page) =>
              page.path === pathname ||
              page.path + "/" === pathname ||
              (pathname.startsWith("/careers/") &&
                careerListing.some(
                  (listing) => listing.id === pathname.slice(9)
                )) ||
              (newsList.some((article) => article.id === pathname.slice(6)) &&
                pathname.startsWith("/news/"))
          )
            ? ""
            : "hidden",
          "bg-blue-primary w-full py-1 px-2 flex flex-col justify-center items-center z-50"
        )}
      >
        {size.width < 1024 ? (
          <a
            href="/covid-mobile-testing"
            className="btn-primary text-white border-white border flex items-center font-semibold"
          >
            Covid-19 Testing <FaArrowRight className="ml-2 text-lg" />
          </a>
        ) : (
          <div className="max-w-6xl mx-auto flex justify-between items-center w-full">
            <div className="flex items-center gap-6">
              {/* <a
                href="tel:(888)LABQ-247"
                className="text-white hover:text-blue-500 flex items-center text-xs"
              >
                <FaPhoneSquareAlt className="text-xl pr-2" />
                (888) LABQ-247
              </a> */}
              <div className="flex items-center">
                <AiOutlineClockCircle className="text-white text-2xl pr-2" />
                <p className="text-white text-xs">24/7</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <a className="border-transparent text-white hover:border-sky-400 text-xs peer group bg-transparent py-2 px-5 transition-all flex items-center font-medium border-b-[3px]">
                  Portal Login
                  <span className="ml-2">
                    <MdKeyboardArrowDown className="group-hover:rotate-180 transition-all text-xl" />
                  </span>
                </a>
                <div
                  className={
                    "block peer-hover:max-h-[380px] hover:max-h-[380px] mt-px max-h-0 w-max min-w-full bg-white drop-shadow-lg absolute rounded-b-lg z-[999] transition-all duration-300 ease-linear overflow-hidden"
                  }
                >
                  <div className="flex flex-col">
                    <a
                      className="text-gray-700 hover:text-blue-primary hover:bg-[#F4F9FF] p-2 transition-all font-medium py-3 px-6"
                      aria-current="page"
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PATIENT PORTAL
                    </a>
                    <a
                      className="text-gray-700 hover:text-blue-primary hover:bg-[#F4F9FF] p-2 transition-all font-medium py-3 px-6"
                      aria-current="page"
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOCTOR'S PORTAL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <nav
        className={classNames(
          pages.some(
            (page) =>
              page.path === pathname ||
              page.path + "/" === pathname ||
              (pathname.startsWith("/careers/") &&
                careerListing.some(
                  (listing) => listing.id === pathname.slice(9)
                )) ||
              (newsList.some((article) => article.id === pathname.slice(6)) &&
                pathname.startsWith("/news/"))
          )
            ? ""
            : "hidden",
          "bg-white w-full py-4 px-2 flex flex-col justify-center items-center z-40 shadow-md"
        )}
      >
        <div className="max-w-7xl flex justify-between items-center mx-auto w-full">
          <a href="/" className="w-48">
            <img src="/img/LabCare-Logo.png" className="w-full" alt="Logo" />
          </a>
          <button
            data-toggle="navbar"
            onClick={() => setExpanded(!expanded)}
            type="button"
            className="text-green lg:hidden md:text-3xl text-xl"
            aria-controls="navbar"
            aria-expanded="false"
          >
            <GiHamburgerMenu />
          </button>
          <ul
            className={classNames(
              size.width < 1024 ? "hidden" : "",
              "flex flex-row justify-center items-center grow rounded-lg ml-4"
            )}
          >
            <li>
              <NavButton
                to="#"
                primary="Patient"
                dropdownLinks={[
                  {
                    primary: "Patient Portal",
                    to: "/",
                  },
                  {
                    primary: "Lab Locations",
                    to: "/location",
                  },
                  {
                    primary: "Covid Testing",
                    to: "/covid-mobile-testing",
                  },
                  /* {
                    primary: "Tests",
                    to: "/tests",
                  }, */
                  {
                    primary: "Appointment",
                    to: "/appointment",
                  },
                  {
                    primary: "Insurance",
                    to: "/insurance",
                  },
                  {
                    primary: "Billing",
                    to: "/billing",
                  },
                  {
                    primary: "Pay Your Bill",
                    to: "/billing",
                  },
                ]}
              />
            </li>
            <li>
              <NavButton
                to="#"
                primary="Physicians"
                dropdownLinks={[
                  {
                    primary: "Forms",
                    to: "/forms",
                  },
                  {
                    primary: "Insurance",
                    to: "/insurance",
                  },
                  {
                    primary: "Supplies",
                    to: "/supplies",
                  } /* 
                  {
                    primary: "Tests",
                    to: "/tests",
                  }, */,
                  {
                    primary: "Physicians's Portal",
                    to: "/",
                  },
                ]}
              />
            </li>
            <li>
              <NavButton to="/services" primary="Services" />
            </li>
            <li>
              <NavButton
                to="#"
                primary="About"
                dropdownLinks={[
                  {
                    primary: "About Us",
                    to: "/about",
                  },
                  {
                    primary: "Accredition & Licensing",
                    to: "/accredition-licensing",
                  },
                  {
                    primary: "News",
                    to: "/news",
                  },
                ]}
              />
            </li>
            <li>
              <NavButton to="/careers" primary="Careers" />
            </li>
            <li>
              <NavButton to="/contact-us" primary="Contact" />
            </li>
          </ul>
          <a
            href="/covid"
            className="btn-primary text-blue-primary border-blue-primary border lg:flex hidden items-center font-semibold"
          >
            Covid-19 Testing <FaArrowRight className="ml-2 text-lg" />
          </a>
        </div>
        <div
          className={classNames(
            expanded ? "max-h-[180px]" : "max-h-0",
            "block lg:max-h-full w-full lg:w-auto transition-all duration-700 rounded-none md:rounded-2xl md:container overflow-hidden lg:hidden"
          )}
          id="navbar"
        >
          {size.width < 1024 ? (
            <div className="flex flex-col bg-white">
              <NavButton to="/" primary="Home" />
              <NavButton to="/services" primary="What We Offer" />
              <NavButton to="/plans" primary="Plans" />
              <NavButton to="/contact" primary="Contact Us" />
            </div>
          ) : null}
        </div>
      </nav>

      {routes()}
    </Fragment>
  );
};

export default Navbar;
