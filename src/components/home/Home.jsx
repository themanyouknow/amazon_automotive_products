import "./home.scss";
import { data } from "../../data";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useState } from "react";

const Home = () => {
  const count = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.floor(data.length / count);
  return (
    <div className="home">
      <div className="homeBackground"></div>
      <div className="products">
        {data
          .slice((currentPage - 1) * count, count * currentPage)
          .map((product, i) => {
            return (
              <div className="product" key={i}>
                <a href={product.link} target="_blank">
                  <img src={product.image} alt={product.name} />
                  <h2>{product.title}</h2>
                </a>
              </div>
            );
          })}
      </div>
      <div className="paginationDiv">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;
