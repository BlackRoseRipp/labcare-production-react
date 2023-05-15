import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";
import NavButton from "./NavButton";
import { pages, routes } from "./routes";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollPosition = useScrollPosition();
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
          scrollPosition > 0
            ? "shadow-[0_2px_12px_0_rgba(0,0,0,0.15)]"
            : "shadow-none",
          pages.some((page) => page.path === pathname) ? "" : "hidden",
          "bg-white fixed w-full py-4 px-2 top-0 flex flex-col justify-center items-center transition-all z-50"
        )}
      >
        <div className="md:container flex flex-wrap justify-between items-center md:mx-auto w-full">
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
          <div className="flex">
            <h1 className="logo text-green xl:text-6xl md:text-5xl text-3xl font-bold">
              The Shalvah
            </h1>
            <ul
              className={classNames(
                size.width < 1024 ? "hidden" : "",
                "flex flex-row justify-evenly items-center grow rounded-lg ml-4"
              )}
            >
              <li>
                <NavButton to="/" primary="Home" />
              </li>
              <li>
                <NavButton to="/plans" primary="Plans" />
              </li>
              <li>
                <NavButton to="/contact" primary="Contact" />
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="btn-primary text-white bg-green hover:bg-amber md:text-xl"
          >
            Reserve
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
