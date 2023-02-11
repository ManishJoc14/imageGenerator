import './App.css';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import GoTop from './Components/GoTop';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';

const App =()=> {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light');

 const toggle = () => {
    if (mode === 'light') {
     setMode('dark');
      document.body.style.backgroundColor = "rgb(0 4 20)";
    } else {
     setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
    return (
      <>
        <Router>
          <Navbar mode={mode} toggle={toggle} />
          <LoadingBar color='#f11946'progress={progress}/>
          <Routes>
            <Route exact path='' element={<Home mode={mode} key="hom" setProgress={setProgress} />}></Route>
            <Route exact path='/home' element={<Home mode={mode} key="home" setProgress={setProgress} />}></Route>
            <Route exact path='/about' element={<About mode={mode} toggle={toggle} key="about"/>}></Route>     
          </Routes>
        </Router>
      
        <GoTop/>
      </>
    )
}
export default App;