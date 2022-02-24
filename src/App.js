import Dsiplay from "./Display/Dsiplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ReviewUI from "./pages/ReviewUI/ReviewUI";
import ScrollToTop from "./Healper/ScrollToTop";
import WeatheNext from "./pages/Weather/WeatherNext";
import TrelloClone from "./pages/TrelloClone/TrelloClone";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dsiplay />} />
        <Route path="/ReviewUI" element={<ReviewUI />} />
        <Route path="/weather" element={<WeatheNext />} />
        <Route path="/trelloClone" element={<TrelloClone />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
