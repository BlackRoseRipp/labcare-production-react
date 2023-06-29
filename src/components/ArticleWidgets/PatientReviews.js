import { Fragment } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const PatientReviews = () => {
  return (
    <Fragment>
      <div className="border-t border-[#3892e7] mb-12 w-full"></div>
      <section className="grid lg:grid-cols-3 gap-x-8 gap-y-4 my-16 mx-8">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-medium">
            What Our Patients Say About Us!
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJhe2dt2ZEwokR8-6ETbK0rZY"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md bg-white p-2 flex items-center hover:bg-slate-100 border-t-4 border-green-400 gap-x-4 transition-all"
          >
            <FcGoogle className="w-[44px] h-[44px]" />
            <div className="flex flex-col justify-center">
              <p className="text-sm text-neutral-700 text-start">
                Google Rating
              </p>
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
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://facebook.com/108216451137554/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer shadow-md bg-white p-2 flex items-center hover:bg-slate-100 border-t-4 border-green-400 gap-x-4 transition-all"
          >
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
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default PatientReviews;
