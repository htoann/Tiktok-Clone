import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
