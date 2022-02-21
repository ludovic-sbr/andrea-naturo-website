import React, { useEffect, useState } from 'react'

import SectionPrograms from './SectionPrograms'
import SectionDetails from './SectionDetails'
import SectionEbooks from './SectionEbooks'

import { onValue, ref } from 'firebase/database'
import db from '../../firebase'

const Index = () => {
  const [programs, setPrograms] = useState({})
  const [ebooks, setEbooks] = useState({})

  useEffect(() => {
    onValue(ref(db, 'programs'), snapshot => {
      setPrograms(snapshot.val())
    })
    onValue(ref(db, 'ebooks'), snapshot => {
      setEbooks(snapshot.val())
    })
  }, [])

  return (
    <div className="products container-fluid">
      <div className="container">
        <SectionPrograms programs={programs} />
        <SectionEbooks ebooks={ebooks} />
      </div>
      <SectionDetails />
    </div>
  )
}

export default Index