import React, { useContext, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'typeface-poppins';
import CustomRoute from './Components/Router/CustomRoutes';
import MenuBar from './Components/MenuBar/MenuBar';
import serverUrl from './serverUrl';

function App() {

  
  useEffect(() => {
    AOS.init({
      // AOS configurations (optional)
    });
  }, []);

  return (
    <>
      <MenuBar/>
      <CustomRoute />
    </>
  );
}

export default App;
