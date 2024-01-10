import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import HomePage from './pages';
import Footer from './components/layout/Footer';
import { HomeMini } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



function App() {
  const [apiData, setApiData] = useState(null);
  const headerBackgroundImage = '../assets/sliderimage.jpg';

  return (
    <>
      {/* <div className='container'> */}


      {/* </div> */}

      <Navbar />
      <HomePage />


    </>

  );
}

export default App;
