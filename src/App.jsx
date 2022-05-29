import "./App.scss";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/index";

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
