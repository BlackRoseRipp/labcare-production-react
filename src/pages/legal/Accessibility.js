import { Fragment } from "react";

const Accessibility = () => {
  return (
    <Fragment>
      <div className="container mx-auto pt-36 pb-12">
        <h1 className="heading font-semibold text-6xl text-center">
          Accessibility Statement
        </h1>
      </div>
      <div className="container mx-auto py-24">
        <h4 className="text-xl mb-2 font-medium">General</h4>
        <p className="mb-4">
          <strong>LabCare</strong> strives to ensure that its services are
          accessible to people with disabilities. LabCare has invested a
          significant amount of resources to help ensure that its website is
          made easier to use and more accessible for people with disabilities,
          with the strong belief that every person has the right to live with
          dignity, equality, comfort and independence.
        </p>
        <h4 className="text-xl mb-2 font-medium">
          Accessibility on www.labcare.bio
        </h4>
        <p className="mb-4">
          www.qcare.com makes available the a Website Accessibility Widget that
          is powered by a dedicated accessibility server. The software allows
          www.labq.com to improve its compliance with the Web Content
          Accessibility Guidelines (WCAG 2.1).
        </p>
        <h4 className="text-xl mb-2 font-medium">
          Enabling the Accessibility Menu
        </h4>
        <p className="mb-4">
          The qcare.com accessibility menu can be enabled either by hitting the
          tab key when the page first loads or by clicking the accessibility
          menu icon that appears on the corner of the page. After triggering the
          accessibility menu, please wait a moment for the accessibility menu to
          load in its entirety.
        </p>
        <h4 className="text-xl mb-2 font-medium">Disclaimer</h4>
        <p className="mb-4">
          QCare continues its efforts to constantly improve the accessibility of
          its site and services in the belief that it is our collective moral
          obligation to allow seamless, accessible and unhindered use also for
          those of us with disabilities.
          <br></br>
          <br></br>
          In an ongoing effort to continually improve and remediate
          accessibility issues, we also regularly scan www.labcare.bio with a
          reliable Accessibility Scanner to identify and fix every possible
          accessibility barrier on our site. Despite our efforts to make all
          pages and content on www.qcare.com fully accessible, some content may
          not have yet been fully adapted to the strictest accessibility
          standards. This may be a result of not having found or identified the
          most appropriate technological solution.
        </p>
        <h4 className="text-xl mb-2 font-medium">Here For You</h4>
        <p className="mb-4">
          If you are experiencing difficulty with any content on www.qcare.com
          or require assistance with any part of our site, please contact us
          during normal business hours as detailed below and we will be happy to
          assist.
        </p>
        <h4 className="text-xl mb-2 font-medium">Contact Us</h4>
        <p className="mb-4">
          If you wish to report an accessibility issue, have any questions or
          need assistance, please contact QCare Customer Support as follows:
        </p>
        <a
          className="text-[#3892e7] underline-animation after:bg-[#3892e7]"
          href="mailto:info@labcare.bio"
        >
          info@labcare.bio
        </a>
        <br></br>
        <a
          className="text-[#3892e7] underline-animation after:bg-[#3892e7]"
          href="tel:888.522.7247"
        >
          888.522.7247
        </a>
      </div>
    </Fragment>
  );
};

export default Accessibility;
