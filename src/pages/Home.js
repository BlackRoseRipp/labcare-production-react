import { Fragment } from "react";
import { BsCheck2 } from "react-icons/bs";
import { FaHandHoldingHeart, FaRegClock } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";

const Home = () => {
  return (
    <Fragment>
      <section className="banner">
        <div className="bg-green grid lg:grid-cols-2">
          <div className="px-16 lg:py-32 py-16 flex items-center justify-start">
            <div className="flex flex-col items-start justify-center xl:w-5/6 w-full">
              <h1 className="heading text-white font-semibold text-5xl my-4">
                Postnatal Care Begins Here
              </h1>
              <h3 className="heading text-white font-medium text-4xl my-4">
                Feeling rested, rejuvenated and re-energized at our facility
              </h3>
              <a
                href="#"
                className="btn-primary text-white bg-transparent border-2 border-amber hover:bg-amber font-medium text-xl mt-8"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="bg-[url(../public/img/pexels-ivan-rivero-1001965.jpg)] bg-cover bg-center bg-no-repeat lg:block hidden"></div>
          <div className="lg:hidden block container mx-auto">
            <img
              className="w-full rounded-xl mx-2 mb-6"
              src="/img/pexels-ivan-rivero-1001965.jpg"
              alt="Hotel Shalvah"
            />
          </div>
        </div>
      </section>
      <section className="py-32 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:order-1 order-2 flex items-center justify-center">
            <img
              className="rounded-lg lg:w-3/5 w-96"
              src="/img/pexels-laura-garcia-3398675.jpg"
              alt="Mother caring for her baby"
            />
          </div>
          <div className="flex flex-col lg:items-start items-center justify-center lg:order-2 order-1">
            <div className="border-amber border w-16 my-4"></div>
            <h2 className="heading text-4xl font-semibold text-green mb-4">
              Childbirth is difficult
            </h2>
            <p className="max-w-md text-lg font-medium mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
              semper auctor neque vitae tempus quam. Purus sit amet volutpat
              consequat mauris nunc congue nisi vitae.
            </p>
            <a
              href="#contact"
              className="btn-primary border-2 border-green text-green hover:text-white hover:bg-amber hover:border-amber mt-4 font-medium text-lg"
            >
              Find Out More
            </a>
          </div>
        </div>
      </section>
      <section className="py-32 container mx-auto">
        <div className="bg-[url(../public/img/patterns/dots-background-1.png)] bg-cover rounded-lg max-w-6xl lg:mx-auto mx-2">
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
          <div className="bg-[url(../public/img/image-001.jpg)] bg-cover lg:bg-right bg-right-top lg:py-32 py-48"></div>
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
