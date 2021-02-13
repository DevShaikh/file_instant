import React from "react";
import { Link } from "react-router-dom";

const Softwares = ({ title_yellow, title }) => {
  return (
    <div className="softwareBox mb-sm-4">
      <h5
        className={title_yellow ? "software_title bg_yellow" : "software_title"}
      >
        {title}
      </h5>
      <ul>
        <li>
          <Link to="#">GOOGLE CHROME 28.0.1500.95</Link>
        </li>
        <li>
          <Link to="#">GOOGLE CHROME 28.0.1500.95</Link>
        </li>
        <li>
          <Link to="#">UTORRENT 3.3.1 BUILD 29988</Link>
        </li>
        <li>
          <Link to="#">UTORRENT 3.3.1 BUILD 29988</Link>
        </li>
        <li>
          <Link to="#">GOOGLE CHROME 28.0.1500.95</Link>
        </li>
        <li>
          <Link to="#">UTORRENT 3.3.1 BUILD 29988</Link>
        </li>
        <li>
          <Link to="#">FIREFOX BUILD 2.10.150</Link>
        </li>
        <li>
          <Link to="#">ADOBE XD CC 2019</Link>
        </li>
        <li>
          <Link to="#">FLASH PLAYER 11.8.800.129 BETA</Link>
        </li>
        <li>
          <Link to="#">GOOGLE CHROME 28.0.1500.95</Link>
        </li>
        <li>
          <Link to="#">UTORRENT 3.3.1 BUILD 29988</Link>
        </li>
      </ul>
      <div className="card-footer">
        <p>Top 10 softwares. </p> <Link to="#">View all</Link>
      </div>
    </div>
  );
};
export default Softwares;
