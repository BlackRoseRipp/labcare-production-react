import { Fragment, useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { Collapse, initTE } from "tw-elements";
import useWindowSize from "../hooks/useWindowSize";
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

  useEffect(() => {
    initTE({ Collapse });
  }, []);

  return (
    <Fragment>
      <div className="bg-blue-primary w-full h-[47px]"></div>
      <nav
        className={classNames(
          pages.some(
            (page) => page.path === pathname || page.path + "/" === pathname
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
            {expanded ? <BsXLg /> : <GiHamburgerMenu />}
          </button>
          <ul
            className={classNames(
              size.width < 1024 ? "hidden" : "flex",
              "flex-row justify-center items-center grow rounded-lg ml-4"
            )}
          >
            <li>
              <NavButton to="#about" primary="About Us" />
            </li>
            <li>
              <NavButton to="#technology" primary="Technology" />
            </li>
            <li>
              <NavButton to="#benefits" primary="Benefits" />
            </li>
            <li>
              <NavButton to="#contact-us" primary="Contact" />
            </li>
          </ul>
          {/* <a
            href="/covid"
            className="btn-primary text-blue-primary border-blue-primary border lg:flex hidden items-center font-semibold"
          >
            Covid-19 Testing <FaArrowRight className="ml-2 text-lg" />
          </a> */}
        </div>
        <div
          className={classNames(
            expanded ? "max-h-[230px]" : "max-h-0",
            "block top-0 w-full transition-all duration-700 rounded-none md:rounded-2xl overflow-x-hidden overflow-y-auto lg:hidden z-[99999]"
          )}
          id="navbar"
        >
          {size.width < 1024 ? (
            <div className="flex flex-col bg-white">
              <NavButton to="/" primary="Home" />
              <NavButton to="#about" primary="About Us" />
              <NavButton to="#technology" primary="Technology" />
              <NavButton to="#benefits" primary="Benefits" />
              <NavButton to="#contact-us" primary="Contact" />
            </div>
          ) : null}
        </div>
      </nav>

      {routes()}
    </Fragment>
  );
};

export default Navbar;
