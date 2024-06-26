import { useState,React } from 'react'
import {
  BrowserRouter,
  Routes,
  Route} 
  from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import RegisterForm from './views/RegisterForm';
import LoginForm from './views/LoginForm';
import Home from './views/Home';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/user/register" element = {<RegisterForm/>}/>
        <Route path="/user/login" element = {<LoginForm/>}/>
        <Route path='/dashboard' element ={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
