import { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRun } from "react-icons/bi";
import { BsFileBarGraph, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaFacebook, FaMapMarkedAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoRibbonOutline } from "react-icons/io5";
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
      <section className="py-16 container mx-auto">
        <h2 className="heading text-4xl font-semibold text-center mb-16">
          Lab Specialties
        </h2>
        <div className="grid grid-cols-4 w-full">
          {LAB_SPECIALTIES.map((e, i) => (
            <div
              className={classNames(
                num.includes(i) ? "bg-[#F4F9FF]" : "bg-white",
                "flex flex-col justify-center py-5 px-8 hover:shadow-[0_0_12px_0_rgba(0,0,0,0.25)] hover:z-30"
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
        <div className="max-w-screen-lg mx-auto flex items-center gap-x-16 my-16">
          <h2 className="text-2xl font-medium">
            What Our Patients Say About Us!
          </h2>
          <div className="shadow-md bg-white p-2 flex items-center hover:bg-slate-100 border-t-4 border-green-400 gap-x-4">
            <FcGoogle className="w-[44px] h-[44px]" />
            <div className="flex flex-col justify-center">
              <p className="text-sm text-neutral-700">Google Rating</p>
              <div className="flex items-center">
                <span className="text-orange-500 text-xl mr-2">4.5</span>
                <BsStarFill className="text-orange-500 w-[18px] h-[18px] mr-1" />
                <BsStarFill className="text-orange-500 w-[18px] h-[18px] mr-1" />
                <BsStarFill className="text-orange-500 w-[18px] h-[18px] mr-1" />
                <BsStarFill className="text-orange-500 w-[18px] h-[18px] mr-1" />
                <BsStarHalf className="text-orange-500 w-[18px] h-[18px] mr-1" />
              </div>
              <p className="text-sm text-neutral-500">Based on 1506 reviews</p>
            </div>
          </div>
          <div className="shadow-md bg-white p-2 flex items-center hover:bg-slate-100 border-t-4 border-green-400 gap-x-4">
            <FaFacebook className="w-[44px] h-[44px] text-[#3c5b9b]" />
            <div className="flex flex-col justify-center">
              <p className="text-sm text-neutral-700">Facebook Rating</p>
              <div className="flex items-center">
                <span className="text-[#3c5b9b] text-xl mr-2">3.7</span>
                <BsStarFill className="text-[#3c5b9b] w-[18px] h-[18px] mr-1" />
                <BsStarFill className="text-[#3c5b9b] w-[18px] h-[18px] mr-1" />
                <BsStarFill className="text-[#3c5b9b] w-[18px] h-[18px] mr-1" />
                <BsStarHalf className="text-[#3c5b9b] w-[18px] h-[18px] mr-1" />
                <BsStar className="text-[#3c5b9b] w-[18px] h-[18px] mr-1" />
              </div>
              <p className="text-sm text-neutral-500">Based on 1506 reviews</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="bg-[#F4F9FF] flex flex-col items-end justify-center gap-y-8 pr-2 pl-56 py-20">
          <div className="flex group">
            <BiRun className="text-amber-400 bg-orange-200 rounded-full shrink-0 w-[50px] h-[50px] p-2" />
            <div className="flex flex-col w-fit ml-4">
              <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                It's about time.
              </h3>
              <p>
                Waiting for test results has got to be the most nerve wracking
                experience of all time. Which is why speed takes a center stage
                at LabCare. We’re proud to have one of the fastest turnaround
                track record in the entire Tri State area, so that you can hold
                the test results in your hands within a few hours from the time
                it was administered. What does that mean for you?{" "}
                <span className="font-bold">Fast results.</span>
              </p>
            </div>
          </div>
          <div className="flex group">
            <IoRibbonOutline className="text-red-500 bg-red-300 rounded-full shrink-0 w-[50px] h-[50px] p-2" />
            <div className="flex flex-col w-fit ml-4">
              <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                Higher accuracy
              </h3>
              <p>
                We understand that diagnostics requires accuracy. With a fully
                automated process, it significantly reduces the mistake margin.
                Your specimen will not pass multiple checkpoints, nor will it
                get handled by numerous technicians. What does that mean for
                you? <span className="font-bold">Reliable results.</span>
              </p>
            </div>
          </div>
          <div className="flex group">
            <FaMapMarkedAlt className="text-green-500 bg-green-600/30 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" />
            <div className="flex flex-col w-fit ml-4">
              <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                Right on track.
              </h3>
              <p>
                Nothing should ever get lost in the shuffle. Especially
                something as valuable as your specimen. Through a sophisticated
                tracking system, we keep tabs on your specimen and can track it
                during various stages. What does that mean for you?{" "}
                <span className="font-bold">Complete transparency.</span>
              </p>
            </div>
          </div>
          <div className="flex group">
            <BsFileBarGraph className="text-sky-500 bg-sky-400/70 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" />
            <div className="flex flex-col w-fit ml-4">
              <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                Clarity is Key.
              </h3>
              <p>
                Your test results should be easy to access and easier to
                decipher. No who-can-read-this jargon or high falutin terms to
                google. All you need to do is log in to your account and you’ll
                find your easy-to- read test results staring right at you. What
                does that mean for you?{" "}
                <span className="font-bold">
                  Clear results, easy to access.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pr-56">
          <h2 className="text-4xl text-center font-medium heading">
            Your Local Lab
          </h2>
        </div>
      </section>
      <section className="container mx-auto py-16">
        <div
          id="newsBlogControls"
          className="relative w-4/5 mx-auto"
          data-te-carousel-init
          data-te-carousel-slide
        >
          {/* <!--Carousel items--> */}
          <div className="relative w-[90%] mx-auto overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!--First item--> */}
            <div
              className="relative flex justify-center float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              data-te-carousel-active
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center justify-center">
                  <a
                    className="rounded-xl overflow-hidden group"
                    href="/labq-ribbon-cutting-ceremony-for-newest-lab-and-data-hub-in-mt-olive"
                  >
                    <img
                      className="w-full group-hover:scale-110 transition-all"
                      src="/img/news/189195214_4165785780154267_6720674629117732980_n.jpg"
                    />
                  </a>
                </div>
                <div className="flex flex-col justify-center">
                  <a
                    href="/category/news"
                    className="rounded-full py-1 px-4 text-xs font-medium text-blue-secondary border border-black w-fit"
                  >
                    News
                  </a>
                  <a
                    href="/labq-ribbon-cutting-ceremony-for-newest-lab-and-data-hub-in-mt-olive"
                    className="text-3xl font-semibold"
                  >
                    LabQ Ribbon Cutting Ceremony for newest lab and data hub in
                    Mt. Olive.
                  </a>
                  <p className="text-neutral-500 my-4">
                    PRESS RELEASE Mt. Olive, NJ – On Wednesday, May 19th, HQ
                    Health partnered with Robert Greenbaum, the mayor of Mt.
                    Olive, to host an Open House and Ribbon Cutting. The event
                    was held for the new HQ Center at 100 International Dr., in
                    the International Trade Center in Mt....
                  </p>
                  <a
                    className="text-sm font-medium transition-all hover:text-blue-secondary"
                    href="/labq-ribbon-cutting-ceremony-for-newest-lab-and-data-hub-in-mt-olive"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!--Second item--> */}
            {/* <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                className="block w-full"
                alt="Camera"
              />
            </div>
            <!--Third item-->
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                className="block w-full"
                alt="Exotic Fruits"
              />
            </div> */}
          </div>

          {/* <!--Carousel controls - prev item--> */}
          <button
            className="absolute overflow-hidden bottom-0 left-0 top-0 z-[1] flex w-8 items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:outline-none focus:text-white focus:no-underline focus:outline-none motion-reduce:transition-none group"
            type="button"
            data-te-target="#newsBlogControls"
            data-te-slide="prev"
          >
            <span className="inline-block h-8 w-8 mr-16 before:bg-[#3892e7] before:rotate-[-60deg] before:content-[''] before:w-[16px] before:h-[3px] before:absolute before:left-1/4 after:bg-[#3892e7] after:rotate-[60deg] after:content-[''] after:w-[16px] after:h-[3px] after:absolute after:left-1/4 after:translate-y-3 before:group-hover:-rotate-45 after:group-hover:rotate-45 after:group-hover:translate-y-[11px] before:group-hover:translate-y-[1px] before:transition-all after:transition-all"></span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          <button
            className="absolute overflow-hidden bottom-0 right-0 top-0 z-[1] flex w-8 items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:outline-none focus:text-white focus:no-underline focus:outline-none motion-reduce:transition-none group"
            type="button"
            data-te-target="#newsBlogControls"
            data-te-slide="next"
          >
            <span className="inline-block h-8 w-8 mr-16 before:bg-[#3892e7] before:rotate-[60deg] before:content-[''] before:w-[16px] before:h-[3px] before:absolute before:left-1/4 after:bg-[#3892e7] after:rotate-[-60deg] after:content-[''] after:w-[16px] after:h-[3px] after:absolute after:left-1/4 after:translate-y-3 before:group-hover:rotate-45 after:group-hover:-rotate-45 after:group-hover:translate-y-[11px] before:group-hover:translate-y-[1px] before:transition-all after:transition-all"></span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
