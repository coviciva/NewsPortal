import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import Buttons from "./components/Buttons";
import Articles from "./components/Articles/Articles";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [clickedFeatured, setClickedFeatured] = useState(true);
  const [clickedLatest, setClickedLatest] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=1313d48eb2f349d3a0f8221492de5093"
      )
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div
        className={
          showMenu ? ["content", "content__mobile"].join(" ") : "content"
        }
      >
        <div>
          <Menu
            setSearch={setSearch}
            showMenu={showMenu}
            handleMenu={handleMenu}
          />

          <Buttons
            showMenu={showMenu}
            clickedFeatured={clickedFeatured}
            clickedLatest={clickedLatest}
            setClickedFeatured={setClickedFeatured}
            setClickedLatest={setClickedLatest}
          />

          <div className="mobile__nav">{showMenu ? <Navigation /> : null}</div>
          <div className="nav">
            <Navigation />

            <Articles
              showMenu={showMenu}
              clickedFeatured={clickedFeatured}
              data={data}
              search={search}
              clickedLatest={clickedLatest}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
