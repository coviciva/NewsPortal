import React, { useState, useEffect } from "react";
import Article from "./components/Article";
import axios from "axios";
import Header from "./components/Header";
import SearchIcon from "./icons/search.svg";
import Navigation from "./components/Navigation";
import LatestNews from "./components/LatestNews";
import LatestIcon from "./icons/latest.svg";

function App() {
  const [data, setData] = useState([]);
  const [latest, setLatest] = useState([]);
  const [search, setSearch] = useState("");
  const [clickedFeatured, setClickedFeatured] = useState(true);
  const [clickedLatest, setClickedLatest] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  const handleFeatured = () => {
    setClickedFeatured(true);
    setClickedLatest(false);
  };

  const handleLatest = () => {
    setClickedLatest(true);
    setClickedFeatured(false);
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = (e) => {
    const target = e.target;
    if (
      target.scrollHeight - Math.floor(target.scrollTop) ===
      target.clientHeight
    ) {
      setPageSize(20);
    }
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

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=1313d48eb2f349d3a0f8221492de5093`
      )
      .then((res) => {
        setLatest(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageSize]);

  return (
    <div className="wrapper">
      <Header />
      <div
        className={
          showMenu ? ["content", "content__mobile"].join(" ") : "content"
        }
      >
        <div>
          <div className="search__container">
            <div
              className="search__title"
              style={
                showMenu
                  ? { display: "flex", flexDirection: "column-reverse" }
                  : {}
              }
            >
              <h1
                style={showMenu ? { alignSelf: "center", margin: "50px" } : {}}
              >
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
                    showMenu
                      ? { transform: "rotate(45deg) translateY(5px)" }
                      : {}
                  }
                ></div>
                <div
                  className="menu3"
                  style={
                    showMenu
                      ? { transform: "rotate(-45deg) translateY(-5px)" }
                      : {}
                  }
                ></div>
              </div>
            </div>

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
          </div>
          <div className="buttons" style={showMenu ? { display: "none" } : {}}>
            <button
              className="featuredBtn"
              onClick={handleFeatured}
              style={
                clickedFeatured
                  ? {
                      backgroundColor: "rgba(187, 30, 30, 0.1)",
                      color: "#bb1e1e",
                    }
                  : {}
              }
            >
              Featured
            </button>
            <button
              className="latestBtn"
              onClick={handleLatest}
              style={
                clickedLatest
                  ? {
                      backgroundColor: "rgba(187, 30, 30, 0.1)",
                      color: "#bb1e1e",
                    }
                  : {}
              }
            >
              Latest
            </button>
          </div>
          <div className="mobile__nav">{showMenu ? <Navigation /> : null}</div>
          <div className="nav">
            <Navigation />
            <div className="article__wrapper">
              <span className="article__title">News</span>
              <div
                className={
                  showMenu
                    ? ["article__container", "display"].join(" ")
                    : "article__container"
                }
              >
                <div
                  className={
                    clickedFeatured
                      ? ["latest__news", "display"].join(" ")
                      : "latest__news"
                  }
                  onScroll={handleScroll}
                >
                  <div className="latest__icon">
                    <img src={LatestIcon} alt="latest_icon" />
                    <span>Latest news</span>
                  </div>

                  {latest.map((article) => {
                    return <LatestNews article={article} key={article.title} />;
                  })}
                  <div className="see__all">See all news &gt;</div>
                </div>

                {data
                  .filter((article) => {
                    if (search === "") {
                      return article;
                    } else if (
                      article.source.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return article;
                    }
                    return null;
                  })
                  .map((article) => {
                    return (
                      <Article
                        article={article}
                        key={article.title}
                        clickedLatest={clickedLatest}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
