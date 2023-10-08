import React from "react";
import { useState } from 'react';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "../src/pages/home.jsx";
import Signup from "../src/pages/signup.jsx";
import Signin from "./pages/signin.jsx";

function App() {
  
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/sign-up" element = {<Signup/>}/>
        <Route path = "/sign-in" element = {<Signin/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
