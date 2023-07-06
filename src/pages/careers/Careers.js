import { Fragment } from "react";
import { RxCaretRight } from "react-icons/rx";
import careerListings from "../../store/CAREER_LISTINGS.json";

const Careers = () => {
  const listingsNY = careerListings.filter(
    (listing) => listing.location.slice(-2) === "NY"
  );
  const listingsNJ = careerListings.filter(
    (listing) => listing.location.slice(-2) === "NJ"
  );
  const listingsPA = careerListings.filter(
    (listing) => listing.location.slice(-2) === "PA"
  );

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Fragment>
      <section className="bg-[url(../public/img/Image_5.jpg)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/60 h-[600px] w-full"></div>
      </section>
      <section
        className={classNames(listingsNY.length > 0 ? "pt-24 pb-8" : "hidden")}
        id="newYork"
      >
        <h2 className="text-2xl font-bold heading text-center">
          Available Positions: New York
        </h2>
        <div className="border-t-[3px] border-[#3892E7] mx-auto w-32 my-12"></div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto">
          {listingsNY.map((listing) => (
            <div className="border rounded-lg border-slate-100 p-6 flex flex-col">
              <h3 className="text-2xl font-medium mb-4">{listing.title}</h3>
              <div className="flex flex-col gap-1">
                <h5 className="text-neutral-500">{listing.location}</h5>
                <h5 className="text-neutral-500">{listing.status}</h5>
                <h5 className="text-neutral-500">{listing.rate}</h5>
              </div>
              <div className="mt-auto">
                <a
                  href={
                    listing.link?.length > 0
                      ? listing.link
                      : "/careers/" + listing.id
                  }
                  className="text-[#3892E7] flex items-center group mt-6"
                >
                  Apply Now
                  <div className="border border-[#3892E7] rounded-full shrink-0 ml-2 group-hover:border-transparent transition-all duration-300">
                    <RxCaretRight className="w-6 h-6 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className={classNames(listingsNJ.length > 0 ? "pt-24 pb-8" : "hidden")}
        id="newJersey"
      >
        <h2 className="text-2xl font-bold heading text-center">
          Available Positions: New Jersey
        </h2>
        <div className="border-t-[3px] border-[#3892E7] mx-auto w-32 my-12"></div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto">
          {listingsNJ.map((listing) => (
            <div className="border rounded-lg border-slate-100 p-6 flex flex-col">
              <h3 className="text-2xl font-medium mb-4">{listing.title}</h3>
              <div className="flex flex-col gap-1">
                <h5 className="text-neutral-500">{listing.location}</h5>
                <h5 className="text-neutral-500">{listing.status}</h5>
                <h5 className="text-neutral-500">{listing.rate}</h5>
              </div>
              <div className="mt-auto">
                <a
                  href={
                    listing.link?.length > 0
                      ? listing.link
                      : "/careers/" + listing.id
                  }
                  className="text-[#3892E7] flex items-center group mt-6"
                >
                  Apply Now
                  <div className="border border-[#3892E7] rounded-full shrink-0 ml-2 group-hover:border-transparent transition-all duration-300">
                    <RxCaretRight className="w-6 h-6 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className={classNames(listingsPA.length > 0 ? "pt-24 pb-8" : "hidden")}
        id="pennsylvania"
      >
        <h2 className="text-2xl font-bold heading text-center">
          Available Positions: Pennsylvania
        </h2>
        <div className="border-t-[3px] border-[#3892E7] mx-auto w-32 my-12"></div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto">
          {listingsPA.map((listing) => (
            <div className="border rounded-lg border-slate-100 p-6 flex flex-col">
              <h3 className="text-2xl font-medium mb-4">{listing.title}</h3>
              <div className="flex flex-col gap-1">
                <h5 className="text-neutral-500">{listing.location}</h5>
                <h5 className="text-neutral-500">{listing.status}</h5>
                <h5 className="text-neutral-500">{listing.rate}</h5>
              </div>
              <div className="mt-auto">
                <a
                  href={
                    listing.link?.length > 0
                      ? listing.link
                      : "/careers/" + listing.id
                  }
                  className="text-[#3892E7] flex items-center group mt-6"
                >
                  Apply Now
                  <div className="border border-[#3892E7] rounded-full shrink-0 ml-2 group-hover:border-transparent transition-all duration-300">
                    <RxCaretRight className="w-6 h-6 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Careers;
