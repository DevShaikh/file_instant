import React from "react";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Navbar";
import LatestSofts from "../software/LatestSofts";
import Softwares from "../software/Softwares";

const Home = () => {
  const softwareBoxTitles = [
    "Latest softwares",
    "Popular updates",
    "Browser and plugins",
    "Anti-malware",
    "Audio and video",
    "file sharing",
    "firewalls and security",
    "cd and dvd tools",
  ];

  return (
    <div className="container">
      <Navbar />
      <section id="home_page">
        <div className="row">
          <div className="col-xl-10 col-lg-10 col-md-8">
            <div className="softwares_main">
              <div className="latest_softwares">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <LatestSofts title={softwareBoxTitles[0]} />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <LatestSofts title={softwareBoxTitles[1]} />
                  </div>
                </div>
              </div>
              <div className="softwares">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-12 mb-md-2">
                    <Softwares
                      title_yellow={false}
                      title={softwareBoxTitles[2]}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-12 mb-md-2">
                    <Softwares
                      title_yellow={true}
                      title={softwareBoxTitles[3]}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-12 mb-md-2">
                    <Softwares
                      title_yellow={false}
                      title={softwareBoxTitles[4]}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-12 mb-md-2">
                    <Softwares
                      title_yellow={false}
                      title={softwareBoxTitles[5]}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-12 mb-md-2">
                    <Softwares
                      title_yellow={true}
                      title={softwareBoxTitles[6]}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-12 mb-md-2">
                    <Softwares
                      title_yellow={false}
                      title={softwareBoxTitles[7]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="add_bottom">
                  <img src={process.env.PUBLIC_URL + "add2.PNG"} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* ADVERTISEMENT */}
          <div className="col-lg-2 col-md-4" id="add_right_home">
            <div className="row">
              <div className="col-12">
                <div className="addvertisement">
                  <h4 className="bg-secondary text-light text-center">
                    Advertise
                  </h4>
                  <img
                    src={process.env.PUBLIC_URL + "add.PNG"}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="addvertisement_content">
                <div className="row">
                  <div className="col-12">
                    <div className="follow_us">
                      <h5>Follow us</h5>
                      <div className="follow_us_content">
                        <div className="follow_us_likes">
                          <p>2.2m</p>
                          <p>145k</p>
                          <p>2k</p>
                        </div>
                        <div className="follow_us_btns">
                          <button>Like</button>
                          <button>Follow</button>
                          <button>+1</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="sponser_ads">
                  <h5>Sponser Ads</h5>
                  <div className="sponser_ads_img">
                    <div className="sponser_ads_box">120x120 Ads</div>
                    <div className="sponser_ads_box">120x120 Ads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
