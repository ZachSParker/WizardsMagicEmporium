import { useState,React } from 'react'
import {
  BrowserRouter,
  Routes,
  Route} 
  from 'react-router-dom';
import './App.css'
import RegisterForm from './views/RegisterForm';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/user/register" element = {<RegisterForm/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
