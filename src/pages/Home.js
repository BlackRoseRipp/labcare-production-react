import { Fragment } from "react";
import { BsClipboardHeartFill, BsFileBarGraph, BsVirus } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { FaCheck, FaCircleCheck, FaShieldVirus } from "react-icons/fa6";
import { MdFormatListBulletedAdd } from "react-icons/md";
import StoreLocator from "../components/Locations/StoreLocator";
import useWindowSize from "../hooks/useWindowSize";
import LocationList from "../store/LOCATIONS.json";

const Home = () => {
  const size = useWindowSize();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Fragment>
      <section className="bg-[url(../public/img/woman-collecting-blood-samples-for-testing-on-diff-2022-12-16-06-56-53-utc-scaled-1.jpg)] bg-cover bg-center bg-no-repeat lg:h-[667px]">
        <div className="w-full h-full mobile-testing-slide">
          <div className="max-w-screen-xl mx-auto w-full h-full px-2 py-16 lg:py-24 flex flex-col justify-center items-center gap-8">
            <h1 className="heading text-white text-3xl lg:text-5xl font-semibold text-center">
              "Providing Revolutionizing Advanced Genotyping Technology" for HIV
              Treatment
            </h1>
            <h4 className="heading text-white lg:text-3xl text-xl font-medium text-center max-w-screen-lg">
              Highlighting the FDA authorization and the assay's significance in
              personalized HIV treatment.
            </h4>
          </div>
        </div>
      </section>
      <section
        className="py-16 lg:py-24 max-w-screen-xl px-2 w-full mx-auto"
        id="about"
      >
        <h2 className="heading text-4xl font-semibold text-center mb-16">
          Introduction to the Technology
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center lg:items-end items-center gap-8">
            <h4 className="text-blue-primary text-center lg:text-end text-2xl font-semibold">
              Benefits of Next Generation Sequencing (NGS)
            </h4>
            <p className="lg:text-end text-center">
              NGS has revolutionized genomic research and clinical diagnostics
              by providing faster, more cost-effective, and higher-throughput
              sequencing capabilities, allowing for a deeper understanding of
              genetic variations, disease mechanisms, and personalized medicine.
            </p>
          </div>
          <div className="justify-center items-center lg:flex hidden">
            <img
              src="/img/Image_1.jpg"
              className="w-[500px] rounded-lg"
              alt="Benefits of NGS"
            />
          </div>
        </div>
        <h3 className="heading text-4xl font-semibold text-center mt-24 mb-16">
          Getting the right HIV Treatment for you
        </h3>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="justify-center items-center lg:flex hidden">
            <img
              src="/img/patient-telling-doctor-about-sym.jpg"
              className="w-[500px] rounded-lg"
              alt="Benefits of NGS"
            />
          </div>
          <div className="flex flex-col justify-center lg:items-start items-center gap-12">
            <h4 className="text-blue-primary text-center lg:text-start text-2xl font-semibold">
              Impact of Drug Resistance Mutations:
            </h4>
            <div className="flex flex-col justify-center w-fit gap-8">
              <div className="flex">
                <BsVirus className="text-blue-secondary text-3xl shrink-0" />
                <p className="ml-2 lg:text-xl">
                  Statistics on the rise of HIV drug resistance globally
                </p>
              </div>
              <div className="flex">
                <BsVirus className="text-blue-secondary text-3xl shrink-0" />
                <p className="ml-2 lg:text-xl">
                  Significance of tailored treatment for patients undergoing
                  antiviral therapy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-24 py-16 w-full">
        <h4 className="lg:text-3xl text-xl text-blue-primary font-semibold text-center heading mb-12 max-w-screen-lg px-2 mx-auto">
          Tailored treatment, also known as personalized or precision medicine,
          holds significant importance in HIV patient care due to several key
          reasons:
        </h4>
        <div className="grid lg:grid-cols-2">
          <div className="bg-light-blue flex items-center justify-end sm:h-[345px]">
            <div className="sm:w-3/4 w-11/12">
              <div className="flex group lg:pr-8">
                <FaCircleCheck className="text-black bg-gray-500/50 rounded-full shrink-0 w-[50px] h-[50px] p-2" />
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Effectiveness and Efficacy
                  </h3>
                  <p>
                    Tailored treatment allows healthcare providers to select
                    antiretroviral therapies (ART) that specifically target the
                    patient's strain of the HIV virus. By identifying drug
                    resistance mutations through tests like the Sentosa SQ HIV
                    Genotyping Assay, healthcare providers can choose
                    medications that are more likely to be effective in
                    suppressing the patient's virus, thereby improving treatment
                    outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start justify-center items-center sm:h-[345px]">
            <div className="sm:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pl-8">
                <FaShieldVirus className="text-red-500 bg-red-300/70 rounded-full shrink-0 w-[50px] h-[50px] p-2" />
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Reduced Drug Resistance
                  </h3>
                  <p>
                    HIV can mutate over time, leading to drug resistance,
                    wherein the virus becomes less susceptible to the effects of
                    certain medications. Tailoring treatment helps in avoiding
                    or managing drug resistance by using drugs that target the
                    patient's specific viral mutations, thus reducing the risk
                    of treatment failure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:justify-end justify-center sm:h-[345px] lg:bg-white bg-[#F4F9FF]">
            <div className="sm:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pr-8">
                <MdFormatListBulletedAdd className="text-amber-500 bg-yellow-300/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" />
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Improved Adherence and Tolerance
                  </h3>
                  <p>
                    Tailored treatment considers individual patient factors such
                    as tolerability to certain drugs, potential side effects,
                    and adherence to medication regimens. By choosing
                    medications that align with the patient's tolerance and
                    lifestyle, healthcare providers can enhance treatment
                    adherence, leading to better outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:bg-[#F4F9FF] bg-white flex lg:justify-start justify-center items-center sm:h-[345px]">
            <div className="sm:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pl-8">
                <BsClipboardHeartFill className="text-green-500 bg-green-300/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" />
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Long-term Health Management
                  </h3>
                  <p>
                    Tailored treatment aims to suppress the virus effectively
                    while minimizing adverse effects. Successfully managing HIV
                    through personalized treatment helps patients maintain a
                    higher quality of life, reduces the risk of complications,
                    and supports long-term health and well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F9FF] flex lg:justify-end items-center justify-center sm:h-[345px]">
            <div className="sm:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pr-8">
                <BsFileBarGraph className="text-sky-500 bg-sky-400/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" />
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Resource Optimization
                  </h3>
                  <p>
                    Personalized treatment approaches help optimize healthcare
                    resources by avoiding unnecessary treatments that may not be
                    effective for a particular patient. This targeted approach
                    can potentially reduce healthcare costs associated with
                    ineffective therapies or managing complications arising from
                    drug resistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start justify-center items-center sm:h-[345px]">
            <div className="sm:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pl-8">
                <FaUserPlus className="text-purple-600 bg-purple-400/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" />
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Empowerment and Patient-Centered Care
                  </h3>
                  <p>
                    Tailored treatments involve active participation from
                    patients in decision-making about their healthcare. This
                    approach encourages patient involvement and collaboration
                    with healthcare providers, fostering a sense of empowerment
                    and promoting patient-centered care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="lg:text-2xl text-lg font-medium text-center mt-12 max-w-screen-lg px-2 mx-auto">
          Overall, tailored treatment in HIV care is crucial for optimizing
          therapeutic outcomes, minimizing drug resistance, improving patient
          adherence, and supporting long-term health management, thereby
          enhancing the overall quality of life for individuals living with HIV.
        </h6>
      </section>
      <section
        className="max-w-screen-xl w-full px-2 mx-auto lg:py-24 py-16"
        id="technology"
      >
        <h2 className="heading text-center lg:text-5xl text-3xl font-semibold mb-16">
          Technology
        </h2>
      </section>
      <section
        className="max-w-screen-xl w-full px-2 mx-auto lg:py-24 py-16"
        id="benefits"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="justify-center items-center lg:flex hidden">
            <img
              src="/img/doctor-nurse-working-with-tablet.jpg"
              className="w-[500px] rounded-lg"
              alt="Advantages of Assay"
            />
          </div>
          <div className="flex flex-col justify-center lg:items-start items-center gap-12">
            <h4 className="text-blue-primary text-center lg:text-start text-2xl font-semibold">
              Advantages of the Assay:
            </h4>
            <div className="flex flex-col justify-center w-fit gap-8">
              <div className="flex">
                <FaCheck className="text-blue-secondary text-3xl shrink-0" />
                <p className="ml-2 lg:text-xl">
                  Personalized insights to treatment selection for better
                  patient outcomes
                </p>
              </div>
              <div className="flex">
                <FaCheck className="text-blue-secondary text-3xl shrink-0" />
                <p className="ml-2 lg:text-xl">
                  Lowering viral loads and enhancing effectiveness of antiviral
                  therapies
                </p>
              </div>
              <div className="flex">
                <FaCheck className="text-blue-secondary text-3xl shrink-0" />
                <p className="ml-2 lg:text-xl">
                  Role in addressing increasing HIV drug resistance rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-blue lg:py-24 py-16" id="contact-us">
        <h2 className="heading text-3xl lg:text-5xl text-center max-w-screen-lg font-semibold mb-12 mx-auto">
          Find a Location Near You
        </h2>
        <div className="max-w-screen-xl px-2 w-full mx-auto">
          <StoreLocator
            locations={LocationList}
            src="https://www.google.com/maps/d/u/1/embed?mid=1t4t-nOECLsl8qrOi6BYdzBdC6ma5EYg&ehbc=2E312F"
          />
          <div className="mt-16 flex items-center justify-center">
            <a
              href="/location"
              className="btn-primary font-medium bg-white border border-blue-secondary text-blue-primary hover:text-white hover:bg-blue-primary hover:border-blue-primary"
            >
              More Location Details
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-2 w-full lg:py-24 py-16">
        <h2 className="text-center heading lg:text-5xl text-3xl font-semibold text-blue-primary mb-16">
          Get In Touch
        </h2>
        <div className="flex justify-center items-center">
          <a
            href="/contact-us"
            className="btn-primary font-medium bg-white border border-blue-secondary text-blue-primary hover:text-white hover:bg-blue-primary hover:border-blue-primary"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
