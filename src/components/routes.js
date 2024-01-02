import React, { Suspense } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const Tests = React.lazy(() => import("../pages/Tests"));
const Appointment = React.lazy(() => import("../pages/Appointment"));
const Insurance = React.lazy(() => import("../pages/Insurance"));
const Forms = React.lazy(() => import("../pages/Forms"));
const Supplies = React.lazy(() => import("../pages/Supplies"));
const Billing = React.lazy(() => import("../pages/Billing"));
const About = React.lazy(() => import("../pages/About"));
const Licensing = React.lazy(() => import("../pages/Licensing"));
const Services = React.lazy(() => import("../pages/Services"));
const ClinicalTrial = React.lazy(() => import("../pages/ClinicalTrial"));
const Locations = React.lazy(() => import("../pages/Locations"));
const CovidLocations = React.lazy(() => import("../pages/CovidLocations"));
const Covid = React.lazy(() => import("../pages/Covid"));
const News = React.lazy(() => import("../pages/news/News"));
const Article = React.lazy(() => import("../pages/news/Article"));
const Careers = React.lazy(() => import("../pages/careers/Careers"));
const CareerListing = React.lazy(() =>
  import("../pages/careers/CareerListing")
);
const Contact = React.lazy(() => import("../pages/Contact"));
const Accessibility = React.lazy(() => import("../pages/legal/Accessibility"));
const Privacy = React.lazy(() => import("../pages/legal/Privacy"));
const Terms = React.lazy(() => import("../pages/legal/Terms"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));

export const pages = [
  { path: "/", component: <Home /> },
  { path: "/insurance", component: <Insurance /> },
  { path: "/forms", component: <Forms /> },
  { path: "/supplies", component: <Supplies /> },
  { path: "/billing", component: <Billing /> },
  { path: "/about", component: <About /> },
  { path: "/accredition-licensing", component: <Licensing /> },
  { path: "/services", component: <Services /> },
  { path: "/clinical-trials", component: <ClinicalTrial /> },
  { path: "/appointment", component: <Appointment /> },
  { path: "/location", component: <Locations /> },
  /* { path: "/covid-mobile-testing", component: <CovidLocations /> },
  { path: "/covid", component: <Covid /> }, */
  { path: "/news", component: <News /> },
  { path: "/news/:id", component: <Article /> },
  { path: "/careers", component: <Careers /> },
  { path: "/careers/:id", component: <CareerListing /> },
  { path: "/accessibility-statement", component: <Accessibility /> },
  { path: "/privacy-policy", component: <Privacy /> },
  { path: "/terms-and-conditions", component: <Terms /> },
  { path: "/contact-us", component: <Contact /> },
  { path: "*", component: <PageNotFound /> },
];

//Replace fallback with real loading page
export const routes = () => {
  return (
    <Suspense
      fallback={
        <h3 style={{ textAlign: "center", padding: "50px" }}>Loading...</h3>
      }
    >
      <Routes>
        {pages.map((page) => {
          return <Route path={page.path} exact element={page.component} />;
        })}
      </Routes>
    </Suspense>
  );
};
