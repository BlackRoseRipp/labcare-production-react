import { Fragment, useEffect, useState } from "react";

const AppointmentScheduler = () => {
  const [appointmentFormVisibile, setAppointmentFormVisibile] = useState("0");

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <Fragment>
      <div
        className={classNames(appointmentFormVisibile !== "0" ? "hidden" : "")}
      >
        <h2 className="text-3xl pb-4 border-b border-gray-200">
          Choose an option
        </h2>
        <h3 className="font-bold text-sm mt-4 px-3">Service</h3>
        <div className="w-full border border-neutral-300 my-4"></div>
        <div className="flex items-center justify-between w-full px-3">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-sm">Blood Test</h5>
            <p className="text-sm">
              General Blood Test - * Prescription needed
            </p>
          </div>
          <button
            className="text-sm font-bold text-white px-3 py-1.5 rounded bg-orange-400"
            onClick={setAppointmentFormVisibile("1")}
          >
            Book Now
          </button>
        </div>
      </div>
      <div
        className={classNames(appointmentFormVisibile !== "1" ? "hidden" : "")}
      ></div>
    </Fragment>
  );
};

export default AppointmentScheduler;
