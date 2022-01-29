import React from 'react';
import Routing from './Rutas/Routing';
import { ToastContainer } from "react-toastify";
import './App.scss';


export default function App() {
  
  return (
    <>
  <Routing/>
  <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
  </>
  );
}

