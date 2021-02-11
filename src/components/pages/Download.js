import React from "react";
import DownloadContent from "../download/DownloadContent";

const Download = () => {
  return (
    <section id='download'>
      <div className='row'>
        <div class='col-2'>
          <div class='row'>
            <div class='col-12'>
              <div class='addvertisement'>
                <h4 class='bg-secondary text-light text-center'>Advertise</h4>
                <img src='/addy.PNG' alt='' class='img-fluid w-100' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-10'>
          <DownloadContent />
        </div>
      </div>
    </section>
  );
};

export default Download;