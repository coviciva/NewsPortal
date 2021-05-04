import React from "react";
import SearchIcon from "../icons/search.svg";

export const Search = ({ setSearch }) => {
  return (
    <div className="search__items">
      <img src={SearchIcon} alt="search_icon" />

      <input
        type="text"
        placeholder="Search news"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <button className="searchBtn">SEARCH</button>
    </div>
  );
};

export default Search;
