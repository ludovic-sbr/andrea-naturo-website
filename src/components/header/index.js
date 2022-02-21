import React, { useEffect, useRef, useState } from 'react'

import Navbar from './Navbar'
import Logo from './Logo'
import CartButton from './CartButton'

import Wave from "../../assets/images/header-wave.png"

const Index = () => {
  const navImg = useRef()
  const [navStatut, setNavStatut] = useState()

  useEffect(() => {
    document.onclick = () => {
      if (navStatut) {
        setNavStatut(false)
      }
    }
  })

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        navImg.current.style.display = 'none'
      } else {
        navImg.current.style.display = 'block'
      }
    }
  })

  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container">
          <Logo />
          <Navbar />
          <CartButton />
        </div>
      </nav>
      <img src={Wave} alt="wave" ref={navImg} />
    </div>
  )
}

export default Index
