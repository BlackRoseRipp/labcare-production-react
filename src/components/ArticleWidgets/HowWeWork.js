import { Fragment } from "react";

const HowWeWork = () => {
  return (
    <Fragment>
      <div className="border-t border-[#3892e7] mb-12 w-full"></div>
      <section className="flex flex-col items-center gap-8">
        <h2 className="heading text-4xl font-bold text-neutral-800">
          How We Work
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center px-2 group">
            <div className="mx-4 flex items-center justify-center z-10 rounded-full bg-[url(../public/img/news/woman-with-tablet.jpg)] bg-cover bg-center h-[150px] w-[150px] before:content-[''] before:w-12 before:border before:border-dotted before:border-neutral-300 before:block before:translate-x-[150px] before:translate-y-[75px]">
              <h5 className="">1</h5>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HowWeWork;
