import React from "react";

// Pagination component to display paginated Data
interface PaginationProps {
  postsPerPage: number;
  length: number;
  currentPage: number;
  handlePagination: (pageNumber: number) => void;
}

const Pagination = ({ postsPerPage, length, currentPage, handlePagination }: PaginationProps) => {
  const paginationNumbers = [];
  const totalPages = Math.ceil(length / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePagination(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-1 px-4 py-2 bg-[#34495E] text-white rounded hover:bg-gray-700 disabled:opacity-50"
      >
        Previous
      </button>

      {paginationNumbers.map((pageNumber) => (
        <button
          onClick={() => handlePagination(pageNumber)}
          key={pageNumber}
          className={`mx-1 px-4 py-2 rounded cursor-pointer ${
            currentPage === pageNumber
              ? "bg-white text-[#34495E] border border-[#34495E]"
              : "bg-[#34495E] text-white hover:bg-gray-700"
          } disabled:opacity-50`}
          disabled={currentPage === pageNumber} // Disable current page button
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => handlePagination(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-1 px-4 py-2 bg-[#34495E] text-white rounded hover:bg-gray-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
