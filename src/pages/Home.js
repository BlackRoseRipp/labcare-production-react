import { Fragment, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRun } from "react-icons/bi";
import { BsFileBarGraph, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaFacebook, FaMapMarkedAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoRibbonOutline } from "react-icons/io5";
import { RxCaretRight } from "react-icons/rx";
import BlogSlider from "../components/BlogSlider";
import useWindowSize from "../hooks/useWindowSize";
import LAB_SPECIALTIES from "../store/LAB_SPECIALTIES.json";

const Home = () => {
  const [isVisible, setIsVisible] = useState(0);

  const size = useWindowSize();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const num = size.width < 1024 ? [1, 2, 5, 6, 9, 10] : [1, 3, 4, 6, 9, 11];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((isVisible) => (isVisible < 3 ? isVisible + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const yourLabArr = [
    "Qualified Staff",
    "Quick Results",
    "Quality Control",
    "Quantity of Services",
  ];

  return (
    <Fragment>
      <div
        id="homeBanner"
        class="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div
          class="absolute bottom-0 left-0 right-0 z-[2] list-none justify-center gap-8 bg-black/20 max-w-screen-xl rounded-lg mx-auto mt-12 py-4 px-12 md:opacity-100 opacity-0 md:w-full w-0 overflow-hidden sm:flex hidden"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#homeBanner"
            data-te-slide-to="0"
            data-te-carousel-active
            class="flex items-center justify-end gap-6 text-white font-semibold px-4 text-2xl border-r border-white"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img
              src="/img/icons/labq-tests1.svg"
              className="h-[50px] w-auto mr-4"
            />
            <span className="hover:text-slate-100 transition-all">
              {" "}
              Mobile Labs{" "}
            </span>
          </button>
          <button
            type="button"
            data-te-target="#homeBanner"
            data-te-slide-to="1"
            class="flex items-center justify-center gap-6 text-white font-semibold px-4 text-2xl"
            aria-label="Slide 2"
          >
            <img
              src="/img/icons/labq-icon.png"
              className="h-[50px] w-auto mr-4"
            />
            <span className="hover:text-slate-100 transition-all">
              Automation & Innovation
            </span>
          </button>
          <button
            type="button"
            data-te-target="#homeBanner"
            data-te-slide-to="2"
            class="flex items-center justify-start gap-6 text-white font-semibold px-4 text-2xl border-l border-white"
            aria-label="Slide 3"
          >
            <img
              src="/img/icons/Untitled-1-04-03.svg"
              className="h-[50px] w-auto mr-4"
            />
            <span className="hover:text-slate-100 transition-all">
              {" "}
              COVID Testing{" "}
            </span>
          </button>
        </div>
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none bg-[url(../public/img/woman-collecting-blood-samples-for-testing-on-diff-2022-12-16-06-56-53-utc-scaled-1.jpg)] bg-cover bg-center bg-no-repeat lg:h-[667px]"
            data-te-carousel-item
            data-te-carousel-active
          >
            <div class="w-full h-full pb-24 mobile-testing-slide">
              <div className="grid lg:grid-cols-2 py-5 max-w-screen-xl mx-auto pt-12">
                <div className="flex flex-col gap-6">
                  <h2 className="text-6xl text-white heading">
                    Access convenient medical screening at our{" "}
                    <span className="font-semibold">mobile lab</span>
                  </h2>
                  <h4 className="text-white text-lg">
                    Lab testing with LabCare’s mobile units located throughout
                    New York City is easy and convenient.
                  </h4>
                  <div className="grid md:grid-cols-4 grid-cols-2 w-full">
                    <div className="flex flex-col items-center gap-2">
                      <img
                        className=" w-[72px] h-[72px]"
                        src="/img/icons/Untitled-1-04-04-1.svg"
                        alt="General Blood Work"
                      />
                      <h5 className="text-white/80 text-sm text-center">
                        General Blood Work
                      </h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img
                        className=" w-[72px] h-[72px]"
                        src="/img/icons/Untitled-1-04-01-2.svg"
                        alt="COVID/Flu/RSV Testing"
                      />
                      <h5 className="text-white/80 text-sm text-center">
                        COVID/Flu/RSV Testing
                      </h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img
                        className=" w-[72px] h-[72px]"
                        src="/img/icons/Untitled-1-04-02-1.svg"
                        alt="STI Testing"
                      />
                      <h5 className="text-white/80 text-sm text-center">
                        STI Testing
                      </h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img
                        className=" w-[72px] h-[72px]"
                        src="/img/icons/Untitled-1-04-05-1.svg"
                        alt="Medical Screening For Work"
                      />
                      <h5 className="text-white/80 text-sm text-center">
                        Medical Screening For Work
                      </h5>
                    </div>
                  </div>
                  <div className="flex justify-evenly gap-6">
                    <a
                      href="/covid"
                      className="text-sm px-7 py-3.5 font-semibold rounded flex items-center justify-center border text-white border-white bg-transparent hover:bg-[#0568F6] hover:border-[#0568F6]"
                    >
                      LEARN MORE
                    </a>
                    <a
                      href="/covid-mobile-testing"
                      className="text-sm px-7 py-3.5 font-semibold rounded flex items-center justify-center border text-white border-[#0568F6] bg-[#0568F6] hover:bg-transparent hover:border-white"
                    >
                      <AiOutlineSearch className="mr-2 shrink-0 text-lg" />
                      FIND A MOBILE PATIENT CENTER NEAR YOU
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none bg-[url(../public/img/Untitled-2-3.jpg)] bg-cover bg-center bg-no-repeat pb-24 lg:h-[667px]"
            data-te-carousel-item
          >
            <div className="flex flex-col justify-center h-full py-5 max-w-screen-lg mx-auto">
              <h3 className="text-blue-secondary font-semibold text-xl mb-4">
                Quick Reliable Results Save Lives
              </h3>
              <h2 className="text-blue-primary font-bold text-6xl mb-4 heading">
                Automation
                <br />
                and Innovation
              </h2>
              <h4 className="text-blue-secondary text-lg mb-4">
                Fastest Turnaround Time in the Region
              </h4>
              <a
                href="/about"
                className="mt-8 w-fit rounded-md py-2.5 px-5 font-bold border bg-white text-blue-secondary border-blue-secondary hover:text-white hover:bg-blue-secondary flex items-center"
              >
                Learn More <RxCaretRight className="shrink-0 ml-0.5 text-xl" />
              </a>
            </div>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none bg-[url(../public/img/landing22.jpg)] bg-cover bg-center bg-no-repeat pb-24 lg:h-[667px]"
            data-te-carousel-item
          >
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
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 max-w-[725px] mx-auto my-12">
                <a
                  href="/covid"
                  className="rounded-lg bg-white flex flex-col items-center justify-center w-full px-1 py-2"
                >
                  <img className="w-[100px]" src="/img/icons/Asset-4mdpi.png" />
                  <h3 className="text-blue-secondary text-2xl text-center ">
                    PCR Test
                  </h3>
                </a>
                <a
                  href="/covid"
                  className="rounded-lg bg-white flex flex-col items-center justify-center w-full px-1 py-2"
                >
                  <img className="w-[100px]" src="/img/icons/Asset-5mdpi.png" />
                  <h3 className="text-blue-secondary text-2xl text-center ">
                    Antigen
                  </h3>
                </a>
                <a
                  href="/covid"
                  className="rounded-lg bg-white flex flex-col items-center justify-center w-full px-1 py-2"
                >
                  <img className="w-[100px]" src="/img/icons/Asset-6mdpi.png" />
                  <h3 className="text-blue-secondary text-2xl text-center ">
                    Antibody
                  </h3>
                </a>
                <a
                  href="/covid-mobile-testing"
                  className="rounded-lg bg-white flex flex-col items-center justify-center w-full px-1 py-2"
                >
                  <img className="w-[100px]" src="/img/icons/flu-rsv.png" />
                  <h3 className="text-blue-secondary text-2xl text-center ">
                    Winter Panel
                  </h3>
                  <p className="text-blue-secondary text-center">
                    PCR + FLU + RSV
                  </p>
                </a>
              </div>
              <div className="flex sm:flex-row flex-col items-center justify-center gap-8">
                <p className="text-blue-primary text-xl">
                  Find a Testing Location Near You
                </p>
                <a
                  href="/covid-mobile-testing"
                  className="btn-primary border-blue-primary text-blue-primary border flex items-center justify-center"
                >
                  <AiOutlineSearch className="mr-2 shrink-0" />
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 container mx-auto">
        <h2 className="heading text-4xl font-semibold text-center mb-16">
          Lab Specialties
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 w-full">
          {LAB_SPECIALTIES.map((e, i) => (
            <div
              className={classNames(
                size.width < 768
                  ? i % 2 === 0
                    ? "bg-white"
                    : "bg-[#F4F9FF]"
                  : num.includes(i)
                  ? "bg-[#F4F9FF]"
                  : "bg-white",
                "flex flex-col justify-center md:items-start items-center py-5 px-8 hover:shadow-[0_0_12px_0_rgba(0,0,0,0.25)] hover:z-30 transition-all"
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
        <div className="max-w-screen-lg mx-auto flex lg:flex-row flex-col items-center gap-x-16 gap-y-8 my-16">
          <h2 className="text-2xl font-medium">
            What Our Patients Say About Us!
          </h2>
          <div className="shadow-md bg-white p-2 flex items-center hover:bg-slate-100 border-t-4 border-green-400 gap-x-4 transition-all">
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
          <div className="shadow-md bg-white p-2 flex items-center hover:bg-slate-100 border-t-4 border-green-400 gap-x-4 transition-all">
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
      <section className="grid lg:grid-cols-2">
        <div className="bg-[#F4F9FF] flex flex-col items-end justify-center gap-y-8 pr-2 lg:pl-56 pl-2 py-20 lg:order-1 order-2">
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
        <div className="flex flex-col items-center justify-center lg:pr-56 lg:order-2 order-1">
          <div className="your-lab-animation after:bg-black mb-2 bg-blue-50 px-1 py-0.5">
            <h3 className="font-bold text-[26px]">{yourLabArr[isVisible]}</h3>
          </div>
          <h2 className="text-4xl text-center font-medium heading lg:mb-0 mb-16">
            Your Local Lab
          </h2>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto py-16">
        <BlogSlider />
      </section>
    </Fragment>
  );
};

export default Home;
