import React from "react";
import "./index.css"
import {Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
    </>
  );
}

export default App;
