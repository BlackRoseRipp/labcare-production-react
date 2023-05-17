import { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { FaHandHoldingHeart, FaRegClock } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import LAB_SPECIALTIES from "../store/LAB_SPECIALTIES.json";

const Home = () => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const num = [1, 3, 4, 6, 9, 11];
  return (
    <Fragment>
      <section className="bg-[url(../public/img/landing22.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center py-5 max-w-screen-lg mx-auto">
          <h1 className="heading text-blue-primary font-semibold text-5xl text-center my-4">
            COVID-19 Mobile Testing Services
          </h1>
          <div className="bg-amber-300 p-3">
            <p className="text-lg font-medium text-center">
              ** Please note: Beginning May 10th, a prescription from your
              Doctor will be required for covid testing.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 max-w-[725px] mx-auto my-12">
            <div className="rounded-lg bg-white flex flex-col items-center justify-center w-full px-1 py-2">
              <img className="w-[100px]" src="/img/icons/Asset-4mdpi.png" />
              <h3 className="text-blue-secondary text-2xl text-center ">
                PCR Test
              </h3>
            </div>
            <div className="rounded-lg bg-white flex flex-col items-center justify-center w-full px-1 py-2">
              <img className="w-[100px]" src="/img/icons/Asset-5mdpi.png" />
              <h3 className="text-blue-secondary text-2xl text-center ">
                Antigen
              </h3>
            </div>
            <div className="rounded-lg bg-white flex flex-col items-center justify-center w-full px-1 py-2">
              <img className="w-[100px]" src="/img/icons/Asset-6mdpi.png" />
              <h3 className="text-blue-secondary text-2xl text-center ">
                Antibody
              </h3>
            </div>
            <div className="rounded-lg bg-white flex flex-col items-center justify-center w-full px-1 py-2">
              <img className="w-[100px]" src="/img/icons/flu-rsv.png" />
              <h3 className="text-blue-secondary text-2xl text-center ">
                Winter Panel
              </h3>
              <p className="text-blue-secondary text-center">PCR + FLU + RSV</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-8">
            <p className="text-blue-primary text-xl">
              Find a Testing Location Near You
            </p>
            <a
              href="/covid-mobile-testing"
              className="btn-primary border-blue-primary text-blue-primary border flex items-center justify-center"
            >
              <AiOutlineSearch className="mr-2" />
              Search
            </a>
          </div>
        </div>
        <div className="bg-black/20 max-w-screen-xl rounded-lg mx-auto mt-12 py-4 px-12">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex items-center justify-end border-r border-white">
              <a
                href="#"
                className="flex items-center w-fit text-white font-semibold px-4 text-2xl"
              >
                <img
                  src="/img/icons/untitled-1-022-01.svg"
                  className="h-[50px] w-auto mr-4"
                />
                <span className="hover:text-slate-100 transition-all">
                  COVID Testing
                </span>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="flex items-center w-fit text-white font-semibold px-4 text-2xl"
              >
                <img
                  src="/img/icons/labq-icon.png"
                  className="h-[50px] w-auto mr-4"
                />
                <span className="hover:text-slate-100 transition-all">
                  Automation & Innovation
                </span>
              </a>
            </div>
            <div className="flex items-center justify-start border-l border-white">
              <a
                href="#"
                className="flex items-center w-fit text-white font-semibold px-4 text-2xl"
              >
                <img
                  src="/img/icons/flu-rsv-icon.png"
                  className="h-[50px] w-auto mr-4"
                />
                <span className="hover:text-slate-100 transition-all">
                  FLU & RSV
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 container mx-auto">
        <h2 className="heading text-4xl font-semibold text-center">
          Lab Specialties
        </h2>
        <div className="grid grid-cols-4 w-full">
          {LAB_SPECIALTIES.map((e, i) => (
            <div
              className={classNames(
                num.includes(i) ? "bg-[#F4F9FF]" : "bg-white",
                "flex flex-col justify-center py-5 px-8"
              )}
            >
              <img
                src={"/img/icons/" + e.icon}
                className="w-[78px] h-[78px] hover:scale-110 transition-all duration-300 rounded-full border border-black hover:border-sky-400 p-3"
              />
              <h3 className="text-2xl mt-6">{e.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="py-32 container mx-auto">
        <div className=" bg-cover rounded-lg max-w-6xl lg:mx-auto mx-2">
          <div className="p-12 bg-green/10">
            <div className="border-amber border w-16 my-4 mx-auto"></div>
            <h2 className="heading text-5xl text-dark-green font-semibold text-center mb-12">
              We're here for you,
              <br />
              And your baby
            </h2>
            <div className="grid lg:grid-cols-3 gap-x-4 gap-y-8 pt-4">
              <div className="flex flex-col justify-start items-center">
                <FaRegClock className="text-6xl text-dark-green" />
                <h4 className="text-2xl heading text-center font-semibold mt-4">
                  24/7 Assistance
                </h4>
                <p className="text-center font-medium text-sm mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Eu turpis egestas pretium aenean pharetra magna ac. Accumsan
                  lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <FaHandHoldingHeart className="text-6xl text-dark-green" />
                <h4 className="text-2xl heading text-center font-semibold mt-4">
                  Flexible Care
                </h4>
                <p className="text-center font-medium text-sm mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Eu turpis egestas pretium aenean pharetra magna ac. Accumsan
                  lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <IoIosBed className="text-6xl text-dark-green" />
                <h4 className="text-2xl heading text-center font-semibold mt-4">
                  Comfortable Lodging
                </h4>
                <p className="text-center font-medium text-sm mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Eu turpis egestas pretium aenean pharetra magna ac. Accumsan
                  lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-32">
        <div className="grid lg:grid-cols-2 gap-x-4 gap-y-8">
          <div className="flex flex-col justify-center items-center lg:items-end">
            <div className="max-w-xl flex flex-col justify-center items-center lg:items-start">
              <div className="border-amber border w-16 my-4 lg:mx-0 mx-auto"></div>
              <h2 className="heading text-4xl text-green font-semibold lg:text-start text-center mb-12">
                What to expect from your visit
              </h2>
              <p className="max-w-md text-lg font-medium mb-4 lg:text-start text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col w-fit lg:mx-0 mx-auto">
                <div className="flex my-1">
                  <BsCheck2 className="text-green text-3xl" />
                  <p className="text-lg font-medium ml-2">
                    24/7 Care Team for mom and baby
                  </p>
                </div>
                <div className="flex my-1">
                  <BsCheck2 className="text-green text-3xl" />
                  <p className="text-lg font-medium ml-2">24/7 Baby Room</p>
                </div>
                <div className="flex my-1">
                  <BsCheck2 className="text-green text-3xl" />
                  <p className="text-lg font-medium ml-2">Mother’s Lounge</p>
                </div>
                <div className="flex my-1">
                  <BsCheck2 className="text-green text-3xl" />
                  <p className="text-lg font-medium ml-2">Recovery Support</p>
                </div>
                <div className="flex my-1">
                  <BsCheck2 className="text-green text-3xl" />
                  <p className="text-lg font-medium ml-2">Nutritious Meals</p>
                </div>
                <div className="flex my-1">
                  <BsCheck2 className="text-green text-3xl" />
                  <p className="text-lg font-medium ml-2">
                    Therapeutic Services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="rounded-lg lg:w-3/5 w-96"
              src="/img/Brasserie-final-large-7-683x1024.jpg"
              alt="Your visit"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-32">
        <div className="border-amber border w-16 my-4 mx-auto"></div>
        <h2 className="heading text-4xl text-green font-semibold text-center mb-12">
          About Happy Mothers
        </h2>
        <div className="max-w-6xl mx-auto bg-green/10 rounded-lg overflow-hidden grid lg:grid-cols-2">
          <div className=" bg-cover lg:bg-right bg-right-top lg:py-32 py-48"></div>
          <div className="p-4">
            <div className="bg-white lg:ml-[-36px] rounded-lg z-10 p-4">
              <p className="text-lg font-medium">
                Our Happy Mothers experience is a unique area dedicated to
                providing products and services that cater to the needs of
                mother’s of newborns. Our mission is to make their lives
                easierand happier by offering a wide range of products and
                services.
                <br />
                <br />
                Self-Care for Moms - Moms often forget to take care of
                themselves while taking care of their families.
                <br />
                <br />
                Breatfeeding Counselor - Our lactation consultants conduct daily
                sessions to guide and educate breastfeeding mothers and their
                most priciest babies.
                <br />
                <br />
                Tailored Infact Services - With personalized baby care we can
                make sure your orders and bab’y needs are followed to even the
                most demanding mother and child. Caring for your baby like your
                bubbie would.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="btn-primary text-green bg-transparent border-2 border-green hover:bg-amber hover:text-white hover:border-amber font-medium text-xl mt-8"
          >
            Make a Reservation Now
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
