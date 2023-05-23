import { Fragment } from "react";
import { FaRegFilePdf } from "react-icons/fa";

const Forms = () => {
  return (
    <Fragment>
      <section className="py-16">
        <h1 className="text-center heading font-semibold text-3xl">Forms</h1>
      </section>
      <section className="bg-neutral-100 py-16">
        <h2 className="text-3xl font-medium text-center">Patient Forms</h2>
        <div className="max-w-xl mx-auto py-8">
          <div className="mx-2 border-t border-black"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8 mx-2">
            <a
              href="/forms/labq_custom_panel_request_form.pdf"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="shrink-0 text-[#3892e7] hover:text-black transition-all duration-300 w-12 h-12 mr-4" />
              <p className="text-[#3892e7] font-semibold text-2xl">
                Custom Panel Request Form
              </p>
            </a>
            <a
              href="/forms/LabQ-Covid-form_Interactive_Feb18.pdf"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="shrink-0 text-[#3892e7] hover:text-black transition-all duration-300 w-12 h-12 mr-4" />
              <p className="text-[#3892e7] font-semibold text-2xl">
                COVID-19 Requisition Form
              </p>
            </a>
            <a
              href="/forms/labq_house_call_request.pdf"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="shrink-0 text-[#3892e7] hover:text-black transition-all duration-300 w-12 h-12 mr-4" />
              <p className="text-[#3892e7] font-semibold text-2xl">
                House Call Request
              </p>
            </a>
            <a
              href="/forms/General-Test-Requisition-3-21.pdf"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="shrink-0 text-[#3892e7] hover:text-black transition-all duration-300 w-12 h-12 mr-4" />
              <p className="text-[#3892e7] font-semibold text-2xl">
                General Test Requisition
              </p>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Forms;
