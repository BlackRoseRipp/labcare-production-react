import { Fragment } from "react";
import EmbedMap from "../components/Locations/EmbedMap";

const Contact = () => {
  return (
    <Fragment>
      <section>
        <EmbedMap src="https://www.google.com/maps/d/u/1/embed?mid=1t4t-nOECLsl8qrOi6BYdzBdC6ma5EYg&ehbc=2E312F" />
      </section>
      <section className="mt-[-150px] z-40">
        <div className="max-w-6xl mx-auto p-10 rounded-lg shadow-[0_0_10px_10px_rgba(0,0,0,0.25)] bg-[#F4F9FF] grid md:grid-cols-3 gap-12">
          <div className="flex flex-col">
            <img
              className="w-full h-[244px] rounded-lg"
              src="/img/NTC-Albany.jpg"
              alt="NTC Lab Location"
            />
            <h2 className="text-2xl font-bold heading my-4">NTC Lab</h2>
            <div className="flex flex-col">
              <h5 className="text-neutral-400 mb-4">
                150 New Scotland Ave,
                <br />
                Albany, NY 12208
              </h5>
              <a href="tel:(518)293-0204" className="text-[#3892E7] mb-4 w-fit">
                (518) 293-0204
              </a>
              <a
                href="mailto:drugtest@ntclab.com"
                className="text-[#3892E7] mb-4 w-fit"
              >
                drugtest@ntclab.com
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/URJPFjXqZz7QdbV78"
              className="bg-white border border-black rounded-lg font-semibold py-4 text-center px-8"
            >
              Get Directions
            </a>
          </div>
          <div className="flex flex-col">
            <img
              className="w-full h-[244px] rounded-lg"
              src="/img/Picture1-1.png"
              alt="New Jersey - Mount Olive Location"
            />
            <h2 className="text-2xl font-bold heading my-4">
              New Jersey Laboratory
            </h2>
            <div className="flex flex-col">
              <h5 className="text-neutral-400 mb-4">
                100 International Dr
                <br />
                Mount Olive, NJ 07828
              </h5>
              <a
                href="tel:(732) 359-5227"
                className="text-[#3892E7] mb-4 w-fit"
              >
                (732) 359-5227
              </a>
              <a
                href="mailto:helpdesk@labcare.bio"
                className="text-[#3892E7] mb-4 w-fit"
              >
                helpdesk@labcare.bio
              </a>
            </div>

            <a
              href="https://g.page/hqcenter-mount-olive?share"
              className="bg-white border border-black rounded-lg font-semibold py-4 text-center px-8"
            >
              Get Directions
            </a>
          </div>
          <div className="flex flex-col">
            <img
              className="w-full h-[244px] rounded-lg"
              src="/img/Encino.jpg"
              alt="Encino Location"
            />
            <h2 className="text-2xl font-bold heading my-4">Encino Location</h2>
            <div className="flex flex-col">
              <h5 className="text-neutral-400 mb-4">
                16311 Ventura Blvd # 888,
                <br />
                Encino, CA 91436
              </h5>
              <a href="tel:(818)789-2585" className="text-[#3892E7] mb-4 w-fit">
                (818) 789-2585
              </a>
              <a
                href="mailto:carebio@labcare.bio"
                className="text-[#3892E7] mb-4 w-fit"
              >
                carebio@labcare.bio
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/JGkvZiRBnrDLoSc69"
              className="bg-white border border-black rounded-lg font-semibold py-4 text-center px-8"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
      <section className="py-24 max-w-screen-lg w-full mx-auto">
        <h1 className="heading font-bold text-center text-4xl mb-4 mx-2">
          Get in touch with us
        </h1>
        <form className="grid lg:grid-cols-2 gap-4 w-full px-2">
          <input
            className="form-input lg:col-span-2"
            type="name"
            id="contactNameInput"
            placeholder="Name"
            required
          ></input>
          <input
            className="form-input"
            type="email"
            id="contactEmailInput"
            placeholder="Email"
            required
          ></input>
          <input
            className="form-input"
            type="phone"
            id="contactPhoneInput"
            placeholder="Phone Number"
            required
          ></input>
          <textarea
            className="form-input lg:col-span-2"
            id="contactMessageInput"
            placeholder="Message"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            disabled={false}
            className="lg:col-span-2 btn-primary font-semibold text-2xl text-white bg-[#3892e7]"
          >
            Send
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default Contact;
