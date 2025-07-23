import React from "react";
import "./App.css";
import StarBackground from "./components/StarBackground";
import {Navbar} from "./components/Navbar"
import {Home} from "./components/Home"
import {Project} from "./components/Project"
import {Contact} from "./components/Contact"
import { useState, useEffect } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(false)

  useEffect (() => {
    setIsLoading(true)
  }, [])

  return (
    
    <div className={`app ${isLoading ? "loaded" : " "}`}>
        <div>
          <StarBackground />
          <Navbar/>
          <Home/>
          <Project/>
          <Contact/>
        </div>

    </div>
  );
}

export default App;