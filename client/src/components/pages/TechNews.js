import React from "react";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Navbar";
import LatestNews from "../techNews/LatestNews";

const TechNews = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="tech_news">
        <div className="row">
          <div className="col-12">
            <div className="latest_tech_news">
              <LatestNews />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechNews;
