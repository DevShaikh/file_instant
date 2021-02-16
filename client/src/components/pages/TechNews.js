import React from "react";
import LatestNews from "../techNews/LatestNews";

const TechNews = () => {
  return (
    <div className="tech_news">
      <div className="row">
        <div className="col-12">
          <div className="latest_tech_news">
            <LatestNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechNews;
