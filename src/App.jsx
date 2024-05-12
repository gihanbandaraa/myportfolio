import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
    </>
  );
};

export default App;
