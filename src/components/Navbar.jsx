import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux"

function Navbar() {

  const state = useSelector((state) => state.handleCart)
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">SG COLLECTIONS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/product'>Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>Contact</NavLink>
              </li>
            </ul>
            <NavLink to="/signin" className="btn btn-outline-dark">
              <span className='fa fa-shopping-cart me-1'></span>Sign In
            </NavLink>

            <NavLink to="/cart" className="btn btn-outline-dark ms-1">
              <span className='fa fa-shopping-cart me-1'></span>Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;