import { useLocation } from "react-router-dom";
import { pages } from "./routes";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return pages.some((page) => page.path === pathname) ? (
    <footer className="py-8 mt-auto bg-green">
      <div className="mx-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="flex md:flex-row flex-col items-center lg:justify-start justify-center gap-4 lg:order-1 order-2">
            <a href="/plans" className="text-white hover:text-amber">
              Our Preset Plans
            </a>
            <a href="#" className="text-white hover:text-amber">
              Book a Reservation
            </a>
            <a href="/contact" className="text-white hover:text-amber">
              Contact
            </a>
          </div>
          <div className="flex items-center justify-center w-fit mx-auto justify-self-center lg:order-2 order-1">
            <h2 className="logo text-white xl:text-6xl md:text-5xl text-3xl font-bold">
              Shalvah
            </h2>
          </div>
          <div className="flex flex-col lg:items-end items-center justify-center order-3">
            <a href="#" className="text-white hover:text-amber">
              (123) 456-7890
            </a>
            <a href="#" className="text-white hover:text-amber">
              help@happymothers.com
            </a>
            <a href="#" className="text-white hover:text-amber">
              Our Location
            </a>
          </div>
        </div>
      </div>
    </footer>
  ) : null;
};

export default Footer;
