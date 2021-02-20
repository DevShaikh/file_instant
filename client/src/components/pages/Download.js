import React from "react";
import DownloadContent from "../download/DownloadContent";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Navbar";

const Download = () => {
  return (
    <div className="container">
      <Navbar />
      <section id="download">
        <div className="row">
          <div class="col-lg-2 col-md-2 left-right-add">
            <div class="row">
              <div class="col-12">
                <div class="addvertisement">
                  <h4 class="bg-secondary text-light text-center">Advertise</h4>
                  <img src="/addy.PNG" alt="" class="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-12">
            <DownloadContent />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Download;
