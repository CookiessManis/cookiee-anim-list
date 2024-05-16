import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNext = () => {
    if (page === lastPage) return;
    setPage((prev) => prev + 1);
    scrollTop();
  };

  const handlePrev = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
    scrollTop();
  };
  return (
    <div className="text-white text-center flex justify-center gap-3 my-3 items-center">
      <button
        className="p-4 bg-slate-500 text-white hover:bg-slate-700 rounded-lg"
        disabled={page === 1}
        onClick={() => handlePrev()}
      >
        Prev
      </button>
      <div>
        {page} of {lastPage}
      </div>
      <button
        className="p-4 bg-slate-500 text-white hover:bg-slate-700 rounded-lg"
        onClick={() => handleNext()}
        disabled={page === lastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
