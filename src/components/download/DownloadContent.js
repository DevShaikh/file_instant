import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import DownloadDetails from "./DownloadDetails";
import DownloadScreenshots from "./DownloadScreenshots";
import DownloadShare from "./DownloadShare";
import DownloadTechnical from "./DownloadTechnical";

const Download = () => {
  const [state, setState] = useState("description");

  const onTabChange = (tab) => {
    setState(tab);
  };

  return (
    <Fragment>
      <div className="row mb-4">
        <div className="download_title">
          <img src="/chrome_icon.png" alt="" />
          <div class="download_title_desc">
            <h5>Google Chrome</h5>
            <p>
              <strong>Version:</strong> 28.0.1500.95
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 col-md-12">
          <div className="download_content">
            <div className="download_menu">
              <ul>
                <li
                  className={state === "description" ? "download_active" : ""}
                  onClick={() => {
                    onTabChange("description");
                  }}
                >
                  Description
                </li>
                <li
                  className={state === "screenshots" ? "download_active" : ""}
                  onClick={() => {
                    onTabChange("screenshots");
                  }}
                >
                  Screenshots
                </li>
                <li
                  className={state === "technical" ? "download_active" : ""}
                  onClick={() => {
                    onTabChange("technical");
                  }}
                >
                  Technical
                </li>
                <li
                  className={state === "changelog" ? "download_active" : ""}
                  onClick={() => {
                    onTabChange("changelog");
                  }}
                >
                  Changelog
                </li>
                <li
                  className={state === "reviews" ? "download_active" : ""}
                  onClick={() => {
                    onTabChange("reviews");
                  }}
                >
                  User Reviews
                </li>
                <li
                  className={state === "share" ? "download_active" : ""}
                  onClick={() => {
                    onTabChange("share");
                  }}
                >
                  Share
                </li>
              </ul>
            </div>
            {(() => {
              // eslint-disable-next-line
              switch (state) {
                case "description":
                  return <DownloadDetails />;
                case "screenshots":
                  return <DownloadScreenshots />;
                case "technical":
                  return <DownloadTechnical />;
                case "changelog":
                  return <DownloadDetails />;
                case "reviews":
                  return <DownloadDetails />;
                case "share":
                  return <DownloadShare />;
              }
            })()}
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          <div className="download_versions">
            <Link to="/download/wait/chrome" className="download_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm3 8v3h-14v-3h-2v5h18v-5h-2z" />
              </svg>
              <h4>Download</h4>
            </Link>
            <div className="download_latest_version">
              <p className="m-0">
                <strong>Latest Version</strong>
              </p>
              <Link to="/">Google Chrome</Link>
            </div>
            <div className="download_versions_list">
              <h5>Old Versions</h5>
              <ul>
                <li>
                  <Link to="/">Google Chrom 28.9</Link>
                </li>
                <li>
                  <Link to="/">Google Chrom 28.8</Link>
                </li>
                <li>
                  <Link to="/">Google Chrom 28.7</Link>
                </li>
                <li>
                  <Link to="/">Google Chrom 28.6</Link>
                </li>
                <li>
                  <Link to="/">Google Chrom 28.5</Link>
                </li>
                <li>
                  <Link to="/">Google Chrom 28.4</Link>
                </li>
                <li>
                  <Link to="/">Google Chrom 28.3</Link>
                </li>
                <li>
                  <Link to="/">Google Chrom 28.2</Link>
                </li>
                <li>
                  <Link to="/">Google Chrom 28.1</Link>
                </li>
                <li>
                  <Link to="/">Google Chrom 28.0</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Download;
