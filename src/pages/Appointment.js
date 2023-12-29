import { Fragment } from "react";
import AppointmentScheduler from "../components/AppoinmentScheduler";

const Appointment = () => {
  return (
    <Fragment>
      {/* <section className="bg-neutral-100 pt-[61px]">
        <div className="bg-blue-primary flex items-center justify-center lg:h-[60px] lg:py-0 py-3 gap-8 px-2">
          <h3 className="text-lg font-semibold text-gray-50 sm:block hidden">
            CHECK OUR COVID-19 TESTING SITES IN NYC:
          </h3>
          <a
            href="/covid-mobile-testing"
            className="text-sm text-gray-50 font-semibold border border-gray-50 py-2 px-4 hover:scale-110"
          >
            COVID-19 TESTING SITES
          </a>
        </div>
      </section> */}
      <section className="max-w-6xl w-full mx-auto py-32">
        <div className="px-2 w-full flex items-center lg:justify-end justify-center">
          <div className="w-full max-w-[800px] shadow-[0_2px_12px_0_rgba(0,0,0,0.20)] py-6 px-4">
            <AppointmentScheduler />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Appointment;
