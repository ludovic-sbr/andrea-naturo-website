import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartContext } from "./context/CartContext"

import Home from './components/home'
import About from './components/about'
import Consultations from './components/consultations'
import Products from './components/products'
import Product from './components/products/product'

import Cart from './components/cart'

import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [cartStatus, setCartStatus] = useState(false)

  return (
    <BrowserRouter>
      <div className="elfsight-app-ac579c30-425f-4f46-a827-b634f6de03bc" />
      <CartContext.Provider value={{cartStatus, setCartStatus}}>
        <Header />
        <Cart />
      </CartContext.Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/produits/:productName" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
