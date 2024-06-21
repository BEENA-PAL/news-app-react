function CustomPagination(props) {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageItems = () => {
    const pageItems = [];

    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <button
          key={i}
          className={`px-3 py-1 border rounded mx-1 ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageItems;
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="px-3 py-1 border rounded mx-1 bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Prev
      </button>
      {renderPageItems()}
      <button
        className="px-3 py-1 border rounded mx-1 bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default CustomPagination;
