import React, { useState, useRef } from "react";
import NewsList from "./Components/NewsList";
import "./";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  return (
    <>
      <nav className="bg-gray-300 p-4 mb-4">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="/"
            className="text-4xl font-bold text-blue-950
           no-underline"
          >
            News App
          </a>
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search"
                name="search"
                ref={searchInputRef}
                className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-950 text-white px-4 py-2 rounded-r hover:bg-blue-700"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0 rounded border-spacing-1">
            <h5 className="font-bold text-blue-950 mb-2 mt-1 text-centre">
              CATAGORIES
            </h5>
            <nav className="flex flex-col space-y-2 text-lg text-left">
              <button
                className="text-blue-950 text-bold hover:text-blue-500 text-left"
                onClick={() => handleCategoryClick("world")}
              >
                World
              </button>
              <button
                className="text-gray-700 hover:text-blue-500 text-left"
                onClick={() => handleCategoryClick("business")}
              >
                Business
              </button>
              <button
                className="text-gray-700 hover:text-blue-500 text-left"
                onClick={() => handleCategoryClick("technology")}
              >
                Technology
              </button>
              <button
                className="text-gray-700 hover:text-blue-500 text-left"
                onClick={() => handleCategoryClick("sports")}
              >
                Sports
              </button>
              <button
                className="text-gray-700 hover:text-blue-500 text-left"
                onClick={() => handleCategoryClick("entertainment")}
              >
                Entertainment
              </button>
            </nav>
          </div>
          <div className="w-full md:w-3/4 px-4">
            <NewsList category={category} searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
