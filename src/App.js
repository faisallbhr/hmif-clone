import React from "react";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
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
      <BlogDetails />
      <Contact />
    </div>
  );
}

export default App;
