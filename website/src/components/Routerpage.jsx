import React from 'react'
import Header from './Header'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Shop from './Shop'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


export default function Routerpage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} ></Route>
          <Route path='/' element={<Header />}>
            <Route path='home' element={<Home />}></Route>
            <Route path='shop' element={<Shop />}></Route>

          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}
