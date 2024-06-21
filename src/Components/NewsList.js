import { useState } from "react";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return (
      <div
        class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full "
        role="status"
        aria-label="loading"
      >
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Filter out articles with content value of "removed"
  const filteredNewsData = newsData.filter(
    (article) =>
      article.title !== "[Removed]" &&
      article.content !== "[Removed]" &&
      article.description !== "[Removed]"
  );

  const totalArticles = filteredNewsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = filteredNewsData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentArticles?.map((article) => (
          <div key={article.url} className="col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={
                  article.image
                    ? article.image
                    : "https://imgs.search.brave.com/grdiTdNDxvfZNgqbnyFglQmQ4BprMG6nIJThvbD2cCA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzE4Yi9uZXdz/cGFwZXItMi0xNTU0/OTUxLmpwZz9mbXQ"
                }
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="font-bold text-lg">{article.title}</h5>
                <p className="text-gray-700">{article.description}</p>
                <a href={article.url} className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default NewsList;
