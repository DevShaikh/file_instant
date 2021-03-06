import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "./SidebarLinks";

export const Sidebar = ({ activeClass }) => {
  const location = useLocation();

  return (
    <div className="admin_sidebar">
      <div className="px-2 mb-4">
        <h2>FileInstant</h2>
      </div>
      <ul>
        {sidebarLinks.map((link, key) => {
          const linkSlug =
            "/admin/" + link.title.split(" ").join("-").toLowerCase();

          return (
            <li key={key}>
              <Link
                to={linkSlug}
                key={key}
                className={linkSlug === location.pathname ? activeClass : ""}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
