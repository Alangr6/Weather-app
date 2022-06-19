import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='button-group'>
        <NavLink to='/'>
        <button className='btn btn-primary btn-lg'>
            Actual Location
        </button>
        </NavLink>
        <NavLink to='/search-location'>
        <button className='btn btn-success btn-lg'>
            Search Location
        </button>
        </NavLink>
        
    </nav>
  )
}
