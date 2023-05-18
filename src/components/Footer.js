import { Fragment } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { pages } from "./routes";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return pages.some((page) => page.path === pathname) ? (
    <Fragment>
      <footer className="py-12 mt-auto bg-blue-primary">
        <div className="max-w-screen-xl lg:mx-auto mx-8">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center gap-4">
              <a href="/" className="w-1/3">
                <img src="/img/LabQ-Logo-White.svg" className="w-full" />
              </a>
              <div className="flex items-center gap-x-2">
                <a
                  className="px-2 text-white hover:text-blue-secondary"
                  href="https://www.instagram.com/labqdx/"
                >
                  <FaInstagram />
                </a>
                <a
                  className="px-2 text-white hover:text-blue-secondary"
                  href="https://www.linkedin.com/company/skybro/"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="px-2 text-white hover:text-blue-secondary"
                  href="https://www.facebook.com/labqdiagnostics"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="px-2 text-white hover:text-blue-secondary"
                  href="https://twitter.com/LabQ247"
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="flex items-center gap-x-8 mt-10">
                <a href="https://apps.apple.com/us/app/labq/id1610376669">
                  <img
                    className="w-[120px] h-10"
                    src="/img/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.labq&pli=1">
                  <img
                    className="w-[120px] h-10"
                    src="/img/icons/Asset-1.svg"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="heading text-blue-secondary text-3xl font-medium">
                Navigation
              </h3>
              <div className="flex gap-x-12 mt-10">
                <div className="flex flex-col gap-y-2">
                  <a
                    href="/"
                    className={classNames(
                      pathname === "/"
                        ? "text-blue-secondary"
                        : "text-white hover:text-blue-secondary"
                    )}
                  >
                    Home
                  </a>
                  <a
                    href="/location"
                    className={classNames(
                      pathname === "/location"
                        ? "text-blue-secondary"
                        : "text-white hover:text-blue-secondary"
                    )}
                  >
                    Locations
                  </a>
                  <a
                    href="/about"
                    className={classNames(
                      pathname === "/about"
                        ? "text-blue-secondary"
                        : "text-white hover:text-blue-secondary"
                    )}
                  >
                    About
                  </a>
                  <a
                    href="/news"
                    className={classNames(
                      pathname === "/news"
                        ? "text-blue-secondary"
                        : "text-white hover:text-blue-secondary"
                    )}
                  >
                    News
                  </a>
                </div>
                <div className="flex flex-col gap-y-2">
                  <a
                    href="/tests"
                    className={classNames(
                      pathname === "/tests"
                        ? "text-blue-secondary"
                        : "text-white hover:text-blue-secondary"
                    )}
                  >
                    Tests
                  </a>
                  <a
                    href="/careers"
                    className={classNames(
                      pathname === "/careers"
                        ? "text-blue-secondary"
                        : "text-white hover:text-blue-secondary"
                    )}
                  >
                    Careers
                  </a>
                  <a
                    href="/contact-us"
                    className={classNames(
                      pathname === "/contact-us"
                        ? "text-blue-secondary"
                        : "text-white hover:text-blue-secondary"
                    )}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="heading text-blue-secondary text-3xl font-medium mb-12">
                Subscribe to our Newsletter
              </h3>
              <input
                type="email"
                className="px-4 py-2 w-4/5"
                id="newsletterEmailInput"
                placeholder="Email"
              />
              <button className="bg-blue-secondary text-white mt-6 w-4/5 text-center font-bold px-4 py-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-white py-4">
        <div className="max-w-screen-xl lg:mx-auto mx-8 flex items-center justify-center">
          <p className="text-blue-primary font-medium mx-4">
            &copy; LabCare Diagnostics. All Right Reserved{" "}
            {new Date().getFullYear()}.
          </p>
          <a
            href="/privacy-policy"
            className="border-l border-neutral-300 px-4 text-blue-primary font-medium"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-and-conditions"
            className="border-l border-neutral-300 px-4 text-blue-primary font-medium"
          >
            Terms & Conditions
          </a>
          <a
            href="/accessibility-statement"
            className="border-l border-neutral-300 px-4 text-blue-primary font-medium"
          >
            Accessibility Statement
          </a>
        </div>
      </footer>
    </Fragment>
  ) : null;
};

export default Footer;
