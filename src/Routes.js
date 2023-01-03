import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Home";
import Logged from "./Logged";

const RoutesApp = () => {
   return(
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/logged" element = { <Logged /> }  />
            </Routes>
       </BrowserRouter>
   )
}

export default RoutesApp;