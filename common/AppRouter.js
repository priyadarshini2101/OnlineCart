import React from 'react'
import Home from '../pages/Home'
import AppStore from '../pages/AppStore'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import { Routes,Route } from 'react-router'



function AppRouter() {
  return (
   
    <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<AppStore />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        
    </Routes>
  )
}

export default AppRouter

