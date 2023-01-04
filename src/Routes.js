import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Logged from "./components/Logged/Logged";
import Empresa from "./components/Empresa/Empresa";
import Historia from "./components/Historia/Historia";
import Termos from "./components/Termos/Termos";
import Anunciar from "./components/Anunciar/Anunciar";

const RoutesApp = () => {
   return(
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/logged" element={<Logged />} />
               <Route path="/empresa" element={<Empresa />} />
               <Route path="/historia" element={<Historia />} />
               <Route path="/termos" element={<Termos />} />
               <Route path="/anunciar" element = { <Anunciar /> }  />
            </Routes>
       </BrowserRouter>
   )
}

export default RoutesApp;