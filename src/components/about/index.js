import React from 'react'

import SectionStart from './SectionStart'
import SectionInsta from './SectionInsta'
import SectionAbout from './SectionAbout'
import SectionContact from './SectionContact'


const Index = () => {
  return (
    <div className="about container-fluid">
      <SectionStart />
      <div className="container">
        <SectionInsta />
      </div>
      <SectionAbout />
      <SectionContact />
    </div>
  )
}

export default Index
