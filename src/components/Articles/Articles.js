import React, { useEffect, useState } from "react";
import Article from "./Article";
import LatestNews from "../LatestNews";
import LatestIcon from "../../icons/latest.svg";
import axios from "axios";

const Articles = ({
  showMenu,
  clickedFeatured,
  data,
  search,
  clickedLatest,
}) => {
  const [latest, setLatest] = useState([]);
  const [pageSize, setPageSize] = useState(10);

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
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=f749885cd43f4b47953c77a6755c4725`
      )
      .then((res) => {
        setLatest(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageSize, setLatest]);

  return (
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
              article.source.name.toLowerCase().includes(search.toLowerCase())
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
  );
};

export default Articles;
