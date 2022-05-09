import React, {useState} from 'react';
import './App.css';
import Header from "./components/common/header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/home/home";
import Services from "./components/pages/services/services";
import Footer from "./components/common/footer/footer";
import Portfolio from "./components/pages/portfolio/portfolio";
import Contact from "./components/pages/contact/contact";
import About from "./components/pages/about/about";
import Web from "./components/pages/web/web";

function App() {
    const [lightTheme,setLightTheme]=useState(true)
    const onChangeMaterialUISwitch=(value:boolean)=>{
        setLightTheme(value)
    }

  return (
    <div className={!lightTheme?'App': 'App dark'}>
      <Header theme={lightTheme} onChange={onChangeMaterialUISwitch}/>
        <Routes>
            <Route path='/' element={<Home theme={lightTheme}/>}/>
            <Route path='/services' element={<Services theme={lightTheme}/>}/>
            <Route path='/works' element={<Portfolio theme={lightTheme}/>}/>
            <Route path='/contacts' element={<Contact theme={lightTheme}/>}/>
            <Route path='/about' element={<About theme={lightTheme}/>}/>
            <Route path='/web' element={<Web theme={lightTheme}/>}/>
        </Routes>
        <Footer theme={lightTheme}/>
    </div>
  );
}

export default App;
