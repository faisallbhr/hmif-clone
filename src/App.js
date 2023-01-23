import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import 'swiper/css/bundle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Capek from "./pages/Capek";

function App() {
  return (
    <div className="App bg-[rgb(31,41,55)] text-white">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/> }></Route>
          <Route path="/about" element={<Aboutpage/> }></Route>
          <Route path="/*" element={<Capek/> }></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
