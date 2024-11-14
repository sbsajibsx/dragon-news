import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-components/RightNav";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div className="font-poppins">
      <header className="mb-6">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-semibold text-xl mb-6">Dragon News</h1>
          <div>
            <div className="card bg-base-100 border">
              <figure className="px-10 pt-10">
                <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{news?.title}</h2>
                <p>{news?.details}</p>
                <div className="card-actions">
                  <Link
                    to={`/category/${news?.category_id}`}
                    className="btn btn-sm bg-[#D72050]"
                  >
                    <FaArrowLeftLong /> All news in this category
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
