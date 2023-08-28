import React from 'react'
import AppRouter from './AppRouter'
import { NavLink} from 'react-router-dom'
import Cart from './Cart'

function AppNav() {
  return (
    <div id='navId'>
        <div>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/store" >Store</NavLink>
        <NavLink to="/about" >About</NavLink>
        </div>
        <div id='c1'>
        <Cart />
        </div>
    </div>
  )
}

export default AppNav

