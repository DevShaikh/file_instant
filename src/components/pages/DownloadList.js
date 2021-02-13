import React from "react";
import { Link } from "react-router-dom";
import { ImArrowRight } from "react-icons/im";
import DownloadListItem from "../download/DownloadListItem";

const DownloadList = () => {
  // CATEGORIES
  const categories = {
    browsers: ["chrome", "firefox", "safari", "edge"],
    mediaPlayers: ["vlc", "k-lite codec", "windows media player", "mx player"],
    downloaders: [
      "internet download manager",
      "downloader",
      "freedownloader",
      "paiddownloader",
    ],
    extensions: ["save from net", "momentum", "metalmonkey"],
    drivers: ["audio", "video", "usb", "ethernet"],
  };
  // ALL VERSIONS OC CURRENT SOFTWARE
  const allVersions = [
    {
      title: "Google Chrome 4.8",
      small: "Google Chrome - 20.51m",
      description:
        "Image result for chrome details Chrome is a free Internet browser officially released by Google on December 11 2008, Its features include synchronization with Google services.",
    },
    {
      title: "Google Chrome 4.7",
      small: "Google Chrome - 20.51m",
      description:
        "Image result for chrome details Chrome is a free Internet browser officially released by Google on December 11 2008, Its features include synchronization with Google services.",
    },
    {
      title: "Google Chrome 4.6",
      small: "Google Chrome - 20.51m",
      description:
        "Image result for chrome details Chrome is a free Internet browser officially released by Google on December 11 2008, Its features include synchronization with Google services.",
    },
    {
      title: "Google Chrome 4.5",
      small: "Google Chrome - 20.51m",
      description:
        "Image result for chrome details Chrome is a free Internet browser officially released by Google on December 11 2008, Its features include synchronization with Google services.",
    },
    {
      title: "Google Chrome 4.4",
      small: "Google Chrome - 20.51m",
      description:
        "Image result for chrome details Chrome is a free Internet browser officially released by Google on December 11 2008, Its features include synchronization with Google services.",
    },
    {
      title: "Google Chrome 4.4",
      small: "Google Chrome - 20.51m",
      description:
        "Image result for chrome details Chrome is a free Internet browser officially released by Google on December 11 2008, Its features include synchronization with Google services.",
    },
    {
      title: "Google Chrome 4.4",
      small: "Google Chrome - 20.51m",
      description:
        "Image result for chrome details Chrome is a free Internet browser officially released by Google on December 11 2008, Its features include synchronization with Google services.",
    },
    {
      title: "Google Chrome 4.4",
      small: "Google Chrome - 20.51m",
      description:
        "Image result for chrome details Chrome is a free Internet browser officially released by Google on December 11 2008, Its features include synchronization with Google services.",
    },
    {
      title: "Google Chrome 4.4",
      small: "Google Chrome - 20.51m",
      description:
        "Image result for chrome details Chrome is a free Internet browser officially released by Google on December 11 2008, Its features include synchronization with Google services.",
    },
  ];

  return (
    <div className="download_list">
      <div className="row mb-5">
        <div className="col-lg-3 col-md-3">
          <div className="row mb-5">
            <div className="col-12">
              <div className="download_category">
                <h5>Web Browsers</h5>
                <ul>
                  {categories.browsers.map((category) => (
                    <li>
                      <ImArrowRight />
                      <Link to={`/download/${category}`}>{category}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row mb-5 left-right-add">
            <div className="col-12">
              <div class="addvertisement">
                <h4 class="bg-secondary text-light text-center">Advertise</h4>
                <img src="/addy.PNG" alt="" class="img-fluid w-100" />
              </div>
            </div>
          </div>
          <div className="row left-right-add">
            <div className="col-8 mx-auto">
              <div className="left_add_box">120 x 120</div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-9">
          <div className="category_downloads">
            <h5 className="category_downloads_title">Web Browsers Downloads</h5>
            {allVersions.map((item, key) => (
              <DownloadListItem key={key} version={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div class="add_bottom">
            <img src="/add2.PNG" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadList;
