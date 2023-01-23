import React, {useState, useEffect} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import 'swiper/css/bundle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Capek from "./pages/Capek";
import { BounceLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])
  return (
    <div className="App bg-[rgb(31,41,55)] text-white">
      {loading? 
      <div className='bg-[#ebebeb] flex items-center justify-center h-screen'>
        <BounceLoader color='rgb(16,185,129)' loading={loading}/>
      </div> : 
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/> }></Route>
          <Route path="/about" element={<Aboutpage/> }></Route>
          <Route path="*" element={<Capek/> }></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
