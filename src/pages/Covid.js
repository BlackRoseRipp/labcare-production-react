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
        <div className="w-full" id="covidFAQ">
          <div class="mb-6 w-full rounded-none border-b-2 border-[#3892e7] shadow-[0_4px_20px_0_rgba(0,0,0,0.20)] bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingOne">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white p-7 text-left text-lg font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#3892e7] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How Is The COVID Test Administered?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingOne"
              data-te-parent="#covidFAQ"
            >
              <p class="px-7 py-4">
                A sample is taken by a qualified technician or other healthcare
                provider from the nose using a swab.
              </p>
            </div>
          </div>
          <div class="mb-6 w-full rounded-none border-b-2 border-[#3892e7] shadow-[0_4px_20px_0_rgba(0,0,0,0.20)] bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingTwo">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white p-7 text-left text-lg font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#3892e7] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What Test Is Being Used?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingTwo"
              data-te-parent="#covidFAQ"
            >
              <p class="px-7 py-4">
                The test for SARS-CoV-2 – the virus that causes COVID-19 –
                detects genetic material from the virus. It uses PCR – a
                technology that amplifies the genes so that they can be
                detected.
                <br />
                <br />
                The test looks for specific SARS-CoV-2 genetic material. An
                initial screening test may be positive because of the presence
                of other, non SARS CoV-2 coronaviruses. If your sample tests
                positive a further test for another target gene from the virus
                will be used to confirm it.
                <br />
                <br />
                Please Note: The Accula SARS-CoV-2 is recommended only for
                travel, to verify the status it is suggested to use a
                traditional PCR which is the most accurate.
                <br />
                <br />
                *Rapid Testing (antigen) with immediate results are available as
                well.
              </p>
            </div>
          </div>
          <div class="mb-6 w-full rounded-none border-b-2 border-[#3892e7] shadow-[0_4px_20px_0_rgba(0,0,0,0.20)] bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingThree">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white p-7 text-left text-lg font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#3892e7] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Can I Show Up To A Testing Site Without An Appointment?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingThree"
              data-te-parent="#covidFAQ"
            >
              <p class="px-7 py-4">Yes, Testing is done by walk-ups.</p>
            </div>
          </div>
          <div class="mb-6 w-full rounded-none border-b-2 border-[#3892e7] shadow-[0_4px_20px_0_rgba(0,0,0,0.20)] bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingFour">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white p-7 text-left text-lg font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#3892e7] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Do I Need Prescription From My Doctor?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingFour"
              data-te-parent="#covidFAQ"
            >
              <p class="px-7 py-4">
                Please note: Beginning May 10th, a prescription from your Doctor
                will be required for covid testing.
              </p>
            </div>
          </div>
          <div class="mb-6 w-full rounded-none border-b-2 border-[#3892e7] shadow-[0_4px_20px_0_rgba(0,0,0,0.20)] bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingFive">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white p-7 text-left text-lg font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#3892e7] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                How Much Will It Cost?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingFive"
              data-te-parent="#covidFAQ"
            >
              <p class="px-7 py-4">
                Covid PCR. Antigen and Antibody tests are covered by your health
                insurance and have a $0 out of pocket costs.
                <br />
                <br />
                LabQ will bill your health insurance for these services. And you
                will have no responsibility at all for any amount not covered by
                your insurance provider (co-pays, etc).
                <br />
                <br />
                Please feel free to email us 24/7 at{" "}
                <a
                  href="mailto:billing@labq.com"
                  className="underline-animation text-[#3892e7] after:bg-[#3892e7]"
                >
                  billing@labq.com
                </a>{" "}
                or contact us live 24/7 at 888.LABQ.247 with any billing
                concerns you may have.
              </p>
            </div>
          </div>
          <div class="mb-6 w-full rounded-none border-b-2 border-[#3892e7] shadow-[0_4px_20px_0_rgba(0,0,0,0.20)] bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingSix">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white p-7 text-left text-lg font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#3892e7] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                I Don't Have Insurance. Do I Have To Pay?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingSix"
              data-te-parent="#covidFAQ"
            >
              <p class="px-7 py-4">
                According to the latest update from the US HRSA, they will no
                longer cover the costs of the tests if there is no proof of
                insurance.
                <br />
                <br />
                The Local Health Department encourages uninsured individuals to
                check with their healthcare provider or other testing location
                in advance to learn how this announcement impacts them.
                <br />
                Learn more:{" "}
                <a
                  href="https://www.hrsa.gov/CovidUninsuredClaim"
                  target="_blank"
                  className="underline-animation text-[#3892e7] after:bg-[#3892e7]"
                  rel="noreferrer"
                >
                  https://www.hrsa.gov/CovidUninsuredClaim
                </a>
              </p>
            </div>
          </div>
          <div class="mb-6 w-full rounded-none border-b-2 border-[#3892e7] shadow-[0_4px_20px_0_rgba(0,0,0,0.20)] bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingSeven">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white p-7 text-left text-lg font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#3892e7] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseSeven"
                aria-expanded="false"
                aria-controls="flush-collapseSeven"
              >
                How Long Will It Take To Get The Results?
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingSeven"
              data-te-parent="#covidFAQ"
            >
              <p class="px-7 py-4">
                *Due to a significant increase in COVID testing, please allow 1
                to 2 days for results.
              </p>
            </div>
          </div>
          <div class="mb-6 w-full rounded-none border-b-2 border-[#3892e7] shadow-[0_4px_20px_0_rgba(0,0,0,0.20)] bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingEight">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white p-7 text-left text-lg font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#3892e7] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseEight"
                aria-expanded="false"
                aria-controls="flush-collapseEight"
              >
                How Can I Access My Results?
              </button>
            </h2>
            <div
              id="flush-collapseEight"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingEight"
              data-te-parent="#covidFAQ"
            >
              <p class="px-7 py-4">
                Results will be provided when ready on the LabQ{" "}
                <a
                  href="https://app.labq.com"
                  target="_blank"
                  className="underline-animation text-[#3892e7] after:bg-[#3892e7]"
                  rel="noreferrer"
                >
                  Patient Portal
                </a>
                <br />
                <br />
                If you registered with your email address, you will receive an
                email when the results are available.
                <br />
                <br />
                If you do not have access to email, you can call our patient
                center{" "}
                <a
                  href="tel:888-LabQ-247"
                  className="underline-animation text-[#3892e7] after:bg-[#3892e7]"
                >
                  888-LabQ-247
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Covid;
