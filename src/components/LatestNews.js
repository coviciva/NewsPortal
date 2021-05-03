import React from "react";

const LatestNews = ({ article }) => {
  return (
    <div className="latest">
      <span className="time">{article.publishedAt.slice(11, 16)}</span>
      {article.title.slice(0, 140)}
    </div>
  );
};

export default LatestNews;
