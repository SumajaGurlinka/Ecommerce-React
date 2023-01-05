import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product/:id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
    </>
  )
}

export default connect(store => store)(App);
