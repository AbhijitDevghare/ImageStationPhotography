import React, { useContext, useEffect } from 'react';
import './MenuBar.css';
import crossIcon from "../../Images/cross.png";
import { GlobalStateContext } from "../../Context/GlobalContext";
import { NavLink, useNavigate } from 'react-router-dom';
import serverUrl from '../../serverUrl';

function MenuBar() {
  const { menuBarClicked, setMenuBarClicked, getUser, user, isLoggedIn, setIsLoggedIn } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const resp = await fetch(`${serverUrl}/logout`, {
        method: "GET",
        credentials: "include"
      });

      const respJson = await resp.json();
      const respMessage = respJson.message;

      if (resp.ok) {
        setMenuBarClicked(false);
        setIsLoggedIn(false);
        navigate('/login');
      } else {
        console.error("Logout failed:", respMessage);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect to re-render when getUser changes
  useEffect(() => {
    // This effect will run whenever getUser changes
  }, [getUser]);

  return (
    <>
      {!menuBarClicked ? (
        <div id='menubar' onClick={() => setMenuBarClicked(!menuBarClicked)}>
          <p></p>
          <p></p>
          <p></p>
        </div>
      ) : (
        <div className='menuList'>
          <img src={crossIcon} alt="crossIcon" onClick={() => setMenuBarClicked(!menuBarClicked)} />
          <div className='menus'>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : "nav-link"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : "nav-link"}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : "nav-link"}>
              Services
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : "nav-link"}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "nav-link"}>
              Contact
            </NavLink>
            <NavLink to="/account" className={({ isActive }) => isActive ? "active" : "nav-link"}>
              Account
            </NavLink>

            {isLoggedIn && getUser && user && user.role === "admin" && (
              <NavLink to="/adminOption" className={({ isActive }) => isActive ? "active" : "nav-link"}>
                Admin <br /> Options
              </NavLink>
            )}

            {isLoggedIn ? (
              <p onClick={logout}>Logout</p>
            ) : (
              <NavLink to="/login" className={({ isActive }) => isActive ? "active" : "nav-link"}>
                Login/<br />Register <br />
              </NavLink>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MenuBar;
