import { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const HowWeWork = () => {
  return (
    <Fragment>
      <div className="border-t border-[#3892e7] mb-12 w-full"></div>
      <section className="flex flex-col items-center gap-8 pb-12">
        <h2 className="heading text-4xl font-bold text-neutral-800">
          How We Work
        </h2>
        <div className="flex justify-center">
          <div className="w-min flex flex-col items-center px-2 group before:content-[''] before:w-14 before:border before:border-dotted before:border-neutral-300 before:block before:translate-x-[95px] before:translate-y-[75px]">
            <div className="mx-4 z-10 overflow-hidden rounded-full bg-[url(../public/img/news/woman-with-tablet.jpg)] bg-cover bg-center h-[150px] w-[150px]">
              <div className="w-full h-full flex items-center justify-center group-hover:bg-black/50 transition-all">
                <h5 className="text-neutral-500 group-hover:text-white group-hover:scale-150 font-semibold text-4xl w-fit transition-all">
                  1
                </h5>
              </div>
            </div>
            <h6 className="text-center w-fit text-neutral-800 font-semibold mt-4">
              Choose a location near you
            </h6>
          </div>
          <div className="w-min flex flex-col items-center px-2 group before:content-[''] before:w-14 before:border before:border-dotted before:border-neutral-300 before:block before:translate-x-[95px] before:translate-y-[75px]">
            <div className="mx-4 z-10 overflow-hidden rounded-full bg-[url(../public/img/news/VAN_Mockup.png)] bg-cover bg-center h-[150px] w-[150px]">
              <div className="w-full h-full flex items-center justify-center group-hover:bg-black/50 transition-all">
                <h5 className="text-neutral-500 group-hover:text-white group-hover:scale-150 font-semibold text-4xl w-fit transition-all">
                  2
                </h5>
              </div>
            </div>
            <h6 className="text-center w-fit text-neutral-800 font-semibold mt-4">
              Stop by a mobile lab location
            </h6>
          </div>
          <div className="w-min flex flex-col items-center px-2 group before:content-[''] before:w-14 before:border before:border-dotted before:border-neutral-300 before:block before:translate-x-[95px] before:translate-y-[75px]">
            <div className="mx-4 z-10 overflow-hidden rounded-full bg-[url(../public/img/news/nurse-holding-test-tube-LG43K9U.jpg)] bg-cover bg-center h-[150px] w-[150px]">
              <div className="w-full h-full flex items-center justify-center group-hover:bg-black/50 transition-all">
                <h5 className="text-neutral-500 group-hover:text-white group-hover:scale-150 font-semibold text-4xl w-fit transition-all">
                  3
                </h5>
              </div>
            </div>
            <h6 className="text-center w-fit text-neutral-800 font-semibold mt-4">
              Get tested
            </h6>
          </div>
          <div className="w-min flex flex-col items-center px-2 group">
            <div className="mx-4 z-10 overflow-hidden rounded-full bg-[url(../public/img/news/male-hand-holds-smartphone-displaying-on-app-negat-2022-11-11-06-33-19-utc-scaled.jpg)] bg-cover bg-center h-[150px] w-[150px]">
              <div className="w-full h-full flex items-center justify-center group-hover:bg-black/50 transition-all">
                <h5 className="text-neutral-500 group-hover:text-white group-hover:scale-150 font-semibold text-4xl w-fit transition-all">
                  4
                </h5>
              </div>
            </div>
            <h6 className="text-center w-fit text-neutral-800 font-semibold mt-4">
              Get results quickly
            </h6>
          </div>
        </div>
        <a
          href="/covid-mobile-testing"
          className="bg-blue-primary text-white py-6 uppercase w-full text-center text-xl font-medium flex items-center justify-center"
        >
          <AiOutlineSearch className="shrink-0 mr-4 w-7 h-auto" />
          Find a mobile patient service center near you
        </a>
      </section>
    </Fragment>
  );
};

export default HowWeWork;
