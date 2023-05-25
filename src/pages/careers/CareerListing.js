import parse from "html-react-parser";
import { Fragment } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { RxCaretRight } from "react-icons/rx";
import { useParams } from "react-router-dom";
import careerListings from "../../store/CAREER_LISTINGS.json";

const CareerListing = () => {
  const { id } = useParams();

  const job = careerListings.find((listing) => listing.id === id);
  return (
    <Fragment>
      <section className="pt-24 max-w-6xl w-full mx-auto">
        <div className="mx-2 flex items-center gap-x-12">
          <a href="/careers" className="flex items-centertext-neutral-500">
            Careers <RxCaretRight className="shrink-0 text-[#3892E7] w-6 h-6" />
          </a>
          <p className="text-neutral-500">
            {job.secondID?.length > 0 ? job.secondID : job.title}
          </p>
        </div>
      </section>
      <section className="flex items-center justify-between mt-12 max-w-6xl w-full lg:mx-auto mx-2">
        <h1 className="text-4xl">{job.title}</h1>
        <div className="flex items-center">
          <IoLocationSharp className="shrink-0 w-6 h-6 text-[#3892E7]" />
          <h6 className="text-xl ml-2">{job.location}</h6>
        </div>
        <div className="flex items-center">
          <AiOutlineClockCircle className="shrink-0 w-6 h-6 text-[#3892E7]" />
          <h6 className="text-xl ml-2">{job.status}</h6>
        </div>
      </section>
      <section className="job-details max-w-6xl lg:mx-auto mx-2">
        {parse(job.content)}
      </section>
      <section className="max-w-6xl w-full mx-auto py-12">
        <form className="mx-2 grid grid-cols-2 gap-3">
          <input
            className="form-input lg:col-span-2"
            type="name"
            id="jobNameInput"
            placeholder="Name"
            required
          ></input>
          <input
            className="form-input"
            type="phone"
            id="jobPhoneInput"
            placeholder="Phone Number"
            required
          ></input>
          <input
            className="form-input"
            type="email"
            id="jobEmailInput"
            placeholder="Email"
            required
          ></input>
          <textarea
            className="form-input lg:col-span-2"
            id="jobMessageInput"
            placeholder="Message"
            rows="6"
            required
          ></textarea>
          <div className="flex flex-col">
            <label htmlFor="jobResumeInput">Upload Resume</label>
            <input
              className="py-2 px-3 text-slate-500 w-fit file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-[#3892E7] file:text-white cursor-pointer file:cursor-pointer transition-all duration-300"
              type="file"
              id="jobResumeInput"
              required
            ></input>
          </div>
          <button
            type="submit"
            disabled={false}
            className="lg:col-span-2 btn-primary font-semibold text-2xl text-white bg-[#3892e7]"
          >
            Submit
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default CareerListing;
