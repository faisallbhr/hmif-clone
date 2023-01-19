import React from "react";
import Blog from "./components/Blog";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-[rgb(31,41,55)] text-white">
      <Navbar/>
      <Hero />
      <Features />
      <Blog />
    </div>
  );
}

export default App;
