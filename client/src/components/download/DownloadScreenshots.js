import React from "react";

const DownloadScreenshots = () => {
  return (
    <div className='download_details'>
      <h5 className='mb-4'>Screenshots</h5>
      <div className='download_screenshots'>
        <div className='row mb-md-4'>
          <div className='col-4'>
            <img src='/chrome.png' className='img-fluid' alt='' />
          </div>
          <div className='col-4'>
            <img src='/chrome.png' className='img-fluid' alt='' />
          </div>
          <div className='col-4'>
            <img src='/chrome.png' className='img-fluid' alt='' />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <img src='/chrome.png' className='img-fluid' alt='' />
          </div>
          <div className='col-4'>
            <img src='/chrome.png' className='img-fluid' alt='' />
          </div>
          <div className='col-4'>
            <img src='/chrome.png' className='img-fluid' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadScreenshots;
