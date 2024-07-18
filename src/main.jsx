import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStateProvider } from './Context/GlobalContext.jsx';
// import { GlobalStateProvider } from './context/GlobalStateContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
            <GlobalStateProvider>
                    <App />
            </GlobalStateProvider>
    </BrowserRouter>


);
