import React from "react";
import Search from "../components/Search";

const Menu = ({ setSearch, showMenu, handleMenu }) => {
  return (
    <div className="search__container">
      <div
        className="search__title"
        style={
          showMenu ? { display: "flex", flexDirection: "column-reverse" } : {}
        }
      >
        <h1 style={showMenu ? { alignSelf: "center", margin: "50px" } : {}}>
          News
        </h1>
        <div
          className="menu"
          onClick={handleMenu}
          style={showMenu ? { alignSelf: "flex-end" } : {}}
        >
          <div
            className="menu1"
            style={showMenu ? { display: "none" } : {}}
          ></div>
          <div
            className="menu2"
            style={
              showMenu ? { transform: "rotate(45deg) translateY(5px)" } : {}
            }
          ></div>
          <div
            className="menu3"
            style={
              showMenu ? { transform: "rotate(-45deg) translateY(-5px)" } : {}
            }
          ></div>
        </div>
      </div>

      <Search setSearch={setSearch} />
    </div>
  );
};

export default Menu;
