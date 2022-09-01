import Home from "../src/components/Home";
import Navbar from "./components/Navbar";
import './App.css'
import {useState,useContext} from 'react'
import {ThemeContext} from '../src/context/themeContext'
function App() {
  const {isMode} = useContext(ThemeContext)

  return (
   <div className={isMode ? "light-mode" : "dark-mode"}>
     <Navbar />
    <Home />
   </div>
  );
}

export default App;
