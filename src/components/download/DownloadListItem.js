import React from "react";

const DownloadListItem = ({ version }) => {
  return (
    <div className="category_downloads_item">
      <img src="/chrome_icon.png" alt="chrome" />
      <div>
        <h5>{version.title}</h5>
        <small>{version.small}</small>
        <p>{version.description}</p>
      </div>
    </div>
  );
};
export default DownloadListItem;
