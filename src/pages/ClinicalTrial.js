import { Fragment } from "react";
import { FaVialCircleCheck } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";

const ClinicalTrial = () => {
  return (
    <Fragment>
      <section className="bg-[url(../public/img/louis-reed-pwcKF7L4-no-unsplash.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/60 h-[600px] w-full lg:py-24 py-16 px-2">
          <div className="max-w-screen-lg mx-auto flex flex-col w-full h-full items-center justify-center">
            <h1 className="heading text-white text-3xl lg:text-5xl font-semibold text-center">
              Clinical Trial Lab Services
            </h1>
          </div>
        </div>
      </section>
      <section className="lg:pb-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2">
          <div className="bg-light-blue flex items-center lg:justify-end justify-center sm:h-[345px]">
            <div className="lg:w-1/2 md:w-3/4 w-11/12">
              <div className="flex group lg:pr-8">
                {/* <FaCircleCheck className="text-black bg-gray-500/50 rounded-full shrink-0 w-[50px] h-[50px] p-2" /> */}
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Dependable Testing
                  </h3>
                  <p>
                    LabCare.Bio provides consistent delivery of test results for
                    all phases of clinical trials.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start justify-center items-center sm:h-[345px]">
            <div className="lg:w-1/2 md:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pl-8">
                {/* <FaShieldVirus className="text-red-500 bg-red-300/70 rounded-full shrink-0 w-[50px] h-[50px] p-2" /> */}
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Advanced Capabilities
                  </h3>
                  <p>
                    Cutting-edge technology platforms and assays are available
                    across our global locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:justify-end justify-center sm:h-[345px] lg:bg-white bg-[#F4F9FF]">
            <div className="lg:w-1/2 md:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pr-8">
                {/* <MdFormatListBulletedAdd className="text-amber-500 bg-yellow-300/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" /> */}
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Wide Range of Assays
                  </h3>
                  <p>
                    From routine to specialty testing, LabCare.Bio offer over 
                    <strong>3,500 clinical assays</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:bg-[#F4F9FF] bg-white flex lg:justify-start justify-center items-center sm:h-[345px]">
            <div className="lg:w-1/2 md:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pl-8">
                {/* <BsClipboardHeartFill className="text-green-500 bg-green-300/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" /> */}
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Expertise at Every Touchpoint
                  </h3>
                  <p>
                    Dedicated project managers ensure smooth operations from
                    start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F9FF] flex lg:justify-end items-center justify-center sm:h-[345px]">
            <div className="lg:w-1/2 md:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pr-8">
                {/* <BsFileBarGraph className="text-sky-500 bg-sky-400/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" /> */}
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Operational Support & Logistics
                  </h3>
                  <p>Rapid sample delivery, even for challenging protocols.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start justify-center items-center sm:h-[345px]">
            <div className="lg:w-1/2 md:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pl-8">
                {/* <FaUserPlus className="text-purple-600 bg-purple-400/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" /> */}
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Quality Assurance
                  </h3>
                  <p>
                    High standards maintained from sample collection to data
                    management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end items-center justify-center sm:h-[345px]">
            <div className="lg:w-1/2 md:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pr-8">
                {/* <BsFileBarGraph className="text-sky-500 bg-sky-400/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" /> */}
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Expert Staff
                  </h3>
                  <p>
                    Our team of <strong>includes MDs and PhDs</strong>, and{" "}
                    <strong>pathologists</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F9FF] flex lg:justify-start justify-center items-center sm:h-[345px]">
            <div className="lg:w-1/2 md:w-3/4 w-11/12 sm:py-0 py-6">
              <div className="flex group lg:pl-8">
                {/* <FaUserPlus className="text-purple-600 bg-purple-400/40 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" /> */}
                <div className="flex flex-col w-fit ml-4">
                  <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                    Biobanking Solutions
                  </h3>
                  <p>
                    Comprehensive methods for sample collection, storage, and
                    retrieval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl w-full mx-auto px-2 lg:py-24 py-16">
        <div className="grid md:grid-cols-2 gap-16 w-full">
          <div className="justify-center items-center md:flex hidden">
            <img
              src="/img/national-cancer-institute-uVnRa6.jpg"
              className="rounded-lg max-w-[500px] w-full"
              alt="Phase 1 clinical trials"
            />
          </div>
          <div className="flex flex-col md:items-start items-center justify-center gap-16">
            <h2 className="heading lg:text-4xl text-2xl text-blue-primary font-semibold lg:text-start text-center">
              Phase I Clinical Trials:
            </h2>
            <div className="flex flex-col w-full justify-center gap-8">
              <div className="flex gap-2">
                <FaVialCircleCheck className="text-blue-secondary text-3xl shrink-0" />
                <p className="md:text-xl text-lg">
                  LabCare.Bio helps track the impact of new drugs and establish
                  proof of concept faster.
                </p>
              </div>
              <div className="flex gap-2">
                <FaVialCircleCheck className="text-blue-secondary text-3xl shrink-0" />
                <p className="md:text-xl text-lg">
                  Testing investigates dosage, side effects, and safety measures
                  for successful progression to the next phase.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 w-full lg:mt-24 mt-16">
          <div className="flex flex-col md:items-start items-center justify-center gap-16">
            <h2 className="heading lg:text-4xl text-2xl text-blue-primary font-semibold lg:text-start text-center">
              Expert People at every point
            </h2>
            <div className="flex flex-col w-full justify-center gap-8">
              <div className="flex gap-2">
                <LuClipboardCheck className="text-blue-secondary text-3xl shrink-0" />
                <p className="md:text-xl text-lg">Project Management</p>
              </div>
              <div className="flex gap-2">
                <LuClipboardCheck className="text-blue-secondary text-3xl shrink-0" />
                <p className="md:text-xl text-lg">Lab Operations</p>
              </div>
              <div className="flex gap-2">
                <LuClipboardCheck className="text-blue-secondary text-3xl shrink-0" />
                <p className="md:text-xl text-lg">Quality Assurance</p>
              </div>
            </div>
          </div>
          <div className="justify-center items-center md:flex hidden">
            <img
              src="/img/christina-wocintechchat-com-faEf.jpg"
              className="rounded-lg max-w-[500px] w-full"
              alt="Phase 1 clinical trials"
            />
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto w-full px-2 lg:py-24 py-16">
        <h2 className="heading lg:text-4xl text-2xl font-bold text-center mb-16">
          LabCare.Bio is a full-service clinical laboratory offering.
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full max-w-screen-lg mx-auto">
          <div className="flex flex-col md:items-start items-center p-4 lg:h-[240px] hover:shadow-lg transition-all hover:z-20">
            <h4 className="text-xl font-bold heading md:text-start text-center mb-4">
              Genomic Testing
            </h4>
          </div>
          <div className="flex flex-col md:items-start items-center p-4 bg-light-blue lg:h-[240px] hover:shadow-lg transition-all hover:z-20">
            <h4 className="text-xl font-bold heading md:text-start text-center mb-4">
              Flow cytometry
            </h4>
          </div>
          <div className="flex flex-col md:items-start items-center p-4 bg-white md:bg-light-blue lg:bg-white lg:h-[240px] hover:shadow-lg transition-all hover:z-20">
            <h4 className="text-xl font-bold heading md:text-start text-center mb-4">
              Chemistry
            </h4>
          </div>
          <div className="flex flex-col md:items-start items-center p-4 bg-light-blue md:bg-white lg:bg-light-blue lg:h-[240px] hover:shadow-lg transition-all hover:z-20">
            <h4 className="text-xl font-bold heading md:text-start text-center mb-4">
              Hematology
            </h4>
          </div>
          <div className="flex flex-col md:items-start items-center p-4 bg-white lg:h-[240px] hover:shadow-lg transition-all hover:z-20">
            <h4 className="text-xl font-bold heading md:text-start text-center mb-4">
              Microbiology
            </h4>
          </div>
          <div className="flex flex-col md:items-start items-center p-4 bg-light-blue lg:h-[240px] hover:shadow-lg transition-all hover:z-20">
            <h4 className="text-xl font-bold heading md:text-start text-center mb-4">
              Urinalysis
            </h4>
          </div>
          <div className="flex flex-col md:items-start items-center p-4 bg-white md:bg-light-blue lg:bg-white lg:h-[240px] hover:shadow-lg transition-all hover:z-20">
            <h4 className="text-xl font-bold heading md:text-start text-center mb-4">
              Toxicology
            </h4>
          </div>
          <div className="flex flex-col md:items-start items-center p-4 bg-light-blue md:bg-white lg:bg-light-blue lg:h-[240px] hover:shadow-lg transition-all hover:z-20">
            <h4 className="text-xl font-bold heading md:text-start text-center mb-4">
              Cell and gene therapy testing
            </h4>
          </div>
          <div className="flex flex-col md:items-start items-center p-4 bg-white lg:h-[240px] hover:shadow-lg transition-all hover:z-20">
            <h4 className="text-xl font-bold heading md:text-start text-center mb-4">
              HIV Testing
            </h4>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ClinicalTrial;
