import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Admin,
  H2H,
  Home,
  Profiles,
  Results,
  Schedule,
  Standings,
} from "./Pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/h2h" element={<H2H />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
