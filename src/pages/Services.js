import { Fragment } from "react";

const Services = () => {
  return (
    <Fragment>
      <section className="py-16 container mx-auto">
        <h1 className="text-center text-5xl font-semibold heading mb-4">
          At Your Service
        </h1>
        <h4 className="text-center text-lg">
          Trust the lab that has a daily test capacity of{" "}
          <strong>150,000</strong>. Yes. One Hundred Fifty Thousand.
        </h4>
      </section>
      <section className="px-2 mb-24">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="group shadow-[0_0_24px_-5px_rgba(0,0,0,0.3)] grid lg:grid-cols-2 overflow-hidden">
            <div className="flex flex-col p-8 lg:order-1 order-2">
              <h2 className="text-blue-secondary font-semibold text-2xl mb-6">
                Testing Sites
                <br />
                Put us to the test
              </h2>
              <p className="mb-4">
                There’s more to getting tested than the prick of your arm or the
                swab of your cheek. There’s the cleanliness of the facility, the
                bedside manner of the technician and the ease of accessing your
                results.{" "}
                <strong>You’ll get it all, and more, at LabCare.</strong>
              </p>
              <a
                href="/location"
                className="px-6 py-2 border-2 rounded border-black text-blue-secondary font-medium w-fit"
              >
                LOCATIONS
              </a>
            </div>
            <div className="overflow-hidden lg:order-2 order-1 lg:h-auto h-40">
              <div className="bg-[url(../public/img/Picture1-1.png)] bg-cover bg-center group-hover:scale-110 transition-all h-full w-full"></div>
            </div>
          </div>
          <div className="group shadow-[0_0_24px_-5px_rgba(0,0,0,0.3)] grid lg:grid-cols-2 overflow-hidden">
            <div className="flex flex-col p-8 lg:order-1 order-2">
              <h2 className="text-blue-secondary font-semibold text-2xl mb-6">
                Laboratory
                <br />
                Request the Best
              </h2>
              <p className="mb-4">
                You want your specimen to be tested in a lab that was rated top
                in the nation for accuracy and has one of the fastest turnaround
                rate in all of New York. Tell your doctor about the advanced
                automated lab in NY.{" "}
                <strong>
                  You can request the lab you prefer, and you should.
                </strong>
              </p>
              <a
                href="/about"
                className="px-6 py-2 border-2 rounded border-black text-blue-secondary font-medium w-fit"
              >
                OUR TECHONOLOGY
              </a>
            </div>
            <div className="overflow-hidden lg:order-2 order-1 lg:h-auto h-40">
              <div className="bg-[url(../public/img/labq-auto.png)] bg-cover bg-center group-hover:scale-110 transition-all h-full w-full"></div>
            </div>
          </div>
          <div className="group shadow-[0_0_24px_-5px_rgba(0,0,0,0.3)] grid lg:grid-cols-2 overflow-hidden">
            <div className="overflow-hidden lg:h-auto h-40">
              <div className="bg-[url(../public/img/nurse-holding-test-tube-LG43K9U.jpg)] bg-cover bg-center group-hover:scale-110 transition-all h-full w-full"></div>
            </div>
            <div className="flex flex-col p-8">
              <h2 className="text-blue-secondary font-semibold text-2xl mb-6">
                House Calls
                <br />
                Life happens
              </h2>
              <p className="mb-4">
                There are times when venturing out to take a prescribed test is
                not an option. We get that. Which is why LabCare will come down
                to your home and administer the test at the comfort of you
                bedside.{" "}
                <strong>
                  You should have access to the test you need, wherever you are.
                </strong>
              </p>
              <a
                href="/coming-soon"
                className="px-6 py-2 border-2 rounded border-black text-blue-secondary font-medium w-fit"
              >
                INQUIRE
              </a>
            </div>
          </div>
          <div className="group shadow-[0_0_24px_-5px_rgba(0,0,0,0.3)] grid lg:grid-cols-2 overflow-hidden">
            <div className="overflow-hidden lg:h-auto h-40">
              <div className="bg-[url(../public/img/antigen.jpg)] bg-cover bg-center group-hover:scale-110 transition-all h-full w-full"></div>
            </div>
            <div className="flex flex-col p-8">
              <h2 className="text-blue-secondary font-semibold text-2xl mb-6">
                Medical Facilities
                <br />
                Partner with the Pros
              </h2>
              <p className="mb-4">
                You care about your patients and want the best for them. LabCare
                provides a lot more than superior storage and collection
                routines. It’s our leading edge technology and high capacity
                that has medical facilities clamoring for partnerships.{" "}
                <strong>Don’t settle for second best.</strong>
              </p>
              <a
                href="/coming-soon"
                className="px-6 py-2 border-2 rounded border-black text-blue-secondary font-medium w-fit"
              >
                OUR SERVICES
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
