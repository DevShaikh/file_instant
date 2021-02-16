import React from "react";
import { Link } from "react-router-dom";

import { NavbarData } from "./NavbarData";

const SideNav = ({ cName, toggleSidebar }) => {
  return (
    <div className={cName}>
      <ul>
        {NavbarData.map((data, index) => (
          <li key={index} onClick={toggleSidebar}>
            <Link to={data.path}>
              {data.icon}
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
