
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Record from "./pages/Record";
import Today from "./pages/Today";
import Report from "./pages/Report";
import Diary from "./pages/Diary";
import Analyze from "./pages/Analyze";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/record" element={<Record />} />
      <Route path="/today" element={<Today />} />
      <Route path="/report" element={<Report />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;