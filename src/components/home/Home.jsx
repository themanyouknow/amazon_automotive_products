import "./home.scss";
import { data } from "../../data";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useState } from "react";
import filterIcon from "../../images/filter.png";

const Home = () => {
  const count = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Calculate total pages based on filtered data
  const filteredData = data.filter(
    (product) => category === "all" || product.category === category
  );

  const totalPages = Math.ceil(filteredData.length / count);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="home">
      <div className="homeBackground"></div>
      <div className="filterProducts">
        <div>
          <img
            src={filterIcon}
            alt="filterIcon"
            onClick={toggleDropdown}
            style={{ cursor: "pointer" }}
          />
          <div className={`custom-dropdown ${isDropdownOpen ? "open" : ""}`}>
            {["all", "motors", "tools", "parts"].map((option) => (
              <div
                key={option}
                className={`dropdown-item ${
                  category === option ? "selected" : ""
                }`}
                onClick={() => {
                  setCategory(option);
                  setIsDropdownOpen(false);
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}{" "}
                {/* Capitalize first letter */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="products">
        {filteredData
          .slice((currentPage - 1) * count, currentPage * count)
          .map((product, i) => (
            <div className="product" key={i}>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <img src={product.image} alt={product.name} />
                <h2>{product.title}</h2>
              </a>
            </div>
          ))}
      </div>
      {totalPages !== 1 && (
        <div className="paginationDiv">
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
