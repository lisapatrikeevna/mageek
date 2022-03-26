import React from 'react';
import './App.css';
import Header from "./components/common/header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/home/home";
import Services from "./components/pages/services/services";
import Footer from "./components/common/footer/footer";
import Portfolio from "./components/pages/portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/works' element={<Portfolio/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
