import { Fragment } from "react";
import { FaRegFilePdf } from "react-icons/fa";

const Licensing = () => {
  return (
    <Fragment>
      <section className="py-8 flex flex-col items-center">
        <h1 className="heading font-semibold text-center sm:text-5xl text-3xl mb-4">
          Accreditation ＆ Licensing
        </h1>
        <h4 className="text-center text-lg">
          Accreditation standards we have achieved, as well as copies of the
          licenses
        </h4>
      </section>
      <section className="max-w-6xl w-full mx-auto px-2 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center w-full py-4 gap-2 shadow-[0_5px_16px_0_rgba(0,0,0,0.25)]">
            <img
              src="/img/clia-logo-1.png"
              className="w-3/4 px-2"
              alt="CLIA Certified"
            />
            <h2 className="text-3xl font-medium text-center">CLIA Certified</h2>
            <h5 className="text-lg text-neutral-400">Compliance Level</h5>
            <a
              href="/info/CBC-CLIA-2023.pdf"
              className="flex items-center mt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="shrink-0 text-[#3892e7] transition-all duration-300 w-4 h-4 mr-4" />
              <p className="text-[#3892e7] font-semibold">More Info</p>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center w-full py-4 gap-2 shadow-[0_5px_16px_0_rgba(0,0,0,0.25)]">
            <img
              src="/img/8b873fec4fe309b1_800x800ar.jpg"
              className="w-3/4 px-2"
              alt="CAP"
            />
            <h2 className="text-3xl font-medium text-center">CAP</h2>
            <a
              href="/info/CBC-CAP-Accreditation.pdf"
              className="flex items-center mt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="shrink-0 text-[#3892e7] transition-all duration-300 w-4 h-4 mr-4" />
              <p className="text-[#3892e7] font-semibold">More Info</p>
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <div className="flex flex-col items-center justify-center w-full py-4 gap-2 shadow-[0_5px_16px_0_rgba(0,0,0,0.25)]">
            <img
              src="/img/NYS_DOH_Wadsworth_copy.png"
              className="w-full px-4"
              alt="NYS DOH"
            />
            <h2 className="text-3xl font-medium text-center mt-8">NYS DOH</h2>
            <h5 className="text-lg text-neutral-400">Care Bio</h5>
            <a
              href="/info/CBC-NY-PERMIT_2023-2024.pdf"
              className="flex items-center mt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="shrink-0 text-[#3892e7] transition-all duration-300 w-4 h-4 mr-4" />
              <p className="text-[#3892e7] font-semibold">More Info</p>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center w-full py-4 gap-2 shadow-[0_5px_16px_0_rgba(0,0,0,0.25)]">
            <img
              src="/img/njdoh_svg.png"
              className="w-full px-2"
              alt="State of NJ DOH"
            />
            <h2 className="text-3xl font-medium text-center">
              State of NJ DOH
            </h2>
            <h5 className="text-lg text-neutral-400">Care Bio</h5>
            <a
              href="/info/CLL_License_Certificate_CLL_10001233_08242023150333.PDF"
              className="flex items-center mt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="shrink-0 text-[#3892e7] transition-all duration-300 w-4 h-4 mr-4" />
              <p className="text-[#3892e7] font-semibold">More Info</p>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center w-full py-4 gap-2 shadow-[0_5px_16px_0_rgba(0,0,0,0.25)]">
            <img
              src="/img/NYS_DOH_Wadsworth_copy.png"
              className="w-full px-4"
              alt="NYS DOH"
            />
            <h2 className="text-3xl font-medium text-center mt-8">NYS DOH</h2>
            <h5 className="text-lg text-neutral-400">NTC Lab</h5>
            <a
              href="/info/NTC-NYDOH.pdf"
              className="flex items-center mt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="shrink-0 text-[#3892e7] transition-all duration-300 w-4 h-4 mr-4" />
              <p className="text-[#3892e7] font-semibold">More Info</p>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Licensing;
