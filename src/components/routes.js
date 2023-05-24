import React, { Suspense } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const Tests = React.lazy(() => import("../pages/Tests"));
const Insurance = React.lazy(() => import("../pages/Insurance"));
const Forms = React.lazy(() => import("../pages/Forms"));
const Supplies = React.lazy(() => import("../pages/Supplies"));
const Billing = React.lazy(() => import("../pages/Billing"));
const About = React.lazy(() => import("../pages/About"));
const Services = React.lazy(() => import("../pages/Services"));
const Locations = React.lazy(() => import("../pages/Locations"));
const Contact = React.lazy(() => import("../pages/Contact"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));

export const pages = [
  { path: "/", component: <Home /> } /* 
  { path: "/tests", component: <Tests /> }, */,
  { path: "/insurance", component: <Insurance /> },
  { path: "/forms", component: <Forms /> },
  { path: "/supplies", component: <Supplies /> },
  { path: "/billing", component: <Billing /> },
  { path: "/about", component: <About /> },
  { path: "/services", component: <Services /> },
  { path: "/location", component: <Locations /> },
  { path: "/contact-us", component: <Contact /> },
  { path: "*", component: <PageNotFound /> },
];

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
