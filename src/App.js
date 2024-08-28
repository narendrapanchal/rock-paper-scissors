import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Header from "./components/Header";
import Home from "./pages/Home";
const App = () => {
  return (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            
          </Routes>
        </BrowserRouter>
  );
};

export default App;
