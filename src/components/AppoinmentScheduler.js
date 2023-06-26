import {
  addDays,
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
} from "date-fns";
import { Fragment, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Carousel, initTE } from "tw-elements";

const AppointmentScheduler = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [timeslot, setTimeslot] = useState(null);
  const [clientBirthdate, setClientBirthdate] = useState(null);

  const AvailableTimes = (date = new Date()) => {
    if (isMonday(date)) {
      return [
        { hour: 10, minute: 15 },
        { hour: 12, minute: 15 },
        { hour: 2, minute: 45 },
        { hour: 3, minute: 0 },
      ];
    }
    if (isTuesday(date)) {
      return [
        { hour: 11, minute: 15 },
        { hour: 1, minute: 15 },
        { hour: 1, minute: 45 },
        { hour: 3, minute: 15 },
        { hour: 3, minute: 45 },
      ];
    }
    if (isWednesday(date)) {
      return [
        { hour: 12, minute: 30 },
        { hour: 2, minute: 15 },
        { hour: 4, minute: 15 },
      ];
    }
    if (isThursday(date)) {
      return [
        { hour: 12, minute: 15 },
        { hour: 2, minute: 0 },
        { hour: 3, minute: 0 },
        { hour: 3, minute: 45 },
        { hour: 4, minute: 45 },
      ];
    }
    if (isFriday(date)) {
      return [
        { hour: 9, minute: 45 },
        { hour: 12, minute: 45 },
        { hour: 1, minute: 30 },
      ];
    }
    if (isSunday(date)) {
      return [
        { hour: 10, minute: 30 },
        { hour: 2, minute: 45 },
        { hour: 4, minute: 30 },
        { hour: 4, minute: 45 },
        { hour: 5, minute: 45 },
      ];
    }
    return [];
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  useEffect(() => {
    initTE({ Carousel });
  }, []);

  const isNotSaturday = (date) => {
    return !isSaturday(date);
  };

  return (
    <Fragment>
      <div
        id="appointmentScheduler"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
        data-bs-interval="false"
        data-te-interval="false"
        data-te-touch="false"
        data-te-wrap="false"
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
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
                type="button"
                data-te-target="#appointmentScheduler"
                data-te-slide="next"
              >
                Book Now
              </button>
            </div>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <h2 className="text-3xl pb-4 border-b border-gray-200">
              Choose a day and time
            </h2>
            <div className="bg-yellow-50 w-full py-2 px-3 my-2">
              <h3 className="font-bold">Blood Test</h3>
              <p className="text-xs text-neutral-500">
                LabQ Diagnostic - Boro Park Location - 4510 16th Ave, Brooklyn,
                NY 11204, USA
              </p>
            </div>
            <div className="flex items-start justify-evenly w-full px-3 my-8">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
                minDate={new Date()}
                maxDate={addDays(new Date(), 7)}
                filterDate={isNotSaturday}
              />
              <div className="grid grid-cols-3 gap-4">
                {AvailableTimes(startDate).map((slot) => (
                  <button
                    className="bg-[#337ab7] border-[#2e6da4] hover:bg-[#2e6da4] text-white text-sm px-3 py-1.5 rounded transition-all"
                    type="button"
                    data-te-target="#appointmentScheduler"
                    data-te-slide="next"
                    onClick={() => setTimeslot(slot)}
                  >
                    {slot.hour +
                      ":" +
                      (slot.minute === 0 ? "00" : slot.minute) +
                      (slot.hour < 12 && slot.hour > 7 ? " AM" : " PM")}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="text-[#3892e7] hover:underline transition-all"
              type="button"
              data-te-target="#appointmentScheduler"
              data-te-slide="prev"
            >
              Back
            </button>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <h2 className="text-3xl pb-4 border-b border-gray-200">
              Enter Your Information
            </h2>
            <form className="mt-4 flex flex-col items-end mx-2 min-h-[400px]">
              <div className="grid lg:grid-cols-2 gap-x-2 gap-y-2 w-full">
                <div className="lg:col-span-2 flex flex-col">
                  <label className="text-sm font-bold" for="clientName">
                    Client Name
                  </label>
                  <input
                    className="form-input"
                    type="name"
                    id="clientName"
                    placeholder="Client's Full Name"
                    required
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold" for="clientEmail">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="clientEmail"
                    placeholder="Email Address"
                    required
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold" for="clientBirthdate">
                    Date of Birth
                  </label>
                  <DatePicker
                    selected={clientBirthdate}
                    onChange={(date) => setClientBirthdate(date)}
                    closeOnScroll={true}
                    className="form-input w-full"
                    id="clientBirthdate"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-bold"
                    for="appointmentReminder"
                  >
                    Appointment Reminder
                  </label>
                  <select
                    className="form-input"
                    id="appointmentReminder"
                    required
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold" for="clientPhone">
                    Mobile Phone
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="clientPhone"
                    placeholder="Enter your phone number"
                    required
                  ></input>
                </div>
                <div className="flex flex-col lg:col-span-2">
                  <label className="text-sm font-bold" for="clientPhone">
                    Note
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="clientNote"
                    placeholder="optional"
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                data-te-target="#appointmentScheduler"
                data-te-slide="next"
                className="rounded bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1.5 transition-all ml-auto"
              >
                Continue
              </button>
            </form>
            <button
              className="text-[#3892e7] hover:underline transition-all"
              type="button"
              data-te-target="#appointmentScheduler"
              data-te-slide="prev"
            >
              Back
            </button>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <button
              className="text-[#3892e7] hover:underline transition-all"
              type="button"
              data-te-target="#appointmentScheduler"
              data-te-slide="prev"
            >
              Back
            </button>
          </div>
        </div>
        {/* <button
          class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#appointmentScheduler"
          data-te-slide="prev"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#appointmentScheduler"
          data-te-slide="next"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button> */}
      </div>
    </Fragment>
  );
};

export default AppointmentScheduler;
