import { Fragment } from "react";
import { RxCaretRight } from "react-icons/rx";

const Billing = () => {
  return (
    <Fragment>
      <section className="container mx-auto pt-16">
        <h1 className="heading font-medium text-2xl text-center">
          Patient Billing
        </h1>
        <h5 className="text-xl text-center">
          Paying an invoice is fast and easy thanks to a wide-range of payment
          options.
        </h5>
      </section>
      <section className="max-w-6xl mx-auto py-20 flex lg:flex-row flex-col items-center justify-center gap-12">
        <a
          href="/billing"
          className="flex flex-col lg:w-1/3 w-3/4 px-12 py-20 shadow-[0_5px_16px_0_rgba(0,0,0,0.25)] hover:shadow-none"
        >
          <h5 className="text-lg font-bold mb-2">PAY ONLINE</h5>
          <div className="border-t-2 border-black w-8 mb-1"></div>
          <p className="text-neutral-400">
            Pay Online with Visa or Mastercard using our secure, encrypted
            payment gateway.
          </p>
          <div className="flex items-center py-2 my-2 group">
            <p className="heading mr-2">PAY NOW</p>
            <RxCaretRight className="text-2xl shrink-0 group-hover:translate-x-4 transition-all duration-300" />
          </div>
        </a>
        <a
          /* href="tel:1-888-265-5247" */
          className="flex flex-col lg:w-1/3 w-3/4 px-12 py-20 hover:shadow-[0_5px_16px_0_rgba(0,0,0,0.25)] shadow-none"
        >
          <h5 className="text-lg font-bold mb-2">BY PHONE</h5>
          <div className="border-t-2 border-black w-8 mb-1"></div>
          <p className="text-neutral-400">
            Call the Accounts Receivable Department toll-free
          </p>
          {/* 
          <div className="flex items-center py-2 my-2 group">
            <p className="heading mr-2">888-LABQ-247</p>
            <RxCaretRight className="text-2xl shrink-0 group-hover:translate-x-4 transition-all duration-300" />
          </div> */}
        </a>
        <div className="flex flex-col lg:w-1/3 w-3/4 px-12 py-20 hover:shadow-[0_5px_16px_0_rgba(0,0,0,0.25)] shadow-none">
          <h5 className="text-lg font-bold mb-2">BY MAIL</h5>
          <div className="border-t-2 border-black w-8 mb-1"></div>
          <p className="text-neutral-400">
            Mail to: Accounts Receivable Dept.
            <br />
            100 International Dr.
            <br />
            Budd Lake, NJ 07828
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Billing;
