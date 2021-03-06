import React from "react";

const DownloadLoader = () => {
  return (
    <div className="download_loader mb-3">
      <div className="download_loader_title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm3 8v3h-14v-3h-2v5h18v-5h-2z" />
        </svg>
        <h1>Your program is downloading</h1>
      </div>
      <div className="download_loading_bar">
        <img src="/loader.jpg" alt="" />
      </div>
    </div>
  );
};
export default DownloadLoader;
