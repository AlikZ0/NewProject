import logo from './logo.svg';
import Flew from './componets/header';
import { Routes, Route, Link, } from "react-router-dom";
import Sector from './componets/nav'

import './App.css';
import Sector1 from './componets/sector1';
import Sector2 from './componets/sector2';

function App() {
  return (
    <div className="">
      <Flew/>
      <Sector/>
      <Sector1/>
      <Sector2/>
    </div>
  );
}

export default App;
