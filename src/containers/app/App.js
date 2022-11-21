import React from "react"
import './App.css';
import Bollywood from "../../components/Bollywood/Bollywood";
import './style.css';
import Technology from "../../components/Technology/Technology";
import Hollywood from "../../components/Hollywood/Hollywood";
import Fitness from "../../components/Fitness/Fitness";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "../home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Bollywood" element={<Bollywood/>}></Route>
        <Route path="/Technology" element={<Technology/>}></Route>
        <Route path="/Hollywood" element={<Hollywood/>}></Route>
        <Route path="/Fitness" element={<Fitness/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}