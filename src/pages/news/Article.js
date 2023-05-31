import parse from "html-react-parser";
import { Fragment } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import HowWeWork from "../../components/ArticleWidgets/HowWeWork";
import newsList from "../../store/ARTICLES.json";

const Article = () => {
  const { id } = useParams();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const article = newsList.find((article) => article.id === id);

  return article ? (
    <Fragment>
      <section className="relative h-[460px] overflow-hidden">
        <img
          className="h-auto w-full max-h-none max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-50 -z-10"
          src={"/img/news/" + article.img}
          alt={article.title}
        />
      </section>
      <section className="max-w-6xl mx-auto mb-32">
        <div className="rounded-lg p-12 shadow-lg mt-[-132px] bg-white z-40">
          <h1 className="heading font-semibold text-4xl">{article.title}</h1>
          <div className="flex items-center my-6 gap-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-neutral-500 text-xl">Published On</h3>
              <div className="flex">
                <FaRegCalendarAlt className="shrink-0 text-[#3298e7] mt-0.5" />
                <p className="text-[#3892e7] font-semibold ml-2">
                  {article.date}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-neutral-500 text-xl">Categories</h3>
              <div className="flex items-center">
                <a
                  href="/news"
                  className="text-[#3892e7] font-semibold underline-animation after:bg-[#3892e7]"
                >
                  {article.cat}
                </a>
              </div>
            </div>
          </div>
          <div className="my-6 news-content">{parse(article.content)}</div>
          <HowWeWork />
          <div className="border-t border-t-neutral-200 w-full my-12"></div>
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
        </div>
      </section>
    </Fragment>
  ) : null;
};

export default Article;
