import React from 'react';
import './App.css';
import Header from "./components/common/header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/home/home";
import Services from "./components/pages/services/services";
import Footer from "./components/common/footer/footer";
import Portfolio from "./components/pages/portfolio/portfolio";
import Contact from "./components/pages/contact/contact";
import About from "./components/pages/about/about";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/works' element={<Portfolio/>}/>
            <Route path='/contacts' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            {/*<Route path='/works' element={<Portfolio/>}/>*/}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
