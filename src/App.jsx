import { BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/index";
import "./static/sass/styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>{publicRoutes}</Routes>
      </div>
    </Router>
  );
}

export default App;
