import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="defaultLayout">
      <Navbar />
      <div className="container">
        <Sidebar className="sidebar" />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
