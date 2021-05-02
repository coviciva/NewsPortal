import React, { useState, useEffect } from "react";
import Article from "./components/Article";
import axios from "axios";
import Header from "./components/Header";
import SearchIcon from "./icons/search.svg";
import Navigation from "./components/Navigation";
import LatestNews from "./components/LatestNews";
//import LatestIcon from "./icons/latest.svg";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  //const [clicked, setClicked] = useState(false);

  /*   const handleClick = () => {
    setClicked(!clicked);
  }; */

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f749885cd43f4b47953c77a6755c4725"
      )
      .then((res) => {
        console.log(res.data.articles);
        setData(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div>
          <div className="search__container">
            <div className="search__title">
              <h1>News</h1>
            </div>
            <div className="search__items">
              <img src={SearchIcon} alt="search_icon" />
              <input
                type="text"
                placeholder="Search news"
                onChange={(e) => {
                  setSearch(e.target.value);

                  /*     if (!search) {
                    setClicked(false);
                  } */
                }}
              />
              <button /*onClick={handleClick}*/>SEARCH</button>
            </div>
          </div>
          <div className="nav">
            <Navigation />
            <div className="article__wrapper">
              <span>News</span>
              <div className="article__container">
                <div className="latest__news">
                  {data.map((article) => {
                    return <LatestNews article={article} key={article.title} />;
                  })}

                  <div className="all__news">Iva</div>
                </div>

                {data
                  .filter((article) => {
                    if (search === "" /*&& !clicked*/) {
                      return article;
                    } else if (
                      article.source.name
                        .toLowerCase()
                        .includes(
                          search.toLowerCase()
                        ) /* &&
                      clicked*/
                    ) {
                      return article;
                    } /* else if (!clicked) {
                      return article;
                    } */
                    return null;
                  })
                  .map((article) => {
                    return <Article article={article} key={article.title} />;
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
