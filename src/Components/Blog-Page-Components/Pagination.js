import React from "react";
import { usePagination, DOTS } from "./usePagination";
import "./Pagination.css";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 0,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination-container">
      <li
        className={
          currentPage === 1
            ? "blog-page-num flex-center disabled"
            : "blog-page-num flex-center selected"
        }
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="flex-center dots">&#8230;&#8230;</li>;
        }
        if (currentPage === pageNumber) {
          return (
            <li
              className="blog-page-num selected flex-center"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        }

        return (
          <li
            className="blog-page-num flex-center"
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={
          currentPage === lastPage
            ? "blog-page-num flex-center disabled"
            : "blog-page-num flex-center selected"
        }
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
