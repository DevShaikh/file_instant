import React from "react";
import Navbar from "../components/navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="admin_dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
