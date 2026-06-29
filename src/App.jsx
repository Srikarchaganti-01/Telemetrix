import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Admin,
  H2H,
  Home,
  Profiles,
  Results,
  Schedule,
  Standings,
  NotFound,
  DriverProfile,
  Test,
} from "./Pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/h2h" element={<H2H />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/driver/:shortName" element={<DriverProfile />} />
        <Route path="/driver/undefined" element={<NotFound />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
