import './crowdsource/styles.css'
import React from 'react'
import Home from "./home"
import Base from "./crowdsource/base";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <div className="w-screen">
      <Component {...pageProps} /> 
    </div>
    </>
    
)}

export default MyApp;
