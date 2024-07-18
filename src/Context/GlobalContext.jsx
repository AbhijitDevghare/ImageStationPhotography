import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const GlobalStateContext = createContext();

// Utility function to safely parse JSON
const safeJSONParse = (value) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return null;
  }
};

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  // Initialize isLoggedIn state from local storage or default to false
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    return storedIsLoggedIn ? safeJSONParse(storedIsLoggedIn) : false;
  });
  
  const [menuBarClicked, setMenuBarClicked] = useState(false);
  const [getUser, setGetUser] = useState();
  const [user, setUser] = useState({});

  // Effect to update local storage whenever isLoggedIn changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <GlobalStateContext.Provider value={{ 
      menuBarClicked, setMenuBarClicked,
      isLoggedIn, setIsLoggedIn,
      getUser, setGetUser,
      user, setUser 
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
