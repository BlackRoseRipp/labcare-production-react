import { Fragment } from "react";
import articles from "../../store/ARTICLES.json";

const News = () => {
  return (
    <section className="bg-neutral-100">
      <h1 className="mt-24 heading text-blue-primary font-semibold text-center text-6xl">
        News
      </h1>
      <section className="py-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 mx-2 gap-6">
          {articles.map((art) => (
            <div className="shadow-md hover:shadow-xl bg-white flex flex-col group overflow-hidden transition-all">
              <a href={"/" + art.id} className="w-full">
                <div
                  className={
                    "h-[360px] w-full bg-[url(../public/img/news/" +
                    art.img +
                    ")] bg-cover bg-center p-4"
                  }
                >
                  <div className="rounded-full w-fit ml-auto bg-[#3892e7] py-2 px-3 text-xs text-white font-medium uppercase">
                    {art.cat}
                  </div>
                </div>
              </a>

              <div className="p-7">
                <a
                  href={"/" + art.id}
                  className="text-xl font-semibold text-blue-primary"
                >
                  {art.title}
                </a>
                <p className="text-neutral-500 text-sm my-4">{art.subtitle}</p>
                <a href={"/" + art.id} className="text-[#3892e7] text-xs">
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
    </section>
  );
};

export default News;
