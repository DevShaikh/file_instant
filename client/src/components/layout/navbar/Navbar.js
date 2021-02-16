import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { NavbarData } from "./NavbarData";
import Searchbar from "./Searchbar";
import SideNav from "./SideNav";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <header>
      <div className={sidebar ? "sideMenu sideMenu-active" : "sideMenu"}>
        <Link to="#" onClick={toggleSidebar} style={{ marginBottom: "10px" }}>
          <AiOutlineClose style={{ fill: "#fff", fontSize: "25px" }} />
        </Link>
        <SideNav toggleSidebar={toggleSidebar} />
      </div>
      <div className="row mb-4">
        <div className="col-3">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
        </div>
        <div className="col-9">
          <div className="add_top">
            <img src={process.env.PUBLIC_URL + "/add2.png"} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="nav d-flex bg-primary mb-4">
            <div className="menu">
              <ul>
                {NavbarData.map((data, index) => (
                  <li key={index}>
                    <Link to={data.path}>{data.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <FaBars className="navToggleBtn" onClick={toggleSidebar} />
            <Searchbar />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
