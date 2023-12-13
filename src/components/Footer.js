import { Fragment } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { pages } from "./routes";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return pages.some(
    (page) => page.path === pathname || page.path + "/" === pathname
  ) ? (
    <Fragment>
      <footer className="py-12 mt-auto bg-light-blue">
        <div className="max-w-screen-xl lg:mx-auto mx-8">
          <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-4">
            <a href="/" className="w-[300px]">
              <img
                src="/img/LabCare-Logo.png"
                className="w-full bg-transparent rounded p-4"
              />
            </a>
            <div className="flex items-center gap-x-2">
              <a
                className="px-2 text-blue-primary hover:text-blue-secondary"
                href="https://www.instagram.com/labqdx/"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                className="px-2 text-blue-primary hover:text-blue-secondary"
                href="https://www.linkedin.com/company/skybro/"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                className="px-2 text-blue-primary hover:text-blue-secondary"
                href="https://www.facebook.com/labqdiagnostics"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                className="px-2 text-blue-primary hover:text-blue-secondary"
                href="https://twitter.com/LabQ247"
              >
                <FaXTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-blue-primary py-4">
        <div className="max-w-screen-xl lg:mx-auto mx-8 flex lg:flex-row flex-col items-center justify-center">
          <p className="text-white font-medium mx-4 lg:pb-0 pb-2">
            &copy; LabCare Diagnostics. All Right Reserved{" "}
            {new Date().getFullYear()}.
          </p>
          <a
            href="/privacy-policy"
            className="lg:border-l border-t lg:border-t-0 border-neutral-300 px-4 lg:py-0 py-2 text-white font-medium lg:w-fit w-full"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-and-conditions"
            className="lg:border-l border-t lg:border-t-0 border-neutral-300 px-4 lg:py-0 py-2 text-white font-medium lg:w-fit w-full"
          >
            Terms & Conditions
          </a>
          <a
            href="/accessibility-statement"
            className="lg:border-l border-t lg:border-t-0 border-neutral-300 px-4 lg:py-0 py-2 text-white font-medium lg:w-fit w-full"
          >
            Accessibility Statement
          </a>
        </div>
      </footer>
    </Fragment>
  ) : null;
};

export default Footer;
