// import { BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/index";
import "./static/sass/styles.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>{publicRoutes}</Routes>
      </div>
    </BrowserRouter>
  );
  s;
}

export default App;
