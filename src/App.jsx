/* eslint-disable no-unused-vars */
import React from "react";
import Beranda from "./pages/Beranda"; // Import the header component
import OTPages from "./pages/OTPages";
// import HotelResto from "./pages/HotelResto";
import MapDirection from "./pages/MapDirection1";
// import ReservationContact from "./pages/ReservationContact";
import BlogBerita from "./pages/BlogBerita"
// import Profile from "./pages/Profile";
// import MapDirection1 from "./ui/MapDirection1";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/OTPages" element={<OTPages />} />
      {/* <Route path="/HotelResto" element={<HotelResto />} /> */}
      <Route path="/MapDirection" element={<MapDirection />} />
      {/* <Route path="/ReservationContact" element={<ReservationContact />} /> */}
      <Route path="/Blog" element={<BlogBerita />} />
      {/* <Route path="/Profile" element={<Profile />} /> */}
    </Routes>

  );
}

export default App;