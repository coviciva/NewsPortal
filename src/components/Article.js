import React from "react";

const Article = ({ article }) => {
  return (
    <div className="article__card">
      <img src={article.urlToImage} alt="article_image" />
      <div className="article__info">
        <h1>{article.title}</h1>
        <span>{article.author}</span>
      </div>
    </div>
  );
};

export default Article;
