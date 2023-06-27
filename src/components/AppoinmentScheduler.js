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
import { BsCircleFill } from "react-icons/bs";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGlobe,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaRegClock,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import { Carousel, initTE } from "tw-elements";

const AppointmentScheduler = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [timeslot, setTimeslot] = useState(null);
  const [clientBirthdate, setClientBirthdate] = useState(null);
  const [additionalPersons, setAdditonalPersons] = useState([
    { name: "", email: "", phone: "" },
  ]);
  const [weekday, setWeekday] = useState(null);

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

  const getMonthName = (int) => {
    let month = "";
    switch (int) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      case 12:
        month = "December";
        break;
      default:
        month = "";
    }

    return month;
  };

  const confirmSelection = (selection) => {
    if (isMonday(startDate)) {
      setWeekday("Monday");
    }
    if (isTuesday(startDate)) {
      setWeekday("Tuesday");
    }
    if (isWednesday(startDate)) {
      setWeekday("Wednesday");
    }
    if (isThursday(startDate)) {
      setWeekday("Thursday");
    }
    if (isFriday(startDate)) {
      setWeekday("Friday");
    }
    if (isSunday(startDate)) {
      setWeekday("Sunday");
    }
    setTimeslot(selection);
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
            <h2 className="text-3xl pb-4 border-b border-gray-200 flex items-center">
              <FaRegCalendarAlt className="shrink-0 mr-2" /> Choose a day and
              time
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
                    onClick={() => confirmSelection(slot)}
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
              className="text-[#3892e7] hover:underline transition-all flex items-center"
              type="button"
              data-te-target="#appointmentScheduler"
              data-te-slide="prev"
            >
              <FaArrowLeft className="shrink-0 mr-1" />
              Back
            </button>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <h2 className="text-3xl pb-4 border-b border-gray-200 flex items-center">
              <FaUserAlt className="shrink-0 mr-2" /> Enter Your Information
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
                className="rounded bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1.5 transition-all ml-auto flex items-center justify-center gap-2"
              >
                Continue <FaArrowRight className="shrink-0 h-[14px] w-[14px]" />
              </button>
            </form>
            <button
              className="text-[#3892e7] hover:underline transition-all flex items-center"
              type="button"
              data-te-target="#appointmentScheduler"
              data-te-slide="prev"
            >
              <FaArrowLeft className="shrink-0 mr-1" />
              Back
            </button>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <h2 className="text-2xl pb-4 border-b border-gray-200 flex items-center">
              <FaUsers className="shrink-0 mr-2" /> Add more people to this
              appointment?
            </h2>
            <div className="flex flex-col gap-4">
              {additionalPersons.map((person, index) => (
                <div className="rounded p-4 bg-neutral-100 border-neutral-300 border">
                  <div className="flex items-center justify-between">
                    <h4 className="text-neutral-700 text-lg font-medium">
                      {"Additional Person " + (index + 1)}
                    </h4>
                    <button
                      className="text-neutral-500 hover:underline"
                      type="button"
                      onClick={() =>
                        setAdditonalPersons(additionalPersons.slice(0, -1))
                      }
                    >
                      remove
                    </button>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-8 mt-4">
                    <div className="flex flex-col">
                      <label
                        className="text-sm font-bold mb-2"
                        for={"additionalName" + index}
                      >
                        Name
                      </label>
                      <input
                        className="form-input"
                        type="name"
                        id={"additionalName" + index}
                        placeholder="Full name"
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="text-sm font-bold mb-2"
                        for={"additionalEmail" + index}
                      >
                        Email
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        id={"additionalEmail" + index}
                        placeholder="Email Address"
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="text-sm font-bold mb-2"
                        for={"additionalPhone" + index}
                      >
                        Phone
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id={"additionalPhone" + index}
                        placeholder="Phone Number"
                      ></input>
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className={classNames(
                  additionalPersons.length > 7
                    ? "hidden"
                    : "flex items-center justify-center",
                  "bg-[#337ab7] border-[#2e6da4] hover:bg-[#2e6da4] text-white text-sm px-3 py-1.5 rounded transition-all"
                )}
                onClick={() =>
                  setAdditonalPersons([
                    ...additionalPersons,
                    { name: "", email: "", phone: "" },
                  ])
                }
              >
                Add Another Person
              </button>
            </div>
            <div className="flex items-center justify-between mt-8">
              <button
                className="text-[#3892e7] hover:underline transition-all flex items-center"
                type="button"
                data-te-target="#appointmentScheduler"
                data-te-slide="prev"
              >
                <FaArrowLeft className="shrink-0 mr-1" />
                Back
              </button>
              <button
                type="button"
                data-te-target="#appointmentScheduler"
                data-te-slide="next"
                className="rounded bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1.5 transition-all ml-auto"
              >
                Continue
              </button>
            </div>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <h2 className="text-3xl pb-4 border-b border-gray-200">
              Please confirm your request
            </h2>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center">
                <BsCircleFill className="text-cyan-200 shrink-0 w-4 h-4" />
                <h3 className="font-bold ml-4">Blood Test</h3>
              </div>
              <div className="flex items-center">
                <FaRegClock className="text-emerald-500 shrink-0 w-4 h-4" />
                <h3 className="ml-4 text-emerald-500">
                  {timeslot?.hour +
                    ":" +
                    (timeslot?.minute === 0 ? "00" : timeslot?.minute) +
                    (timeslot?.hour < 12 && timeslot?.hour > 7
                      ? " AM"
                      : " PM") +
                    " - " +
                    weekday +
                    ", " +
                    getMonthName(startDate.getMonth()) +
                    " " +
                    startDate.getDay() +
                    ", " +
                    startDate.getFullYear()}
                </h3>
              </div>
              <div className="flex items-center">
                <FaGlobe className="shrink-0 w-4 h-4" />
                <h3 className="ml-4">Eastern Time</h3>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="shrink-0 w-4 h-4" />
                <h3 className="ml-4">
                  LabQ Diagnostic - Boro Park Location - 4510 16th Ave,
                  Brooklyn, NY 11204, USA
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center w-full mt-8 gap-8">
              <button
                onClick={() => {
                  alert(
                    "Uh oh! This function could not be carried out.\n\nPlease contact us at (718)247-8000 or psc1001@labq.com to make your appointment."
                  );
                }}
                className="rounded bg-green-600 hover:bg-green-700 text-lg font-medium text-white px-3 py-1.5 transition-all flex items-center"
              >
                Confirm Request
              </button>
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
        </div>
      </div>
    </Fragment>
  );
};

export default AppointmentScheduler;
