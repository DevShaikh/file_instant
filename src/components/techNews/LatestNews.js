import React, { Fragment } from "react";
import NewsBox from "./NewsBox";

const LatestNews = () => {
  const allNews = [
    {
      newsImage: "/newsImage.jpg",
      newsTitle: "WikiCamps: Worth A Try",
      newsDescription:
        "There are almost as many travel apps out there as there are travel destinations. In general, they all do some things well, and some things not so well. WikiCamps is certainly in the same, erm, camp. With a focus on – you guessed it – camping, the app can...",
    },
    {
      newsImage: "/newsImage.jpg",
      newsTitle: "WikiCamps: Worth A Try",
      newsDescription:
        "There are almost as many travel apps out there as there are travel destinations. In general, they all do some things well, and some things not so well. WikiCamps is certainly in the same, erm, camp. With a focus on – you guessed it – camping, the app can...",
    },
    {
      newsImage: "/newsImage.jpg",
      newsTitle: "WikiCamps: Worth A Try",
      newsDescription:
        "There are almost as many travel apps out there as there are travel destinations. In general, they all do some things well, and some things not so well. WikiCamps is certainly in the same, erm, camp. With a focus on – you guessed it – camping, the app can...",
    },
    {
      newsImage: "/newsImage.jpg",
      newsTitle: "WikiCamps: Worth A Try",
      newsDescription:
        "There are almost as many travel apps out there as there are travel destinations. In general, they all do some things well, and some things not so well. WikiCamps is certainly in the same, erm, camp. With a focus on – you guessed it – camping, the app can...",
    },
    {
      newsImage: "/newsImage.jpg",
      newsTitle: "WikiCamps: Worth A Try",
      newsDescription:
        "There are almost as many travel apps out there as there are travel destinations. In general, they all do some things well, and some things not so well. WikiCamps is certainly in the same, erm, camp. With a focus on – you guessed it – camping, the app can...",
    },
    {
      newsImage: "/newsImage.jpg",
      newsTitle: "WikiCamps: Worth A Try",
      newsDescription:
        "There are almost as many travel apps out there as there are travel destinations. In general, they all do some things well, and some things not so well. WikiCamps is certainly in the same, erm, camp. With a focus on – you guessed it – camping, the app can...",
    },
  ];

  return (
    <Fragment>
      {allNews.map((news, key) => (
        <NewsBox news={news} key={key} />
      ))}
    </Fragment>
  );
};

export default LatestNews;
