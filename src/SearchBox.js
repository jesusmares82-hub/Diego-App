import React, { useEffect, useState } from "react";

const SearchBox = ({ handleSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        value={searchTerm}
        style={{
          width: "20rem",
          backgroundColor: "#f4f9f9",
        }}
        onChange={(e) => {
          const value = e.target.value;
          setSearchTerm(value.toLowerCase());
        }}
      />
      <button onClick={() => handleSearchTerm(searchTerm, setSearchTerm)}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
