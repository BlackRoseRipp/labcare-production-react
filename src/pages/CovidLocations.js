import { Fragment } from "react";
import { RxCaretRight } from "react-icons/rx";
import StoreLocator from "../components/Locations/StoreLocator";
import covidLocations from "../store/COVID_LOCATIONS.json";

const CovidLocations = () => {
  return (
    <Fragment>
      <section className="bg-[#F4F9FE]">
        <div className="max-w-screen-lg mx-auto grid md:grid-cols-3">
          <div className="hidden md:flex items-center justify-center">
            <div className="mask-img scale-110">
              <img
                className="w-full"
                src="/img/shutterstock_1673295625-1.jpg"
                alt="Covid Testing"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:col-span-2 p-12">
            <h1 className="text-blue-primary text-[42px] text-center heading mb-4">
              Test for COVID-19
            </h1>
            <h3 className="text-blue-primary text-center text-3xl mb-4">
              PCR | Antigen | Rapid PCR | FLU
            </h3>
            <p className="text-neutral-500 text-center mb-4">
              *Due to a significant increase in COVID testing,{" "}
              <strong>please allow 1 to 2 days for results.</strong>
            </p>
            <a
              className="w-fit text-black hover:text-blue-primary flex items-center group mt-6"
              href="/covid"
            >
              Learn More
              <div className="border border-neutral-300 rounded-full shrink-0 ml-2 group-hover:border-transparent transition-all duration-300">
                <RxCaretRight className="w-6 h-6 group-hover:translate-x-2 group-hover:text-blue-primary transition-all duration-300" />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="py-20">
        <StoreLocator
          src="https://www.google.com/maps/d/u/1/embed?mid=1KmTPfol-LbSmS5Rq_Itw6MI_umqMKj8&ehbc=2E312F"
          locations={covidLocations}
        />
      </section>
    </Fragment>
  );
};

export default CovidLocations;
