import React from "react";

const Search = ({ query, setQuery }) => {
  return (
    <>
      <input
        type="text"
        value={query}
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default Search;
