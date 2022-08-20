import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Mainpage from "./Pages/Mainpage";
import {useState, useEffect} from 'react'
import axios from "axios";


/* interface characters {
  name: string,
  _id: number,
}

interface allCharacters{
  myCharacters: characters 
} */

function App() {

  return (
    <div className="App">
      <Navbar />
    <Mainpage />
    </div>
  );
}

export default App;
