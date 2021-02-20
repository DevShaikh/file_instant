import React from "react";
import DownloadLoader from "../download/DownloadLoader";
import OtherProgram from "../download/OtherProgram";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Navbar";

const DownloadWait = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="downloadWait">
        <div className="row">
          <div className="col-12">
            <DownloadLoader />
            <p className="text-center my-4">
              While you wait... check out latest tech news, similar software or
              subscribe for updates.
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <div className="other_programs">
              <h4>Other programs to consider</h4>
              <div className="other_programs_area">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <OtherProgram />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <OtherProgram />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <OtherProgram />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <OtherProgram />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <OtherProgram />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <OtherProgram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-10 mx-auto">
            <div class="add_bottom">
              <img src="/add2.PNG" alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DownloadWait;
