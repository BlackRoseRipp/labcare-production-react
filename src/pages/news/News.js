import { useEffect, useState } from "react";
import newsList from "../../store/ARTICLES.json";

const News = () => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <section className="bg-neutral-100">
      <h1 className="mt-24 heading text-blue-primary font-semibold text-center text-6xl">
        News
      </h1>
      <section className="py-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 mx-2 gap-6">
          {newsList.map((art) => (
            <div className="shadow-md hover:shadow-xl bg-white flex flex-col group overflow-hidden transition-all">
              <a href={"/news/" + art.id} className="w-full relative">
                <div className="h-[360px] w-full relative overflow-hidden">
                  {console.log(art.imgSizing)}
                  <img
                    className={classNames(
                      art.imgSizing === "width"
                        ? "h-[360px] w-auto"
                        : "h-auto w-full",
                      "max-h-none max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    )}
                    src={"/img/news/" + art.img}
                    alt={art.title}
                  />
                  <div className="rounded-full w-fit mt-4 mr-4 bg-[#3892e7] py-2 px-3 text-xs text-white font-medium uppercase absolute right-0">
                    {art.cat}
                  </div>
                </div>
              </a>

              <div className="p-7">
                <a
                  href={"/news/" + art.id}
                  className="text-xl font-semibold text-blue-primary"
                >
                  {art.title}
                </a>
                <p className="text-neutral-500 text-sm my-4">{art.subtitle}</p>
                <a href={"/news/" + art.id} className="text-[#3892e7] text-xs">
                  READ MORE »
                </a>
              </div>
              <div className="w-full border-t border-neutral-300"></div>
              <div className="py-4 px-7">
                <p className="text-xs text-neutral-400">{art.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-14 max-w-6xl mx-auto">
        <div className="bg-blue-primary mx-2 rounded-lg py-9 px-7 flex flex-col items-center gap-12">
          <h2 className="text-white text-4xl font-semibold heading">
            Subscribe for the latest LabQ news
          </h2>
          <form className="flex items-center gap-4 py-8">
            <input
              type="email"
              className="px-4 py-2"
              id="newsEmailInput"
              placeholder="Email"
            />
            <button className="border-2 border-white rounded-lg text-white text-center text-xl font-bold px-4 py-2">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default News;
