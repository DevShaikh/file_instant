import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const NewsBox = ({ news }) => {
  const { newsImage, newsTitle, newsDescription } = news;
  const slug = newsTitle.split(" ").join("-").split(":").join("").toLowerCase();

  return (
    <div className="latest_news_box mb-4">
      <img src={newsImage} alt="" />
      <div>
        <h4>{newsTitle}</h4>
        <p>{newsDescription}</p>
        <Link to={`/tech-news/${slug}`}>
          Read more <GoArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default NewsBox;
