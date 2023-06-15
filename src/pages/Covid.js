import { Fragment, useEffect } from "react";
import { RxCaretRight } from "react-icons/rx";
import { Collapse, initTE } from "tw-elements";

const Covid = () => {
  useEffect(() => {
    initTE({ Collapse });
  }, []);
  return (
    <Fragment>
      <section className="bg-[#ECECEC] h-[566px]">
        <div className="bg-[url(../public/img/lab-Q-covid.png)] bg-no-repeat bg-right bg-contain h-full">
          <div className="max-w-6xl mx-auto flex items-center h-full">
            <h1 className="w-3/5 heading font-bold text-6xl">
              Quick and accurate results for COVID-19 testing.
            </h1>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-16">
        <div className="flex gap-4 py-12 border-b border-neutral-500">
          <div className="flex flex-col gap-8">
            <a
              href="/covid-mobile-testing"
              className="text-center w-fit border border-black shadow-xl bg-white p-4 text-lg font-medium hover:shadow-sm hover:text-[#3892e7]"
            >
              CLICK HERE TO FIND A COVID TESTING LOCATION NEAR YOU{" "}
              <RxCaretRight className="inline-block text-2xl" />
            </a>
            <h2 className="font-semibold text-4xl">
              Testing Locations
              <br />
              <span className="text-[#3892e7] font-bold">
                Wherever you are.
              </span>
            </h2>
            <p className="text-xl">
              You have a life going on and cannot always stop drop and roll into
              our lab. But that shouldn’t keep you back from staying safe and
              tested at all times.
            </p>
            <p className="text-neutral-500">
              ** Please note: Beginning May 10th, a prescription from your
              Doctor will be required for covid testing.
            </p>
          </div>
          <div className="w-3/5 shrink-0">
            <a href="/covid-mobile-testing">
              <img
                className="w-full"
                src="/img/labq-covid-testing.jpg"
                alt="Covid Mobile Testing"
              />
            </a>
          </div>
        </div>
        <div className="flex gap-4 py-12 border-b border-neutral-500">
          <div className="w-1/2 shrink-0">
            <img
              className="w-full"
              src="/img/labq-mobile-slider-2.png"
              alt="Covid Mobile Testing"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-4xl">
              Turnaround Time​{" "}
              <span className="text-[#3892e7] font-bold">Matters.</span>
            </h2>
            <p className="text-xl">
              When time is of the essence, every hour saved is an hour earned.
              <br />
              <br />
              *Due to a significant increase in COVID testing,{" "}
              <span className="font-bold">
                please allow 1 to 2 days for results.
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-4 py-12 border-b border-neutral-500">
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-4xl">
              It all boils down to{" "}
              <span className="text-[#3892e7] font-bold">technology.</span>
            </h2>
            <p className="text-xl">
              We are one of the few that can brag about owning a PerkinElmer -
              Rated by the FDA as the most sensitive COVID-19 test.
              <br />
              <br />
              Bragging aside, what’s it to you?​
            </p>
          </div>
          <div className="w-3/5 shrink-0">
            <img
              className="w-full"
              src="/img/labq-auto2-1-1024x576.jpg"
              alt="Covid Mobile Testing"
            />
          </div>
        </div>
        <div className="flex gap-4 py-12 border-b border-neutral-500">
          <div className="w-1/2 shrink-0">
            <img
              className="w-full"
              src="/img/labq-portal-1024x683.jpg"
              alt="Covid Mobile Testing"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-4xl">
              Test Results
              <br />
              <br />
              <span className="text-[#3892e7] font-bold">
                The after matters too.
              </span>
            </h2>
            <p className="text-xl">
              Test results should be easy to access and easier to decipher.
              <br />
              <br />
              You will receive fast and easy access to your test results.
              <br />
              <br />
              How easy? Just a matter of logging in to our portal and seeing
              results you can read and understand.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl w-full mx-auto pb-24">
        <div className="w-full" id="accordionFlushExample">
          <div class="w-full rounded-none border-b border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingOne">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="!visible border-0"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="flush-headingOne"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                Placeholder content for this accordion, which is intended to
                demonstrate the
                <code>.accordion-flush</code> class. This is the first item's
                accordion body.
              </div>
            </div>
          </div>
          <div class="w-full rounded-none border-b border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingTwo">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingTwo"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                Placeholder content for this accordion, which is intended to
                demonstrate the
                <code>.accordion-flush</code> class. This is the second item's
                accordion body. Let's imagine this being filled with some actual
                content.
              </div>
            </div>
          </div>
          <div class="w-full rounded-none border-b border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingThree">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingThree"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                Placeholder content for this accordion, which is intended to
                demonstrate the
                <code>.accordion-flush</code> class. This is the third item's
                accordion body. Nothing more exciting happening here in terms of
                content, but just filling up the space to make it look, at least
                at first glance, a bit more representative of how this would
                look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Covid;
