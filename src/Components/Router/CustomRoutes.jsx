import React from 'react';
import  { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Services from '../Services/Services';
import Account from '../Account/Account';
import Gallery from '../Gallery/Gallery';
import AdminOptions from '../AdminOptions/AdminOptions';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { GlobalStateContext } from "../../Context/GlobalContext";

function CustomRoute() {

  const { user, isLoggedIn ,getUser } = useContext(GlobalStateContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
      <Route path='/account' element={<Account/>}/>
      <Route path='/gallery' element={<Gallery/>}/>

      { isLoggedIn && getUser && user && (user.role === "admin") ? (
                    <Route path='/adminOption' element={<AdminOptions/>}/>
                  ):("")
      }

      <Route path='/about' element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>  
    </Routes>
  );
}

export default CustomRoute;
