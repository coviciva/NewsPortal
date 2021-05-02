import React from "react";

const LatestNews = ({ article }) => {
  return (
    <div className="latest">
      <span>14:30</span>
      {article.title}
    </div>
  );
};

export default LatestNews;
