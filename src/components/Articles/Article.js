import React from "react";

const Article = ({ article, clickedLatest }) => {
  return (
    <div
      className={
        clickedLatest ? ["article__card", "display"].join(" ") : "article__card"
      }
    >
      {article.urlToImage ? (
        <img src={article.urlToImage} alt="article_image" />
      ) : (
        <div className="no__image">No image</div>
      )}

      <div className="article__info">
        <h1>{article.title}</h1>
        {article.author ? (
          <span>{article.author}</span>
        ) : (
          <span>Author unknown</span>
        )}
      </div>
    </div>
  );
};

export default Article;
