import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";
import articleList from "../store/ARTICLES.json";

const BlogSlider = () => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  useEffect(() => {
    initTE({ Carousel });
  }, []);
  return (
    <div className="min-h-[420px] flex items-center">
      <div
        id="newsBlogControls"
        className="relative mx-2 lg:mx-auto"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div className="relative sm:w-[90%] w-[85%] mx-auto overflow-hidden after:clear-both after:block after:content-['']">
          {articleList.map((blog, index) => {
            return index < 1 ? (
              <div
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                data-te-carousel-active
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center">
                    <a
                      className="rounded-xl overflow-hidden group"
                      href={"/news/" + blog.id}
                    >
                      <img
                        className="w-full group-hover:scale-110 transition-all"
                        src={"/img/news/" + blog.img}
                        alt={blog.id}
                      />
                    </a>
                  </div>
                  <div className="flex flex-col justify-center">
                    <a
                      href="/news"
                      className="rounded-full py-1 px-4 text-xs font-medium text-blue-secondary border border-black w-fit"
                    >
                      {blog.cat}
                    </a>
                    <a
                      href={"/news/" + blog.id}
                      className="text-3xl font-semibold"
                    >
                      {blog.title}
                    </a>
                    <p className="text-neutral-500 my-4">{blog.subtitle}</p>
                    <a
                      className="text-sm font-medium transition-all hover:text-blue-secondary"
                      href={"/news/" + blog.id}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center">
                    <a
                      className="rounded-xl overflow-hidden group"
                      href={"/news/" + blog.id}
                    >
                      <img
                        className="w-full group-hover:scale-110 transition-all"
                        src={"/img/news/" + blog.img}
                        alt={blog.id}
                      />
                    </a>
                  </div>
                  <div className="flex flex-col justify-center">
                    <a
                      href="/news"
                      className="rounded-full py-1 px-4 text-xs font-medium text-blue-secondary border border-black w-fit"
                    >
                      {blog.cat}
                    </a>
                    <a
                      href={"/news/" + blog.id}
                      className="text-3xl font-semibold"
                    >
                      {blog.title}
                    </a>
                    <p className="text-neutral-500 my-4">{blog.subtitle}</p>
                    <a
                      className="text-sm font-medium transition-all hover:text-blue-secondary"
                      href={"/news/" + blog.id}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <!--Carousel controls - prev item--> */}
        <button
          className="absolute overflow-hidden bottom-0 left-0 top-0 z-[1] flex w-8 items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:outline-none focus:text-white focus:no-underline focus:outline-none motion-reduce:transition-none group"
          type="button"
          data-te-target="#newsBlogControls"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8 mr-16 before:bg-[#3892e7] before:rotate-[-60deg] before:content-[''] before:w-[16px] before:h-[3px] before:absolute before:left-1/4 after:bg-[#3892e7] after:rotate-[60deg] after:content-[''] after:w-[16px] after:h-[3px] after:absolute after:left-1/4 after:translate-y-3 before:group-hover:-rotate-45 after:group-hover:rotate-45 after:group-hover:translate-y-[11px] before:group-hover:translate-y-[1px] before:transition-all after:transition-all"></span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute overflow-hidden bottom-0 right-0 top-0 z-[1] flex w-8 items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:outline-none focus:text-white focus:no-underline focus:outline-none motion-reduce:transition-none group"
          type="button"
          data-te-target="#newsBlogControls"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8 mr-16 before:bg-[#3892e7] before:rotate-[60deg] before:content-[''] before:w-[16px] before:h-[3px] before:absolute before:left-1/4 after:bg-[#3892e7] after:rotate-[-60deg] after:content-[''] after:w-[16px] after:h-[3px] after:absolute after:left-1/4 after:translate-y-3 before:group-hover:rotate-45 after:group-hover:-rotate-45 after:group-hover:translate-y-[11px] before:group-hover:translate-y-[1px] before:transition-all after:transition-all"></span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogSlider;
