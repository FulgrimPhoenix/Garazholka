import React, { useState, useRef, useEffect } from "react";
import { Pagination } from "react-paginate";

const SliderWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const itemCount = items.length;
  const sliderContainer = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    const element = sliderContainer.current;
    const lastElement = element.lastChild;
    const rect = lastElement.getBoundingClientRect();
    const bottomOfViewPort =
      document.documentElement.clientHeight || window.innerHeight;
    const offsetBottom = rect.bottom;

    if (offsetBottom <= bottomOfViewPort) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <div ref={sliderContainer}>
        {items
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item, index) => (
            <div key={index}>{item}</div>
          ))}
      </div>
      <Pagination
        containerClassName="pagination"
        activeClassName="active"
        forceSelected={currentPage - 1}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default SliderWithPagination;
