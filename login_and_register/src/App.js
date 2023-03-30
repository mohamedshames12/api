import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Heater from "./components/Header";
import Register from "./auth/Register";
import Login from "./auth/Login";

function App() {
  return(
    <>
        <Router>
          <Heater />
          <Routes>
              <Route path="/register" element={<Register />} />  
              <Route path="/login" element={<Login />} />  
          </Routes>
        </Router> 
    </>
  ) 
}

export default App;