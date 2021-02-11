import React from "react";
import { Link } from "react-router-dom";

const LatestSofts = ({ title }) => {
  return (
    <div className="lates_box">
      <div className="latest_title">
        <h5>{title}</h5>
        <div className="latest-content">
          <ul>
            <li>
              <img
                src={process.env.PUBLIC_URL + "chrome_icon.png"}
                alt=""
                className="img-fluid"
              />
              <Link to="/download/chrome">google chrome 28.0.1500.95</Link>{" "}
              <span>- 31 Jul 13</span>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "utorrent.png"}
                alt=""
                className="img-fluid"
              />
              <Link to="#">utorrent 3.3.1 build 29988</Link>{" "}
              <span>- 31 Jul 13</span>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "firefox.png"}
                alt=""
                className="img-fluid"
              />
              <Link to="#">firefox build 2.10.150 </Link>{" "}
              <span>- 31 Jul 13</span>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "adobe_xd.png"}
                alt=""
                className="img-fluid"
              />
              <Link to="#">Adobe xd cc 2019</Link> <span>- 31 Jul 13</span>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "flashplayer.png"}
                alt=""
                className="img-fluid"
              />
              <Link to="#">flash player 11.8.800.129 beta</Link>{" "}
              <span>- 31 Jul 13</span>
            </li>
          </ul>
          <Link to="/softwares/browsers" className="latest-view-btn">
            View all
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LatestSofts;
