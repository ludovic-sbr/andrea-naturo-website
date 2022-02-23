import React, { useEffect } from 'react'
import SectionWelcome from './SectionWelcome'
import SectionNaturopathy from './SectionNaturopathy'
import SectionTrouble from './SectionTrouble'
import SectionGoogle from './SectionGoogle'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home container-fluid">
      <SectionWelcome />
      <div className="container">
        <SectionGoogle />
      </div>
      <SectionNaturopathy />
      <SectionTrouble />
    </div>
  )
}

export default Index