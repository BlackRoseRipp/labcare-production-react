import { Fragment } from "react";

const Locations = () => {
  return (
    <Fragment>
      <div className="bg-blue-primary py-2 grid md:grid-cols-2 gap-x-12">
        <div className="hidden md:flex items-center justify-end">
          <h4 className="text-white font-bold text-lg">
            CHECK OUR COVID-19 TESTING SITES IN NYC, NJ, PA
          </h4>
        </div>
        <div className="flex items-center md:justify-start justify-center">
          <a
            className="border border-white text-white text-xs px-4 py-3 font-medium"
            href="/covid-mobile-testing"
          >
            COVID-19 TESTING SITES
          </a>
        </div>
      </div>
      <section className="max-w-6xl mx-auto pt-24 pb-5">
        <h2 className="heading text-blue-primary font-semibold text-6xl mb-4">
          NTC Labs
        </h2>
        <h4 className="text-blue-primary text-2xl mb-4">TBD</h4>
        <div className="flex items-center justify-center gap-x-6">
          <div className="flex justify-center items-center w-[62%]">
            <img
              className="w-full"
              src="/img/NTC-Albany.jpg"
              alt="Brooklyn - Sunset Park Location"
            />
          </div>
          <div className="hidden md:flex flex-col justify-center items-center gap-6 w-[37.5%]">
            <img className="w-full" src="" alt="Lab Technicians" />
            <img
              className="w-full"
              src="/img/20210620_200027-1.jpg"
              alt="Brooklyn - Sunset Park Van"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F4F9FF] py-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 sm:gap-0 gap-6">
          <div className="flex flex-col sm:items-start items-center gap-4">
            <h3 className="text-blue-primary text-lg font-medium">
              Patient / Office hours
            </h3>
            <p className="text-neutral-500">
              Monday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Tuesday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Wednesday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Thursday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Friday:&nbsp;&nbsp;&nbsp;9AM – 2PM
            </p>
            <p className="text-neutral-500">
              Saturday:&nbsp;&nbsp;&nbsp;Closed
            </p>
            <p className="text-neutral-500">Sunday:&nbsp;&nbsp;&nbsp;Closed</p>
          </div>
          <div className="flex flex-col sm:items-start items-center gap-4">
            <h3 className="text-blue-primary text-lg font-medium">Lab hours</h3>
            <p className="text-neutral-500">Monday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Tuesday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Wednesday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Thursday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Friday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Saturday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Sunday:&nbsp;&nbsp;&nbsp;24/7</p>
          </div>
          <div className="flex flex-col sm:items-start items-center gap-4">
            <a
              href="tel:%20(718)%20534-5227"
              className="text-blue-primary text-lg font-medium"
            >
              (718) 534-5227
            </a>
            <a
              href="mailto:%20helpdesk@labq.com"
              className="text-blue-primary text-lg font-medium"
            >
              helpdesk@labq.com
            </a>
            <a
              href="https://g.page/LabQ-Quick-Results-Save-Lives?share"
              className="border border-black rounded-lg font-semibold py-6 text-center px-8"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto pt-24 pb-5">
        <h2 className="heading text-blue-primary font-semibold text-6xl mb-4">
          Encino
        </h2>
        <h4 className="text-blue-primary text-2xl mb-4">TBD</h4>
        <div className="flex items-center justify-center gap-x-6">
          <div className="flex justify-center items-center w-[62%]">
            <img
              className="w-full"
              src="/img/Encino.jpg"
              alt="Brooklyn - Boro Park Location"
            />
          </div>
          <div className="hidden md:flex flex-col justify-center items-center gap-6 w-[37.8%]">
            <img
              className="w-full"
              src="/img/20201027_112503-1.jpg"
              alt="Nurses"
            />
            <img
              className="w-full"
              src="/img/bp-1-1024x768.jpg"
              alt="Brooklyn - Boro Park Outside"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F4F9FF] py-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 sm:gap-0 gap-6">
          <div className="flex flex-col sm:items-start items-center gap-4">
            <h3 className="text-blue-primary text-lg font-medium">
              Patient / Office hours
            </h3>
            <p className="text-neutral-500">
              Monday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Tuesday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Wednesday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Thursday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Friday:&nbsp;&nbsp;&nbsp;9AM – 2PM
            </p>
            <p className="text-neutral-500">
              Saturday:&nbsp;&nbsp;&nbsp;Closed
            </p>
            <p className="text-neutral-500">
              Sunday:&nbsp;&nbsp;&nbsp;10AM – 6PM
            </p>
          </div>
          <div className="flex flex-col sm:items-start items-center gap-4">
            <h3 className="text-blue-primary text-lg font-medium">Lab hours</h3>
            <p className="text-neutral-500">
              Monday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Tuesday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Wednesday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Thursday:&nbsp;&nbsp;&nbsp;9AM – 5PM
            </p>
            <p className="text-neutral-500">
              Friday:&nbsp;&nbsp;&nbsp;9AM – 2PM
            </p>
            <p className="text-neutral-500">
              Saturday:&nbsp;&nbsp;&nbsp;Closed
            </p>
            <p className="text-neutral-500">
              Sunday:&nbsp;&nbsp;&nbsp;10AM – 6PM
            </p>
          </div>
          <div className="flex flex-col sm:items-start items-center gap-4">
            <a
              href="tel:%20(718)%20247-8000"
              className="text-blue-primary text-lg font-medium"
            >
              (718) 247-8000
            </a>
            <a
              href="mailto:%20psc1001@labq.com"
              className="text-blue-primary text-lg font-medium"
            >
              psc1001@labq.com
            </a>
            <a
              href="https://www.google.com/maps/place/LabQ+Diagnostics/@40.6332191,-73.9857885,17z/data=!3m1!4b1!4m5!3m4!1s0x89c24546f8fcaecf:0x319c55671fe57774!8m2!3d40.633215!4d-73.9835998?shorturl=1"
              className="border border-black rounded-lg font-semibold py-6 text-center px-8"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto pt-24 pb-5">
        <h2 className="heading text-blue-primary font-semibold text-6xl mb-4">
          New Jersey - Mount Olive Location
        </h2>
        <h4 className="text-blue-primary text-2xl mb-4">
          100 International Dr, Mount Olive, NJ 07828
        </h4>
        <div className="flex items-center justify-center gap-x-6">
          <div className="flex justify-center items-center w-[67%]">
            <img
              className="w-full"
              src="/img/Picture1-1.png"
              alt="New Jersey - Mount Olive Location"
            />
          </div>
          <div className="hidden md:flex flex-col justify-center items-center gap-6 w-[32.4%]">
            <img
              className="w-full"
              src="/img/72fe787c-fdec-45bb-8cb1-b66dd12ffc02.jpg"
              alt="Result Analytics"
            />
            <img
              className="w-full"
              src="/img/147478104_759704334961702_2772377612182770053_n-1.jpg"
              alt="Lab Technicians"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F4F9FF] py-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 sm:gap-0 gap-6">
          <div className="flex flex-col sm:items-start items-center gap-4">
            <h3 className="text-blue-primary text-lg font-medium">
              Patient / Office hours
            </h3>
            <p className="text-neutral-500">
              Monday:&nbsp;&nbsp;&nbsp;8AM – 5PM
            </p>
            <p className="text-neutral-500">
              Tuesday:&nbsp;&nbsp;&nbsp;8AM – 5PM
            </p>
            <p className="text-neutral-500">
              Wednesday:&nbsp;&nbsp;&nbsp;8AM – 5PM
            </p>
            <p className="text-neutral-500">
              Thursday:&nbsp;&nbsp;&nbsp;8AM – 5PM
            </p>
            <p className="text-neutral-500">
              Friday:&nbsp;&nbsp;&nbsp;8AM – 2PM
            </p>
            <p className="text-neutral-500">
              Saturday:&nbsp;&nbsp;&nbsp;Closed
            </p>
            <p className="text-neutral-500">Sunday:&nbsp;&nbsp;&nbsp;Closed</p>
          </div>
          <div className="flex flex-col sm:items-start items-center gap-4">
            <h3 className="text-blue-primary text-lg font-medium">Lab hours</h3>
            <p className="text-neutral-500">Monday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Tuesday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Wednesday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Thursday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Friday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Saturday:&nbsp;&nbsp;&nbsp;24/7</p>
            <p className="text-neutral-500">Sunday:&nbsp;&nbsp;&nbsp;24/7</p>
          </div>
          <div className="flex flex-col sm:items-start items-center gap-4">
            <a
              href="tel:%20(732)%20359-5227"
              className="text-blue-primary text-lg font-medium"
            >
              (732) 359-5227
            </a>
            <a
              href="mailto:%20nj@labq.com"
              className="text-blue-primary text-lg font-medium"
            >
              nj@labq.com
            </a>
            <a
              href="https://g.page/hqcenter-mount-olive?share"
              className="border border-black rounded-lg font-semibold py-6 text-center px-8"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Locations;
