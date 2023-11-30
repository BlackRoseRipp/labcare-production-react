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
        <h4 className="text-blue-primary text-2xl mb-4">
          150 New Scotland Ave, Albany, NY 12208
        </h4>
        <div className="flex items-center justify-center gap-x-6">
          <div className="flex justify-center items-center w-full">
            <img
              className="w-full"
              src="/img/NTC-Albany.jpg"
              alt="Brooklyn - Sunset Park Location"
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
              href="tel:(518)293-0204"
              className="text-blue-primary text-lg font-medium"
            >
              (518) 293-0204
            </a>
            <a
              href="mailto:drugtest@ntclab.com"
              className="text-blue-primary text-lg font-medium"
            >
              drugtest@ntclab.com
            </a>
            <a
              href="https://maps.app.goo.gl/URJPFjXqZz7QdbV78"
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
        <h4 className="text-blue-primary text-2xl mb-4">
          16311 Ventura Blvd # 888, Encino, CA 91436
        </h4>
        <div className="flex items-center justify-center gap-x-6">
          <div className="flex justify-center items-center w-full">
            <img
              className="w-full"
              src="/img/Encino.jpg"
              alt="Brooklyn - Boro Park Location"
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
              href="tel:(818)789-2585"
              className="text-blue-primary text-lg font-medium"
            >
              (818) 789-2585
            </a>
            <a
              href="mailto:carebio@labcare.bio"
              className="text-blue-primary text-lg font-medium"
            >
              carebio@labcare.bio
            </a>
            <a
              href="https://maps.app.goo.gl/JGkvZiRBnrDLoSc69"
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
          <div className="flex justify-center items-center w-full">
            <img
              className="w-full"
              src="/img/Picture1-1.png"
              alt="New Jersey - Mount Olive Location"
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
              href="mailto:helpdesk@labcare.bio"
              className="text-blue-primary text-lg font-medium"
            >
              helpdesk@labcare.bio
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
